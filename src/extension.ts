import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import { Range } from 'vscode'
import { Selection } from 'vscode'
import { TextEditorEdit } from 'vscode'

import { HiveSQLLexer as HiveSQLLexer } from './HiveSQLLexer';
import { HiveSQLParser as HiveSQLParser } from './HiveSQLParser';
import { HiveSQLVisitor } from './HiveSQLVisitor';
import { SparkSQLLexer as SparkSQLLexer } from './SparkSQLLexer';
import { SparkSQLParser as SparkSQLParser } from './SparkSQLParser';
import { SparkSQLVisitor } from './SparkSQLVisitor';
import { CharStream, CommonTokenStream, Parser, Token, ANTLRErrorListener, RecognitionException, Recognizer, ATNSimulator, ATNConfigSet, BitSet, DFA } from 'antlr4ng';

import { SQLRenameProvider as SQLRenameProvider } from './Rename';
import { SQLReferenceProvider } from './Reference';


const vkbeautify = require('./format.js')


const hiveSqlSelector = 'hive-sql'
const sparkSqlSelector = 'spark-sql'
const configName = 'sql-grammar-check'

export function activate(context: ExtensionContext) {
    // 获取初始配置
    updateFeatureStatus();

    context.subscriptions.push(vscode.languages.registerReferenceProvider(
        [{ pattern: '**/*.ssql' }, { pattern: '**/*.spark_sql' }, { pattern: '**/*.hql' }, { pattern: '**/*.hive_sql' }],
        new SQLReferenceProvider()
    ));

    // 监听配置更改事件
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration(configName + '.enable')) {
                updateFeatureStatus();
            }
        })
    );

    context.subscriptions.push(vscode.languages.registerRenameProvider(hiveSqlSelector, new SQLRenameProvider()));
    context.subscriptions.push(vscode.languages.registerRenameProvider(sparkSqlSelector, new SQLRenameProvider()));


    vscode.languages.registerDocumentRangeFormattingEditProvider(hiveSqlSelector, {
        provideDocumentRangeFormattingEdits: (
            document: vscode.TextDocument,
            range: vscode.Range,
            options: vscode.FormattingOptions
        ): vscode.TextEdit[] => [
                vscode.TextEdit.replace(range, format(document.getText(range))),
            ],
    });

    vscode.languages.registerDocumentRangeFormattingEditProvider(sparkSqlSelector, {
        provideDocumentRangeFormattingEdits: (
            document: vscode.TextDocument,
            range: vscode.Range,
            options: vscode.FormattingOptions
        ): vscode.TextEdit[] => [
                vscode.TextEdit.replace(range, format(document.getText(range))),
            ],
    });


    context.subscriptions.push(vscode.languages.registerRenameProvider(sparkSqlSelector, new SQLRenameProvider()));
    context.subscriptions.push(vscode.languages.registerRenameProvider(hiveSqlSelector, new SQLRenameProvider()));

    vscode.languages.registerDocumentRangeFormattingEditProvider(sparkSqlSelector, {
        provideDocumentRangeFormattingEdits: (
            document: vscode.TextDocument,
            range: vscode.Range,
            options: vscode.FormattingOptions
        ): vscode.TextEdit[] => [
                vscode.TextEdit.replace(range, format(document.getText(range))),
            ],
    });

    vscode.languages.registerDocumentRangeFormattingEditProvider(hiveSqlSelector, {
        provideDocumentRangeFormattingEdits: (
            document: vscode.TextDocument,
            range: vscode.Range,
            options: vscode.FormattingOptions
        ): vscode.TextEdit[] => [
                vscode.TextEdit.replace(range, format(document.getText(range))),
            ],
    });
}

function format(text: string): string {
    var prefix = text.substring(0, 6)
    if (prefix.length < 6 || prefix.toLowerCase() == "select") {
        return vkbeautify.sql(text, true, true, false, 150)
    } else {
        return vkbeautify.sqlddl(text)
    }
}

function updateFeatureStatus() {

    if (vscode.workspace.getConfiguration(configName).get('enable', false)) {

        // 保存时触发
        vscode.workspace.onDidSaveTextDocument((event: vscode.TextDocument) => {
            if (event.languageId !== hiveSqlSelector && event.languageId !== sparkSqlSelector) {
                return;
            }

            const sourceText = event.getText();
            let parser: Parser;
            if (event.languageId == hiveSqlSelector) {
                parser = hiveHandle(sourceText);
            } else {
                parser = sparkHandle(sourceText);
            }

            parser.removeErrorListeners();
            parser.addErrorListener({
                syntaxError: (recognizer: Recognizer<ATNSimulator>, offendingSymbol: Token | null, line: number, startPosition: number, msg: string, e: RecognitionException | null): void => {
                    let endPosition = startPosition + 1;
                    if (offendingSymbol != undefined && offendingSymbol.text != undefined
                        && offendingSymbol && offendingSymbol.text !== null) {
                        endPosition = startPosition + offendingSymbol.text.length;
                        const splitedText = sourceText.split('\n');
                        const errorLine = splitedText[line - 1];
                        vscode.window.showErrorMessage("Parse error. line: " + line + " start position: "
                            + startPosition + " end position: " + endPosition + " near the input: ' " + errorLine + " ' msg: " + msg);
                    } else {
                        vscode.window.showErrorMessage("Parse error. line: " + line + " start position: "
                            + startPosition + " end position: " + endPosition + " msg: " + msg);
                    }
                },
                reportAmbiguity: function (recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, exact: boolean, ambigAlts: BitSet | undefined, configs: ATNConfigSet): void {
                   // throw new Error('Function not implemented.');
                },
                reportAttemptingFullContext: function (recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, conflictingAlts: BitSet | undefined, configs: ATNConfigSet): void {
                  //  throw new Error('Function not implemented.');
                },
                reportContextSensitivity: function (recognizer: Parser, dfa: DFA, startIndex: number, stopIndex: number, prediction: number, configs: ATNConfigSet): void {
                   // throw new Error('Function not implemented.');
                }
            })
            parser.compileParseTreePattern
            if (parser instanceof SparkSQLParser) {
                parser.statement();
            }
            if (parser instanceof HiveSQLParser) {
                parser.statement();
            }
        });
    }
}

function sparkHandle(sourceText: string): Parser {
    const inputStream = CharStream.fromString(sourceText);
    const lexer = new SparkSQLLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SparkSQLParser(tokenStream);
    return parser;
}



function hiveHandle(sourceText: string): Parser {
    const inputStream = CharStream.fromString(sourceText);
    const lexer = new HiveSQLLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HiveSQLParser(tokenStream);
    return parser;

}
 