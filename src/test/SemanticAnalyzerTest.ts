import {parseSQLFile} from './TestUtils';
import {SparkSQLLColumnAnalyzer} from '../SparkSQLLColumnAnalyzer'; // Add this import
import {SemanticContext} from '../SemanticContext';

import {ParseTreeWalker} from 'antlr4ng';
import * as assert from 'node:assert';


describe('SparkSQL Semantic Analyzer', function () {

    describe('simple_task', function () {
        it('should pass semantic analysis for valid CREATE and INSERT statements', function () {
            const parseTree = parseSQLFile('simple_task.ssql');

            let errorCnt = 0;
            let errorConsumer = (errorMsg: string): void => {
                console.log(errorMsg);
                errorCnt += 1;
            };

            let warnCnt = 0;
            let warnConsumer = (warnMsg: string): void => {
                console.log(warnMsg);
                warnCnt += 1;
            };

            let analyzeCnt = 0;
            let analyzeConsumer = (msg: string): void => {
                console.log(msg);
                analyzeCnt += 1;
            };

            let context = new SemanticContext(parseTree);
            const analyzer = new SparkSQLLColumnAnalyzer(context, errorConsumer, warnConsumer, analyzeConsumer);
            const walker = new ParseTreeWalker();
            walker.walk(analyzer, parseTree);

            assert.equal(errorCnt, 0);
            assert.ok(warnCnt >= 0);
            assert.equal(analyzeCnt, 0);
        });
    });

    describe('left_query_task', function () {
        it('should pass semantic analysis for valid CREATE and INSERT statements', function () {
            const parseTree = parseSQLFile('left_query_task.ssql');

            let errorCnt = 0;
            let errorConsumer = (errorMsg: string): void => {
                console.log(errorMsg);
                errorCnt += 1;
            };

            let warnCnt = 0;
            let warnConsumer = (warnMsg: string): void => {
                console.log(warnMsg);
                warnCnt += 1;
            };

            let analyzeCnt = 0;
            let analyzeConsumer = (msg: string): void => {
                console.log(msg);
                analyzeCnt += 1;
            };

            let context = new SemanticContext(parseTree);
            const analyzer = new SparkSQLLColumnAnalyzer(context, errorConsumer, warnConsumer, analyzeConsumer);
            const walker = new ParseTreeWalker();
            walker.walk(analyzer, parseTree);

            assert.equal(errorCnt, 0);
            assert.ok(warnCnt >= 0);
            assert.equal(analyzeCnt, 0);
        });
    });

    describe('simple_task_error', function () {
        it('should not pass semantic analysis for valid CREATE and INSERT statements', function () {
            const parseTree = parseSQLFile('simple_task_error.ssql');

            let errorCnt = 0;
            let errorConsumer = (errorMsg: string): void => {
                console.log(errorMsg);
                errorCnt += 1;
            };
            let warnCnt = 0;
            let warnConsumer = (warnMsg: string): void => {
                console.log(warnMsg);
                warnCnt += 1;
            };
            let analyzeCnt = 0;
            let analyzeConsumer = (msg: string): void => {
                console.log(msg);
                analyzeCnt += 1;
            };

            let context = new SemanticContext(parseTree);
            const analyzer = new SparkSQLLColumnAnalyzer(context, errorConsumer, warnConsumer, analyzeConsumer);
            const walker = new ParseTreeWalker();
            walker.walk(analyzer, parseTree);

            assert.equal(errorCnt, 0);
            assert.ok(warnCnt >= 0);
            assert.ok(analyzeCnt == 3);
        });
    });
});
 