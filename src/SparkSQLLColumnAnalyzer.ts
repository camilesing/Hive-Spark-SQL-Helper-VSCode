import {ColumnMetaData, SemanticContext, TableMetaData} from "./SemanticContext";
import {SparkSQLListener} from "./SparkSQLListener";
import {
    BooleanExpressionContext,
    ColumnOptionDefinitionContext,
    ColumnReferenceContext,
    CommonQueryContext,
    CommonSelectContext,
    ExpressionContext,
    ExpressionProjectItemContext,
    FromClauseContext,
    HiveStyleProjectItemContext, InsertSimpleStatementContext,
    MatchRecognizeSelectContext,
    PredicatedContext, PrimaryExpressionContext,
    SelectClauseContext,
    SelectPlusContext,
    SelectStatementPlusContext,
    SimpleCreateTableContext,
    SparkStyleSelectContext, SqlStatementContext, SqlStatementsContext, StarContext,
    TableExpOpTableRefContext, TablePathContext,
    TablePathForTablePrimaryContext, TableRefCommaTableRefContext,
    TableSampleContext,
    UidForColumnNameContext,
    ValueExpressionDefaultContext,
    WindowsProrjectItemContext
} from "./SparkSQLParser";


export class SparkSQLLColumnAnalyzer extends SparkSQLListener {
    private currentStatementType: CurrentStatementType = CurrentStatementType.Null;
    private semanticContext: SemanticContext;
    private readonly errorReport: (errorMsg: string) => void;
    private readonly warnReport: (warnMsg: string) => void;
    private readonly analyzeReport: (warnMsg: string) => void;

    constructor(context: SemanticContext, errorReport: (errorMsg: string) => void, warnReport: (errorMsg: string) => void, analyzeReport: (errorMsg: string) => void) {
        super();
        this.semanticContext = context;
        this.errorReport = errorReport;
        this.warnReport = warnReport;
        this.analyzeReport = analyzeReport;
    };

    enterSqlStatement = (ctx: SqlStatementContext): void => {
        if (ctx.insertStatement() != null) {
            this.currentStatementType = CurrentStatementType.INSERT;
        }
    };

    exitSqlStatement = (ctx: SqlStatementContext): void => {
        if (ctx.insertStatement() != null && this.currentStatementType == CurrentStatementType.INSERT) {
            this.currentStatementType = CurrentStatementType.Null;
        }

    };

    enterInsertSimpleStatement = (ctx: InsertSimpleStatementContext): void => {
        this.currentStatementType = CurrentStatementType.INSERT;
        let tablePathContexts = ctx.tablePath();
        if (tablePathContexts.length == 0) {
            this.errorReport("columnDefinitionList cannot be null");
            return
        }
        let insertTargetTable: string = tablePathContexts[0].uid().getText();
        if (ctx.columnNameList() != null) {
            ctx.columnNameList()!.columnName().forEach(columnNameContext => {
                if (columnNameContext.uid() != null) {
                    let idList = columnNameContext.uid()?.identifier();
                    if (idList != null && idList.length > 0) {
                        this.checkMetadata(insertTargetTable, idList![0].getText());
                    } else {
                        this.warnReport("unexpect branch for columnList. we cannot check metadata")
                    }
                } else {
                    this.warnReport("unexpect branch for columnList")
                }

            })
        } else if (ctx.queryStatement() != null && ctx.queryStatement() instanceof CommonQueryContext) {
            let commonContext = (ctx.queryStatement() as CommonQueryContext);
            if (commonContext.selectClause() != null) {
                this.parseExpressionForTableName(commonContext.selectClause()!, insertTargetTable, true);
            } else {
                let selectStatementContext = commonContext.selectStatement();
                if (selectStatementContext instanceof CommonSelectContext) {
                    let commonSelectContext = (selectStatementContext as CommonSelectContext);
                    this.parseExpressionForTableName(commonSelectContext.selectClause()!, insertTargetTable, true);
                } else if (selectStatementContext instanceof SparkStyleSelectContext) {
                    let sparkStyleSelectContext = (selectStatementContext as SparkStyleSelectContext);
                    this.parseExpressionForTableName(sparkStyleSelectContext.selectClause()!, insertTargetTable, true);
                } else if (selectStatementContext instanceof MatchRecognizeSelectContext) {
                    let matchRecognizeSelectContext = (selectStatementContext as MatchRecognizeSelectContext);
                    this.parseExpressionForTableName(matchRecognizeSelectContext.selectClause()!, insertTargetTable, true);
                } else if (selectStatementContext instanceof TableSampleContext) {
                    let tableSampleContext = (selectStatementContext as TableSampleContext);
                    this.parseExpressionForTableName(tableSampleContext.selectClause()!, insertTargetTable, true);
                } else if (selectStatementContext instanceof SelectPlusContext) {
                    this.warnReport("We will support for advance select statement in the future.")
                    return;
                } else {
                    this.errorReport("not support select statement");
                    return;
                }
            }
        } else {
            return;
        }
    }

