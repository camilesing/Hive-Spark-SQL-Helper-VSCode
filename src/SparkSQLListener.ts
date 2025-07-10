// Generated from gen/SparkSQL.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StatementContext } from "./SparkSQLParser.js";
import { SqlStatementsContext } from "./SparkSQLParser.js";
import { EmptyStatementContext } from "./SparkSQLParser.js";
import { CreateStatementContext } from "./SparkSQLParser.js";
import { DmlStatementContext } from "./SparkSQLParser.js";
import { SimpleContext } from "./SparkSQLParser.js";
import { AsSelectContext } from "./SparkSQLParser.js";
import { MaterializedContext } from "./SparkSQLParser.js";
import { CustomSerdeContext } from "./SparkSQLParser.js";
import { CustomSerdeExternalContext } from "./SparkSQLParser.js";
import { Using_createContext } from "./SparkSQLParser.js";
import { SimpleCreateTableContext } from "./SparkSQLParser.js";
import { SimpleCreateTableNoSortElementContext } from "./SparkSQLParser.js";
import { LocationContext } from "./SparkSQLParser.js";
import { SortedByContext } from "./SparkSQLParser.js";
import { UsingCreateContext } from "./SparkSQLParser.js";
import { TblPropertiesContext } from "./SparkSQLParser.js";
import { DefaultColumnUsingContext } from "./SparkSQLParser.js";
import { DefaultColumnUsingNoSortElementContext } from "./SparkSQLParser.js";
import { ColumnUsingContext } from "./SparkSQLParser.js";
import { ColumnUsingNoSortElementContext } from "./SparkSQLParser.js";
import { UsingByQueryContext } from "./SparkSQLParser.js";
import { UsingByQueryNoSortElementContext } from "./SparkSQLParser.js";
import { IntoBucketsContext } from "./SparkSQLParser.js";
import { HiveFormatpartitionDefinitionContext } from "./SparkSQLParser.js";
import { RowFormatSerdeContext } from "./SparkSQLParser.js";
import { FieldsTerminatedByContext } from "./SparkSQLParser.js";
import { StoredAsContext } from "./SparkSQLParser.js";
import { StoredAsInputformatContext } from "./SparkSQLParser.js";
import { OutputformatContext } from "./SparkSQLParser.js";
import { RowFormatDelimtedContext } from "./SparkSQLParser.js";
import { ColumnsBodyContext } from "./SparkSQLParser.js";
import { CreateCustomSerdeContext } from "./SparkSQLParser.js";
import { CreateCustomSerdeNoSortElementContext } from "./SparkSQLParser.js";
import { CreateCustomSerdeExternalContext } from "./SparkSQLParser.js";
import { CreateCustomSerdeExternalNoSortElementContext } from "./SparkSQLParser.js";
import { CreateTableAsSelectContext } from "./SparkSQLParser.js";
import { CreateMaterializedTableAsSelectContext } from "./SparkSQLParser.js";
import { CreateMaterializedTableAsSelectNoSortElementContext } from "./SparkSQLParser.js";
import { UsingClauseContext } from "./SparkSQLParser.js";
import { JarFileNameContext } from "./SparkSQLParser.js";
import { FilePathContext } from "./SparkSQLParser.js";
import { IfExistsPartContext } from "./SparkSQLParser.js";
import { ColumnPositionContext } from "./SparkSQLParser.js";
import { RenameDefinitionContext } from "./SparkSQLParser.js";
import { SetKeyValueDefinitionContext } from "./SparkSQLParser.js";
import { AddConstraintContext } from "./SparkSQLParser.js";
import { DropConstraintContext } from "./SparkSQLParser.js";
import { AddUniqueContext } from "./SparkSQLParser.js";
import { NotForcedContext } from "./SparkSQLParser.js";
import { InsertStatementContext } from "./SparkSQLParser.js";
import { InsertSimpleStatementContext } from "./SparkSQLParser.js";
import { InsertPartitionDefinitionContext } from "./SparkSQLParser.js";
import { QueryStatementContext } from "./SparkSQLParser.js";
import { WithClauseContext } from "./SparkSQLParser.js";
import { ValuesCaluseContext } from "./SparkSQLParser.js";
import { InlineBodyContext } from "./SparkSQLParser.js";
import { WithItemContext } from "./SparkSQLParser.js";
import { WithItemNameContext } from "./SparkSQLParser.js";
import { SelectClauseContext } from "./SparkSQLParser.js";
import { FilterPartContext } from "./SparkSQLParser.js";
import { OverWindowItemContext } from "./SparkSQLParser.js";
import { OverClauseContext } from "./SparkSQLParser.js";
import { WindowFunctioPartContext } from "./SparkSQLParser.js";
import { WindowFunctionNameContext } from "./SparkSQLParser.js";
import { AnalyticFunctionContext } from "./SparkSQLParser.js";
import { RangkingFunctionContext } from "./SparkSQLParser.js";
import { FromClauseContext } from "./SparkSQLParser.js";
import { WindowFrameForWindowsQueryContext } from "./SparkSQLParser.js";
import { FrameExpessionContext } from "./SparkSQLParser.js";
import { TableExpressionContext } from "./SparkSQLParser.js";
import { TvfClauseContext } from "./SparkSQLParser.js";
import { RangeClauseContext } from "./SparkSQLParser.js";
import { ViewReferenceContext } from "./SparkSQLParser.js";
import { PivotReferenceContext } from "./SparkSQLParser.js";
import { TableReferenceContext } from "./SparkSQLParser.js";
import { TablePrimaryContext } from "./SparkSQLParser.js";
import { FuntionBodyContext } from "./SparkSQLParser.js";
import { UnpivotBodyContext } from "./SparkSQLParser.js";
import { PivotBodyContext } from "./SparkSQLParser.js";
import { ExpressionAsAliasContext } from "./SparkSQLParser.js";
import { ExpressionAsAliasListContext } from "./SparkSQLParser.js";
import { SystemTimePeriodContext } from "./SparkSQLParser.js";
import { DateTimeExpressionContext } from "./SparkSQLParser.js";
import { InlineDataValueClauseContext } from "./SparkSQLParser.js";
import { WindowTVFClauseContext } from "./SparkSQLParser.js";
import { WindowTVFExpressionContext } from "./SparkSQLParser.js";
import { WindowTVFNameContext } from "./SparkSQLParser.js";
import { RowFormatDelimitedContext } from "./SparkSQLParser.js";
import { HiveSerdeContext } from "./SparkSQLParser.js";
import { UsingAsColumnPartContext } from "./SparkSQLParser.js";
import { HiveSerdePartContext } from "./SparkSQLParser.js";
import { TableCanHasKeyPropertyListContext } from "./SparkSQLParser.js";
import { SparkRecordWriterPartContext } from "./SparkSQLParser.js";
import { WindowTVFParamContext } from "./SparkSQLParser.js";
import { TimeIntervalParamNameContext } from "./SparkSQLParser.js";
import { ColumnDescriptorContext } from "./SparkSQLParser.js";
import { JoinConditionContext } from "./SparkSQLParser.js";
import { WhereClauseContext } from "./SparkSQLParser.js";
import { SamplingQueriesContext } from "./SparkSQLParser.js";
import { SomeByClauseContext } from "./SparkSQLParser.js";
import { ClusterByClauseContext } from "./SparkSQLParser.js";
import { ClusteredByClauseContext } from "./SparkSQLParser.js";
import { DistributeByClauseContext } from "./SparkSQLParser.js";
import { GroupByClauseContext } from "./SparkSQLParser.js";
import { GroupItemDefinitionContext } from "./SparkSQLParser.js";
import { GroupingSetContext } from "./SparkSQLParser.js";
import { GroupingSetsContext } from "./SparkSQLParser.js";
import { GroupingSetsNotionNameContext } from "./SparkSQLParser.js";
import { GroupWindowFunctionContext } from "./SparkSQLParser.js";
import { GroupWindowFunctionNameContext } from "./SparkSQLParser.js";
import { TimeAttrColumnContext } from "./SparkSQLParser.js";
import { HavingClauseContext } from "./SparkSQLParser.js";
import { WindowClauseContext } from "./SparkSQLParser.js";
import { NamedWindowContext } from "./SparkSQLParser.js";
import { WindowSpecContext } from "./SparkSQLParser.js";
import { MatchRecognizeClauseContext } from "./SparkSQLParser.js";
import { OrderByCaluseContext } from "./SparkSQLParser.js";
import { SortByCaluseContext } from "./SparkSQLParser.js";
import { OrderItemDefinitionContext } from "./SparkSQLParser.js";
import { LimitClauseContext } from "./SparkSQLParser.js";
import { OffsetClauseContext } from "./SparkSQLParser.js";
import { PartitionByClauseContext } from "./SparkSQLParser.js";
import { QuantifiersContext } from "./SparkSQLParser.js";
import { MeasuresClauseContext } from "./SparkSQLParser.js";
import { PatternDefinitionContext } from "./SparkSQLParser.js";
import { PatternVariableContext } from "./SparkSQLParser.js";
import { OutputModeContext } from "./SparkSQLParser.js";
import { AfterMatchStrategyContext } from "./SparkSQLParser.js";
import { PatternVariablesDefinitionContext } from "./SparkSQLParser.js";
import { WindowFrameContext } from "./SparkSQLParser.js";
import { FrameBoundContext } from "./SparkSQLParser.js";
import { WithinClauseContext } from "./SparkSQLParser.js";
import { SelfDefinitionClauseContext } from "./SparkSQLParser.js";
import { PartitionDefinitionContext } from "./SparkSQLParser.js";
import { TransformListContext } from "./SparkSQLParser.js";
import { IdentityTransformContext } from "./SparkSQLParser.js";
import { ApplyTransformContext } from "./SparkSQLParser.js";
import { TransformArgumentContext } from "./SparkSQLParser.js";
import { LikeDefinitionContext } from "./SparkSQLParser.js";
import { DistributionContext } from "./SparkSQLParser.js";
import { UsingContext } from "./SparkSQLParser.js";
import { LikeOptionContext } from "./SparkSQLParser.js";
import { ColumnOptionDefinitionContext } from "./SparkSQLParser.js";
import { PhysicalColumnDefinitionListContext } from "./SparkSQLParser.js";
import { PhysicalColumnDefinitionContext } from "./SparkSQLParser.js";
import { ComputedColumnExpressionContext } from "./SparkSQLParser.js";
import { WatermarkDefinitionContext } from "./SparkSQLParser.js";
import { TableConstraintContext } from "./SparkSQLParser.js";
import { ConstraintNameContext } from "./SparkSQLParser.js";
import { ValuesDefinitionContext } from "./SparkSQLParser.js";
import { ValuesRowDefinitionContext } from "./SparkSQLParser.js";
import { LengthOneDimensionContext } from "./SparkSQLParser.js";
import { LengthTwoOptionalDimensionContext } from "./SparkSQLParser.js";
import { LengthTwoStringDimensionContext } from "./SparkSQLParser.js";
import { LengthSymbolsTypeDimensionContext } from "./SparkSQLParser.js";
import { MapTypeDimensionContext } from "./SparkSQLParser.js";
import { RowSymbolsTypeDimensionContext } from "./SparkSQLParser.js";
import { StructSymbolsTypeDimensionContext } from "./SparkSQLParser.js";
import { ColumnConstraintContext } from "./SparkSQLParser.js";
import { CommentSpecContext } from "./SparkSQLParser.js";
import { MetadataColumnDefinitionContext } from "./SparkSQLParser.js";
import { MetadataKeyContext } from "./SparkSQLParser.js";
import { ComputedColumnDefinitionContext } from "./SparkSQLParser.js";
import { ColumnNameContext } from "./SparkSQLParser.js";
import { ColumnNameListContext } from "./SparkSQLParser.js";
import { ColumnTypeContext } from "./SparkSQLParser.js";
import { ExpressionContext } from "./SparkSQLParser.js";
import { LogicalNotContext } from "./SparkSQLParser.js";
import { PredicatedContext } from "./SparkSQLParser.js";
import { ExistsContext } from "./SparkSQLParser.js";
import { LogicalNestedContext } from "./SparkSQLParser.js";
import { LogicalBinaryContext } from "./SparkSQLParser.js";
import { PredicateContext } from "./SparkSQLParser.js";
import { LikePredicateContext } from "./SparkSQLParser.js";
import { ValueExpressionDefaultContext } from "./SparkSQLParser.js";
import { OrContext } from "./SparkSQLParser.js";
import { ComparisonContext } from "./SparkSQLParser.js";
import { ArithmeticBinaryContext } from "./SparkSQLParser.js";
import { ArithmeticUnaryContext } from "./SparkSQLParser.js";
import { SimpleCaseContext } from "./SparkSQLParser.js";
import { ColumnReferenceContext } from "./SparkSQLParser.js";
import { LastContext } from "./SparkSQLParser.js";
import { StarContext } from "./SparkSQLParser.js";
import { AggregateFunctionsContext } from "./SparkSQLParser.js";
import { SubscriptContext } from "./SparkSQLParser.js";
import { ValuesContext } from "./SparkSQLParser.js";
import { FunctionCallFilterContext } from "./SparkSQLParser.js";
import { OrderSetAggregateFunctionsContext } from "./SparkSQLParser.js";
import { SubqueryExpressionContext } from "./SparkSQLParser.js";
import { CastContext } from "./SparkSQLParser.js";
import { ConstantDefaultContext } from "./SparkSQLParser.js";
import { ParenthesizedExpressionContext } from "./SparkSQLParser.js";
import { ComplexDataTypeFieldExpressionContext } from "./SparkSQLParser.js";
import { FunctionCallContext } from "./SparkSQLParser.js";
import { UidForColumnNameContext } from "./SparkSQLParser.js";
import { SearchedCaseContext } from "./SparkSQLParser.js";
import { PositionContext } from "./SparkSQLParser.js";
import { FirstContext } from "./SparkSQLParser.js";
import { ComplexDataTypeExpressionContext } from "./SparkSQLParser.js";
import { ArrayExpressionContext } from "./SparkSQLParser.js";
import { StructExpressionContext } from "./SparkSQLParser.js";
import { RowExpressionContext } from "./SparkSQLParser.js";
import { MapExpressionContext } from "./SparkSQLParser.js";
import { DataTypeExpressionContext } from "./SparkSQLParser.js";
import { SqlSimpleTypeContext } from "./SparkSQLParser.js";
import { FunctionNameContext } from "./SparkSQLParser.js";
import { FunctionParamContext } from "./SparkSQLParser.js";
import { FilterClauseContext } from "./SparkSQLParser.js";
import { CorrelationNameContext } from "./SparkSQLParser.js";
import { QualifiedNameContext } from "./SparkSQLParser.js";
import { TimeIntervalExpressionContext } from "./SparkSQLParser.js";
import { ErrorCapturingMultiUnitsIntervalContext } from "./SparkSQLParser.js";
import { MultiUnitsIntervalContext } from "./SparkSQLParser.js";
import { ErrorCapturingUnitToUnitIntervalContext } from "./SparkSQLParser.js";
import { UnitToUnitIntervalContext } from "./SparkSQLParser.js";
import { IntervalValueContext } from "./SparkSQLParser.js";
import { ColumnAliasContext } from "./SparkSQLParser.js";
import { TableAliasContext } from "./SparkSQLParser.js";
import { AnyAliasContext } from "./SparkSQLParser.js";
import { ErrorCapturingIdentifierContext } from "./SparkSQLParser.js";
import { ErrorIdentContext } from "./SparkSQLParser.js";
import { IdentifierListContext } from "./SparkSQLParser.js";
import { IdentifierSeqContext } from "./SparkSQLParser.js";
import { UnquotedIdentifierAlternativeContext } from "./SparkSQLParser.js";
import { QuotedIdentifierAlternativeContext } from "./SparkSQLParser.js";
import { NonReservedKeywordsAlternativeContext } from "./SparkSQLParser.js";
import { UrefVarAlternativeContext } from "./SparkSQLParser.js";
import { UnquotedAnyStringContext } from "./SparkSQLParser.js";
import { RefVarContext } from "./SparkSQLParser.js";
import { UnquotedIdentifierContext } from "./SparkSQLParser.js";
import { WhenClauseContext } from "./SparkSQLParser.js";
import { CatalogPathContext } from "./SparkSQLParser.js";
import { DatabasePathContext } from "./SparkSQLParser.js";
import { DatabasePathCreateContext } from "./SparkSQLParser.js";
import { TablePathCreateContext } from "./SparkSQLParser.js";
import { TablePathContext } from "./SparkSQLParser.js";
import { AnonymousWindowsNameContext } from "./SparkSQLParser.js";
import { UidContext } from "./SparkSQLParser.js";
import { WithOptionContext } from "./SparkSQLParser.js";
import { IfNotExistsContext } from "./SparkSQLParser.js";
import { IfExistsContext } from "./SparkSQLParser.js";
import { TablePropertyListContext } from "./SparkSQLParser.js";
import { TablePropertyContext } from "./SparkSQLParser.js";
import { TablePropertyKeyContext } from "./SparkSQLParser.js";
import { PropertyNameContext } from "./SparkSQLParser.js";
import { TablePropertyValueContext } from "./SparkSQLParser.js";
import { ComparisonOperatorContext } from "./SparkSQLParser.js";
import { ConstantContext } from "./SparkSQLParser.js";
import { TimePointLiteralContext } from "./SparkSQLParser.js";
import { StringLiteralContext } from "./SparkSQLParser.js";
import { DecimalLiteralContext } from "./SparkSQLParser.js";
import { BooleanLiteralContext } from "./SparkSQLParser.js";
import { SetQuantifierContext } from "./SparkSQLParser.js";
import { TimePointUnitContext } from "./SparkSQLParser.js";
import { TimeIntervalUnitContext } from "./SparkSQLParser.js";
import { ReservedKeywordsUsedAsFuncParamContext } from "./SparkSQLParser.js";
import { ReservedKeywordsUsedAsFuncNameContext } from "./SparkSQLParser.js";
import { NonReservedKeywordsContext } from "./SparkSQLParser.js";
import { SqlStatementContext } from "./SparkSQLParser.js";
import { CommonSelectContext } from "./SparkSQLParser.js";
import { SparkStyleSelectContext } from "./SparkSQLParser.js";
import { MatchRecognizeSelectContext } from "./SparkSQLParser.js";
import { TableSampleContext } from "./SparkSQLParser.js";
import { SelectPlusContext } from "./SparkSQLParser.js";
import { WindowsProrjectItemContext } from "./SparkSQLParser.js";
import { ExpressionProjectItemContext } from "./SparkSQLParser.js";
import { HiveStyleProjectItemContext } from "./SparkSQLParser.js";
import { HiveOverWindowItemContext } from "./SparkSQLParser.js";
import { SelectStatementPlusContext } from "./SparkSQLParser.js";
import { PlusStatementContext } from "./SparkSQLParser.js";
import { DescribeStatementContext } from "./SparkSQLParser.js";
import { ExplainStatementContext } from "./SparkSQLParser.js";
import { ExplainDetailsContext } from "./SparkSQLParser.js";
import { ExplainDetailContext } from "./SparkSQLParser.js";
import { UseStatementContext } from "./SparkSQLParser.js";
import { UseModuleStatementContext } from "./SparkSQLParser.js";
import { ShowStatementContext } from "./SparkSQLParser.js";
import { LoadStatementContext } from "./SparkSQLParser.js";
import { UnloadStatementContext } from "./SparkSQLParser.js";
import { SetStatementContext } from "./SparkSQLParser.js";
import { ResetStatementContext } from "./SparkSQLParser.js";
import { FileStatementContext } from "./SparkSQLParser.js";
import { RefreshStatementContext } from "./SparkSQLParser.js";
import { AnalyzeStatementContext } from "./SparkSQLParser.js";
import { AnalyzePartitionDefinitionContext } from "./SparkSQLParser.js";
import { CreateCatalogContext } from "./SparkSQLParser.js";
import { CreateDatabaseContext } from "./SparkSQLParser.js";
import { CreateViewContext } from "./SparkSQLParser.js";
import { CreateFunctionContext } from "./SparkSQLParser.js";
import { ReplaceTableContext } from "./SparkSQLParser.js";
import { CacheStatementContext } from "./SparkSQLParser.js";
import { AlterMaterializedTableContext } from "./SparkSQLParser.js";
import { AlterTableContext } from "./SparkSQLParser.js";
import { AlterContext } from "./SparkSQLParser.js";
import { AddOrModifyNewColumnContext } from "./SparkSQLParser.js";
import { AddOrModifyNewColumnsContext } from "./SparkSQLParser.js";
import { AddNewPartitionsContext } from "./SparkSQLParser.js";
import { DropcolumnContext } from "./SparkSQLParser.js";
import { ReplaceColumnsContext } from "./SparkSQLParser.js";
import { AlterColumnCommentContext } from "./SparkSQLParser.js";
import { DropColumnListContext } from "./SparkSQLParser.js";
import { DropPrimaryKeyContext } from "./SparkSQLParser.js";
import { RenamePartitionColumnContext } from "./SparkSQLParser.js";
import { DropPartitionsContext } from "./SparkSQLParser.js";
import { DropWatermarkContext } from "./SparkSQLParser.js";
import { RenameColumnContext } from "./SparkSQLParser.js";
import { RenameTableContext } from "./SparkSQLParser.js";
import { SetPropertiyContext } from "./SparkSQLParser.js";
import { SetPartitionPropertyContext } from "./SparkSQLParser.js";
import { ResetPropertiyContext } from "./SparkSQLParser.js";
import { UnsetContext } from "./SparkSQLParser.js";
import { CommonSetContext } from "./SparkSQLParser.js";
import { SetLocationContext } from "./SparkSQLParser.js";
import { SetSerdeContext } from "./SparkSQLParser.js";
import { SetTblProContext } from "./SparkSQLParser.js";
import { DropCatalogContext } from "./SparkSQLParser.js";
import { DropTableContext } from "./SparkSQLParser.js";
import { DropDatabaseContext } from "./SparkSQLParser.js";
import { DropViewContext } from "./SparkSQLParser.js";
import { DropFunctionContext } from "./SparkSQLParser.js";
import { TruncateTableContext } from "./SparkSQLParser.js";
import { RepairTableContext } from "./SparkSQLParser.js";
import { AlertViewContext } from "./SparkSQLParser.js";
import { AlterDatabaseContext } from "./SparkSQLParser.js";
import { AlterFunctionContext } from "./SparkSQLParser.js";
import { OneExpresionContext } from "./SparkSQLParser.js";
import { StackContext } from "./SparkSQLParser.js";
import { Json_tupleContext } from "./SparkSQLParser.js";
import { Parse_urlContext } from "./SparkSQLParser.js";
import { ShowTableStatementBodyContext } from "./SparkSQLParser.js";
import { ShowFunctionStatementBodyContext } from "./SparkSQLParser.js";
import { TransformClauseContext } from "./SparkSQLParser.js";
import { InsertSparkDirectoryStatementContext } from "./SparkSQLParser.js";
import { InsertSparkDirectoryBodyContext } from "./SparkSQLParser.js";
import { InsertHiveDirectoryStatementContext } from "./SparkSQLParser.js";
import { HiveRowFormatPartContext } from "./SparkSQLParser.js";
import { InsertMulStatementCompatibilityContext } from "./SparkSQLParser.js";
import { InsertMulStatementContext } from "./SparkSQLParser.js";
import { InsertFromTableContext } from "./SparkSQLParser.js";
import { CreateExternalTableContext } from "./SparkSQLParser.js";
import { CreateExternalTableNoSortElementContext } from "./SparkSQLParser.js";
import { HiveFormatCreateContext } from "./SparkSQLParser.js";
import { HiveFormatCreateNoSortElementContext } from "./SparkSQLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SparkSQLParser`.
 */
