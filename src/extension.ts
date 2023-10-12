import * as vscode from 'vscode';
import { ExtensionContext } from 'vscode';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { HiveSQLLexer } from './HiveSQLLexer';
import { HiveSQLParser } from './HiveSQLParser';
import {HiveSQLVisitor} from './HiveSQLVisitor';
import { Token, ParserErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator'

const selector = 'hive-sql'

export function activate(context: ExtensionContext) {
     // 获取初始配置
     updateFeatureStatus();

         // 监听配置更改事件
    context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((e) => {
            if (e.affectsConfiguration('hive-sql-grammar-check.enable')) {
                updateFeatureStatus();
            }
        })
    );
}

function updateFeatureStatus() {

    if (vscode.workspace.getConfiguration('flink-sql-grammar-check').get('enable')) {
        // 创建诊断集合，用于报告语法错误和警告
        const diagnosticCollection = vscode.languages.createDiagnosticCollection(selector);

        // 保存时触发
        vscode.workspace.onDidSaveTextDocument((event: vscode.TextDocument) => {
            // 检查文件是否为Flink SQL文件
            if (event.languageId !== selector) {
                return;
            }
            // 清除之前的诊断信息
            diagnosticCollection.clear();

            // 使用生成的词法分析器和解析器进行语法检查
            const sourceText = event.getText();
            const inputStream = new ANTLRInputStream(sourceText);
            const lexer = new HiveSQLLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new HiveSQLParser(tokenStream);
            parser.removeErrorListeners();
            parser.addErrorListener({
                syntaxError: (recognizer: Recognizer<Token, ATNSimulator>, offendingSymbol: Token | undefined, line: number, startPosition: number, msg: string, e: RecognitionException | undefined): void => {
                    let endPosition = startPosition + 1;
                    if (offendingSymbol != undefined && offendingSymbol.text != undefined
                        && offendingSymbol && offendingSymbol.text !== null) {
                        endPosition = startPosition + offendingSymbol.text.length;
                        const splitedText = sourceText.split('\n')
                        const errorLine = splitedText[line - 1]
                        vscode.window.showErrorMessage("Parse error. line: " + line + " start position: "
                            + startPosition + " end position: " + endPosition + " near the input: ' " + errorLine + " ' msg: " + msg);
                    } else {
                        vscode.window.showErrorMessage("Parse error. line: " + line + " start position: "
                            + startPosition + " end position: " + endPosition + " msg: " + msg);
                    }
                },
            })
            parser.compileParseTreePattern
            // 解析文件内容并获取语法树
            const parseTree = parser.statement();

        });
    }
}