    enterSelectPlus = (ctx: SelectStatementPlusContext): void => {
        if (this.currentStatementType != CurrentStatementType.Null) {
            this.currentStatementType = CurrentStatementType.Query;
        }
        this.warnReport("We will support for advance select statement in the future.")
    };

    exitSelectPlus = (ctx: SelectStatementPlusContext): void => {
        if (this.currentStatementType == CurrentStatementType.Query) {
            this.currentStatementType = CurrentStatementType.Null;
        }
    };


    enterCommonSelect = (ctx: CommonSelectContext): void => {
        if (this.currentStatementType != CurrentStatementType.Null) {
            this.currentStatementType = CurrentStatementType.Query;
        }
        this.parseSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
    };

    exitCommonSelect = (ctx: CommonSelectContext): void => {
        if (this.currentStatementType == CurrentStatementType.Query) {
            this.currentStatementType = CurrentStatementType.Null;
        }
    };

    enterSparkStyleSelect = (ctx: SparkStyleSelectContext): void => {
        if (this.currentStatementType != CurrentStatementType.Null) {
            this.currentStatementType = CurrentStatementType.Query;
        }
        this.parseSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
    };

    exitSparkStyleSelect = (ctx: SparkStyleSelectContext): void => {
        if (this.currentStatementType == CurrentStatementType.Query) {
            this.currentStatementType = CurrentStatementType.Null;
        }
    };

    enterMatchRecognizeSelect = (ctx: MatchRecognizeSelectContext): void => {
        if (this.currentStatementType != CurrentStatementType.Null) {
            this.currentStatementType = CurrentStatementType.Query;
        }
        this.parseSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
    };

    exitMatchRecognizeSelect = (ctx: MatchRecognizeSelectContext): void => {
        if (this.currentStatementType == CurrentStatementType.Query) {
            this.currentStatementType = CurrentStatementType.Null;
        }
    };


    enterSelectClause = (ctx: SelectClauseContext): void => {
        if (this.currentStatementType != CurrentStatementType.Null) {
            this.currentStatementType = CurrentStatementType.Query;
        }
        this.currentStatementType = CurrentStatementType.Query;
    };

    enterTableSample = (ctx: TableSampleContext): void => {
        if (this.currentStatementType != CurrentStatementType.Null) {
            this.currentStatementType = CurrentStatementType.Query;
        }
        this.parseSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
    };

