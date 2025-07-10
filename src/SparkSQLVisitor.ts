// Generated from gen/SparkSQL.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SparkSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SparkSQLVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SparkSQLParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.sqlStatements`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlStatements?: (ctx: SqlStatementsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.emptyStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateStatement?: (ctx: CreateStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dmlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDmlStatement?: (ctx: DmlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `simple`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple?: (ctx: SimpleContext) => Result;
    /**
     * Visit a parse tree produced by the `asSelect`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAsSelect?: (ctx: AsSelectContext) => Result;
    /**
     * Visit a parse tree produced by the `materialized`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMaterialized?: (ctx: MaterializedContext) => Result;
    /**
     * Visit a parse tree produced by the `customSerde`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCustomSerde?: (ctx: CustomSerdeContext) => Result;
    /**
     * Visit a parse tree produced by the `customSerdeExternal`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCustomSerdeExternal?: (ctx: CustomSerdeExternalContext) => Result;
    /**
     * Visit a parse tree produced by the `using_create`
     * labeled alternative in `SparkSQLParser.createTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_create?: (ctx: Using_createContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.simpleCreateTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCreateTable?: (ctx: SimpleCreateTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.simpleCreateTableNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCreateTableNoSortElement?: (ctx: SimpleCreateTableNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.location`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocation?: (ctx: LocationContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.sortedBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortedBy?: (ctx: SortedByContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.usingCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingCreate?: (ctx: UsingCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tblProperties`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTblProperties?: (ctx: TblPropertiesContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.defaultColumnUsing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultColumnUsing?: (ctx: DefaultColumnUsingContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.defaultColumnUsingNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultColumnUsingNoSortElement?: (ctx: DefaultColumnUsingNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnUsing`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnUsing?: (ctx: ColumnUsingContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnUsingNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnUsingNoSortElement?: (ctx: ColumnUsingNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.usingByQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingByQuery?: (ctx: UsingByQueryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.usingByQueryNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingByQueryNoSortElement?: (ctx: UsingByQueryNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.intoBuckets`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntoBuckets?: (ctx: IntoBucketsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveFormatpartitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveFormatpartitionDefinition?: (ctx: HiveFormatpartitionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.rowFormatSerde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.fieldsTerminatedBy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldsTerminatedBy?: (ctx: FieldsTerminatedByContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.storedAs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStoredAs?: (ctx: StoredAsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.storedAsInputformat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStoredAsInputformat?: (ctx: StoredAsInputformatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.outputformat`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOutputformat?: (ctx: OutputformatContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.rowFormatDelimted`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormatDelimted?: (ctx: RowFormatDelimtedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnsBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnsBody?: (ctx: ColumnsBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createCustomSerde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCustomSerde?: (ctx: CreateCustomSerdeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createCustomSerdeNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCustomSerdeNoSortElement?: (ctx: CreateCustomSerdeNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createCustomSerdeExternal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCustomSerdeExternal?: (ctx: CreateCustomSerdeExternalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createCustomSerdeExternalNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCustomSerdeExternalNoSortElement?: (ctx: CreateCustomSerdeExternalNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createTableAsSelect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateTableAsSelect?: (ctx: CreateTableAsSelectContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createMaterializedTableAsSelect`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedTableAsSelect?: (ctx: CreateMaterializedTableAsSelectContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createMaterializedTableAsSelectNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateMaterializedTableAsSelectNoSortElement?: (ctx: CreateMaterializedTableAsSelectNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.usingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingClause?: (ctx: UsingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.jarFileName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJarFileName?: (ctx: JarFileNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.filePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilePath?: (ctx: FilePathContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.ifExistsPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExistsPart?: (ctx: IfExistsPartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnPosition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnPosition?: (ctx: ColumnPositionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.renameDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameDefinition?: (ctx: RenameDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.setKeyValueDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetKeyValueDefinition?: (ctx: SetKeyValueDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.addConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddConstraint?: (ctx: AddConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dropConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropConstraint?: (ctx: DropConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.addUnique`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddUnique?: (ctx: AddUniqueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.notForced`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotForced?: (ctx: NotForcedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertStatement?: (ctx: InsertStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertSimpleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertSimpleStatement?: (ctx: InsertSimpleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertPartitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertPartitionDefinition?: (ctx: InsertPartitionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.queryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQueryStatement?: (ctx: QueryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.withClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithClause?: (ctx: WithClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.valuesCaluse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesCaluse?: (ctx: ValuesCaluseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.inlineBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineBody?: (ctx: InlineBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.withItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithItem?: (ctx: WithItemContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.withItemName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithItemName?: (ctx: WithItemNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.selectClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectClause?: (ctx: SelectClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.filterPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilterPart?: (ctx: FilterPartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.overWindowItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverWindowItem?: (ctx: OverWindowItemContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.overClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOverClause?: (ctx: OverClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowFunctioPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFunctioPart?: (ctx: WindowFunctioPartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFunctionName?: (ctx: WindowFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.analyticFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyticFunction?: (ctx: AnalyticFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.rangkingFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRangkingFunction?: (ctx: RangkingFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.fromClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFromClause?: (ctx: FromClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowFrameForWindowsQuery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrameForWindowsQuery?: (ctx: WindowFrameForWindowsQueryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.frameExpession`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameExpession?: (ctx: FrameExpessionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tableExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableExpression?: (ctx: TableExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tvfClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTvfClause?: (ctx: TvfClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.rangeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRangeClause?: (ctx: RangeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.viewReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitViewReference?: (ctx: ViewReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.pivotReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotReference?: (ctx: PivotReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tableReference`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableReference?: (ctx: TableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tablePrimary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePrimary?: (ctx: TablePrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.funtionBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuntionBody?: (ctx: FuntionBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.unpivotBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnpivotBody?: (ctx: UnpivotBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.pivotBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPivotBody?: (ctx: PivotBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.expressionAsAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionAsAlias?: (ctx: ExpressionAsAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.expressionAsAliasList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionAsAliasList?: (ctx: ExpressionAsAliasListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.systemTimePeriod`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSystemTimePeriod?: (ctx: SystemTimePeriodContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dateTimeExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDateTimeExpression?: (ctx: DateTimeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.inlineDataValueClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineDataValueClause?: (ctx: InlineDataValueClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowTVFClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFClause?: (ctx: WindowTVFClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowTVFExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFExpression?: (ctx: WindowTVFExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowTVFName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFName?: (ctx: WindowTVFNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.rowFormatDelimited`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveSerde`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveSerde?: (ctx: HiveSerdeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.usingAsColumnPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsingAsColumnPart?: (ctx: UsingAsColumnPartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveSerdePart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveSerdePart?: (ctx: HiveSerdePartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tableCanHasKeyPropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableCanHasKeyPropertyList?: (ctx: TableCanHasKeyPropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.sparkRecordWriterPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSparkRecordWriterPart?: (ctx: SparkRecordWriterPartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowTVFParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowTVFParam?: (ctx: WindowTVFParamContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.timeIntervalParamName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeIntervalParamName?: (ctx: TimeIntervalParamNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnDescriptor`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnDescriptor?: (ctx: ColumnDescriptorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.joinCondition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJoinCondition?: (ctx: JoinConditionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.whereClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhereClause?: (ctx: WhereClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.samplingQueries`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSamplingQueries?: (ctx: SamplingQueriesContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.someByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSomeByClause?: (ctx: SomeByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.clusterByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusterByClause?: (ctx: ClusterByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.clusteredByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClusteredByClause?: (ctx: ClusteredByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.distributeByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistributeByClause?: (ctx: DistributeByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupByClause?: (ctx: GroupByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupItemDefinition?: (ctx: GroupItemDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupingSet`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSet?: (ctx: GroupingSetContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupingSets`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSets?: (ctx: GroupingSetsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupingSetsNotionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupingSetsNotionName?: (ctx: GroupingSetsNotionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupWindowFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupWindowFunction?: (ctx: GroupWindowFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.groupWindowFunctionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupWindowFunctionName?: (ctx: GroupWindowFunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.timeAttrColumn`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeAttrColumn?: (ctx: TimeAttrColumnContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.havingClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHavingClause?: (ctx: HavingClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowClause?: (ctx: WindowClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.namedWindow`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNamedWindow?: (ctx: NamedWindowContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowSpec?: (ctx: WindowSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.matchRecognizeClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchRecognizeClause?: (ctx: MatchRecognizeClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.orderByCaluse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderByCaluse?: (ctx: OrderByCaluseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.sortByCaluse`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSortByCaluse?: (ctx: SortByCaluseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.orderItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderItemDefinition?: (ctx: OrderItemDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.limitClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimitClause?: (ctx: LimitClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.offsetClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffsetClause?: (ctx: OffsetClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.partitionByClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.quantifiers`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuantifiers?: (ctx: QuantifiersContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.measuresClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMeasuresClause?: (ctx: MeasuresClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.patternDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternDefinition?: (ctx: PatternDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.patternVariable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternVariable?: (ctx: PatternVariableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.outputMode`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOutputMode?: (ctx: OutputModeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.afterMatchStrategy`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAfterMatchStrategy?: (ctx: AfterMatchStrategyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.patternVariablesDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPatternVariablesDefinition?: (ctx: PatternVariablesDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.windowFrame`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowFrame?: (ctx: WindowFrameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.frameBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrameBound?: (ctx: FrameBoundContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.withinClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithinClause?: (ctx: WithinClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.selfDefinitionClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelfDefinitionClause?: (ctx: SelfDefinitionClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.partitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPartitionDefinition?: (ctx: PartitionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.transformList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformList?: (ctx: TransformListContext) => Result;
    /**
     * Visit a parse tree produced by the `identityTransform`
     * labeled alternative in `SparkSQLParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentityTransform?: (ctx: IdentityTransformContext) => Result;
    /**
     * Visit a parse tree produced by the `applyTransform`
     * labeled alternative in `SparkSQLParser.transform`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitApplyTransform?: (ctx: ApplyTransformContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.transformArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformArgument?: (ctx: TransformArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.likeDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikeDefinition?: (ctx: LikeDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.distribution`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDistribution?: (ctx: DistributionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.using`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing?: (ctx: UsingContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.likeOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikeOption?: (ctx: LikeOptionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnOptionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnOptionDefinition?: (ctx: ColumnOptionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.physicalColumnDefinitionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhysicalColumnDefinitionList?: (ctx: PhysicalColumnDefinitionListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.physicalColumnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPhysicalColumnDefinition?: (ctx: PhysicalColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.computedColumnExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComputedColumnExpression?: (ctx: ComputedColumnExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.watermarkDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWatermarkDefinition?: (ctx: WatermarkDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tableConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableConstraint?: (ctx: TableConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.constraintName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstraintName?: (ctx: ConstraintNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.valuesDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesDefinition?: (ctx: ValuesDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.valuesRowDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValuesRowDefinition?: (ctx: ValuesRowDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.lengthOneDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthOneDimension?: (ctx: LengthOneDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.lengthTwoOptionalDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthTwoOptionalDimension?: (ctx: LengthTwoOptionalDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.lengthTwoStringDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthTwoStringDimension?: (ctx: LengthTwoStringDimensionContext) => Result;
    /**
     * Visit a parse tree produced by the `lengthSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.lengthOneTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLengthSymbolsTypeDimension?: (ctx: LengthSymbolsTypeDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.mapTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapTypeDimension?: (ctx: MapTypeDimensionContext) => Result;
    /**
     * Visit a parse tree produced by the `rowSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.rowTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowSymbolsTypeDimension?: (ctx: RowSymbolsTypeDimensionContext) => Result;
    /**
     * Visit a parse tree produced by the `structSymbolsTypeDimension`
     * labeled alternative in `SparkSQLParser.structTypeDimension`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructSymbolsTypeDimension?: (ctx: StructSymbolsTypeDimensionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.commentSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommentSpec?: (ctx: CommentSpecContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.metadataColumnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMetadataColumnDefinition?: (ctx: MetadataColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.metadataKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMetadataKey?: (ctx: MetadataKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.computedColumnDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComputedColumnDefinition?: (ctx: ComputedColumnDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnName?: (ctx: ColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnNameList?: (ctx: ColumnNameListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnType?: (ctx: ColumnTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `predicated`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicated?: (ctx: PredicatedContext) => Result;
    /**
     * Visit a parse tree produced by the `exists`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExists?: (ctx: ExistsContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNested`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNested?: (ctx: LogicalNestedContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalBinary`
     * labeled alternative in `SparkSQLParser.booleanExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalBinary?: (ctx: LogicalBinaryContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.predicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPredicate?: (ctx: PredicateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.likePredicate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLikePredicate?: (ctx: LikePredicateContext) => Result;
    /**
     * Visit a parse tree produced by the `valueExpressionDefault`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `or`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOr?: (ctx: OrContext) => Result;
    /**
     * Visit a parse tree produced by the `comparison`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison?: (ctx: ComparisonContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticBinary`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;
    /**
     * Visit a parse tree produced by the `arithmeticUnary`
     * labeled alternative in `SparkSQLParser.valueExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArithmeticUnary?: (ctx: ArithmeticUnaryContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleCase`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleCase?: (ctx: SimpleCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `columnReference`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnReference?: (ctx: ColumnReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `last`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLast?: (ctx: LastContext) => Result;
    /**
     * Visit a parse tree produced by the `star`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStar?: (ctx: StarContext) => Result;
    /**
     * Visit a parse tree produced by the `aggregateFunctions`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregateFunctions?: (ctx: AggregateFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `subscript`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubscript?: (ctx: SubscriptContext) => Result;
    /**
     * Visit a parse tree produced by the `values`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValues?: (ctx: ValuesContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCallFilter`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCallFilter?: (ctx: FunctionCallFilterContext) => Result;
    /**
     * Visit a parse tree produced by the `orderSetAggregateFunctions`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderSetAggregateFunctions?: (ctx: OrderSetAggregateFunctionsContext) => Result;
    /**
     * Visit a parse tree produced by the `subqueryExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubqueryExpression?: (ctx: SubqueryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `cast`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCast?: (ctx: CastContext) => Result;
    /**
     * Visit a parse tree produced by the `constantDefault`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDefault?: (ctx: ConstantDefaultContext) => Result;
    /**
     * Visit a parse tree produced by the `parenthesizedExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `complexDataTypeFieldExpression`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexDataTypeFieldExpression?: (ctx: ComplexDataTypeFieldExpressionContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `uidForColumnName`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUidForColumnName?: (ctx: UidForColumnNameContext) => Result;
    /**
     * Visit a parse tree produced by the `searchedCase`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSearchedCase?: (ctx: SearchedCaseContext) => Result;
    /**
     * Visit a parse tree produced by the `position`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPosition?: (ctx: PositionContext) => Result;
    /**
     * Visit a parse tree produced by the `first`
     * labeled alternative in `SparkSQLParser.primaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFirst?: (ctx: FirstContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.complexDataTypeExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComplexDataTypeExpression?: (ctx: ComplexDataTypeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.arrayExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.structExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructExpression?: (ctx: StructExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.rowExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRowExpression?: (ctx: RowExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.mapExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMapExpression?: (ctx: MapExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dataTypeExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDataTypeExpression?: (ctx: DataTypeExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.sqlSimpleType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlSimpleType?: (ctx: SqlSimpleTypeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.functionName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionName?: (ctx: FunctionNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.functionParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionParam?: (ctx: FunctionParamContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.filterClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilterClause?: (ctx: FilterClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.correlationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCorrelationName?: (ctx: CorrelationNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.timeIntervalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeIntervalExpression?: (ctx: TimeIntervalExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.errorCapturingMultiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingMultiUnitsInterval?: (ctx: ErrorCapturingMultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.multiUnitsInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiUnitsInterval?: (ctx: MultiUnitsIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.errorCapturingUnitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingUnitToUnitInterval?: (ctx: ErrorCapturingUnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.unitToUnitInterval`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnitToUnitInterval?: (ctx: UnitToUnitIntervalContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.intervalValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntervalValue?: (ctx: IntervalValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.columnAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitColumnAlias?: (ctx: ColumnAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tableAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableAlias?: (ctx: TableAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.anyAlias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnyAlias?: (ctx: AnyAliasContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.errorCapturingIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorCapturingIdentifier?: (ctx: ErrorCapturingIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `errorIdent`
     * labeled alternative in `SparkSQLParser.errorCapturingIdentifierExtra`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitErrorIdent?: (ctx: ErrorIdentContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.identifierList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierList?: (ctx: IdentifierListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.identifierSeq`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierSeq?: (ctx: IdentifierSeqContext) => Result;
    /**
     * Visit a parse tree produced by the `unquotedIdentifierAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnquotedIdentifierAlternative?: (ctx: UnquotedIdentifierAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by the `quotedIdentifierAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQuotedIdentifierAlternative?: (ctx: QuotedIdentifierAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by the `nonReservedKeywordsAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReservedKeywordsAlternative?: (ctx: NonReservedKeywordsAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by the `urefVarAlternative`
     * labeled alternative in `SparkSQLParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUrefVarAlternative?: (ctx: UrefVarAlternativeContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.unquotedAnyString`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnquotedAnyString?: (ctx: UnquotedAnyStringContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.refVar`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefVar?: (ctx: RefVarContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.unquotedIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.whenClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhenClause?: (ctx: WhenClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.catalogPath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatalogPath?: (ctx: CatalogPathContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.databasePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabasePath?: (ctx: DatabasePathContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.databasePathCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatabasePathCreate?: (ctx: DatabasePathCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tablePathCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePathCreate?: (ctx: TablePathCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tablePath`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePath?: (ctx: TablePathContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.anonymousWindowsName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnonymousWindowsName?: (ctx: AnonymousWindowsNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.uid`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUid?: (ctx: UidContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.withOption`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithOption?: (ctx: WithOptionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.ifNotExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfNotExists?: (ctx: IfNotExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.ifExists`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIfExists?: (ctx: IfExistsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tablePropertyList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePropertyList?: (ctx: TablePropertyListContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tableProperty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableProperty?: (ctx: TablePropertyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tablePropertyKey`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePropertyKey?: (ctx: TablePropertyKeyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.propertyName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyName?: (ctx: PropertyNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.tablePropertyValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTablePropertyValue?: (ctx: TablePropertyValueContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.comparisonOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.constant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstant?: (ctx: ConstantContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.timePointLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimePointLiteral?: (ctx: TimePointLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.stringLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.decimalLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.booleanLiteral`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.setQuantifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetQuantifier?: (ctx: SetQuantifierContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.timePointUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimePointUnit?: (ctx: TimePointUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.timeIntervalUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTimeIntervalUnit?: (ctx: TimeIntervalUnitContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.reservedKeywordsUsedAsFuncParam`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeywordsUsedAsFuncParam?: (ctx: ReservedKeywordsUsedAsFuncParamContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.reservedKeywordsUsedAsFuncName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReservedKeywordsUsedAsFuncName?: (ctx: ReservedKeywordsUsedAsFuncNameContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.nonReservedKeywords`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonReservedKeywords?: (ctx: NonReservedKeywordsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.sqlStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSqlStatement?: (ctx: SqlStatementContext) => Result;
    /**
     * Visit a parse tree produced by the `commonSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonSelect?: (ctx: CommonSelectContext) => Result;
    /**
     * Visit a parse tree produced by the `sparkStyleSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSparkStyleSelect?: (ctx: SparkStyleSelectContext) => Result;
    /**
     * Visit a parse tree produced by the `matchRecognizeSelect`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchRecognizeSelect?: (ctx: MatchRecognizeSelectContext) => Result;
    /**
     * Visit a parse tree produced by the `tableSample`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTableSample?: (ctx: TableSampleContext) => Result;
    /**
     * Visit a parse tree produced by the `selectPlus`
     * labeled alternative in `SparkSQLParser.selectStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectPlus?: (ctx: SelectPlusContext) => Result;
    /**
     * Visit a parse tree produced by the `windowsProrjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWindowsProrjectItem?: (ctx: WindowsProrjectItemContext) => Result;
    /**
     * Visit a parse tree produced by the `expressionProjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionProjectItem?: (ctx: ExpressionProjectItemContext) => Result;
    /**
     * Visit a parse tree produced by the `hiveStyleProjectItem`
     * labeled alternative in `SparkSQLParser.projectItemDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveStyleProjectItem?: (ctx: HiveStyleProjectItemContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveOverWindowItem`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveOverWindowItem?: (ctx: HiveOverWindowItemContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.selectStatementPlus`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelectStatementPlus?: (ctx: SelectStatementPlusContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.plusStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPlusStatement?: (ctx: PlusStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.describeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescribeStatement?: (ctx: DescribeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.explainStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainStatement?: (ctx: ExplainStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.explainDetails`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainDetails?: (ctx: ExplainDetailsContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.explainDetail`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplainDetail?: (ctx: ExplainDetailContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.useStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseStatement?: (ctx: UseStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.useModuleStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUseModuleStatement?: (ctx: UseModuleStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.showStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowStatement?: (ctx: ShowStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.loadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoadStatement?: (ctx: LoadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.unloadStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnloadStatement?: (ctx: UnloadStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.setStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetStatement?: (ctx: SetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.resetStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetStatement?: (ctx: ResetStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.fileStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFileStatement?: (ctx: FileStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.refreshStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefreshStatement?: (ctx: RefreshStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.analyzeStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.analyzePartitionDefinition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnalyzePartitionDefinition?: (ctx: AnalyzePartitionDefinitionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createCatalog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateCatalog?: (ctx: CreateCatalogContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateDatabase?: (ctx: CreateDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateView?: (ctx: CreateViewContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateFunction?: (ctx: CreateFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.replaceTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceTable?: (ctx: ReplaceTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.cacheStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCacheStatement?: (ctx: CacheStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.alterMaterializedTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterMaterializedTable?: (ctx: AlterMaterializedTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.alterTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterTable?: (ctx: AlterTableContext) => Result;
    /**
     * Visit a parse tree produced by the `alter`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlter?: (ctx: AlterContext) => Result;
    /**
     * Visit a parse tree produced by the `addOrModifyNewColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddOrModifyNewColumn?: (ctx: AddOrModifyNewColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `addOrModifyNewColumns`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddOrModifyNewColumns?: (ctx: AddOrModifyNewColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `addNewPartitions`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddNewPartitions?: (ctx: AddNewPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `dropcolumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropcolumn?: (ctx: DropcolumnContext) => Result;
    /**
     * Visit a parse tree produced by the `replaceColumns`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReplaceColumns?: (ctx: ReplaceColumnsContext) => Result;
    /**
     * Visit a parse tree produced by the `alterColumnComment`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterColumnComment?: (ctx: AlterColumnCommentContext) => Result;
    /**
     * Visit a parse tree produced by the `dropColumnList`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropColumnList?: (ctx: DropColumnListContext) => Result;
    /**
     * Visit a parse tree produced by the `dropPrimaryKey`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPrimaryKey?: (ctx: DropPrimaryKeyContext) => Result;
    /**
     * Visit a parse tree produced by the `renamePartitionColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenamePartitionColumn?: (ctx: RenamePartitionColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `dropPartitions`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropPartitions?: (ctx: DropPartitionsContext) => Result;
    /**
     * Visit a parse tree produced by the `dropWatermark`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropWatermark?: (ctx: DropWatermarkContext) => Result;
    /**
     * Visit a parse tree produced by the `renameColumn`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameColumn?: (ctx: RenameColumnContext) => Result;
    /**
     * Visit a parse tree produced by the `renameTable`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRenameTable?: (ctx: RenameTableContext) => Result;
    /**
     * Visit a parse tree produced by the `setPropertiy`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetPropertiy?: (ctx: SetPropertiyContext) => Result;
    /**
     * Visit a parse tree produced by the `setPartitionProperty`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetPartitionProperty?: (ctx: SetPartitionPropertyContext) => Result;
    /**
     * Visit a parse tree produced by the `resetPropertiy`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResetPropertiy?: (ctx: ResetPropertiyContext) => Result;
    /**
     * Visit a parse tree produced by the `unset`
     * labeled alternative in `SparkSQLParser.alterTableBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnset?: (ctx: UnsetContext) => Result;
    /**
     * Visit a parse tree produced by the `commonSet`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommonSet?: (ctx: CommonSetContext) => Result;
    /**
     * Visit a parse tree produced by the `setLocation`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetLocation?: (ctx: SetLocationContext) => Result;
    /**
     * Visit a parse tree produced by the `setSerde`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetSerde?: (ctx: SetSerdeContext) => Result;
    /**
     * Visit a parse tree produced by the `setTblPro`
     * labeled alternative in `SparkSQLParser.setPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSetTblPro?: (ctx: SetTblProContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dropCatalog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropCatalog?: (ctx: DropCatalogContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dropTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropTable?: (ctx: DropTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dropDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropDatabase?: (ctx: DropDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dropView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropView?: (ctx: DropViewContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.dropFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDropFunction?: (ctx: DropFunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.truncateTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTruncateTable?: (ctx: TruncateTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.repairTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRepairTable?: (ctx: RepairTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.alertView`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlertView?: (ctx: AlertViewContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.alterDatabase`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterDatabase?: (ctx: AlterDatabaseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.alterFunction`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlterFunction?: (ctx: AlterFunctionContext) => Result;
    /**
     * Visit a parse tree produced by the `oneExpresion`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOneExpresion?: (ctx: OneExpresionContext) => Result;
    /**
     * Visit a parse tree produced by the `stack`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStack?: (ctx: StackContext) => Result;
    /**
     * Visit a parse tree produced by the `json_tuple`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitJson_tuple?: (ctx: Json_tupleContext) => Result;
    /**
     * Visit a parse tree produced by the `parse_url`
     * labeled alternative in `SparkSQLParser.inlineTableClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParse_url?: (ctx: Parse_urlContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.showTableStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowTableStatementBody?: (ctx: ShowTableStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.showFunctionStatementBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitShowFunctionStatementBody?: (ctx: ShowFunctionStatementBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.transformClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTransformClause?: (ctx: TransformClauseContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertSparkDirectoryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertSparkDirectoryStatement?: (ctx: InsertSparkDirectoryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertSparkDirectoryBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertSparkDirectoryBody?: (ctx: InsertSparkDirectoryBodyContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertHiveDirectoryStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertHiveDirectoryStatement?: (ctx: InsertHiveDirectoryStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveRowFormatPart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveRowFormatPart?: (ctx: HiveRowFormatPartContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertMulStatementCompatibility`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertMulStatementCompatibility?: (ctx: InsertMulStatementCompatibilityContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertMulStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertMulStatement?: (ctx: InsertMulStatementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.insertFromTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInsertFromTable?: (ctx: InsertFromTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createExternalTable`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateExternalTable?: (ctx: CreateExternalTableContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.createExternalTableNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreateExternalTableNoSortElement?: (ctx: CreateExternalTableNoSortElementContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveFormatCreate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveFormatCreate?: (ctx: HiveFormatCreateContext) => Result;
    /**
     * Visit a parse tree produced by `SparkSQLParser.hiveFormatCreateNoSortElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHiveFormatCreateNoSortElement?: (ctx: HiveFormatCreateNoSortElementContext) => Result;
}

