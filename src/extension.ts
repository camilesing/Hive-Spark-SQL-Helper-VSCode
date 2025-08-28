import * as vscode from 'vscode';
import {ExtensionContext} from 'vscode';


import {HiveSQLLexer as HiveSQLLexer} from './HiveSQLLexer';
import {HiveSQLParser as HiveSQLParser} from './HiveSQLParser';
import {HiveSQLVisitor} from './HiveSQLVisitor';
import {SparkSQLLexer as SparkSQLLexer} from './SparkSQLLexer';
import {SparkSQLParser as SparkSQLParser, StatementContext} from './SparkSQLParser';
import {SparkSQLVisitor} from './SparkSQLVisitor';
import {
    CharStream,
    CommonTokenStream,
    Parser,
    Token,
    ANTLRErrorListener,
    RecognitionException,
    Recognizer,
    ATNSimulator,
    ATNConfigSet,
    BitSet,
    DFA,
    ParseTreeWalker
} from 'antlr4ng';

import {SQLRenameProvider as SQLRenameProvider} from './Rename';
import {SQLReferenceProvider} from './Reference';
import {SemanticContext} from "./SemanticContext";
import {SparkSQLLColumnAnalyzer} from "./SparkSQLLColumnAnalyzer";


const vkbeautify = require('./format.js')


const hiveSqlSelector = 'hive-sql'
const sparkSqlSelector = 'spark-sql'
const grammarConfigName = 'sql-grammar-check'
const sparkSemanticConfigName = 'spark-sql-semantic-check'

export function activate(context: ExtensionContext) {
    // 获取初始配置
    checkGrammarIfNeed();

    context.subscriptions.push(vscode.languages.registerReferenceProvider(
        [{pattern: '**/*.ssql'}, {pattern: '**/*.spark_sql'}, {pattern: '**/*.hql'}, {pattern: '**/*.hive_sql'}],
        new SQLReferenceProvider()
    ));

    // 监听配置更改事件
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration(grammarConfigName + '.enable') || e.affectsConfiguration(sparkSemanticConfigName + '.enable')) {
                checkGrammarIfNeed();
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
    const prefix = text.substring(0, 6);
    if (prefix.length < 6 || prefix.toLowerCase() == "select") {
        return vkbeautify.sql(text, true, true, false, 150)
    } else {
        return vkbeautify.sqlddl(text)
    }
}

function checkGrammarIfNeed() {

    if (!(vscode.workspace.getConfiguration(grammarConfigName).get('enable', false))) {
        return;
    }

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
                    const splitText = sourceText.split('\n');
                    const errorLine = splitText[line - 1];
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
            const parseTree = parser.statement();
            checkSemanticIfNeed(parseTree);
        }
        if (parser instanceof HiveSQLParser) {
            parser.statement();
        }

    });

}

function checkSemanticIfNeed(parseTree: StatementContext) {
    if (!(vscode.workspace.getConfiguration(sparkSemanticConfigName).get('enable', false))) {
        return;
    }
    let errorConsumer = (errorMsg: string): void => {
        console.error(errorMsg);

    };
    let warnConsumer = (warnMsg: string): void => {
        console.warn(warnMsg);
    };
    let analyzeConsumer = (msg: string): void => {
        vscode.window.showErrorMessage("Semantic error. " + msg);
    };

    let context = new SemanticContext(parseTree);
    const analyzer = new SparkSQLLColumnAnalyzer(context, errorConsumer, warnConsumer, analyzeConsumer);
    const walker = new ParseTreeWalker();
    walker.walk(analyzer, parseTree);
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
