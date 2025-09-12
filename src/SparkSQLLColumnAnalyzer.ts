import {ColumnMetaData, SemanticContext, TableMetaData} from "./SemanticContext";
import {SparkSQLListener} from "./SparkSQLListener";
import {
    BooleanExpressionContext, ColumnNameListContext,
    ColumnOptionDefinitionContext,
    ColumnReferenceContext,
    CommonQueryContext,
    CommonSelectContext, CreateViewContext,
    ExpressionContext,
    ExpressionProjectItemContext,
    FromClauseContext,
    HiveStyleProjectItemContext, InsertSimpleStatementContext,
    MatchRecognizeSelectContext,
    PredicatedContext, PrimaryExpressionContext, QueryStatementContext,
    SelectClauseContext,
    SelectPlusContext,
    SelectStatementPlusContext,
    SimpleCreateTableContext,
    SparkStyleSelectContext, SqlStatementContext, SqlStatementsContext, StarContext, TableAliasContext,
    TableExpOpTableRefContext, TableExpressionContext, TablePathContext,
    TablePathForTablePrimaryContext, TablePivotRefContext, TablePrimaryContext, TableRefCommaTableRefContext,
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
        this.handleInsertSimpleStatementContext(ctx);
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
        this.handleSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
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
        this.handleSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
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
        this.handleSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
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
        this.handleSelectAndFromClause(ctx.selectClause(), ctx.fromClause());
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

    enterCreateView = (ctx: CreateViewContext): void => {
        this.handleColumnNameListOrQueryStatement(ctx.columnNameList(), ctx.queryStatement(), null);
        //todo save export column name
    };

    private handleInsertSimpleStatementContext(ctx: InsertSimpleStatementContext): void {
        let tablePathContexts = ctx.tablePath();
        if (tablePathContexts.length == 0) {
            this.errorReport("columnDefinitionList cannot be null");
            return
        }
        let insertTargetTable: string = tablePathContexts[0].uid().getText();

        let tableMetadata = this.semanticContext.getMetaData(insertTargetTable);
        if (tableMetadata == null) {
            this.warnReport(`cannot find table ${insertTargetTable} in the context`);
            return;
        }
        this.handleColumnNameListOrQueryStatement(ctx.columnNameList(), ctx.queryStatement(), insertTargetTable);
    }


    private handleColumnNameListOrQueryStatement(columnNameCtx: ColumnNameListContext | null,
                                                 queryStatementContext: QueryStatementContext | null, targetTable: string | null): void {
        if (columnNameCtx != null) {
            columnNameCtx.columnName().forEach(columnNameContext => {
                if (columnNameContext.uid() != null) {
                    let idList = columnNameContext.uid()?.identifier();
                    if (idList != null && idList.length > 0) {
                        if (targetTable != null) { //point table name
                            this.checkMetadata(targetTable, idList![0].getText());
                        } else if (idList!.length == 2) { //no point table name, so we get index 0 as table name
                            this.checkMetadata(idList![0].getText(), idList![1].getText());
                        } else {
                            this.errorReport(`handleColumnNameListOrQueryStatement unexpected branch, ${idList.length}`)
                        }
                    } else {
                        this.warnReport("unexpected branch for columnList. we cannot check metadata")
                    }
                } else {
                    this.warnReport("unexpected branch for columnList")
                }

            })
        } else if (queryStatementContext != null && queryStatementContext instanceof CommonQueryContext) {
            let commonContext = (queryStatementContext as CommonQueryContext);
            if (commonContext.selectClause() != null) {
                this.handleSelectClauseWithTableName(commonContext.selectClause()!, targetTable, new Map<string, string>(), true);
            } else {
                let selectStatementContext = commonContext.selectStatement();
                if (selectStatementContext instanceof CommonSelectContext || selectStatementContext instanceof SparkStyleSelectContext
                    || selectStatementContext instanceof MatchRecognizeSelectContext || selectStatementContext instanceof TableSampleContext) {
                    let commonSelectContext = (selectStatementContext as CommonSelectContext);
                    let fromClause = commonSelectContext.fromClause();
                    let tableNameMapping = this.extraTableMappingFromClause(fromClause);
                    this.handleSelectClauseWithTableName(commonSelectContext.selectClause()!, targetTable, tableNameMapping, true);
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

    private handleSelectAndFromClause(selectCtx: SelectClauseContext, fromCtx: FromClauseContext): void {
        let tableName: string | null;
        if (fromCtx.tableExpression() instanceof TableExpOpTableRefContext) {
            let tableExpOpTableRefContext = (fromCtx.tableExpression() as TableExpOpTableRefContext)
            tableName = this.extraTableNameFromTableExpOpTableRef(tableExpOpTableRefContext);
            if (tableName == null) {
                this.errorReport("Cannot get table name when handleSelectAndFromClause");
                return;
            }
        } else if (fromCtx.tableExpression() instanceof TableRefCommaTableRefContext) {
            let tableRefCommaTableRefContext = (fromCtx.tableExpression() as TableRefCommaTableRefContext)
            tableName = this.extraTableNameFromCommonTableRef(tableRefCommaTableRefContext);
            if (tableName == null) {
                this.errorReport("Cannot get table name when handleSelectAndFromClause");
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
        let tableNameMapping = this.extraTableMappingFromClause(fromCtx);
        this.handleSelectClauseWithTableName(selectCtx, tableName, tableNameMapping, false);
        if (fromCtx.tableExpression() instanceof TableExpOpTableRefContext) {
            let tableExpOpTableRefContext = (fromCtx.tableExpression() as TableExpOpTableRefContext)
            if (tableExpOpTableRefContext.joinCondition() != null) {
                let joinConditionUnitList: Array<Pair<JoinConditionUnit>> = [];
                this.analyzeTableExpressionForJoinCondition(tableExpOpTableRefContext, joinConditionUnitList)
            }
        }
    };


    private handleSelectClauseWithTableName(selectCtx: SelectClauseContext, tableName: string | null, tableNameMapping: Map<string, string>, careAs: boolean) {
        let projectItemDefinitionList = selectCtx.projectItemDefinition();

        if (tableName == null && tableNameMapping.size == 0) {
            this.errorReport("tableName and tableNameMapping cannot be null on same time when handleSelectClauseWithTableName.")
            return;
        }

        projectItemDefinitionList.forEach(projectItemDefinition => {
            if (projectItemDefinition instanceof WindowsProrjectItemContext || projectItemDefinition instanceof HiveStyleProjectItemContext) {
                this.warnReport("We will support for WindowsProjectItem in the future.")
            } else if (projectItemDefinition instanceof ExpressionProjectItemContext) {
                this.analyzeExpression(tableName, tableNameMapping, projectItemDefinition, careAs);
            }
        })
    }

    private extraTableNameFromCommonTableRef(ctx: TableRefCommaTableRefContext): string | null {
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

    private extraTableNameFromTableExpOpTableRef(ctx: TableExpOpTableRefContext): string | null {
        let firstExp = ctx.tableExpression()[0];
        if (firstExp instanceof TableRefCommaTableRefContext) {
            return this.extraTableNameFromCommonTableRef(ctx.tableExpression()[0] as TableRefCommaTableRefContext);
        } else if (firstExp instanceof TableExpOpTableRefContext) {
            return this.extraTableNameFromTableExpOpTableRef(firstExp);
        } else {
            this.errorReport("extraTableNameFromTableExpOpTableRef not consider this branch");
            return null;
        }
    }

    /**
     * if return empty mpa, mean no table name. see warn info
     * */
    private extraTableMappingFromClause(ctx: FromClauseContext): Map<string, string> {
        let tableExpression = ctx.tableExpression();
        return this.extraTableNameFrom(tableExpression);
    }

    private extraTableNameFrom(ctx: TableExpressionContext): Map<string, string> {
        let result = new Map<string, string>();
        if (ctx instanceof TableRefCommaTableRefContext) {
            let tableRefCommaTableRefContext = (ctx as TableRefCommaTableRefContext);
            if (tableRefCommaTableRefContext.tableReference().length == 1) {
                let tableReference = tableRefCommaTableRefContext.tableReference()[0];
                let tablePrimary = tableReference.tablePrimary();
                let tableAlias = tableReference.tableAlias();
                result = this.extraTableNameFromTablePrimary(tablePrimary, tableAlias);
            } else if (tableRefCommaTableRefContext.tableReference().length > 1) {
                this.warnReport(`tableRefCommaTableRefContext.tableReference().length is ${tableRefCommaTableRefContext.tableReference().length}`)
            }
        } else if (ctx instanceof TableExpOpTableRefContext) {
            ctx.tableExpression().forEach(tableExpression => {
                let r = this.extraTableNameFrom(tableExpression);
                r.forEach((value, key) => {
                    result.set(key, value);
                })
            });
        } else {
            this.warnReport("I think extraTableMappingFromClause no need this condition branch.")
        }
        return result;
    }

    private extraTableNameFromTablePrimary(tablePrimaryContext: TablePrimaryContext, tableAlias: TableAliasContext | null): Map<string, string> {
        if (!(tablePrimaryContext instanceof TablePathForTablePrimaryContext)) {
            this.warnReport("I think extraTableNameFromTablePrimary no need this condition branch.")
        }
        let result = new Map<string, string>();
        let idList = (tablePrimaryContext as TablePathForTablePrimaryContext).tablePath().uid().identifier();
        if (tableAlias != null) {
            // aliasName is key
            let key = tableAlias.anyAlias().identifier().getText();
            result.set(key, idList[0].getText());
        } else if (idList.length == 1) {
            result.set(idList[0].getText(), idList[0].getText());
        } else {
            this.warnReport(`idList.length size is unexpected ${idList.length}`)
        }
        return result;
    }

    private analyzeTableExpressionForJoinCondition(ctx: TableExpOpTableRefContext, array: Array<Pair<JoinConditionUnit>>): void {
        let booleanExp = ctx.joinCondition()?.booleanExpression();
        if (booleanExp != null) {
            //todo care predicated, logicalBinary, logicalBinary,logicalNested type. so complex
        }
    }

    private analyzeExpression(tableName: string | null, tableNameMapping: Map<string, string>, ctx: ExpressionProjectItemContext, careAs: boolean): void {
        let afterExpressionContext: BooleanExpressionContext | null = null;
        let beforeExpressionContext: BooleanExpressionContext | null = null;
        if (ctx.expression().length == 2) {
            if (careAs) {
                afterExpressionContext = (ctx.expression()[1] as BooleanExpressionContext);
                beforeExpressionContext = (ctx.expression()[0] as BooleanExpressionContext);
            } else {
                beforeExpressionContext = (ctx.expression()[0] as BooleanExpressionContext);
            }
        } else if (ctx.expression().length == 1) {
            beforeExpressionContext = (ctx.expression()[0] as BooleanExpressionContext);
        } else {
            this.errorReport("Unsupported expression");
            return;
        }
        if (afterExpressionContext != null) {
            this.analyzeBooleanExpression(tableName, tableNameMapping, afterExpressionContext, true);
        } else if (beforeExpressionContext != null) {
            this.analyzeBooleanExpression(tableName, tableNameMapping, beforeExpressionContext, false);
        } else {
            this.errorReport("why afterExpressionContext and beforeExpressionContext all null? ")
        }

    };

    private analyzeBooleanExpression(tableName: string | null, tableNameMapping: Map<string, string>, ctx: BooleanExpressionContext, isAfter: boolean): void {
        if (!(ctx.children[0] instanceof PredicatedContext)) {
            this.errorReport(`Unsupported expression context type ${typeof ctx.children[0]}`);
            return;
        }

        let valueExpression = (ctx.children[0] as PredicatedContext).valueExpression();
        if (!(valueExpression instanceof ValueExpressionDefaultContext)) {
            this.errorReport(`Unsupported value expression type ${typeof valueExpression}`);
            return;
        }
        let primaryExpression: PrimaryExpressionContext;
        if (valueExpression.children[0] instanceof ColumnReferenceContext || valueExpression.children[0] instanceof UidForColumnNameContext) {
            primaryExpression = valueExpression.children[0];
        } else if (valueExpression.children[0] instanceof StarContext) {
            //ignore start
            return;
        } else {
            this.warnReport(`Unsupported valueExpression.children[0] type . type is ${typeof valueExpression.children[0]}`);
            return;
        }
        if (isAfter) {
            if (tableName != null) {
                this.analyzeBooleanPrimaryExpressionCareAfter(tableName, primaryExpression);
            } else {
                this.warnReport(`table is null maybe cause upstream is query, so dont care`)
            }
        } else if (!isAfter) {
            this.analyzeBooleanPrimaryExpressionCareBefore(tableName, tableNameMapping, primaryExpression);
        } else {
            this.warnReport("Unsupported condition branch in analyzeBooleanExpression");
        }

    }

    private analyzeBooleanPrimaryExpressionCareAfter(tableName: string, ctx: PrimaryExpressionContext): void {
        let filedName: string;
        if (ctx instanceof ColumnReferenceContext) {
            filedName = (ctx as ColumnReferenceContext).identifier().getText();
        } else if (ctx instanceof UidForColumnNameContext) {
            let identifierList = (ctx as UidForColumnNameContext).uid().identifier();
            if (identifierList.length == 1) {
                filedName = identifierList[0].getText();
            } else {
                this.warnReport(`identifierList size must == 1, but get ${identifierList.length}`);
                return;
            }
        } else {
            this.warnReport("Unsupported primaryExpression");
            return;
        }
        if (tableName != null) {
            this.checkMetadata(tableName, filedName);
        } else {
            this.errorReport(`cannot find table name when analyzeBooleanPrimaryExpressionCareAfter`);
        }
    }

    private analyzeBooleanPrimaryExpressionCareBefore(tableName: string | null, tableNameMapping: Map<string, string>, ctx: PrimaryExpressionContext): void {
        let filedName: string;
        let tableRealName: string | undefined | null = null;
        if (ctx instanceof ColumnReferenceContext) {
            filedName = (ctx as ColumnReferenceContext).identifier().getText();
        } else if (ctx instanceof UidForColumnNameContext) {
            let identifierList = (ctx as UidForColumnNameContext).uid().identifier();
            if (identifierList.length == 1) {
                filedName = identifierList[0].getText();
            } else if (identifierList.length == 2) {
                //如果是2，就是表名.字段名

                let tableAlias = identifierList[0].getText();
                tableRealName = tableNameMapping.get(tableAlias);
                filedName = identifierList[1].getText();

            } else {
                this.warnReport("Unsupported column name");
                return;
            }
        } else {
            this.warnReport("Unsupported primaryExpression");
            return;
        }
        if (tableRealName != null) {
            this.checkMetadata(tableRealName, filedName);
        } else if (tableName != null) {
            this.checkMetadata(tableName, filedName);
        } else {
            this.errorReport(`cannot find table name when analyzeBooleanPrimaryExpressionCareBefore`);
        }
    }

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

class Pair<T> {
    private readonly left: T;
    private readonly right: T;

    constructor(left: T, right: T) {
        this.left = left;
        this.right = right;
    }

    getLeft(): T {
        return this.left;
    }

    getRight(): T {
        return this.right;
    }
}

class JoinConditionUnit {
    private readonly tableName: string;
    private readonly fieldName: string;

    constructor(tableName: string, fieldName: string) {
        this.tableName = tableName;
        this.fieldName = fieldName;
    }

    getTableName(): string {
        return this.tableName;
    }

    getFieldName(): string {
        return this.fieldName;
    }
}