// Generated from gen/SQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StatementContext } from "./SQLParser";
import { SqlStatementContext } from "./SQLParser";
import { ExplainStatementContext } from "./SQLParser";
import { ExplainOptionContext } from "./SQLParser";
import { VectorizationOnlyContext } from "./SQLParser";
import { VectorizatonDetailContext } from "./SQLParser";
import { ExecStatementContext } from "./SQLParser";
import { LoadStatementContext } from "./SQLParser";
import { ReplicationClauseContext } from "./SQLParser";
import { ExportStatementContext } from "./SQLParser";
import { ImportStatementContext } from "./SQLParser";
import { ReplDumpStatementContext } from "./SQLParser";
import { ReplDbPolicyContext } from "./SQLParser";
import { ReplLoadStatementContext } from "./SQLParser";
import { ReplConfigsContext } from "./SQLParser";
import { ReplConfigsListContext } from "./SQLParser";
import { ReplTableLevelPolicyContext } from "./SQLParser";
import { ReplStatusStatementContext } from "./SQLParser";
import { DdlStatementContext } from "./SQLParser";
import { IfExistsContext } from "./SQLParser";
import { RestrictOrCascadeContext } from "./SQLParser";
import { IfNotExistsContext } from "./SQLParser";
import { ForceContext } from "./SQLParser";
import { RewriteEnabledContext } from "./SQLParser";
import { RewriteDisabledContext } from "./SQLParser";
import { StoredAsDirsContext } from "./SQLParser";
import { OrReplaceContext } from "./SQLParser";
import { CreateDatabaseStatementContext } from "./SQLParser";
import { DbLocationContext } from "./SQLParser";
import { DbManagedLocationContext } from "./SQLParser";
import { DbPropertiesContext } from "./SQLParser";
import { DbPropertiesListContext } from "./SQLParser";
import { DbConnectorNameContext } from "./SQLParser";
import { SwitchDatabaseStatementContext } from "./SQLParser";
import { DropDatabaseStatementContext } from "./SQLParser";
import { DatabaseCommentContext } from "./SQLParser";
import { TruncateTableStatementContext } from "./SQLParser";
import { DropTableStatementContext } from "./SQLParser";
import { InputFileFormatContext } from "./SQLParser";
import { TabTypeExprContext } from "./SQLParser";
import { PartTypeExprContext } from "./SQLParser";
import { TabPartColTypeExprContext } from "./SQLParser";
import { DescStatementContext } from "./SQLParser";
import { AnalyzeStatementContext } from "./SQLParser";
import { From_inContext } from "./SQLParser";
import { Db_schemaContext } from "./SQLParser";
import { ShowStatementContext } from "./SQLParser";
import { ShowTablesFilterExprContext } from "./SQLParser";
import { LockStatementContext } from "./SQLParser";
import { LockDatabaseContext } from "./SQLParser";
import { LockModeContext } from "./SQLParser";
import { UnlockStatementContext } from "./SQLParser";
import { UnlockDatabaseContext } from "./SQLParser";
import { CreateRoleStatementContext } from "./SQLParser";
import { DropRoleStatementContext } from "./SQLParser";
import { GrantPrivilegesContext } from "./SQLParser";
import { RevokePrivilegesContext } from "./SQLParser";
import { GrantRoleContext } from "./SQLParser";
import { RevokeRoleContext } from "./SQLParser";
import { ShowRoleGrantsContext } from "./SQLParser";
import { ShowRolesContext } from "./SQLParser";
import { ShowCurrentRoleContext } from "./SQLParser";
import { SetRoleContext } from "./SQLParser";
import { ShowGrantsContext } from "./SQLParser";
import { ShowRolePrincipalsContext } from "./SQLParser";
import { PrivilegeIncludeColObjectContext } from "./SQLParser";
import { PrivilegeObjectContext } from "./SQLParser";
import { PrivObjectContext } from "./SQLParser";
import { PrivObjectColsContext } from "./SQLParser";
import { PrivilegeListContext } from "./SQLParser";
import { PrivlegeDefContext } from "./SQLParser";
import { PrivilegeTypeContext } from "./SQLParser";
import { PrincipalSpecificationContext } from "./SQLParser";
import { PrincipalNameContext } from "./SQLParser";
import { WithGrantOptionContext } from "./SQLParser";
import { GrantOptionForContext } from "./SQLParser";
import { AdminOptionForContext } from "./SQLParser";
import { WithAdminOptionContext } from "./SQLParser";
import { MetastoreCheckContext } from "./SQLParser";
import { ResourceListContext } from "./SQLParser";
import { ResourceContext } from "./SQLParser";
import { ResourceTypeContext } from "./SQLParser";
import { CreateFunctionStatementContext } from "./SQLParser";
import { DropFunctionStatementContext } from "./SQLParser";
import { ReloadFunctionsStatementContext } from "./SQLParser";
import { CreateMacroStatementContext } from "./SQLParser";
import { DropMacroStatementContext } from "./SQLParser";
import { CreateViewStatementContext } from "./SQLParser";
import { ViewPartitionContext } from "./SQLParser";
import { ViewOrganizationContext } from "./SQLParser";
import { ViewClusterSpecContext } from "./SQLParser";
import { ViewComplexSpecContext } from "./SQLParser";
import { ViewDistSpecContext } from "./SQLParser";
import { ViewSortSpecContext } from "./SQLParser";
import { DropViewStatementContext } from "./SQLParser";
import { CreateMaterializedViewStatementContext } from "./SQLParser";
import { DropMaterializedViewStatementContext } from "./SQLParser";
import { CreateScheduledQueryStatementContext } from "./SQLParser";
import { DropScheduledQueryStatementContext } from "./SQLParser";
import { AlterScheduledQueryStatementContext } from "./SQLParser";
import { AlterScheduledQueryChangeContext } from "./SQLParser";
import { ScheduleSpecContext } from "./SQLParser";
import { ExecutedAsSpecContext } from "./SQLParser";
import { DefinedAsSpecContext } from "./SQLParser";
import { ShowFunctionIdentifierContext } from "./SQLParser";
import { ShowStmtIdentifierContext } from "./SQLParser";
import { TableCommentContext } from "./SQLParser";
import { TableUsingContext } from "./SQLParser";
import { CreateTablePartitionSpecContext } from "./SQLParser";
import { CreateTablePartitionColumnTypeSpecContext } from "./SQLParser";
import { CreateTablePartitionColumnSpecContext } from "./SQLParser";
import { PartitionTransformSpecContext } from "./SQLParser";
import { ColumnNameTransformConstraintContext } from "./SQLParser";
import { PartitionTransformTypeContext } from "./SQLParser";
import { TableBucketsContext } from "./SQLParser";
import { TableImplBucketsContext } from "./SQLParser";
import { TableSkewedContext } from "./SQLParser";
import { RowFormatContext } from "./SQLParser";
import { RecordReaderContext } from "./SQLParser";
import { RecordWriterContext } from "./SQLParser";
import { RowFormatSerdeContext } from "./SQLParser";
import { RowFormatDelimitedContext } from "./SQLParser";
import { TableRowFormatContext } from "./SQLParser";
import { TablePropertiesPrefixedContext } from "./SQLParser";
import { TablePropertiesContext } from "./SQLParser";
import { TablePropertiesListContext } from "./SQLParser";
import { KeyValuePropertyContext } from "./SQLParser";
import { KeyPropertyContext } from "./SQLParser";
import { TableRowFormatFieldIdentifierContext } from "./SQLParser";
import { TableRowFormatCollItemsIdentifierContext } from "./SQLParser";
import { TableRowFormatMapKeysIdentifierContext } from "./SQLParser";
import { TableRowFormatLinesIdentifierContext } from "./SQLParser";
import { TableRowNullFormatContext } from "./SQLParser";
import { TableFileFormatContext } from "./SQLParser";
import { TableLocationContext } from "./SQLParser";
import { ColumnNameTypeListContext } from "./SQLParser";
import { ColumnNameTypeOrConstraintListContext } from "./SQLParser";
import { ColumnNameColonTypeListContext } from "./SQLParser";
import { ColumnNameListContext } from "./SQLParser";
import { ColumnNameContext } from "./SQLParser";
import { ExtColumnNameContext } from "./SQLParser";
import { ColumnNameOrderListContext } from "./SQLParser";
import { ColumnParenthesesListContext } from "./SQLParser";
import { EnableValidateSpecificationContext } from "./SQLParser";
import { EnableSpecificationContext } from "./SQLParser";
import { ValidateSpecificationContext } from "./SQLParser";
import { EnforcedSpecificationContext } from "./SQLParser";
import { RelySpecificationContext } from "./SQLParser";
import { CreateConstraintContext } from "./SQLParser";
import { AlterConstraintWithNameContext } from "./SQLParser";
import { TableLevelConstraintContext } from "./SQLParser";
import { PkUkConstraintContext } from "./SQLParser";
import { CheckConstraintContext } from "./SQLParser";
import { CreateForeignKeyContext } from "./SQLParser";
import { AlterForeignKeyWithNameContext } from "./SQLParser";
import { SkewedValueElementContext } from "./SQLParser";
import { SkewedColumnValuePairListContext } from "./SQLParser";
import { SkewedColumnValuePairContext } from "./SQLParser";
import { SkewedColumnValuesContext } from "./SQLParser";
import { SkewedColumnValueContext } from "./SQLParser";
import { SkewedValueLocationElementContext } from "./SQLParser";
import { OrderSpecificationContext } from "./SQLParser";
import { NullOrderingContext } from "./SQLParser";
import { ColumnNameOrderContext } from "./SQLParser";
import { ColumnNameCommentListContext } from "./SQLParser";
import { ColumnNameCommentContext } from "./SQLParser";
import { OrderSpecificationRewriteContext } from "./SQLParser";
import { ColumnRefOrderContext } from "./SQLParser";
import { ColumnNameTypeContext } from "./SQLParser";
import { ColumnNameTypeOrConstraintContext } from "./SQLParser";
import { TableConstraintContext } from "./SQLParser";
import { ColumnNameTypeConstraintContext } from "./SQLParser";
import { ColumnConstraintContext } from "./SQLParser";
import { ForeignKeyConstraintContext } from "./SQLParser";
import { ColConstraintContext } from "./SQLParser";
import { AlterColumnConstraintContext } from "./SQLParser";
import { AlterForeignKeyConstraintContext } from "./SQLParser";
import { AlterColConstraintContext } from "./SQLParser";
import { ColumnConstraintTypeContext } from "./SQLParser";
import { DefaultValContext } from "./SQLParser";
import { TableConstraintTypeContext } from "./SQLParser";
import { ConstraintOptsCreateContext } from "./SQLParser";
import { ConstraintOptsAlterContext } from "./SQLParser";
import { ColumnNameColonTypeContext } from "./SQLParser";
import { ColTypeContext } from "./SQLParser";
import { ColTypeListContext } from "./SQLParser";
import { TypeContext } from "./SQLParser";
import { PrimitiveTypeContext } from "./SQLParser";
import { ListTypeContext } from "./SQLParser";
import { StructTypeContext } from "./SQLParser";
import { MapTypeContext } from "./SQLParser";
import { UnionTypeContext } from "./SQLParser";
import { SetOperatorContext } from "./SQLParser";
import { QueryStatementExpressionContext } from "./SQLParser";
import { QueryStatementExpressionBodyContext } from "./SQLParser";
import { WithClauseContext } from "./SQLParser";
import { CteStatementContext } from "./SQLParser";
import { FromStatementContext } from "./SQLParser";
import { SingleFromStatementContext } from "./SQLParser";
import { RegularBodyContext } from "./SQLParser";
import { AtomSelectStatementContext } from "./SQLParser";
import { SelectStatementContext } from "./SQLParser";
import { SetOpSelectStatementContext } from "./SQLParser";
import { SelectStatementWithCTEContext } from "./SQLParser";
import { BodyContext } from "./SQLParser";
import { InsertClauseContext } from "./SQLParser";
import { DestinationContext } from "./SQLParser";
import { LimitClauseContext } from "./SQLParser";
import { DeleteStatementContext } from "./SQLParser";
import { ColumnAssignmentClauseContext } from "./SQLParser";
import { PrecedencePlusExpressionOrDefaultContext } from "./SQLParser";
import { SetColumnsClauseContext } from "./SQLParser";
import { UpdateStatementContext } from "./SQLParser";
import { SqlTransactionStatementContext } from "./SQLParser";
import { StartTransactionStatementContext } from "./SQLParser";
import { TransactionModeContext } from "./SQLParser";
import { TransactionAccessModeContext } from "./SQLParser";
import { IsolationLevelContext } from "./SQLParser";
import { LevelOfIsolationContext } from "./SQLParser";
import { CommitStatementContext } from "./SQLParser";
import { RollbackStatementContext } from "./SQLParser";
import { SetAutoCommitStatementContext } from "./SQLParser";
import { AbortTransactionStatementContext } from "./SQLParser";
import { AbortCompactionStatementContext } from "./SQLParser";
import { MergeStatementContext } from "./SQLParser";
import { WhenClausesContext } from "./SQLParser";
import { WhenNotMatchedClauseContext } from "./SQLParser";
import { WhenMatchedAndClauseContext } from "./SQLParser";
import { WhenMatchedThenClauseContext } from "./SQLParser";
import { UpdateOrDeleteContext } from "./SQLParser";
import { KillQueryStatementContext } from "./SQLParser";
import { CompactionIdContext } from "./SQLParser";
import { CompactionPoolContext } from "./SQLParser";
import { CompactionTypeContext } from "./SQLParser";
import { CompactionStatusContext } from "./SQLParser";
import { AlterStatementContext } from "./SQLParser";
import { AlterTableStatementSuffixContext } from "./SQLParser";
import { AlterTblPartitionStatementSuffixContext } from "./SQLParser";
import { AlterStatementPartitionKeyTypeContext } from "./SQLParser";
import { AlterViewStatementSuffixContext } from "./SQLParser";
import { AlterMaterializedViewStatementSuffixContext } from "./SQLParser";
import { AlterMaterializedViewSuffixRewriteContext } from "./SQLParser";
import { AlterMaterializedViewSuffixRebuildContext } from "./SQLParser";
import { AlterDatabaseStatementSuffixContext } from "./SQLParser";
import { AlterDatabaseSuffixPropertiesContext } from "./SQLParser";
import { AlterScopePropertiesContext } from "./SQLParser";
import { AlterDatabaseSuffixSetOwnerContext } from "./SQLParser";
import { AlterDatabaseSuffixSetLocationContext } from "./SQLParser";
import { AlterDatabaseSuffixSetManagedLocationContext } from "./SQLParser";
import { AlterStatementSuffixRenameContext } from "./SQLParser";
import { AlterStatementSuffixAddColContext } from "./SQLParser";
import { AlterStatementSuffixAddConstraintContext } from "./SQLParser";
import { AlterStatementSuffixUpdateColumnsContext } from "./SQLParser";
import { AlterStatementSuffixDropConstraintContext } from "./SQLParser";
import { AlterStatementSuffixRenameColContext } from "./SQLParser";
import { AlterStatementSuffixUpdateStatsColContext } from "./SQLParser";
import { AlterStatementSuffixUpdateStatsContext } from "./SQLParser";
import { AlterStatementChangeColPositionContext } from "./SQLParser";
import { AlterStatementSuffixAddPartitionsContext } from "./SQLParser";
import { AlterStatementSuffixAddPartitionsElementContext } from "./SQLParser";
import { AlterStatementSuffixTouchContext } from "./SQLParser";
import { AlterStatementSuffixArchiveContext } from "./SQLParser";
import { AlterStatementSuffixUnArchiveContext } from "./SQLParser";
import { PartitionLocationContext } from "./SQLParser";
import { AlterStatementSuffixDropPartitionsContext } from "./SQLParser";
import { AlterStatementSuffixPropertiesContext } from "./SQLParser";
import { AlterViewSuffixPropertiesContext } from "./SQLParser";
import { AlterStatementSuffixSerdePropertiesContext } from "./SQLParser";
import { TablePartitionPrefixContext } from "./SQLParser";
import { AlterStatementSuffixFileFormatContext } from "./SQLParser";
import { AlterStatementSuffixClusterbySortbyContext } from "./SQLParser";
import { AlterTblPartitionStatementSuffixSkewedLocationContext } from "./SQLParser";
import { SkewedLocationsContext } from "./SQLParser";
import { SkewedLocationsListContext } from "./SQLParser";
import { SkewedLocationMapContext } from "./SQLParser";
import { AlterStatementSuffixLocationContext } from "./SQLParser";
import { AlterStatementSuffixSkewedbyContext } from "./SQLParser";
import { AlterStatementSuffixExchangePartitionContext } from "./SQLParser";
import { AlterStatementSuffixRenamePartContext } from "./SQLParser";
import { AlterStatementSuffixStatsPartContext } from "./SQLParser";
import { AlterStatementSuffixMergeFilesContext } from "./SQLParser";
import { AlterStatementSuffixBucketNumContext } from "./SQLParser";
import { BlockingContext } from "./SQLParser";
import { CompactPoolContext } from "./SQLParser";
import { AlterStatementSuffixCompactContext } from "./SQLParser";
import { AlterStatementSuffixSetOwnerContext } from "./SQLParser";
import { AlterStatementSuffixSetPartSpecContext } from "./SQLParser";
import { AlterStatementSuffixExecuteContext } from "./SQLParser";
import { FileFormatContext } from "./SQLParser";
import { AlterDataConnectorStatementSuffixContext } from "./SQLParser";
import { AlterDataConnectorSuffixPropertiesContext } from "./SQLParser";
import { AlterDataConnectorSuffixSetOwnerContext } from "./SQLParser";
import { AlterDataConnectorSuffixSetUrlContext } from "./SQLParser";
import { LikeTableOrFileContext } from "./SQLParser";
import { CreateTableStatementContext } from "./SQLParser";
import { CreateDataConnectorStatementContext } from "./SQLParser";
import { DataConnectorCommentContext } from "./SQLParser";
import { DataConnectorUrlContext } from "./SQLParser";
import { DataConnectorTypeContext } from "./SQLParser";
import { DcPropertiesContext } from "./SQLParser";
import { DropDataConnectorStatementContext } from "./SQLParser";
import { TableAllColumnsContext } from "./SQLParser";
import { TableOrColumnContext } from "./SQLParser";
import { DefaultValueContext } from "./SQLParser";
import { ExpressionListContext } from "./SQLParser";
import { AliasListContext } from "./SQLParser";
import { FromClauseContext } from "./SQLParser";
import { FromSourceContext } from "./SQLParser";
import { AtomjoinSourceContext } from "./SQLParser";
import { JoinSourceContext } from "./SQLParser";
import { JoinSourcePartContext } from "./SQLParser";
import { UniqueJoinSourceContext } from "./SQLParser";
import { UniqueJoinExprContext } from "./SQLParser";
import { UniqueJoinTokenContext } from "./SQLParser";
import { JoinTokenContext } from "./SQLParser";
import { LateralViewContext } from "./SQLParser";
import { TableAliasContext } from "./SQLParser";
import { TableBucketSampleContext } from "./SQLParser";
import { SplitSampleContext } from "./SQLParser";
import { TableSampleContext } from "./SQLParser";
import { TableSourceContext } from "./SQLParser";
import { AsOfClauseContext } from "./SQLParser";
import { UniqueJoinTableSourceContext } from "./SQLParser";
import { TableNameContext } from "./SQLParser";
import { ViewNameContext } from "./SQLParser";
import { SubQuerySourceContext } from "./SQLParser";
import { PartitioningSpecContext } from "./SQLParser";
import { PartitionTableFunctionSourceContext } from "./SQLParser";
import { PartitionedTableFunctionContext } from "./SQLParser";
import { WhereClauseContext } from "./SQLParser";
import { SearchConditionContext } from "./SQLParser";
import { ValuesSourceContext } from "./SQLParser";
import { ValuesClauseContext } from "./SQLParser";
import { ValuesTableConstructorContext } from "./SQLParser";
import { ValueRowConstructorContext } from "./SQLParser";
import { FirstValueRowConstructorContext } from "./SQLParser";
import { VirtualTableSourceContext } from "./SQLParser";
import { SelectClauseContext } from "./SQLParser";
import { All_distinctContext } from "./SQLParser";
import { SelectListContext } from "./SQLParser";
import { SelectTrfmClauseContext } from "./SQLParser";
import { SelectItemContext } from "./SQLParser";
import { TrfmClauseContext } from "./SQLParser";
import { SelectExpressionContext } from "./SQLParser";
import { SelectExpressionListContext } from "./SQLParser";
import { Window_clauseContext } from "./SQLParser";
import { Window_defnContext } from "./SQLParser";
import { Window_specificationContext } from "./SQLParser";
import { Window_frameContext } from "./SQLParser";
import { Window_range_expressionContext } from "./SQLParser";
import { Window_value_expressionContext } from "./SQLParser";
import { Window_frame_start_boundaryContext } from "./SQLParser";
import { Window_frame_boundaryContext } from "./SQLParser";
import { GroupByClauseContext } from "./SQLParser";
import { Groupby_expressionContext } from "./SQLParser";
import { GroupByEmptyContext } from "./SQLParser";
import { RollupStandardContext } from "./SQLParser";
import { RollupOldSyntaxContext } from "./SQLParser";
import { GroupingSetExpressionContext } from "./SQLParser";
import { GroupingSetExpressionMultipleContext } from "./SQLParser";
import { GroupingExpressionSingleContext } from "./SQLParser";
import { HavingClauseContext } from "./SQLParser";
import { QualifyClauseContext } from "./SQLParser";
import { HavingConditionContext } from "./SQLParser";
import { ExpressionsInParenthesisContext } from "./SQLParser";
import { ExpressionsNotInParenthesisContext } from "./SQLParser";
import { ExpressionPartContext } from "./SQLParser";
import { ExpressionOrDefaultContext } from "./SQLParser";
import { FirstExpressionsWithAliasContext } from "./SQLParser";
import { ExpressionWithAliasContext } from "./SQLParser";
import { ExpressionsContext } from "./SQLParser";
import { ColumnRefOrderInParenthesisContext } from "./SQLParser";
import { ColumnRefOrderNotInParenthesisContext } from "./SQLParser";
import { OrderByClauseContext } from "./SQLParser";
import { ClusterByClauseContext } from "./SQLParser";
import { PartitionByClauseContext } from "./SQLParser";
import { DistributeByClauseContext } from "./SQLParser";
import { SortByClauseContext } from "./SQLParser";
import { TrimFunctionContext } from "./SQLParser";
import { Function_Context } from "./SQLParser";
import { Null_treatmentContext } from "./SQLParser";
import { FunctionNameContext } from "./SQLParser";
import { CastExpressionContext } from "./SQLParser";
import { CaseExpressionContext } from "./SQLParser";
import { WhenExpressionContext } from "./SQLParser";
import { FloorExpressionContext } from "./SQLParser";
import { FloorDateQualifiersContext } from "./SQLParser";
import { ExtractExpressionContext } from "./SQLParser";
import { TimeQualifiersContext } from "./SQLParser";
import { ConstantContext } from "./SQLParser";
import { PrepareStmtParamContext } from "./SQLParser";
import { ParameterIdxContext } from "./SQLParser";
import { StringLiteralSequenceContext } from "./SQLParser";
import { CharSetStringLiteralContext } from "./SQLParser";
import { DateLiteralContext } from "./SQLParser";
import { TimestampLiteralContext } from "./SQLParser";
import { TimestampLocalTZLiteralContext } from "./SQLParser";
import { IntervalValueContext } from "./SQLParser";
import { IntervalLiteralContext } from "./SQLParser";
import { IntervalExpressionContext } from "./SQLParser";
import { IntervalQualifiersContext } from "./SQLParser";
import { ExpressionContext } from "./SQLParser";
import { AtomExpressionContext } from "./SQLParser";
import { PrecedenceFieldExpressionContext } from "./SQLParser";
import { PrecedenceUnaryOperatorContext } from "./SQLParser";
import { PrecedenceUnaryPrefixExpressionContext } from "./SQLParser";
import { PrecedenceBitwiseXorOperatorContext } from "./SQLParser";
import { PrecedenceBitwiseXorExpressionContext } from "./SQLParser";
import { PrecedenceStarOperatorContext } from "./SQLParser";
import { PrecedenceStarExpressionContext } from "./SQLParser";
import { PrecedencePlusOperatorContext } from "./SQLParser";
import { PrecedencePlusExpressionContext } from "./SQLParser";
import { PrecedenceConcatenateOperatorContext } from "./SQLParser";
import { PrecedenceConcatenateExpressionContext } from "./SQLParser";
import { PrecedenceAmpersandOperatorContext } from "./SQLParser";
import { PrecedenceAmpersandExpressionContext } from "./SQLParser";
import { PrecedenceBitwiseOrOperatorContext } from "./SQLParser";
import { PrecedenceBitwiseOrExpressionContext } from "./SQLParser";
import { PrecedenceRegexpOperatorContext } from "./SQLParser";
import { PrecedenceSimilarOperatorContext } from "./SQLParser";
import { SubQueryExpressionContext } from "./SQLParser";
import { PrecedenceSimilarExpressionContext } from "./SQLParser";
import { PrecedenceSimilarExpressionMainContext } from "./SQLParser";
import { PrecedenceSimilarExpressionPartContext } from "./SQLParser";
import { PrecedenceSimilarExpressionAtomContext } from "./SQLParser";
import { PrecedenceSimilarExpressionQuantifierPredicateContext } from "./SQLParser";
import { QuantifierTypeContext } from "./SQLParser";
import { PrecedenceSimilarExpressionInContext } from "./SQLParser";
import { PrecedenceSimilarExpressionPartNotContext } from "./SQLParser";
import { PrecedenceDistinctOperatorContext } from "./SQLParser";
import { PrecedenceEqualOperatorContext } from "./SQLParser";
import { PrecedenceEqualExpressionContext } from "./SQLParser";
import { IsConditionContext } from "./SQLParser";
import { PrecedenceUnarySuffixExpressionContext } from "./SQLParser";
import { PrecedenceNotOperatorContext } from "./SQLParser";
import { PrecedenceNotExpressionContext } from "./SQLParser";
import { PrecedenceAndOperatorContext } from "./SQLParser";
import { PrecedenceAndExpressionContext } from "./SQLParser";
import { PrecedenceOrOperatorContext } from "./SQLParser";
import { PrecedenceOrExpressionContext } from "./SQLParser";
import { BooleanValueContext } from "./SQLParser";
import { BooleanValueTokContext } from "./SQLParser";
import { TableOrPartitionContext } from "./SQLParser";
import { PartitionSpecContext } from "./SQLParser";
import { PartitionValContext } from "./SQLParser";
import { PartitionSelectorSpecContext } from "./SQLParser";
import { PartitionSelectorValContext } from "./SQLParser";
import { PartitionSelectorOperatorContext } from "./SQLParser";
import { SubQuerySelectorOperatorContext } from "./SQLParser";
import { SysFuncNamesContext } from "./SQLParser";
import { DescFuncNamesContext } from "./SQLParser";
import { Id_Context } from "./SQLParser";
import { FunctionIdentifierContext } from "./SQLParser";
import { PrincipalIdentifierContext } from "./SQLParser";
import { NonReservedContext } from "./SQLParser";
import { Sql11ReservedKeywordsUsedAsFunctionNameContext } from "./SQLParser";
import { HintContext } from "./SQLParser";
import { HintListContext } from "./SQLParser";
import { HintItemContext } from "./SQLParser";
import { HintNameContext } from "./SQLParser";
import { HintArgsContext } from "./SQLParser";
import { HintArgNameContext } from "./SQLParser";
import { PrepareStatementContext } from "./SQLParser";
import { ExecuteStatementContext } from "./SQLParser";
import { ExecuteParamListContext } from "./SQLParser";
import { ResourcePlanDdlStatementsContext } from "./SQLParser";
import { RpAssignContext } from "./SQLParser";
import { RpAssignListContext } from "./SQLParser";
import { RpUnassignContext } from "./SQLParser";
import { RpUnassignListContext } from "./SQLParser";
import { CreateResourcePlanStatementContext } from "./SQLParser";
import { WithReplaceContext } from "./SQLParser";
import { ActivateContext } from "./SQLParser";
import { EnableContext } from "./SQLParser";
import { DisableContext } from "./SQLParser";
import { UnmanagedContext } from "./SQLParser";
import { AlterResourcePlanStatementContext } from "./SQLParser";
import { GlobalWmStatementContext } from "./SQLParser";
import { ReplaceResourcePlanStatementContext } from "./SQLParser";
import { DropResourcePlanStatementContext } from "./SQLParser";
import { PoolPathContext } from "./SQLParser";
import { TriggerExpressionContext } from "./SQLParser";
import { TriggerExpressionStandaloneContext } from "./SQLParser";
import { TriggerOrExpressionContext } from "./SQLParser";
import { TriggerAndExpressionContext } from "./SQLParser";
import { TriggerAtomExpressionContext } from "./SQLParser";
import { TriggerLiteralContext } from "./SQLParser";
import { ComparisionOperatorContext } from "./SQLParser";
import { TriggerActionExpressionContext } from "./SQLParser";
import { TriggerActionExpressionStandaloneContext } from "./SQLParser";
import { CreateTriggerStatementContext } from "./SQLParser";
import { AlterTriggerStatementContext } from "./SQLParser";
import { DropTriggerStatementContext } from "./SQLParser";
import { PoolAssignContext } from "./SQLParser";
import { PoolAssignListContext } from "./SQLParser";
import { CreatePoolStatementContext } from "./SQLParser";
import { AlterPoolStatementContext } from "./SQLParser";
import { DropPoolStatementContext } from "./SQLParser";
import { CreateMappingStatementContext } from "./SQLParser";
import { AlterMappingStatementContext } from "./SQLParser";
import { DropMappingStatementContext } from "./SQLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlStatement?: (ctx: SqlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.explainStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainStatement?: (ctx: ExplainStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainOption?: (ctx: ExplainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.vectorizationOnly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVectorizationOnly?: (ctx: VectorizationOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.vectorizatonDetail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.execStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStatement?: (ctx: ExecStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.loadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStatement?: (ctx: LoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replicationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationClause?: (ctx: ReplicationClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStatement?: (ctx: ExportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replDumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplDumpStatement?: (ctx: ReplDumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replDbPolicy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplDbPolicy?: (ctx: ReplDbPolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replLoadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplLoadStatement?: (ctx: ReplLoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replConfigs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplConfigs?: (ctx: ReplConfigsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replConfigsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplConfigsList?: (ctx: ReplConfigsListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replStatusStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplStatusStatement?: (ctx: ReplStatusStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.restrictOrCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.force`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForce?: (ctx: ForceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rewriteEnabled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteEnabled?: (ctx: RewriteEnabledContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rewriteDisabled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteDisabled?: (ctx: RewriteDisabledContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.storedAsDirs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStoredAsDirs?: (ctx: StoredAsDirsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.orReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrReplace?: (ctx: OrReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dbLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbLocation?: (ctx: DbLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dbManagedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbManagedLocation?: (ctx: DbManagedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dbProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbProperties?: (ctx: DbPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dbPropertiesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbPropertiesList?: (ctx: DbPropertiesListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dbConnectorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbConnectorName?: (ctx: DbConnectorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.databaseComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabaseComment?: (ctx: DatabaseCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTableStatement?: (ctx: DropTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.inputFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputFileFormat?: (ctx: InputFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tabTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabTypeExpr?: (ctx: TabTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartTypeExpr?: (ctx: PartTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.descStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescStatement?: (ctx: DescStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.analyzeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.from_in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_in?: (ctx: From_inContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.db_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_schema?: (ctx: Db_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatement?: (ctx: ShowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.lockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStatement?: (ctx: LockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.lockDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockDatabase?: (ctx: LockDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.lockMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockMode?: (ctx: LockModeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.unlockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockStatement?: (ctx: UnlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.unlockDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockDatabase?: (ctx: UnlockDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createRoleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropRoleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRoleStatement?: (ctx: DropRoleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.grantPrivileges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantPrivileges?: (ctx: GrantPrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.revokePrivileges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokePrivileges?: (ctx: RevokePrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.grantRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRole?: (ctx: GrantRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.revokeRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRole?: (ctx: RevokeRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showRoleGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showRoles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showCurrentRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.setRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showRolePrincipals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privilegeObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeObject?: (ctx: PrivilegeObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivObject?: (ctx: PrivObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privObjectCols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivObjectCols?: (ctx: PrivObjectColsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privilegeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeList?: (ctx: PrivilegeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privlegeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivlegeDef?: (ctx: PrivlegeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.privilegeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeType?: (ctx: PrivilegeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.principalSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.principalName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalName?: (ctx: PrincipalNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.withGrantOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithGrantOption?: (ctx: WithGrantOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.grantOptionFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantOptionFor?: (ctx: GrantOptionForContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.adminOptionFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdminOptionFor?: (ctx: AdminOptionForContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.withAdminOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithAdminOption?: (ctx: WithAdminOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.metastoreCheck`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetastoreCheck?: (ctx: MetastoreCheckContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.resourceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceType?: (ctx: ResourceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createMacroStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropMacroStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMacroStatement?: (ctx: DropMacroStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateViewStatement?: (ctx: CreateViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewPartition?: (ctx: ViewPartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewOrganization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewOrganization?: (ctx: ViewOrganizationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewClusterSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewClusterSpec?: (ctx: ViewClusterSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewComplexSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewComplexSpec?: (ctx: ViewComplexSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewDistSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewDistSpec?: (ctx: ViewDistSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewSortSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewSortSpec?: (ctx: ViewSortSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropViewStatement?: (ctx: DropViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.scheduleSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheduleSpec?: (ctx: ScheduleSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.executedAsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.definedAsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.showStmtIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableComment?: (ctx: TableCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableUsing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableUsing?: (ctx: TableUsingContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionTransformSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionTransformType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableBuckets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableBuckets?: (ctx: TableBucketsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableImplBuckets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableImplBuckets?: (ctx: TableImplBucketsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableSkewed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSkewed?: (ctx: TableSkewedContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormat?: (ctx: RowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.recordReader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordReader?: (ctx: RecordReaderContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.recordWriter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordWriter?: (ctx: RecordWriterContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rowFormatSerde`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rowFormatDelimited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableRowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormat?: (ctx: TableRowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperties?: (ctx: TablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tablePropertiesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertiesList?: (ctx: TablePropertiesListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.keyValueProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValueProperty?: (ctx: KeyValuePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.keyProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyProperty?: (ctx: KeyPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableRowNullFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFileFormat?: (ctx: TableFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLocation?: (ctx: TableLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameList?: (ctx: ColumnNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.extColumnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtColumnName?: (ctx: ExtColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameOrderList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnParenthesesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.enableValidateSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.enableSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableSpecification?: (ctx: EnableSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.validateSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateSpecification?: (ctx: ValidateSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.enforcedSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.relySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelySpecification?: (ctx: RelySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateConstraint?: (ctx: CreateConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterConstraintWithName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableLevelConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.pkUkConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkUkConstraint?: (ctx: PkUkConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.checkConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckConstraint?: (ctx: CheckConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createForeignKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateForeignKey?: (ctx: CreateForeignKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedValueElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedValueElement?: (ctx: SkewedValueElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedColumnValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedColumnValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.orderSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecification?: (ctx: OrderSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.nullOrdering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullOrdering?: (ctx: NullOrderingContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameOrder?: (ctx: ColumnNameOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameCommentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameComment?: (ctx: ColumnNameCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnRefOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrder?: (ctx: ColumnRefOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameType?: (ctx: ColumnNameTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.colConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColConstraint?: (ctx: ColConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterColumnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterColConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColConstraint?: (ctx: AlterColConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnConstraintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.defaultVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultVal?: (ctx: DefaultValContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableConstraintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraintType?: (ctx: TableConstraintTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.constraintOptsCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.constraintOptsAlter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnNameColonType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.colType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColType?: (ctx: ColTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.colTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColTypeList?: (ctx: ColTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.listType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListType?: (ctx: ListTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.structType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructType?: (ctx: StructTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.unionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionType?: (ctx: UnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.setOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperator?: (ctx: SetOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.queryStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.cteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCteStatement?: (ctx: CteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.fromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromStatement?: (ctx: FromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.singleFromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleFromStatement?: (ctx: SingleFromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.regularBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegularBody?: (ctx: RegularBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.atomSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.setOpSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.insertClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertClause?: (ctx: InsertClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.destination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestination?: (ctx: DestinationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnAssignmentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.setColumnsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetColumnsClause?: (ctx: SetColumnsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.startTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.isolationLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.commitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommitStatement?: (ctx: CommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rollbackStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollbackStatement?: (ctx: RollbackStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.abortTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.abortCompactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.whenClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClauses?: (ctx: WhenClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.updateOrDelete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.killQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillQueryStatement?: (ctx: KillQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.compactionId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionId?: (ctx: CompactionIdContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.compactionPool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionPool?: (ctx: CompactionPoolContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.compactionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionType?: (ctx: CompactionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.compactionStatus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionStatus?: (ctx: CompactionStatusContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatement?: (ctx: AlterStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterScopeProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScopeProperties?: (ctx: AlterScopePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionLocation?: (ctx: PartitionLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedLocations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocations?: (ctx: SkewedLocationsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedLocationsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.skewedLocationMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.blocking`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlocking?: (ctx: BlockingContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.compactPool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactPool?: (ctx: CompactPoolContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileFormat?: (ctx: FileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.likeTableOrFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dataConnectorComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorComment?: (ctx: DataConnectorCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dataConnectorUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dataConnectorType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorType?: (ctx: DataConnectorTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dcProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcProperties?: (ctx: DcPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableAllColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAllColumns?: (ctx: TableAllColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableOrColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrColumn?: (ctx: TableOrColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.aliasList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasList?: (ctx: AliasListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.fromSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSource?: (ctx: FromSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.atomjoinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomjoinSource?: (ctx: AtomjoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.joinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSource?: (ctx: JoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.joinSourcePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSourcePart?: (ctx: JoinSourcePartContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.uniqueJoinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.uniqueJoinToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.joinToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinToken?: (ctx: JoinTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.lateralView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateralView?: (ctx: LateralViewContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableBucketSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableBucketSample?: (ctx: TableBucketSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.splitSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSplitSample?: (ctx: SplitSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSample?: (ctx: TableSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSource?: (ctx: TableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.asOfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsOfClause?: (ctx: AsOfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.viewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewName?: (ctx: ViewNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.subQuerySource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuerySource?: (ctx: SubQuerySourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitioningSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitioningSpec?: (ctx: PartitioningSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionedTableFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.searchCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchCondition?: (ctx: SearchConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.valuesSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesSource?: (ctx: ValuesSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.valuesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesClause?: (ctx: ValuesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.valuesTableConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.valueRowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueRowConstructor?: (ctx: ValueRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.virtualTableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtualTableSource?: (ctx: VirtualTableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.all_distinct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_distinct?: (ctx: All_distinctContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectList?: (ctx: SelectListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectTrfmClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.trfmClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrfmClause?: (ctx: TrfmClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpression?: (ctx: SelectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.selectExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpressionList?: (ctx: SelectExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_clause?: (ctx: Window_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_defn?: (ctx: Window_defnContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_specification?: (ctx: Window_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_frame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame?: (ctx: Window_frameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_range_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_range_expression?: (ctx: Window_range_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_value_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_value_expression?: (ctx: Window_value_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.window_frame_boundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.groupby_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_expression?: (ctx: Groupby_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.groupByEmpty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByEmpty?: (ctx: GroupByEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rollupStandard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupStandard?: (ctx: RollupStandardContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rollupOldSyntax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.groupingSetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.qualifyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifyClause?: (ctx: QualifyClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.havingCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingCondition?: (ctx: HavingConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionPart?: (ctx: ExpressionPartContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressionWithAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.clusterByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterByClause?: (ctx: ClusterByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.distributeByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistributeByClause?: (ctx: DistributeByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.sortByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortByClause?: (ctx: SortByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.trimFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimFunction?: (ctx: TrimFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.null_treatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_treatment?: (ctx: Null_treatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.caseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExpression?: (ctx: CaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.whenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenExpression?: (ctx: WhenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.floorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorExpression?: (ctx: FloorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.floorDateQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.extractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtractExpression?: (ctx: ExtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.timeQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeQualifiers?: (ctx: TimeQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.prepareStmtParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.parameterIdx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterIdx?: (ctx: ParameterIdxContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.stringLiteralSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.charSetStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dateLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateLiteral?: (ctx: DateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.timestampLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampLiteral?: (ctx: TimestampLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.intervalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.intervalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalExpression?: (ctx: IntervalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.intervalQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.atomExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpression?: (ctx: AtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceStarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceStarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedencePlusOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedencePlusExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.subQueryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryExpression?: (ctx: SubQueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.quantifierType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifierType?: (ctx: QuantifierTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.isCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsCondition?: (ctx: IsConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceNotOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceNotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceAndOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.precedenceOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.booleanValueTok`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValueTok?: (ctx: BooleanValueTokContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.tableOrPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrPartition?: (ctx: TableOrPartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionVal?: (ctx: PartitionValContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionSelectorVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.sysFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSysFuncNames?: (ctx: SysFuncNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.descFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescFuncNames?: (ctx: DescFuncNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.id_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_?: (ctx: Id_Context) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.principalIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHint?: (ctx: HintContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.hintList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintList?: (ctx: HintListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.hintItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintItem?: (ctx: HintItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.hintName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintName?: (ctx: HintNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.hintArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintArgs?: (ctx: HintArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.hintArgName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintArgName?: (ctx: HintArgNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.prepareStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStatement?: (ctx: PrepareStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.executeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.executeParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteParamList?: (ctx: ExecuteParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rpAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpAssign?: (ctx: RpAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rpAssignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpAssignList?: (ctx: RpAssignListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rpUnassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpUnassign?: (ctx: RpUnassignContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.rpUnassignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpUnassignList?: (ctx: RpUnassignListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.withReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithReplace?: (ctx: WithReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.activate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivate?: (ctx: ActivateContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.enable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable?: (ctx: EnableContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.disable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisable?: (ctx: DisableContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.unmanaged`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnmanaged?: (ctx: UnmanagedContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.globalWmStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.poolPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolPath?: (ctx: PoolPathContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerExpression?: (ctx: TriggerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerAtomExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerLiteral?: (ctx: TriggerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.comparisionOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisionOperator?: (ctx: ComparisionOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerActionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.poolAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolAssign?: (ctx: PoolAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.poolAssignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolAssignList?: (ctx: PoolAssignListContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPoolStatement?: (ctx: DropPoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.createMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.alterMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SQLParser.dropMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMappingStatement?: (ctx: DropMappingStatementContext) => Result;
}