    enterSimpleCreateTable = (ctx: SimpleCreateTableContext): void => {
        let identifierList = ctx.tablePathCreate().uid().identifier();
        let fullTableName: string | null = null;
        if (identifierList.length > 2) {
            this.errorReport("Table name cannot have more than two identifiers");
        } else if (identifierList.length == 2) {
            let schemaName = identifierList[0].getText();
            let tableName = identifierList[1].getText();
            fullTableName = schemaName + "." + tableName;
        } else if (identifierList.length == 1) {
            let tableName = identifierList[0].getText();
            fullTableName = tableName;
        } else {
            this.errorReport("Table name cannot be null");
        }

        if (fullTableName == null) {
            this.errorReport("Table name cannot be null");
            return
        }
        let columnDefinitionList = ctx.columnsBody()?.columnOptionDefinition() ?? null;

        if (columnDefinitionList == null) {
            this.errorReport("columnDefinitionList cannot be null");
            return
        }
        this.recordColumnInfo(fullTableName, columnDefinitionList);

    };


    private parseSelectAndFromClause(selectCtx: SelectClauseContext, fromCtx: FromClauseContext): void {
        let tableName: string | null;
        if (fromCtx.tableExpression() instanceof TableExpOpTableRefContext) {

            let tableExpOpTableRefContext = (fromCtx.tableExpression() as TableExpOpTableRefContext)
            tableName = this.extraTableNameFromCommonTableRefCtx(tableExpOpTableRefContext);
            if (tableName == null) {
                return;
            }
        } else if (fromCtx.tableExpression() instanceof TableRefCommaTableRefContext) {
            let tableRefCommaTableRefContext = (fromCtx.tableExpression() as TableRefCommaTableRefContext)
            tableName = this.extraTableNameFromCommonTableRefCtx(tableRefCommaTableRefContext);
            if (tableName == null) {
                return;
            }
        } else {
            this.warnReport("Only support common table define");
            return;
        }
        let tableMetadata = this.semanticContext.getMetaData(tableName);
        if (tableMetadata == null) {
            this.analyzeReport(`cannot find table ${tableName} in the context`);
            return;
        }
        this.parseExpressionForTableName(selectCtx, tableName, false);
    };


    private parseExpressionForTableName(selectCtx: SelectClauseContext, tableName: string, careAs: boolean) {
        let projectItemDefinitionList = selectCtx.projectItemDefinition();
        projectItemDefinitionList.forEach(projectItemDefinition => {
            if (projectItemDefinition instanceof WindowsProrjectItemContext || projectItemDefinition instanceof HiveStyleProjectItemContext) {
                this.warnReport("We will support for WindowsProjectItem in the future.")
            } else if (projectItemDefinition instanceof ExpressionProjectItemContext) {
                this.analyzeExpression(tableName, projectItemDefinition, careAs);
            }
        })
    }

    private extraTableNameFromCommonTableRefCtx(ctx: TableExpOpTableRefContext | TableRefCommaTableRefContext): string | null {
        let tableName: string;

        if (ctx.tableReference().length == 1) {
            let firstTableRef = ctx.tableReference()[0];
            if (firstTableRef.tablePrimary() instanceof TablePathForTablePrimaryContext) {
                let tablePathForTablePrimaryContext = (firstTableRef.tablePrimary() as TablePathForTablePrimaryContext);
                tableName = tablePathForTablePrimaryContext.tablePath().uid().getText();
            } else {
                this.warnReport("Table name not found in table reference");
                return null;
            }
        } else if (ctx.tableReference().length == 2) {
            let secondATableRef = ctx.tableReference()[1];
            if (secondATableRef.tablePrimary() instanceof TablePathForTablePrimaryContext) {
                let tablePathForTablePrimaryContext = (secondATableRef.tablePrimary() as TablePathForTablePrimaryContext);
                tableName = tablePathForTablePrimaryContext.tablePath().uid().getText();
            } else {
                this.warnReport("Table name not found in table reference");
                return null;
            }
        } else {
            this.errorReport("Table name not found in this statement");
            return null;
        }
        return tableName
    }