export class SparkSQLListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SparkSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.sqlStatements`.
     * @param ctx the parse tree
     */
    enterSqlStatements?: (ctx: SqlStatementsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.sqlStatements`.
     * @param ctx the parse tree
     */
    exitSqlStatements?: (ctx: SqlStatementsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.emptyStatement`.
     * @param ctx the parse tree
     */
    enterEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.emptyStatement`.
     * @param ctx the parse tree
     */
    exitEmptyStatement?: (ctx: EmptyStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createStatement`.
     * @param ctx the parse tree
     */
    enterCreateStatement?: (ctx: CreateStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createStatement`.
     * @param ctx the parse tree
     */
    exitCreateStatement?: (ctx: CreateStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dmlStatement`.
     * @param ctx the parse tree
     */
    enterDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dmlStatement`.
     * @param ctx the parse tree
     */
    exitDmlStatement?: (ctx: DmlStatementContext) => void;
    /**
     * Enter a parse tree produced by the `simple`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    enterSimple?: (ctx: SimpleContext) => void;
    /**
     * Exit a parse tree produced by the `simple`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    exitSimple?: (ctx: SimpleContext) => void;
    /**
     * Enter a parse tree produced by the `asSelect`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    enterAsSelect?: (ctx: AsSelectContext) => void;
    /**
     * Exit a parse tree produced by the `asSelect`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    exitAsSelect?: (ctx: AsSelectContext) => void;
    /**
     * Enter a parse tree produced by the `materialized`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    enterMaterialized?: (ctx: MaterializedContext) => void;
    /**
     * Exit a parse tree produced by the `materialized`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    exitMaterialized?: (ctx: MaterializedContext) => void;
    /**
     * Enter a parse tree produced by the `customSerde`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    enterCustomSerde?: (ctx: CustomSerdeContext) => void;
    /**
     * Exit a parse tree produced by the `customSerde`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    exitCustomSerde?: (ctx: CustomSerdeContext) => void;
    /**
     * Enter a parse tree produced by the `customSerdeExternal`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    enterCustomSerdeExternal?: (ctx: CustomSerdeExternalContext) => void;
    /**
     * Exit a parse tree produced by the `customSerdeExternal`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    exitCustomSerdeExternal?: (ctx: CustomSerdeExternalContext) => void;
    /**
     * Enter a parse tree produced by the `using_create`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    enterUsing_create?: (ctx: Using_createContext) => void;
    /**
     * Exit a parse tree produced by the `using_create`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     */
    exitUsing_create?: (ctx: Using_createContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.simpleCreateTable`.
     * @param ctx the parse tree
     */
    enterSimpleCreateTable?: (ctx: SimpleCreateTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.simpleCreateTable`.
     * @param ctx the parse tree
     */
    exitSimpleCreateTable?: (ctx: SimpleCreateTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.simpleCreateTableNoSortElement`.
     * @param ctx the parse tree
     */
    enterSimpleCreateTableNoSortElement?: (ctx: SimpleCreateTableNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.simpleCreateTableNoSortElement`.
     * @param ctx the parse tree
     */
    exitSimpleCreateTableNoSortElement?: (ctx: SimpleCreateTableNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.location`.
     * @param ctx the parse tree
     */
    enterLocation?: (ctx: LocationContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.location`.
     * @param ctx the parse tree
     */
    exitLocation?: (ctx: LocationContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.sortedBy`.
     * @param ctx the parse tree
     */
    enterSortedBy?: (ctx: SortedByContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.sortedBy`.
     * @param ctx the parse tree
     */
    exitSortedBy?: (ctx: SortedByContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.usingCreate`.
     * @param ctx the parse tree
     */
    enterUsingCreate?: (ctx: UsingCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.usingCreate`.
     * @param ctx the parse tree
     */
    exitUsingCreate?: (ctx: UsingCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tblProperties`.
     * @param ctx the parse tree
     */
    enterTblProperties?: (ctx: TblPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tblProperties`.
     * @param ctx the parse tree
     */
    exitTblProperties?: (ctx: TblPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.defaultColumnUsing`.
     * @param ctx the parse tree
     */
    enterDefaultColumnUsing?: (ctx: DefaultColumnUsingContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.defaultColumnUsing`.
     * @param ctx the parse tree
     */
    exitDefaultColumnUsing?: (ctx: DefaultColumnUsingContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.defaultColumnUsingNoSortElement`.
     * @param ctx the parse tree
     */
    enterDefaultColumnUsingNoSortElement?: (ctx: DefaultColumnUsingNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.defaultColumnUsingNoSortElement`.
     * @param ctx the parse tree
     */
    exitDefaultColumnUsingNoSortElement?: (ctx: DefaultColumnUsingNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnUsing`.
     * @param ctx the parse tree
     */
    enterColumnUsing?: (ctx: ColumnUsingContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnUsing`.
     * @param ctx the parse tree
     */
    exitColumnUsing?: (ctx: ColumnUsingContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnUsingNoSortElement`.
     * @param ctx the parse tree
     */
    enterColumnUsingNoSortElement?: (ctx: ColumnUsingNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnUsingNoSortElement`.
     * @param ctx the parse tree
     */
    exitColumnUsingNoSortElement?: (ctx: ColumnUsingNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.usingByQuery`.
     * @param ctx the parse tree
     */
    enterUsingByQuery?: (ctx: UsingByQueryContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.usingByQuery`.
     * @param ctx the parse tree
     */
    exitUsingByQuery?: (ctx: UsingByQueryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.usingByQueryNoSortElement`.
     * @param ctx the parse tree
     */
    enterUsingByQueryNoSortElement?: (ctx: UsingByQueryNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.usingByQueryNoSortElement`.
     * @param ctx the parse tree
     */
    exitUsingByQueryNoSortElement?: (ctx: UsingByQueryNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.intoBuckets`.
     * @param ctx the parse tree
     */
    enterIntoBuckets?: (ctx: IntoBucketsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.intoBuckets`.
     * @param ctx the parse tree
     */
    exitIntoBuckets?: (ctx: IntoBucketsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveFormatpartitionDefinition`.
     * @param ctx the parse tree
     */
    enterHiveFormatpartitionDefinition?: (ctx: HiveFormatpartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveFormatpartitionDefinition`.
     * @param ctx the parse tree
     */
    exitHiveFormatpartitionDefinition?: (ctx: HiveFormatpartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.rowFormatSerde`.
     * @param ctx the parse tree
     */
    enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.rowFormatSerde`.
     * @param ctx the parse tree
     */
    exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.fieldsTerminatedBy`.
     * @param ctx the parse tree
     */
    enterFieldsTerminatedBy?: (ctx: FieldsTerminatedByContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.fieldsTerminatedBy`.
     * @param ctx the parse tree
     */
    exitFieldsTerminatedBy?: (ctx: FieldsTerminatedByContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.storedAs`.
     * @param ctx the parse tree
     */
    enterStoredAs?: (ctx: StoredAsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.storedAs`.
     * @param ctx the parse tree
     */
    exitStoredAs?: (ctx: StoredAsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.storedAsInputformat`.
     * @param ctx the parse tree
     */
    enterStoredAsInputformat?: (ctx: StoredAsInputformatContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.storedAsInputformat`.
     * @param ctx the parse tree
     */
    exitStoredAsInputformat?: (ctx: StoredAsInputformatContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.outputformat`.
     * @param ctx the parse tree
     */
    enterOutputformat?: (ctx: OutputformatContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.outputformat`.
     * @param ctx the parse tree
     */
    exitOutputformat?: (ctx: OutputformatContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.rowFormatDelimted`.
     * @param ctx the parse tree
     */
    enterRowFormatDelimted?: (ctx: RowFormatDelimtedContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.rowFormatDelimted`.
     * @param ctx the parse tree
     */
    exitRowFormatDelimted?: (ctx: RowFormatDelimtedContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnsBody`.
     * @param ctx the parse tree
     */
    enterColumnsBody?: (ctx: ColumnsBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnsBody`.
     * @param ctx the parse tree
     */
    exitColumnsBody?: (ctx: ColumnsBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createCustomSerde`.
     * @param ctx the parse tree
     */
    enterCreateCustomSerde?: (ctx: CreateCustomSerdeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createCustomSerde`.
     * @param ctx the parse tree
     */
    exitCreateCustomSerde?: (ctx: CreateCustomSerdeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createCustomSerdeNoSortElement`.
     * @param ctx the parse tree
     */
    enterCreateCustomSerdeNoSortElement?: (ctx: CreateCustomSerdeNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createCustomSerdeNoSortElement`.
     * @param ctx the parse tree
     */
    exitCreateCustomSerdeNoSortElement?: (ctx: CreateCustomSerdeNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createCustomSerdeExternal`.
     * @param ctx the parse tree
     */
    enterCreateCustomSerdeExternal?: (ctx: CreateCustomSerdeExternalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createCustomSerdeExternal`.
     * @param ctx the parse tree
     */
    exitCreateCustomSerdeExternal?: (ctx: CreateCustomSerdeExternalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createCustomSerdeExternalNoSortElement`.
     * @param ctx the parse tree
     */
    enterCreateCustomSerdeExternalNoSortElement?: (ctx: CreateCustomSerdeExternalNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createCustomSerdeExternalNoSortElement`.
     * @param ctx the parse tree
     */
    exitCreateCustomSerdeExternalNoSortElement?: (ctx: CreateCustomSerdeExternalNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createTableAsSelect`.
     * @param ctx the parse tree
     */
    enterCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createTableAsSelect`.
     * @param ctx the parse tree
     */
    exitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createMaterializedTableAsSelect`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedTableAsSelect?: (ctx: CreateMaterializedTableAsSelectContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createMaterializedTableAsSelect`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedTableAsSelect?: (ctx: CreateMaterializedTableAsSelectContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createMaterializedTableAsSelectNoSortElement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedTableAsSelectNoSortElement?: (ctx: CreateMaterializedTableAsSelectNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createMaterializedTableAsSelectNoSortElement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedTableAsSelectNoSortElement?: (ctx: CreateMaterializedTableAsSelectNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.usingClause`.
     * @param ctx the parse tree
     */
    enterUsingClause?: (ctx: UsingClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.usingClause`.
     * @param ctx the parse tree
     */
    exitUsingClause?: (ctx: UsingClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.jarFileName`.
     * @param ctx the parse tree
     */
    enterJarFileName?: (ctx: JarFileNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.jarFileName`.
     * @param ctx the parse tree
     */
    exitJarFileName?: (ctx: JarFileNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.filePath`.
     * @param ctx the parse tree
     */
    enterFilePath?: (ctx: FilePathContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.filePath`.
     * @param ctx the parse tree
     */
    exitFilePath?: (ctx: FilePathContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.ifExistsPart`.
     * @param ctx the parse tree
     */
    enterIfExistsPart?: (ctx: IfExistsPartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.ifExistsPart`.
     * @param ctx the parse tree
     */
    exitIfExistsPart?: (ctx: IfExistsPartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnPosition`.
     * @param ctx the parse tree
     */
    enterColumnPosition?: (ctx: ColumnPositionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnPosition`.
     * @param ctx the parse tree
     */
    exitColumnPosition?: (ctx: ColumnPositionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.renameDefinition`.
     * @param ctx the parse tree
     */
    enterRenameDefinition?: (ctx: RenameDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.renameDefinition`.
     * @param ctx the parse tree
     */
    exitRenameDefinition?: (ctx: RenameDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.setKeyValueDefinition`.
     * @param ctx the parse tree
     */
    enterSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.setKeyValueDefinition`.
     * @param ctx the parse tree
     */
    exitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.addConstraint`.
     * @param ctx the parse tree
     */
    enterAddConstraint?: (ctx: AddConstraintContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.addConstraint`.
     * @param ctx the parse tree
     */
    exitAddConstraint?: (ctx: AddConstraintContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dropConstraint`.
     * @param ctx the parse tree
     */
    enterDropConstraint?: (ctx: DropConstraintContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dropConstraint`.
     * @param ctx the parse tree
     */
    exitDropConstraint?: (ctx: DropConstraintContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.addUnique`.
     * @param ctx the parse tree
     */
    enterAddUnique?: (ctx: AddUniqueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.addUnique`.
     * @param ctx the parse tree
     */
    exitAddUnique?: (ctx: AddUniqueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.notForced`.
     * @param ctx the parse tree
     */
    enterNotForced?: (ctx: NotForcedContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.notForced`.
     * @param ctx the parse tree
     */
    exitNotForced?: (ctx: NotForcedContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertStatement`.
     * @param ctx the parse tree
     */
    enterInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertStatement`.
     * @param ctx the parse tree
     */
    exitInsertStatement?: (ctx: InsertStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertSimpleStatement`.
     * @param ctx the parse tree
     */
    enterInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertSimpleStatement`.
     * @param ctx the parse tree
     */
    exitInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertPartitionDefinition`.
     * @param ctx the parse tree
     */
    enterInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertPartitionDefinition`.
     * @param ctx the parse tree
     */
    exitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.queryStatement`.
     * @param ctx the parse tree
     */
    enterQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.queryStatement`.
     * @param ctx the parse tree
     */
    exitQueryStatement?: (ctx: QueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.valuesCaluse`.
     * @param ctx the parse tree
     */
    enterValuesCaluse?: (ctx: ValuesCaluseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.valuesCaluse`.
     * @param ctx the parse tree
     */
    exitValuesCaluse?: (ctx: ValuesCaluseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.inlineBody`.
     * @param ctx the parse tree
     */
    enterInlineBody?: (ctx: InlineBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.inlineBody`.
     * @param ctx the parse tree
     */
    exitInlineBody?: (ctx: InlineBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.withItem`.
     * @param ctx the parse tree
     */
    enterWithItem?: (ctx: WithItemContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.withItem`.
     * @param ctx the parse tree
     */
    exitWithItem?: (ctx: WithItemContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.withItemName`.
     * @param ctx the parse tree
     */
    enterWithItemName?: (ctx: WithItemNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.withItemName`.
     * @param ctx the parse tree
     */
    exitWithItemName?: (ctx: WithItemNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.filterPart`.
     * @param ctx the parse tree
     */
    enterFilterPart?: (ctx: FilterPartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.filterPart`.
     * @param ctx the parse tree
     */
    exitFilterPart?: (ctx: FilterPartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.overWindowItem`.
     * @param ctx the parse tree
     */
    enterOverWindowItem?: (ctx: OverWindowItemContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.overWindowItem`.
     * @param ctx the parse tree
     */
    exitOverWindowItem?: (ctx: OverWindowItemContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.overClause`.
     * @param ctx the parse tree
     */
    enterOverClause?: (ctx: OverClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.overClause`.
     * @param ctx the parse tree
     */
    exitOverClause?: (ctx: OverClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowFunctioPart`.
     * @param ctx the parse tree
     */
    enterWindowFunctioPart?: (ctx: WindowFunctioPartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowFunctioPart`.
     * @param ctx the parse tree
     */
    exitWindowFunctioPart?: (ctx: WindowFunctioPartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowFunctionName`.
     * @param ctx the parse tree
     */
    enterWindowFunctionName?: (ctx: WindowFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowFunctionName`.
     * @param ctx the parse tree
     */
    exitWindowFunctionName?: (ctx: WindowFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.analyticFunction`.
     * @param ctx the parse tree
     */
    enterAnalyticFunction?: (ctx: AnalyticFunctionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.analyticFunction`.
     * @param ctx the parse tree
     */
    exitAnalyticFunction?: (ctx: AnalyticFunctionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.rangkingFunction`.
     * @param ctx the parse tree
     */
    enterRangkingFunction?: (ctx: RangkingFunctionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.rangkingFunction`.
     * @param ctx the parse tree
     */
    exitRangkingFunction?: (ctx: RangkingFunctionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowFrameForWindowsQuery`.
     * @param ctx the parse tree
     */
    enterWindowFrameForWindowsQuery?: (ctx: WindowFrameForWindowsQueryContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowFrameForWindowsQuery`.
     * @param ctx the parse tree
     */
    exitWindowFrameForWindowsQuery?: (ctx: WindowFrameForWindowsQueryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.frameExpession`.
     * @param ctx the parse tree
     */
    enterFrameExpession?: (ctx: FrameExpessionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.frameExpession`.
     * @param ctx the parse tree
     */
    exitFrameExpession?: (ctx: FrameExpessionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tableExpression`.
     * @param ctx the parse tree
     */
    enterTableExpression?: (ctx: TableExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tableExpression`.
     * @param ctx the parse tree
     */
    exitTableExpression?: (ctx: TableExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tvfClause`.
     * @param ctx the parse tree
     */
    enterTvfClause?: (ctx: TvfClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tvfClause`.
     * @param ctx the parse tree
     */
    exitTvfClause?: (ctx: TvfClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.rangeClause`.
     * @param ctx the parse tree
     */
    enterRangeClause?: (ctx: RangeClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.rangeClause`.
     * @param ctx the parse tree
     */
    exitRangeClause?: (ctx: RangeClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.viewReference`.
     * @param ctx the parse tree
     */
    enterViewReference?: (ctx: ViewReferenceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.viewReference`.
     * @param ctx the parse tree
     */
    exitViewReference?: (ctx: ViewReferenceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.pivotReference`.
     * @param ctx the parse tree
     */
    enterPivotReference?: (ctx: PivotReferenceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.pivotReference`.
     * @param ctx the parse tree
     */
    exitPivotReference?: (ctx: PivotReferenceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tableReference`.
     * @param ctx the parse tree
     */
    enterTableReference?: (ctx: TableReferenceContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tableReference`.
     * @param ctx the parse tree
     */
    exitTableReference?: (ctx: TableReferenceContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tablePrimary`.
     * @param ctx the parse tree
     */
    enterTablePrimary?: (ctx: TablePrimaryContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tablePrimary`.
     * @param ctx the parse tree
     */
    exitTablePrimary?: (ctx: TablePrimaryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.funtionBody`.
     * @param ctx the parse tree
     */
    enterFuntionBody?: (ctx: FuntionBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.funtionBody`.
     * @param ctx the parse tree
     */
    exitFuntionBody?: (ctx: FuntionBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.unpivotBody`.
     * @param ctx the parse tree
     */
    enterUnpivotBody?: (ctx: UnpivotBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.unpivotBody`.
     * @param ctx the parse tree
     */
    exitUnpivotBody?: (ctx: UnpivotBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.pivotBody`.
     * @param ctx the parse tree
     */
    enterPivotBody?: (ctx: PivotBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.pivotBody`.
     * @param ctx the parse tree
     */
    exitPivotBody?: (ctx: PivotBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.expressionAsAlias`.
     * @param ctx the parse tree
     */
    enterExpressionAsAlias?: (ctx: ExpressionAsAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.expressionAsAlias`.
     * @param ctx the parse tree
     */
    exitExpressionAsAlias?: (ctx: ExpressionAsAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.expressionAsAliasList`.
     * @param ctx the parse tree
     */
    enterExpressionAsAliasList?: (ctx: ExpressionAsAliasListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.expressionAsAliasList`.
     * @param ctx the parse tree
     */
    exitExpressionAsAliasList?: (ctx: ExpressionAsAliasListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.systemTimePeriod`.
     * @param ctx the parse tree
     */
    enterSystemTimePeriod?: (ctx: SystemTimePeriodContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.systemTimePeriod`.
     * @param ctx the parse tree
     */
    exitSystemTimePeriod?: (ctx: SystemTimePeriodContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dateTimeExpression`.
     * @param ctx the parse tree
     */
    enterDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dateTimeExpression`.
     * @param ctx the parse tree
     */
    exitDateTimeExpression?: (ctx: DateTimeExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.inlineDataValueClause`.
     * @param ctx the parse tree
     */
    enterInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.inlineDataValueClause`.
     * @param ctx the parse tree
     */
    exitInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowTVFClause`.
     * @param ctx the parse tree
     */
    enterWindowTVFClause?: (ctx: WindowTVFClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowTVFClause`.
     * @param ctx the parse tree
     */
    exitWindowTVFClause?: (ctx: WindowTVFClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowTVFExpression`.
     * @param ctx the parse tree
     */
    enterWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowTVFExpression`.
     * @param ctx the parse tree
     */
    exitWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowTVFName`.
     * @param ctx the parse tree
     */
    enterWindowTVFName?: (ctx: WindowTVFNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowTVFName`.
     * @param ctx the parse tree
     */
    exitWindowTVFName?: (ctx: WindowTVFNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.rowFormatDelimited`.
     * @param ctx the parse tree
     */
    enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.rowFormatDelimited`.
     * @param ctx the parse tree
     */
    exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveSerde`.
     * @param ctx the parse tree
     */
    enterHiveSerde?: (ctx: HiveSerdeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveSerde`.
     * @param ctx the parse tree
     */
    exitHiveSerde?: (ctx: HiveSerdeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.usingAsColumnPart`.
     * @param ctx the parse tree
     */
    enterUsingAsColumnPart?: (ctx: UsingAsColumnPartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.usingAsColumnPart`.
     * @param ctx the parse tree
     */
    exitUsingAsColumnPart?: (ctx: UsingAsColumnPartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveSerdePart`.
     * @param ctx the parse tree
     */
    enterHiveSerdePart?: (ctx: HiveSerdePartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveSerdePart`.
     * @param ctx the parse tree
     */
    exitHiveSerdePart?: (ctx: HiveSerdePartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tableCanHasKeyPropertyList`.
     * @param ctx the parse tree
     */
    enterTableCanHasKeyPropertyList?: (ctx: TableCanHasKeyPropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tableCanHasKeyPropertyList`.
     * @param ctx the parse tree
     */
    exitTableCanHasKeyPropertyList?: (ctx: TableCanHasKeyPropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.sparkRecordWriterPart`.
     * @param ctx the parse tree
     */
    enterSparkRecordWriterPart?: (ctx: SparkRecordWriterPartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.sparkRecordWriterPart`.
     * @param ctx the parse tree
     */
    exitSparkRecordWriterPart?: (ctx: SparkRecordWriterPartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowTVFParam`.
     * @param ctx the parse tree
     */
    enterWindowTVFParam?: (ctx: WindowTVFParamContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowTVFParam`.
     * @param ctx the parse tree
     */
    exitWindowTVFParam?: (ctx: WindowTVFParamContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.timeIntervalParamName`.
     * @param ctx the parse tree
     */
    enterTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.timeIntervalParamName`.
     * @param ctx the parse tree
     */
    exitTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnDescriptor`.
     * @param ctx the parse tree
     */
    enterColumnDescriptor?: (ctx: ColumnDescriptorContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnDescriptor`.
     * @param ctx the parse tree
     */
    exitColumnDescriptor?: (ctx: ColumnDescriptorContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.joinCondition`.
     * @param ctx the parse tree
     */
    enterJoinCondition?: (ctx: JoinConditionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.joinCondition`.
     * @param ctx the parse tree
     */
    exitJoinCondition?: (ctx: JoinConditionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.samplingQueries`.
     * @param ctx the parse tree
     */
    enterSamplingQueries?: (ctx: SamplingQueriesContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.samplingQueries`.
     * @param ctx the parse tree
     */
    exitSamplingQueries?: (ctx: SamplingQueriesContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.someByClause`.
     * @param ctx the parse tree
     */
    enterSomeByClause?: (ctx: SomeByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.someByClause`.
     * @param ctx the parse tree
     */
    exitSomeByClause?: (ctx: SomeByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.clusterByClause`.
     * @param ctx the parse tree
     */
    enterClusterByClause?: (ctx: ClusterByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.clusterByClause`.
     * @param ctx the parse tree
     */
    exitClusterByClause?: (ctx: ClusterByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.clusteredByClause`.
     * @param ctx the parse tree
     */
    enterClusteredByClause?: (ctx: ClusteredByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.clusteredByClause`.
     * @param ctx the parse tree
     */
    exitClusteredByClause?: (ctx: ClusteredByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.distributeByClause`.
     * @param ctx the parse tree
     */
    enterDistributeByClause?: (ctx: DistributeByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.distributeByClause`.
     * @param ctx the parse tree
     */
    exitDistributeByClause?: (ctx: DistributeByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupItemDefinition`.
     * @param ctx the parse tree
     */
    enterGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupItemDefinition`.
     * @param ctx the parse tree
     */
    exitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupingSet`.
     * @param ctx the parse tree
     */
    enterGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupingSet`.
     * @param ctx the parse tree
     */
    exitGroupingSet?: (ctx: GroupingSetContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupingSets`.
     * @param ctx the parse tree
     */
    enterGroupingSets?: (ctx: GroupingSetsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupingSets`.
     * @param ctx the parse tree
     */
    exitGroupingSets?: (ctx: GroupingSetsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupingSetsNotionName`.
     * @param ctx the parse tree
     */
    enterGroupingSetsNotionName?: (ctx: GroupingSetsNotionNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupingSetsNotionName`.
     * @param ctx the parse tree
     */
    exitGroupingSetsNotionName?: (ctx: GroupingSetsNotionNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupWindowFunction`.
     * @param ctx the parse tree
     */
    enterGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupWindowFunction`.
     * @param ctx the parse tree
     */
    exitGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.groupWindowFunctionName`.
     * @param ctx the parse tree
     */
    enterGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.groupWindowFunctionName`.
     * @param ctx the parse tree
     */
    exitGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.timeAttrColumn`.
     * @param ctx the parse tree
     */
    enterTimeAttrColumn?: (ctx: TimeAttrColumnContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.timeAttrColumn`.
     * @param ctx the parse tree
     */
    exitTimeAttrColumn?: (ctx: TimeAttrColumnContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowClause`.
     * @param ctx the parse tree
     */
    enterWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowClause`.
     * @param ctx the parse tree
     */
    exitWindowClause?: (ctx: WindowClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.namedWindow`.
     * @param ctx the parse tree
     */
    enterNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.namedWindow`.
     * @param ctx the parse tree
     */
    exitNamedWindow?: (ctx: NamedWindowContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowSpec`.
     * @param ctx the parse tree
     */
    enterWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowSpec`.
     * @param ctx the parse tree
     */
    exitWindowSpec?: (ctx: WindowSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.matchRecognizeClause`.
     * @param ctx the parse tree
     */
    enterMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.matchRecognizeClause`.
     * @param ctx the parse tree
     */
    exitMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.orderByCaluse`.
     * @param ctx the parse tree
     */
    enterOrderByCaluse?: (ctx: OrderByCaluseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.orderByCaluse`.
     * @param ctx the parse tree
     */
    exitOrderByCaluse?: (ctx: OrderByCaluseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.sortByCaluse`.
     * @param ctx the parse tree
     */
    enterSortByCaluse?: (ctx: SortByCaluseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.sortByCaluse`.
     * @param ctx the parse tree
     */
    exitSortByCaluse?: (ctx: SortByCaluseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.orderItemDefinition`.
     * @param ctx the parse tree
     */
    enterOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.orderItemDefinition`.
     * @param ctx the parse tree
     */
    exitOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.offsetClause`.
     * @param ctx the parse tree
     */
    enterOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.offsetClause`.
     * @param ctx the parse tree
     */
    exitOffsetClause?: (ctx: OffsetClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.partitionByClause`.
     * @param ctx the parse tree
     */
    enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.partitionByClause`.
     * @param ctx the parse tree
     */
    exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.quantifiers`.
     * @param ctx the parse tree
     */
    enterQuantifiers?: (ctx: QuantifiersContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.quantifiers`.
     * @param ctx the parse tree
     */
    exitQuantifiers?: (ctx: QuantifiersContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.measuresClause`.
     * @param ctx the parse tree
     */
    enterMeasuresClause?: (ctx: MeasuresClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.measuresClause`.
     * @param ctx the parse tree
     */
    exitMeasuresClause?: (ctx: MeasuresClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.patternDefinition`.
     * @param ctx the parse tree
     */
    enterPatternDefinition?: (ctx: PatternDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.patternDefinition`.
     * @param ctx the parse tree
     */
    exitPatternDefinition?: (ctx: PatternDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.patternVariable`.
     * @param ctx the parse tree
     */
    enterPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.patternVariable`.
     * @param ctx the parse tree
     */
    exitPatternVariable?: (ctx: PatternVariableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.outputMode`.
     * @param ctx the parse tree
     */
    enterOutputMode?: (ctx: OutputModeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.outputMode`.
     * @param ctx the parse tree
     */
    exitOutputMode?: (ctx: OutputModeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.afterMatchStrategy`.
     * @param ctx the parse tree
     */
    enterAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.afterMatchStrategy`.
     * @param ctx the parse tree
     */
    exitAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.patternVariablesDefinition`.
     * @param ctx the parse tree
     */
    enterPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.patternVariablesDefinition`.
     * @param ctx the parse tree
     */
    exitPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.windowFrame`.
     * @param ctx the parse tree
     */
    enterWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.windowFrame`.
     * @param ctx the parse tree
     */
    exitWindowFrame?: (ctx: WindowFrameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    enterFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.frameBound`.
     * @param ctx the parse tree
     */
    exitFrameBound?: (ctx: FrameBoundContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.withinClause`.
     * @param ctx the parse tree
     */
    enterWithinClause?: (ctx: WithinClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.withinClause`.
     * @param ctx the parse tree
     */
    exitWithinClause?: (ctx: WithinClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.selfDefinitionClause`.
     * @param ctx the parse tree
     */
    enterSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.selfDefinitionClause`.
     * @param ctx the parse tree
     */
    exitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    enterPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.partitionDefinition`.
     * @param ctx the parse tree
     */
    exitPartitionDefinition?: (ctx: PartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.transformList`.
     * @param ctx the parse tree
     */
    enterTransformList?: (ctx: TransformListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.transformList`.
     * @param ctx the parse tree
     */
    exitTransformList?: (ctx: TransformListContext) => void;
    /**
     * Enter a parse tree produced by the `identityTransform`
     * labeled alternative in `SparkSQLParser.transform`.
     * @param ctx the parse tree
     */
    enterIdentityTransform?: (ctx: IdentityTransformContext) => void;
    /**
     * Exit a parse tree produced by the `identityTransform`
     * labeled alternative in `SparkSQLParser.transform`.
     * @param ctx the parse tree
     */
    exitIdentityTransform?: (ctx: IdentityTransformContext) => void;
    /**
     * Enter a parse tree produced by the `applyTransform`
     * labeled alternative in `SparkSQLParser.transform`.
     * @param ctx the parse tree
     */
    enterApplyTransform?: (ctx: ApplyTransformContext) => void;
    /**
     * Exit a parse tree produced by the `applyTransform`
     * labeled alternative in `SparkSQLParser.transform`.
     * @param ctx the parse tree
     */
    exitApplyTransform?: (ctx: ApplyTransformContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.transformArgument`.
     * @param ctx the parse tree
     */
    enterTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.transformArgument`.
     * @param ctx the parse tree
     */
    exitTransformArgument?: (ctx: TransformArgumentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.likeDefinition`.
     * @param ctx the parse tree
     */
    enterLikeDefinition?: (ctx: LikeDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.likeDefinition`.
     * @param ctx the parse tree
     */
    exitLikeDefinition?: (ctx: LikeDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.distribution`.
     * @param ctx the parse tree
     */
    enterDistribution?: (ctx: DistributionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.distribution`.
     * @param ctx the parse tree
     */
    exitDistribution?: (ctx: DistributionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.using`.
     * @param ctx the parse tree
     */
    enterUsing?: (ctx: UsingContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.using`.
     * @param ctx the parse tree
     */
    exitUsing?: (ctx: UsingContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.likeOption`.
     * @param ctx the parse tree
     */
    enterLikeOption?: (ctx: LikeOptionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.likeOption`.
     * @param ctx the parse tree
     */
    exitLikeOption?: (ctx: LikeOptionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnOptionDefinition`.
     * @param ctx the parse tree
     */
    enterColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnOptionDefinition`.
     * @param ctx the parse tree
     */
    exitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.physicalColumnDefinitionList`.
     * @param ctx the parse tree
     */
    enterPhysicalColumnDefinitionList?: (ctx: PhysicalColumnDefinitionListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.physicalColumnDefinitionList`.
     * @param ctx the parse tree
     */
    exitPhysicalColumnDefinitionList?: (ctx: PhysicalColumnDefinitionListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.physicalColumnDefinition`.
     * @param ctx the parse tree
     */
    enterPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.physicalColumnDefinition`.
     * @param ctx the parse tree
     */
    exitPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.computedColumnExpression`.
     * @param ctx the parse tree
     */
    enterComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.computedColumnExpression`.
     * @param ctx the parse tree
     */
    exitComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.watermarkDefinition`.
     * @param ctx the parse tree
     */
    enterWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.watermarkDefinition`.
     * @param ctx the parse tree
     */
    exitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.constraintName`.
     * @param ctx the parse tree
     */
    enterConstraintName?: (ctx: ConstraintNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.constraintName`.
     * @param ctx the parse tree
     */
    exitConstraintName?: (ctx: ConstraintNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.valuesDefinition`.
     * @param ctx the parse tree
     */
    enterValuesDefinition?: (ctx: ValuesDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.valuesDefinition`.
     * @param ctx the parse tree
     */
    exitValuesDefinition?: (ctx: ValuesDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.valuesRowDefinition`.
     * @param ctx the parse tree
     */
    enterValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.valuesRowDefinition`.
     * @param ctx the parse tree
     */
    exitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    enterLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.lengthOneDimension`.
     * @param ctx the parse tree
     */
    exitLengthOneDimension?: (ctx: LengthOneDimensionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.lengthTwoStringDimension`.
     * @param ctx the parse tree
     */
    enterLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.lengthTwoStringDimension`.
     * @param ctx the parse tree
     */
    exitLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => void;
    /**
     * Enter a parse tree produced by the `lengthSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.lengthOneTypeDimension`.
     * @param ctx the parse tree
     */
    enterLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by the `lengthSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.lengthOneTypeDimension`.
     * @param ctx the parse tree
     */
    exitLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.mapTypeDimension`.
     * @param ctx the parse tree
     */
    enterMapTypeDimension?: (ctx: MapTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.mapTypeDimension`.
     * @param ctx the parse tree
     */
    exitMapTypeDimension?: (ctx: MapTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by the `rowSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.rowTypeDimension`.
     * @param ctx the parse tree
     */
    enterRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by the `rowSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.rowTypeDimension`.
     * @param ctx the parse tree
     */
    exitRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by the `structSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.structTypeDimension`.
     * @param ctx the parse tree
     */
    enterStructSymbolsTypeDimension?: (ctx: StructSymbolsTypeDimensionContext) => void;
    /**
     * Exit a parse tree produced by the `structSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.structTypeDimension`.
     * @param ctx the parse tree
     */
    exitStructSymbolsTypeDimension?: (ctx: StructSymbolsTypeDimensionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.commentSpec`.
     * @param ctx the parse tree
     */
    enterCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.commentSpec`.
     * @param ctx the parse tree
     */
    exitCommentSpec?: (ctx: CommentSpecContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.metadataColumnDefinition`.
     * @param ctx the parse tree
     */
    enterMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.metadataColumnDefinition`.
     * @param ctx the parse tree
     */
    exitMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.metadataKey`.
     * @param ctx the parse tree
     */
    enterMetadataKey?: (ctx: MetadataKeyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.metadataKey`.
     * @param ctx the parse tree
     */
    exitMetadataKey?: (ctx: MetadataKeyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.computedColumnDefinition`.
     * @param ctx the parse tree
     */
    enterComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.computedColumnDefinition`.
     * @param ctx the parse tree
     */
    exitComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnNameList`.
     * @param ctx the parse tree
     */
    enterColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnNameList`.
     * @param ctx the parse tree
     */
    exitColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnType`.
     * @param ctx the parse tree
     */
    enterColumnType?: (ctx: ColumnTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnType`.
     * @param ctx the parse tree
     */
    exitColumnType?: (ctx: ColumnTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Enter a parse tree produced by the `predicated`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Exit a parse tree produced by the `predicated`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitPredicated?: (ctx: PredicatedContext) => void;
    /**
     * Enter a parse tree produced by the `exists`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterExists?: (ctx: ExistsContext) => void;
    /**
     * Exit a parse tree produced by the `exists`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitExists?: (ctx: ExistsContext) => void;
    /**
     * Enter a parse tree produced by the `logicalNested`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalNested?: (ctx: LogicalNestedContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNested`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalNested?: (ctx: LogicalNestedContext) => void;
    /**
     * Enter a parse tree produced by the `logicalBinary`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    enterLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `logicalBinary`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     */
    exitLogicalBinary?: (ctx: LogicalBinaryContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.predicate`.
     * @param ctx the parse tree
     */
    enterPredicate?: (ctx: PredicateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.predicate`.
     * @param ctx the parse tree
     */
    exitPredicate?: (ctx: PredicateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.likePredicate`.
     * @param ctx the parse tree
     */
    enterLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.likePredicate`.
     * @param ctx the parse tree
     */
    exitLikePredicate?: (ctx: LikePredicateContext) => void;
    /**
     * Enter a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `or`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterOr?: (ctx: OrContext) => void;
    /**
     * Exit a parse tree produced by the `or`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitOr?: (ctx: OrContext) => void;
    /**
     * Enter a parse tree produced by the `comparison`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterComparison?: (ctx: ComparisonContext) => void;
    /**
     * Exit a parse tree produced by the `comparison`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitComparison?: (ctx: ComparisonContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
    /**
     * Enter a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    enterArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Exit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     */
    exitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => void;
    /**
     * Enter a parse tree produced by the `simpleCase`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Exit a parse tree produced by the `simpleCase`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSimpleCase?: (ctx: SimpleCaseContext) => void;
    /**
     * Enter a parse tree produced by the `columnReference`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `columnReference`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitColumnReference?: (ctx: ColumnReferenceContext) => void;
    /**
     * Enter a parse tree produced by the `last`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterLast?: (ctx: LastContext) => void;
    /**
     * Exit a parse tree produced by the `last`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitLast?: (ctx: LastContext) => void;
    /**
     * Enter a parse tree produced by the `star`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterStar?: (ctx: StarContext) => void;
    /**
     * Exit a parse tree produced by the `star`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitStar?: (ctx: StarContext) => void;
    /**
     * Enter a parse tree produced by the `aggregateFunctions`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `aggregateFunctions`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitAggregateFunctions?: (ctx: AggregateFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `subscript`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Exit a parse tree produced by the `subscript`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubscript?: (ctx: SubscriptContext) => void;
    /**
     * Enter a parse tree produced by the `values`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterValues?: (ctx: ValuesContext) => void;
    /**
     * Exit a parse tree produced by the `values`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitValues?: (ctx: ValuesContext) => void;
    /**
     * Enter a parse tree produced by the `functionCallFilter`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCallFilter?: (ctx: FunctionCallFilterContext) => void;
    /**
     * Exit a parse tree produced by the `functionCallFilter`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCallFilter?: (ctx: FunctionCallFilterContext) => void;
    /**
     * Enter a parse tree produced by the `orderSetAggregateFunctions`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterOrderSetAggregateFunctions?: (ctx: OrderSetAggregateFunctionsContext) => void;
    /**
     * Exit a parse tree produced by the `orderSetAggregateFunctions`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitOrderSetAggregateFunctions?: (ctx: OrderSetAggregateFunctionsContext) => void;
    /**
     * Enter a parse tree produced by the `subqueryExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSubqueryExpression?: (ctx: SubqueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `cast`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterCast?: (ctx: CastContext) => void;
    /**
     * Exit a parse tree produced by the `cast`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitCast?: (ctx: CastContext) => void;
    /**
     * Enter a parse tree produced by the `constantDefault`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Exit a parse tree produced by the `constantDefault`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitConstantDefault?: (ctx: ConstantDefaultContext) => void;
    /**
     * Enter a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `complexDataTypeFieldExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterComplexDataTypeFieldExpression?: (ctx: ComplexDataTypeFieldExpressionContext) => void;
    /**
     * Exit a parse tree produced by the `complexDataTypeFieldExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitComplexDataTypeFieldExpression?: (ctx: ComplexDataTypeFieldExpressionContext) => void;
    /**
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Enter a parse tree produced by the `uidForColumnName`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterUidForColumnName?: (ctx: UidForColumnNameContext) => void;
    /**
     * Exit a parse tree produced by the `uidForColumnName`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitUidForColumnName?: (ctx: UidForColumnNameContext) => void;
    /**
     * Enter a parse tree produced by the `searchedCase`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Exit a parse tree produced by the `searchedCase`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitSearchedCase?: (ctx: SearchedCaseContext) => void;
    /**
     * Enter a parse tree produced by the `position`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterPosition?: (ctx: PositionContext) => void;
    /**
     * Exit a parse tree produced by the `position`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitPosition?: (ctx: PositionContext) => void;
    /**
     * Enter a parse tree produced by the `first`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    enterFirst?: (ctx: FirstContext) => void;
    /**
     * Exit a parse tree produced by the `first`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     */
    exitFirst?: (ctx: FirstContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.complexDataTypeExpression`.
     * @param ctx the parse tree
     */
    enterComplexDataTypeExpression?: (ctx: ComplexDataTypeExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.complexDataTypeExpression`.
     * @param ctx the parse tree
     */
    exitComplexDataTypeExpression?: (ctx: ComplexDataTypeExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.arrayExpression`.
     * @param ctx the parse tree
     */
    enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.arrayExpression`.
     * @param ctx the parse tree
     */
    exitArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.structExpression`.
     * @param ctx the parse tree
     */
    enterStructExpression?: (ctx: StructExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.structExpression`.
     * @param ctx the parse tree
     */
    exitStructExpression?: (ctx: StructExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.rowExpression`.
     * @param ctx the parse tree
     */
    enterRowExpression?: (ctx: RowExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.rowExpression`.
     * @param ctx the parse tree
     */
    exitRowExpression?: (ctx: RowExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.mapExpression`.
     * @param ctx the parse tree
     */
    enterMapExpression?: (ctx: MapExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.mapExpression`.
     * @param ctx the parse tree
     */
    exitMapExpression?: (ctx: MapExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dataTypeExpression`.
     * @param ctx the parse tree
     */
    enterDataTypeExpression?: (ctx: DataTypeExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dataTypeExpression`.
     * @param ctx the parse tree
     */
    exitDataTypeExpression?: (ctx: DataTypeExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.sqlSimpleType`.
     * @param ctx the parse tree
     */
    enterSqlSimpleType?: (ctx: SqlSimpleTypeContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.sqlSimpleType`.
     * @param ctx the parse tree
     */
    exitSqlSimpleType?: (ctx: SqlSimpleTypeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.functionParam`.
     * @param ctx the parse tree
     */
    enterFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.functionParam`.
     * @param ctx the parse tree
     */
    exitFunctionParam?: (ctx: FunctionParamContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.filterClause`.
     * @param ctx the parse tree
     */
    enterFilterClause?: (ctx: FilterClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.filterClause`.
     * @param ctx the parse tree
     */
    exitFilterClause?: (ctx: FilterClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.correlationName`.
     * @param ctx the parse tree
     */
    enterCorrelationName?: (ctx: CorrelationNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.correlationName`.
     * @param ctx the parse tree
     */
    exitCorrelationName?: (ctx: CorrelationNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.qualifiedName`.
     * @param ctx the parse tree
     */
    enterQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.qualifiedName`.
     * @param ctx the parse tree
     */
    exitQualifiedName?: (ctx: QualifiedNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.timeIntervalExpression`.
     * @param ctx the parse tree
     */
    enterTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.timeIntervalExpression`.
     * @param ctx the parse tree
     */
    exitTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    enterMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.multiUnitsInterval`.
     * @param ctx the parse tree
     */
    exitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    enterUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.unitToUnitInterval`.
     * @param ctx the parse tree
     */
    exitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.columnAlias`.
     * @param ctx the parse tree
     */
    enterColumnAlias?: (ctx: ColumnAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.columnAlias`.
     * @param ctx the parse tree
     */
    exitColumnAlias?: (ctx: ColumnAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.anyAlias`.
     * @param ctx the parse tree
     */
    enterAnyAlias?: (ctx: AnyAliasContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.anyAlias`.
     * @param ctx the parse tree
     */
    exitAnyAlias?: (ctx: AnyAliasContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    enterErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     */
    exitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `errorIdent`
     * labeled alternative in `SparkSQLParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    enterErrorIdent?: (ctx: ErrorIdentContext) => void;
    /**
     * Exit a parse tree produced by the `errorIdent`
     * labeled alternative in `SparkSQLParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     */
    exitErrorIdent?: (ctx: ErrorIdentContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.identifierList`.
     * @param ctx the parse tree
     */
    enterIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.identifierList`.
     * @param ctx the parse tree
     */
    exitIdentifierList?: (ctx: IdentifierListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.identifierSeq`.
     * @param ctx the parse tree
     */
    enterIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.identifierSeq`.
     * @param ctx the parse tree
     */
    exitIdentifierSeq?: (ctx: IdentifierSeqContext) => void;
    /**
     * Enter a parse tree produced by the `unquotedIdentifierAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `unquotedIdentifierAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `nonReservedKeywordsAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `nonReservedKeywordsAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => void;
    /**
     * Enter a parse tree produced by the `urefVarAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    enterUrefVarAlternative?: (ctx: UrefVarAlternativeContext) => void;
    /**
     * Exit a parse tree produced by the `urefVarAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     */
    exitUrefVarAlternative?: (ctx: UrefVarAlternativeContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.unquotedAnyString`.
     * @param ctx the parse tree
     */
    enterUnquotedAnyString?: (ctx: UnquotedAnyStringContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.unquotedAnyString`.
     * @param ctx the parse tree
     */
    exitUnquotedAnyString?: (ctx: UnquotedAnyStringContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.refVar`.
     * @param ctx the parse tree
     */
    enterRefVar?: (ctx: RefVarContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.refVar`.
     * @param ctx the parse tree
     */
    exitRefVar?: (ctx: RefVarContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.unquotedIdentifier`.
     * @param ctx the parse tree
     */
    enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.unquotedIdentifier`.
     * @param ctx the parse tree
     */
    exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.whenClause`.
     * @param ctx the parse tree
     */
    enterWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.whenClause`.
     * @param ctx the parse tree
     */
    exitWhenClause?: (ctx: WhenClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.catalogPath`.
     * @param ctx the parse tree
     */
    enterCatalogPath?: (ctx: CatalogPathContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.catalogPath`.
     * @param ctx the parse tree
     */
    exitCatalogPath?: (ctx: CatalogPathContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.databasePath`.
     * @param ctx the parse tree
     */
    enterDatabasePath?: (ctx: DatabasePathContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.databasePath`.
     * @param ctx the parse tree
     */
    exitDatabasePath?: (ctx: DatabasePathContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.databasePathCreate`.
     * @param ctx the parse tree
     */
    enterDatabasePathCreate?: (ctx: DatabasePathCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.databasePathCreate`.
     * @param ctx the parse tree
     */
    exitDatabasePathCreate?: (ctx: DatabasePathCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tablePathCreate`.
     * @param ctx the parse tree
     */
    enterTablePathCreate?: (ctx: TablePathCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tablePathCreate`.
     * @param ctx the parse tree
     */
    exitTablePathCreate?: (ctx: TablePathCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tablePath`.
     * @param ctx the parse tree
     */
    enterTablePath?: (ctx: TablePathContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tablePath`.
     * @param ctx the parse tree
     */
    exitTablePath?: (ctx: TablePathContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.anonymousWindowsName`.
     * @param ctx the parse tree
     */
    enterAnonymousWindowsName?: (ctx: AnonymousWindowsNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.anonymousWindowsName`.
     * @param ctx the parse tree
     */
    exitAnonymousWindowsName?: (ctx: AnonymousWindowsNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.uid`.
     * @param ctx the parse tree
     */
    enterUid?: (ctx: UidContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.uid`.
     * @param ctx the parse tree
     */
    exitUid?: (ctx: UidContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.withOption`.
     * @param ctx the parse tree
     */
    enterWithOption?: (ctx: WithOptionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.withOption`.
     * @param ctx the parse tree
     */
    exitWithOption?: (ctx: WithOptionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tablePropertyList`.
     * @param ctx the parse tree
     */
    enterTablePropertyList?: (ctx: TablePropertyListContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tablePropertyList`.
     * @param ctx the parse tree
     */
    exitTablePropertyList?: (ctx: TablePropertyListContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tableProperty`.
     * @param ctx the parse tree
     */
    enterTableProperty?: (ctx: TablePropertyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tableProperty`.
     * @param ctx the parse tree
     */
    exitTableProperty?: (ctx: TablePropertyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tablePropertyKey`.
     * @param ctx the parse tree
     */
    enterTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tablePropertyKey`.
     * @param ctx the parse tree
     */
    exitTablePropertyKey?: (ctx: TablePropertyKeyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.propertyName`.
     * @param ctx the parse tree
     */
    enterPropertyName?: (ctx: PropertyNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.propertyName`.
     * @param ctx the parse tree
     */
    exitPropertyName?: (ctx: PropertyNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.tablePropertyValue`.
     * @param ctx the parse tree
     */
    enterTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.tablePropertyValue`.
     * @param ctx the parse tree
     */
    exitTablePropertyValue?: (ctx: TablePropertyValueContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.comparisonOperator`.
     * @param ctx the parse tree
     */
    exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.timePointLiteral`.
     * @param ctx the parse tree
     */
    enterTimePointLiteral?: (ctx: TimePointLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.timePointLiteral`.
     * @param ctx the parse tree
     */
    exitTimePointLiteral?: (ctx: TimePointLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.stringLiteral`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.stringLiteral`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.decimalLiteral`.
     * @param ctx the parse tree
     */
    exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.booleanLiteral`.
     * @param ctx the parse tree
     */
    exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    enterSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.setQuantifier`.
     * @param ctx the parse tree
     */
    exitSetQuantifier?: (ctx: SetQuantifierContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.timePointUnit`.
     * @param ctx the parse tree
     */
    enterTimePointUnit?: (ctx: TimePointUnitContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.timePointUnit`.
     * @param ctx the parse tree
     */
    exitTimePointUnit?: (ctx: TimePointUnitContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.timeIntervalUnit`.
     * @param ctx the parse tree
     */
    enterTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.timeIntervalUnit`.
     * @param ctx the parse tree
     */
    exitTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.reservedKeywordsUsedAsFuncParam`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.reservedKeywordsUsedAsFuncParam`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    enterReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     */
    exitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.nonReservedKeywords`.
     * @param ctx the parse tree
     */
    enterNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.nonReservedKeywords`.
     * @param ctx the parse tree
     */
    exitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.sqlStatement`.
     * @param ctx the parse tree
     */
    enterSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.sqlStatement`.
     * @param ctx the parse tree
     */
    exitSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Enter a parse tree produced by the `commonSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterCommonSelect?: (ctx: CommonSelectContext) => void;
    /**
     * Exit a parse tree produced by the `commonSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitCommonSelect?: (ctx: CommonSelectContext) => void;
    /**
     * Enter a parse tree produced by the `sparkStyleSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSparkStyleSelect?: (ctx: SparkStyleSelectContext) => void;
    /**
     * Exit a parse tree produced by the `sparkStyleSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSparkStyleSelect?: (ctx: SparkStyleSelectContext) => void;
    /**
     * Enter a parse tree produced by the `matchRecognizeSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterMatchRecognizeSelect?: (ctx: MatchRecognizeSelectContext) => void;
    /**
     * Exit a parse tree produced by the `matchRecognizeSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitMatchRecognizeSelect?: (ctx: MatchRecognizeSelectContext) => void;
    /**
     * Enter a parse tree produced by the `tableSample`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterTableSample?: (ctx: TableSampleContext) => void;
    /**
     * Exit a parse tree produced by the `tableSample`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitTableSample?: (ctx: TableSampleContext) => void;
    /**
     * Enter a parse tree produced by the `selectPlus`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectPlus?: (ctx: SelectPlusContext) => void;
    /**
     * Exit a parse tree produced by the `selectPlus`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectPlus?: (ctx: SelectPlusContext) => void;
    /**
     * Enter a parse tree produced by the `windowsProrjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    enterWindowsProrjectItem?: (ctx: WindowsProrjectItemContext) => void;
    /**
     * Exit a parse tree produced by the `windowsProrjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    exitWindowsProrjectItem?: (ctx: WindowsProrjectItemContext) => void;
    /**
     * Enter a parse tree produced by the `expressionProjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    enterExpressionProjectItem?: (ctx: ExpressionProjectItemContext) => void;
    /**
     * Exit a parse tree produced by the `expressionProjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    exitExpressionProjectItem?: (ctx: ExpressionProjectItemContext) => void;
    /**
     * Enter a parse tree produced by the `hiveStyleProjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    enterHiveStyleProjectItem?: (ctx: HiveStyleProjectItemContext) => void;
    /**
     * Exit a parse tree produced by the `hiveStyleProjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     */
    exitHiveStyleProjectItem?: (ctx: HiveStyleProjectItemContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveOverWindowItem`.
     * @param ctx the parse tree
     */
    enterHiveOverWindowItem?: (ctx: HiveOverWindowItemContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveOverWindowItem`.
     * @param ctx the parse tree
     */
    exitHiveOverWindowItem?: (ctx: HiveOverWindowItemContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.selectStatementPlus`.
     * @param ctx the parse tree
     */
    enterSelectStatementPlus?: (ctx: SelectStatementPlusContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.selectStatementPlus`.
     * @param ctx the parse tree
     */
    exitSelectStatementPlus?: (ctx: SelectStatementPlusContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.plusStatement`.
     * @param ctx the parse tree
     */
    enterPlusStatement?: (ctx: PlusStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.plusStatement`.
     * @param ctx the parse tree
     */
    exitPlusStatement?: (ctx: PlusStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.describeStatement`.
     * @param ctx the parse tree
     */
    enterDescribeStatement?: (ctx: DescribeStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.describeStatement`.
     * @param ctx the parse tree
     */
    exitDescribeStatement?: (ctx: DescribeStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.explainStatement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.explainStatement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.explainDetails`.
     * @param ctx the parse tree
     */
    enterExplainDetails?: (ctx: ExplainDetailsContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.explainDetails`.
     * @param ctx the parse tree
     */
    exitExplainDetails?: (ctx: ExplainDetailsContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.explainDetail`.
     * @param ctx the parse tree
     */
    enterExplainDetail?: (ctx: ExplainDetailContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.explainDetail`.
     * @param ctx the parse tree
     */
    exitExplainDetail?: (ctx: ExplainDetailContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.useStatement`.
     * @param ctx the parse tree
     */
    enterUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.useStatement`.
     * @param ctx the parse tree
     */
    exitUseStatement?: (ctx: UseStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.useModuleStatement`.
     * @param ctx the parse tree
     */
    enterUseModuleStatement?: (ctx: UseModuleStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.useModuleStatement`.
     * @param ctx the parse tree
     */
    exitUseModuleStatement?: (ctx: UseModuleStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.loadStatement`.
     * @param ctx the parse tree
     */
    enterLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.loadStatement`.
     * @param ctx the parse tree
     */
    exitLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.unloadStatement`.
     * @param ctx the parse tree
     */
    enterUnloadStatement?: (ctx: UnloadStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.unloadStatement`.
     * @param ctx the parse tree
     */
    exitUnloadStatement?: (ctx: UnloadStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.setStatement`.
     * @param ctx the parse tree
     */
    enterSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.setStatement`.
     * @param ctx the parse tree
     */
    exitSetStatement?: (ctx: SetStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.resetStatement`.
     * @param ctx the parse tree
     */
    enterResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.resetStatement`.
     * @param ctx the parse tree
     */
    exitResetStatement?: (ctx: ResetStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.fileStatement`.
     * @param ctx the parse tree
     */
    enterFileStatement?: (ctx: FileStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.fileStatement`.
     * @param ctx the parse tree
     */
    exitFileStatement?: (ctx: FileStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.refreshStatement`.
     * @param ctx the parse tree
     */
    enterRefreshStatement?: (ctx: RefreshStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.refreshStatement`.
     * @param ctx the parse tree
     */
    exitRefreshStatement?: (ctx: RefreshStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.analyzeStatement`.
     * @param ctx the parse tree
     */
    enterAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.analyzeStatement`.
     * @param ctx the parse tree
     */
    exitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.analyzePartitionDefinition`.
     * @param ctx the parse tree
     */
    enterAnalyzePartitionDefinition?: (ctx: AnalyzePartitionDefinitionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.analyzePartitionDefinition`.
     * @param ctx the parse tree
     */
    exitAnalyzePartitionDefinition?: (ctx: AnalyzePartitionDefinitionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createCatalog`.
     * @param ctx the parse tree
     */
    enterCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createCatalog`.
     * @param ctx the parse tree
     */
    exitCreateCatalog?: (ctx: CreateCatalogContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createDatabase`.
     * @param ctx the parse tree
     */
    enterCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createDatabase`.
     * @param ctx the parse tree
     */
    exitCreateDatabase?: (ctx: CreateDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createView`.
     * @param ctx the parse tree
     */
    enterCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createView`.
     * @param ctx the parse tree
     */
    exitCreateView?: (ctx: CreateViewContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createFunction`.
     * @param ctx the parse tree
     */
    enterCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createFunction`.
     * @param ctx the parse tree
     */
    exitCreateFunction?: (ctx: CreateFunctionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.replaceTable`.
     * @param ctx the parse tree
     */
    enterReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.replaceTable`.
     * @param ctx the parse tree
     */
    exitReplaceTable?: (ctx: ReplaceTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.cacheStatement`.
     * @param ctx the parse tree
     */
    enterCacheStatement?: (ctx: CacheStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.cacheStatement`.
     * @param ctx the parse tree
     */
    exitCacheStatement?: (ctx: CacheStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.alterMaterializedTable`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedTable?: (ctx: AlterMaterializedTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.alterMaterializedTable`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedTable?: (ctx: AlterMaterializedTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.alterTable`.
     * @param ctx the parse tree
     */
    enterAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.alterTable`.
     * @param ctx the parse tree
     */
    exitAlterTable?: (ctx: AlterTableContext) => void;
    /**
     * Enter a parse tree produced by the `alter`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterAlter?: (ctx: AlterContext) => void;
    /**
     * Exit a parse tree produced by the `alter`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitAlter?: (ctx: AlterContext) => void;
    /**
     * Enter a parse tree produced by the `addOrModifyNewColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterAddOrModifyNewColumn?: (ctx: AddOrModifyNewColumnContext) => void;
    /**
     * Exit a parse tree produced by the `addOrModifyNewColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitAddOrModifyNewColumn?: (ctx: AddOrModifyNewColumnContext) => void;
    /**
     * Enter a parse tree produced by the `addOrModifyNewColumns`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterAddOrModifyNewColumns?: (ctx: AddOrModifyNewColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `addOrModifyNewColumns`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitAddOrModifyNewColumns?: (ctx: AddOrModifyNewColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `addNewPartitions`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterAddNewPartitions?: (ctx: AddNewPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `addNewPartitions`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitAddNewPartitions?: (ctx: AddNewPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `dropcolumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterDropcolumn?: (ctx: DropcolumnContext) => void;
    /**
     * Exit a parse tree produced by the `dropcolumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitDropcolumn?: (ctx: DropcolumnContext) => void;
    /**
     * Enter a parse tree produced by the `replaceColumns`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterReplaceColumns?: (ctx: ReplaceColumnsContext) => void;
    /**
     * Exit a parse tree produced by the `replaceColumns`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitReplaceColumns?: (ctx: ReplaceColumnsContext) => void;
    /**
     * Enter a parse tree produced by the `alterColumnComment`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterAlterColumnComment?: (ctx: AlterColumnCommentContext) => void;
    /**
     * Exit a parse tree produced by the `alterColumnComment`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitAlterColumnComment?: (ctx: AlterColumnCommentContext) => void;
    /**
     * Enter a parse tree produced by the `dropColumnList`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterDropColumnList?: (ctx: DropColumnListContext) => void;
    /**
     * Exit a parse tree produced by the `dropColumnList`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitDropColumnList?: (ctx: DropColumnListContext) => void;
    /**
     * Enter a parse tree produced by the `dropPrimaryKey`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterDropPrimaryKey?: (ctx: DropPrimaryKeyContext) => void;
    /**
     * Exit a parse tree produced by the `dropPrimaryKey`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitDropPrimaryKey?: (ctx: DropPrimaryKeyContext) => void;
    /**
     * Enter a parse tree produced by the `renamePartitionColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterRenamePartitionColumn?: (ctx: RenamePartitionColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renamePartitionColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitRenamePartitionColumn?: (ctx: RenamePartitionColumnContext) => void;
    /**
     * Enter a parse tree produced by the `dropPartitions`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterDropPartitions?: (ctx: DropPartitionsContext) => void;
    /**
     * Exit a parse tree produced by the `dropPartitions`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitDropPartitions?: (ctx: DropPartitionsContext) => void;
    /**
     * Enter a parse tree produced by the `dropWatermark`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterDropWatermark?: (ctx: DropWatermarkContext) => void;
    /**
     * Exit a parse tree produced by the `dropWatermark`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitDropWatermark?: (ctx: DropWatermarkContext) => void;
    /**
     * Enter a parse tree produced by the `renameColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Exit a parse tree produced by the `renameColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitRenameColumn?: (ctx: RenameColumnContext) => void;
    /**
     * Enter a parse tree produced by the `renameTable`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Exit a parse tree produced by the `renameTable`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitRenameTable?: (ctx: RenameTableContext) => void;
    /**
     * Enter a parse tree produced by the `setPropertiy`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterSetPropertiy?: (ctx: SetPropertiyContext) => void;
    /**
     * Exit a parse tree produced by the `setPropertiy`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitSetPropertiy?: (ctx: SetPropertiyContext) => void;
    /**
     * Enter a parse tree produced by the `setPartitionProperty`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterSetPartitionProperty?: (ctx: SetPartitionPropertyContext) => void;
    /**
     * Exit a parse tree produced by the `setPartitionProperty`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitSetPartitionProperty?: (ctx: SetPartitionPropertyContext) => void;
    /**
     * Enter a parse tree produced by the `resetPropertiy`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterResetPropertiy?: (ctx: ResetPropertiyContext) => void;
    /**
     * Exit a parse tree produced by the `resetPropertiy`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitResetPropertiy?: (ctx: ResetPropertiyContext) => void;
    /**
     * Enter a parse tree produced by the `unset`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    enterUnset?: (ctx: UnsetContext) => void;
    /**
     * Exit a parse tree produced by the `unset`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     */
    exitUnset?: (ctx: UnsetContext) => void;
    /**
     * Enter a parse tree produced by the `commonSet`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    enterCommonSet?: (ctx: CommonSetContext) => void;
    /**
     * Exit a parse tree produced by the `commonSet`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    exitCommonSet?: (ctx: CommonSetContext) => void;
    /**
     * Enter a parse tree produced by the `setLocation`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    enterSetLocation?: (ctx: SetLocationContext) => void;
    /**
     * Exit a parse tree produced by the `setLocation`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    exitSetLocation?: (ctx: SetLocationContext) => void;
    /**
     * Enter a parse tree produced by the `setSerde`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    enterSetSerde?: (ctx: SetSerdeContext) => void;
    /**
     * Exit a parse tree produced by the `setSerde`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    exitSetSerde?: (ctx: SetSerdeContext) => void;
    /**
     * Enter a parse tree produced by the `setTblPro`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    enterSetTblPro?: (ctx: SetTblProContext) => void;
    /**
     * Exit a parse tree produced by the `setTblPro`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     */
    exitSetTblPro?: (ctx: SetTblProContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dropCatalog`.
     * @param ctx the parse tree
     */
    enterDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dropCatalog`.
     * @param ctx the parse tree
     */
    exitDropCatalog?: (ctx: DropCatalogContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dropTable`.
     * @param ctx the parse tree
     */
    enterDropTable?: (ctx: DropTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dropTable`.
     * @param ctx the parse tree
     */
    exitDropTable?: (ctx: DropTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dropDatabase`.
     * @param ctx the parse tree
     */
    enterDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dropDatabase`.
     * @param ctx the parse tree
     */
    exitDropDatabase?: (ctx: DropDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dropView`.
     * @param ctx the parse tree
     */
    enterDropView?: (ctx: DropViewContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dropView`.
     * @param ctx the parse tree
     */
    exitDropView?: (ctx: DropViewContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.dropFunction`.
     * @param ctx the parse tree
     */
    enterDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.dropFunction`.
     * @param ctx the parse tree
     */
    exitDropFunction?: (ctx: DropFunctionContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.truncateTable`.
     * @param ctx the parse tree
     */
    enterTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.truncateTable`.
     * @param ctx the parse tree
     */
    exitTruncateTable?: (ctx: TruncateTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.repairTable`.
     * @param ctx the parse tree
     */
    enterRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.repairTable`.
     * @param ctx the parse tree
     */
    exitRepairTable?: (ctx: RepairTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.alertView`.
     * @param ctx the parse tree
     */
    enterAlertView?: (ctx: AlertViewContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.alertView`.
     * @param ctx the parse tree
     */
    exitAlertView?: (ctx: AlertViewContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.alterDatabase`.
     * @param ctx the parse tree
     */
    enterAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.alterDatabase`.
     * @param ctx the parse tree
     */
    exitAlterDatabase?: (ctx: AlterDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.alterFunction`.
     * @param ctx the parse tree
     */
    enterAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.alterFunction`.
     * @param ctx the parse tree
     */
    exitAlterFunction?: (ctx: AlterFunctionContext) => void;
    /**
     * Enter a parse tree produced by the `oneExpresion`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    enterOneExpresion?: (ctx: OneExpresionContext) => void;
    /**
     * Exit a parse tree produced by the `oneExpresion`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    exitOneExpresion?: (ctx: OneExpresionContext) => void;
    /**
     * Enter a parse tree produced by the `stack`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    enterStack?: (ctx: StackContext) => void;
    /**
     * Exit a parse tree produced by the `stack`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    exitStack?: (ctx: StackContext) => void;
    /**
     * Enter a parse tree produced by the `json_tuple`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    enterJson_tuple?: (ctx: Json_tupleContext) => void;
    /**
     * Exit a parse tree produced by the `json_tuple`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    exitJson_tuple?: (ctx: Json_tupleContext) => void;
    /**
     * Enter a parse tree produced by the `parse_url`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    enterParse_url?: (ctx: Parse_urlContext) => void;
    /**
     * Exit a parse tree produced by the `parse_url`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     */
    exitParse_url?: (ctx: Parse_urlContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.showTableStatementBody`.
     * @param ctx the parse tree
     */
    enterShowTableStatementBody?: (ctx: ShowTableStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.showTableStatementBody`.
     * @param ctx the parse tree
     */
    exitShowTableStatementBody?: (ctx: ShowTableStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.showFunctionStatementBody`.
     * @param ctx the parse tree
     */
    enterShowFunctionStatementBody?: (ctx: ShowFunctionStatementBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.showFunctionStatementBody`.
     * @param ctx the parse tree
     */
    exitShowFunctionStatementBody?: (ctx: ShowFunctionStatementBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.transformClause`.
     * @param ctx the parse tree
     */
    enterTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.transformClause`.
     * @param ctx the parse tree
     */
    exitTransformClause?: (ctx: TransformClauseContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertSparkDirectoryStatement`.
     * @param ctx the parse tree
     */
    enterInsertSparkDirectoryStatement?: (ctx: InsertSparkDirectoryStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertSparkDirectoryStatement`.
     * @param ctx the parse tree
     */
    exitInsertSparkDirectoryStatement?: (ctx: InsertSparkDirectoryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertSparkDirectoryBody`.
     * @param ctx the parse tree
     */
    enterInsertSparkDirectoryBody?: (ctx: InsertSparkDirectoryBodyContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertSparkDirectoryBody`.
     * @param ctx the parse tree
     */
    exitInsertSparkDirectoryBody?: (ctx: InsertSparkDirectoryBodyContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertHiveDirectoryStatement`.
     * @param ctx the parse tree
     */
    enterInsertHiveDirectoryStatement?: (ctx: InsertHiveDirectoryStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertHiveDirectoryStatement`.
     * @param ctx the parse tree
     */
    exitInsertHiveDirectoryStatement?: (ctx: InsertHiveDirectoryStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveRowFormatPart`.
     * @param ctx the parse tree
     */
    enterHiveRowFormatPart?: (ctx: HiveRowFormatPartContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveRowFormatPart`.
     * @param ctx the parse tree
     */
    exitHiveRowFormatPart?: (ctx: HiveRowFormatPartContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertMulStatementCompatibility`.
     * @param ctx the parse tree
     */
    enterInsertMulStatementCompatibility?: (ctx: InsertMulStatementCompatibilityContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertMulStatementCompatibility`.
     * @param ctx the parse tree
     */
    exitInsertMulStatementCompatibility?: (ctx: InsertMulStatementCompatibilityContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertMulStatement`.
     * @param ctx the parse tree
     */
    enterInsertMulStatement?: (ctx: InsertMulStatementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertMulStatement`.
     * @param ctx the parse tree
     */
    exitInsertMulStatement?: (ctx: InsertMulStatementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.insertFromTable`.
     * @param ctx the parse tree
     */
    enterInsertFromTable?: (ctx: InsertFromTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.insertFromTable`.
     * @param ctx the parse tree
     */
    exitInsertFromTable?: (ctx: InsertFromTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createExternalTable`.
     * @param ctx the parse tree
     */
    enterCreateExternalTable?: (ctx: CreateExternalTableContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createExternalTable`.
     * @param ctx the parse tree
     */
    exitCreateExternalTable?: (ctx: CreateExternalTableContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.createExternalTableNoSortElement`.
     * @param ctx the parse tree
     */
    enterCreateExternalTableNoSortElement?: (ctx: CreateExternalTableNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.createExternalTableNoSortElement`.
     * @param ctx the parse tree
     */
    exitCreateExternalTableNoSortElement?: (ctx: CreateExternalTableNoSortElementContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveFormatCreate`.
     * @param ctx the parse tree
     */
    enterHiveFormatCreate?: (ctx: HiveFormatCreateContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveFormatCreate`.
     * @param ctx the parse tree
     */
    exitHiveFormatCreate?: (ctx: HiveFormatCreateContext) => void;
    /**
     * Enter a parse tree produced by `SparkSQLParser.hiveFormatCreateNoSortElement`.
     * @param ctx the parse tree
     */
    enterHiveFormatCreateNoSortElement?: (ctx: HiveFormatCreateNoSortElementContext) => void;
    /**
     * Exit a parse tree produced by `SparkSQLParser.hiveFormatCreateNoSortElement`.
     * @param ctx the parse tree
     */
    exitHiveFormatCreateNoSortElement?: (ctx: HiveFormatCreateNoSortElementContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

