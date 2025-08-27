// test/testUtils.ts
import * as fs from 'fs';
import * as path from 'path';
import { CharStream, CommonTokenStream, Parser, Token, ANTLRErrorListener, RecognitionException, Recognizer, ATNSimulator, ATNConfigSet, BitSet, DFA,ParseTreeWalker } from 'antlr4ng';
import { SparkSQLLexer } from '../SparkSQLLexer';
import { SparkSQLParser } from '../SparkSQLParser';

export function parseSQLFile(fileName: string) {
    const filePath = path.join(__dirname, 'data', fileName);
    const sqlContent = fs.readFileSync(filePath, 'utf-8');
    
    const inputStream = CharStream.fromString(sqlContent);
    const lexer = new SparkSQLLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SparkSQLParser(tokenStream);
    
    
    parser.removeErrorListeners();
    
    return parser.statement();
}

 