    private analyzeExpression(tableName: string, ctx: ExpressionProjectItemContext, careAs: boolean): void {
        let expressionContext: BooleanExpressionContext;
        if (ctx.expression().length == 2) {
            if (careAs) {
                expressionContext = (ctx.expression()[1] as BooleanExpressionContext);
            } else {
                expressionContext = (ctx.expression()[0] as BooleanExpressionContext);
            }
        } else if (ctx.expression().length == 1) {
            expressionContext = (ctx.expression()[0] as BooleanExpressionContext);
        } else {
            this.errorReport("Unsupported expression");
            return;
        }

        if (!(expressionContext.children[0] instanceof PredicatedContext)) {
            return;
        }

        let valueExpression = (expressionContext.children[0] as PredicatedContext).valueExpression();
        if (!(valueExpression instanceof ValueExpressionDefaultContext)) {
            return;
        }
        let primaryExpression: PrimaryExpressionContext;
        if (valueExpression.children[0] instanceof ColumnReferenceContext || valueExpression.children[0] instanceof UidForColumnNameContext) {
            primaryExpression = valueExpression.children[0];
        } else if (valueExpression.children[0] instanceof StarContext) {
            //ignore start
            return;
        } else {
            this.warnReport("Unsupported primaryExpression");
            return;
        }
        let filedName: string;
        if (primaryExpression instanceof ColumnReferenceContext) {
            filedName = (primaryExpression as ColumnReferenceContext).identifier().getText();
        } else if (primaryExpression instanceof UidForColumnNameContext) {
            let identifierList = (primaryExpression as UidForColumnNameContext).uid().identifier();
            if (identifierList.length == 1) {
                filedName = identifierList[0].getText();
            } else if (identifierList.length == 2) {
                if (careAs) {
                    filedName = identifierList[1].getText();
                } else {
                    filedName = identifierList[0].getText();
                }
            } else {
                this.warnReport("Unsupported column name");
                return;
            }
        } else {
            this.warnReport("Unsupported primaryExpression");
            return;
        }
        this.checkMetadata(tableName, filedName);
    };

    private checkMetadata(tableName: string, filedName: string) {
        let tableMetadata = this.semanticContext.getMetaData(tableName);
        if (tableMetadata == null) {
            this.warnReport(`cannot find metadata for table ${tableName}`);
            return;
        }

        if (!tableMetadata?.hasColumn(filedName)) {
            this.analyzeReport(`cannot find column '${filedName}' from table ${tableName}`)
        }
    }

    private recordColumnInfo(tableName: string, columnDefinitionList: ColumnOptionDefinitionContext[]) {
        columnDefinitionList?.forEach(columnCtx => {
            let columnType: string | null;
            let columnName: string | null;

            if (columnCtx.physicalColumnDefinition() != null) {
                columnName = columnCtx.physicalColumnDefinition()?.columnName().uid()?.getText() ?? null;
                columnType = columnCtx.physicalColumnDefinition()?.columnType()._typeName?.text ?? null;
            } else if ((columnCtx.metadataColumnDefinition() != null)) {
                columnName = columnCtx.metadataColumnDefinition()?.columnName().uid()?.getText() ?? null;
                columnType = columnCtx.metadataColumnDefinition()?.columnType()._typeName?.text ?? null;
            } else if ((columnCtx.computedColumnDefinition() != null)) {
                columnName = columnCtx.computedColumnDefinition()?.columnName().uid()?.getText() ?? null;
                columnType = "";
            } else {
                this.errorReport("cannot get column name and type")
                return;
            }

            if (columnName == null || columnType == null) {
                this.errorReport("cannot get column name")
                return;
            }

            let metadata = this.semanticContext.getMetaData(tableName);
            let columnMetaData = new ColumnMetaData(columnName, columnType);
            if (metadata != null) {
                metadata.addColumnMetaData(columnMetaData);
            } else {
                let tableMetaData = new TableMetaData()
                tableMetaData.addColumnMetaData(columnMetaData);
                this.semanticContext.putMetaData(tableName, tableMetaData);
            }

        });
    }
}

enum CurrentStatementType {
    Query,
    INSERT,
    CREATE,
    CREATE_TEMP,
    Null
}