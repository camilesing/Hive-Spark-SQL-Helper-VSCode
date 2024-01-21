// Generated from gen/SQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SQLParser`.
 */
export interface SQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SQLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlStatement?: (ctx: SqlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.sqlStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlStatement?: (ctx: SqlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.explainStatement`.
	 * @param ctx the parse tree
	 */
	enterExplainStatement?: (ctx: ExplainStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.explainStatement`.
	 * @param ctx the parse tree
	 */
	exitExplainStatement?: (ctx: ExplainStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	enterExplainOption?: (ctx: ExplainOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.explainOption`.
	 * @param ctx the parse tree
	 */
	exitExplainOption?: (ctx: ExplainOptionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.vectorizationOnly`.
	 * @param ctx the parse tree
	 */
	enterVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.vectorizationOnly`.
	 * @param ctx the parse tree
	 */
	exitVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.vectorizatonDetail`.
	 * @param ctx the parse tree
	 */
	enterVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.vectorizatonDetail`.
	 * @param ctx the parse tree
	 */
	exitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.execStatement`.
	 * @param ctx the parse tree
	 */
	enterExecStatement?: (ctx: ExecStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.execStatement`.
	 * @param ctx the parse tree
	 */
	exitExecStatement?: (ctx: ExecStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.loadStatement`.
	 * @param ctx the parse tree
	 */
	enterLoadStatement?: (ctx: LoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.loadStatement`.
	 * @param ctx the parse tree
	 */
	exitLoadStatement?: (ctx: LoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replicationClause`.
	 * @param ctx the parse tree
	 */
	enterReplicationClause?: (ctx: ReplicationClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replicationClause`.
	 * @param ctx the parse tree
	 */
	exitReplicationClause?: (ctx: ReplicationClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	enterExportStatement?: (ctx: ExportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.exportStatement`.
	 * @param ctx the parse tree
	 */
	exitExportStatement?: (ctx: ExportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replDumpStatement`.
	 * @param ctx the parse tree
	 */
	enterReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replDumpStatement`.
	 * @param ctx the parse tree
	 */
	exitReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replDbPolicy`.
	 * @param ctx the parse tree
	 */
	enterReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replDbPolicy`.
	 * @param ctx the parse tree
	 */
	exitReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replLoadStatement`.
	 * @param ctx the parse tree
	 */
	enterReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replLoadStatement`.
	 * @param ctx the parse tree
	 */
	exitReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replConfigs`.
	 * @param ctx the parse tree
	 */
	enterReplConfigs?: (ctx: ReplConfigsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replConfigs`.
	 * @param ctx the parse tree
	 */
	exitReplConfigs?: (ctx: ReplConfigsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replConfigsList`.
	 * @param ctx the parse tree
	 */
	enterReplConfigsList?: (ctx: ReplConfigsListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replConfigsList`.
	 * @param ctx the parse tree
	 */
	exitReplConfigsList?: (ctx: ReplConfigsListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 */
	enterReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 */
	exitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replStatusStatement`.
	 * @param ctx the parse tree
	 */
	enterReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replStatusStatement`.
	 * @param ctx the parse tree
	 */
	exitReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	enterDdlStatement?: (ctx: DdlStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 */
	exitDdlStatement?: (ctx: DdlStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.ifExists`.
	 * @param ctx the parse tree
	 */
	enterIfExists?: (ctx: IfExistsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.ifExists`.
	 * @param ctx the parse tree
	 */
	exitIfExists?: (ctx: IfExistsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.restrictOrCascade`.
	 * @param ctx the parse tree
	 */
	enterRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.restrictOrCascade`.
	 * @param ctx the parse tree
	 */
	exitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	enterIfNotExists?: (ctx: IfNotExistsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 */
	exitIfNotExists?: (ctx: IfNotExistsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.force`.
	 * @param ctx the parse tree
	 */
	enterForce?: (ctx: ForceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.force`.
	 * @param ctx the parse tree
	 */
	exitForce?: (ctx: ForceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rewriteEnabled`.
	 * @param ctx the parse tree
	 */
	enterRewriteEnabled?: (ctx: RewriteEnabledContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rewriteEnabled`.
	 * @param ctx the parse tree
	 */
	exitRewriteEnabled?: (ctx: RewriteEnabledContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rewriteDisabled`.
	 * @param ctx the parse tree
	 */
	enterRewriteDisabled?: (ctx: RewriteDisabledContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rewriteDisabled`.
	 * @param ctx the parse tree
	 */
	exitRewriteDisabled?: (ctx: RewriteDisabledContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.storedAsDirs`.
	 * @param ctx the parse tree
	 */
	enterStoredAsDirs?: (ctx: StoredAsDirsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.storedAsDirs`.
	 * @param ctx the parse tree
	 */
	exitStoredAsDirs?: (ctx: StoredAsDirsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.orReplace`.
	 * @param ctx the parse tree
	 */
	enterOrReplace?: (ctx: OrReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.orReplace`.
	 * @param ctx the parse tree
	 */
	exitOrReplace?: (ctx: OrReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dbLocation`.
	 * @param ctx the parse tree
	 */
	enterDbLocation?: (ctx: DbLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dbLocation`.
	 * @param ctx the parse tree
	 */
	exitDbLocation?: (ctx: DbLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dbManagedLocation`.
	 * @param ctx the parse tree
	 */
	enterDbManagedLocation?: (ctx: DbManagedLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dbManagedLocation`.
	 * @param ctx the parse tree
	 */
	exitDbManagedLocation?: (ctx: DbManagedLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dbProperties`.
	 * @param ctx the parse tree
	 */
	enterDbProperties?: (ctx: DbPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dbProperties`.
	 * @param ctx the parse tree
	 */
	exitDbProperties?: (ctx: DbPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dbPropertiesList`.
	 * @param ctx the parse tree
	 */
	enterDbPropertiesList?: (ctx: DbPropertiesListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dbPropertiesList`.
	 * @param ctx the parse tree
	 */
	exitDbPropertiesList?: (ctx: DbPropertiesListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dbConnectorName`.
	 * @param ctx the parse tree
	 */
	enterDbConnectorName?: (ctx: DbConnectorNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dbConnectorName`.
	 * @param ctx the parse tree
	 */
	exitDbConnectorName?: (ctx: DbConnectorNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	enterSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	exitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	enterDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 */
	exitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.databaseComment`.
	 * @param ctx the parse tree
	 */
	enterDatabaseComment?: (ctx: DatabaseCommentContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.databaseComment`.
	 * @param ctx the parse tree
	 */
	exitDatabaseComment?: (ctx: DatabaseCommentContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	enterTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 */
	exitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropTableStatement`.
	 * @param ctx the parse tree
	 */
	enterDropTableStatement?: (ctx: DropTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropTableStatement`.
	 * @param ctx the parse tree
	 */
	exitDropTableStatement?: (ctx: DropTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.inputFileFormat`.
	 * @param ctx the parse tree
	 */
	enterInputFileFormat?: (ctx: InputFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.inputFileFormat`.
	 * @param ctx the parse tree
	 */
	exitInputFileFormat?: (ctx: InputFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tabTypeExpr`.
	 * @param ctx the parse tree
	 */
	enterTabTypeExpr?: (ctx: TabTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tabTypeExpr`.
	 * @param ctx the parse tree
	 */
	exitTabTypeExpr?: (ctx: TabTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partTypeExpr`.
	 * @param ctx the parse tree
	 */
	enterPartTypeExpr?: (ctx: PartTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partTypeExpr`.
	 * @param ctx the parse tree
	 */
	exitPartTypeExpr?: (ctx: PartTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 */
	enterTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 */
	exitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.descStatement`.
	 * @param ctx the parse tree
	 */
	enterDescStatement?: (ctx: DescStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.descStatement`.
	 * @param ctx the parse tree
	 */
	exitDescStatement?: (ctx: DescStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.analyzeStatement`.
	 * @param ctx the parse tree
	 */
	enterAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.analyzeStatement`.
	 * @param ctx the parse tree
	 */
	exitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.from_in`.
	 * @param ctx the parse tree
	 */
	enterFrom_in?: (ctx: From_inContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.from_in`.
	 * @param ctx the parse tree
	 */
	exitFrom_in?: (ctx: From_inContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.db_schema`.
	 * @param ctx the parse tree
	 */
	enterDb_schema?: (ctx: Db_schemaContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.db_schema`.
	 * @param ctx the parse tree
	 */
	exitDb_schema?: (ctx: Db_schemaContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showStatement`.
	 * @param ctx the parse tree
	 */
	enterShowStatement?: (ctx: ShowStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showStatement`.
	 * @param ctx the parse tree
	 */
	exitShowStatement?: (ctx: ShowStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 */
	enterShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 */
	exitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.lockStatement`.
	 * @param ctx the parse tree
	 */
	enterLockStatement?: (ctx: LockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.lockStatement`.
	 * @param ctx the parse tree
	 */
	exitLockStatement?: (ctx: LockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.lockDatabase`.
	 * @param ctx the parse tree
	 */
	enterLockDatabase?: (ctx: LockDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.lockDatabase`.
	 * @param ctx the parse tree
	 */
	exitLockDatabase?: (ctx: LockDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.lockMode`.
	 * @param ctx the parse tree
	 */
	enterLockMode?: (ctx: LockModeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.lockMode`.
	 * @param ctx the parse tree
	 */
	exitLockMode?: (ctx: LockModeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.unlockStatement`.
	 * @param ctx the parse tree
	 */
	enterUnlockStatement?: (ctx: UnlockStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.unlockStatement`.
	 * @param ctx the parse tree
	 */
	exitUnlockStatement?: (ctx: UnlockStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.unlockDatabase`.
	 * @param ctx the parse tree
	 */
	enterUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.unlockDatabase`.
	 * @param ctx the parse tree
	 */
	exitUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createRoleStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createRoleStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropRoleStatement`.
	 * @param ctx the parse tree
	 */
	enterDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropRoleStatement`.
	 * @param ctx the parse tree
	 */
	exitDropRoleStatement?: (ctx: DropRoleStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.grantPrivileges`.
	 * @param ctx the parse tree
	 */
	enterGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.grantPrivileges`.
	 * @param ctx the parse tree
	 */
	exitGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.revokePrivileges`.
	 * @param ctx the parse tree
	 */
	enterRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.revokePrivileges`.
	 * @param ctx the parse tree
	 */
	exitRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.grantRole`.
	 * @param ctx the parse tree
	 */
	enterGrantRole?: (ctx: GrantRoleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.grantRole`.
	 * @param ctx the parse tree
	 */
	exitGrantRole?: (ctx: GrantRoleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.revokeRole`.
	 * @param ctx the parse tree
	 */
	enterRevokeRole?: (ctx: RevokeRoleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.revokeRole`.
	 * @param ctx the parse tree
	 */
	exitRevokeRole?: (ctx: RevokeRoleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showRoleGrants`.
	 * @param ctx the parse tree
	 */
	enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showRoleGrants`.
	 * @param ctx the parse tree
	 */
	exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showRoles`.
	 * @param ctx the parse tree
	 */
	enterShowRoles?: (ctx: ShowRolesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showRoles`.
	 * @param ctx the parse tree
	 */
	exitShowRoles?: (ctx: ShowRolesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showCurrentRole`.
	 * @param ctx the parse tree
	 */
	enterShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showCurrentRole`.
	 * @param ctx the parse tree
	 */
	exitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.setRole`.
	 * @param ctx the parse tree
	 */
	enterSetRole?: (ctx: SetRoleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.setRole`.
	 * @param ctx the parse tree
	 */
	exitSetRole?: (ctx: SetRoleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showGrants`.
	 * @param ctx the parse tree
	 */
	enterShowGrants?: (ctx: ShowGrantsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showGrants`.
	 * @param ctx the parse tree
	 */
	exitShowGrants?: (ctx: ShowGrantsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showRolePrincipals`.
	 * @param ctx the parse tree
	 */
	enterShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showRolePrincipals`.
	 * @param ctx the parse tree
	 */
	exitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privilegeObject`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privilegeObject`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privObject`.
	 * @param ctx the parse tree
	 */
	enterPrivObject?: (ctx: PrivObjectContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privObject`.
	 * @param ctx the parse tree
	 */
	exitPrivObject?: (ctx: PrivObjectContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privObjectCols`.
	 * @param ctx the parse tree
	 */
	enterPrivObjectCols?: (ctx: PrivObjectColsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privObjectCols`.
	 * @param ctx the parse tree
	 */
	exitPrivObjectCols?: (ctx: PrivObjectColsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privilegeList`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeList?: (ctx: PrivilegeListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privilegeList`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeList?: (ctx: PrivilegeListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privlegeDef`.
	 * @param ctx the parse tree
	 */
	enterPrivlegeDef?: (ctx: PrivlegeDefContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privlegeDef`.
	 * @param ctx the parse tree
	 */
	exitPrivlegeDef?: (ctx: PrivlegeDefContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.privilegeType`.
	 * @param ctx the parse tree
	 */
	enterPrivilegeType?: (ctx: PrivilegeTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.privilegeType`.
	 * @param ctx the parse tree
	 */
	exitPrivilegeType?: (ctx: PrivilegeTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.principalSpecification`.
	 * @param ctx the parse tree
	 */
	enterPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.principalSpecification`.
	 * @param ctx the parse tree
	 */
	exitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.principalName`.
	 * @param ctx the parse tree
	 */
	enterPrincipalName?: (ctx: PrincipalNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.principalName`.
	 * @param ctx the parse tree
	 */
	exitPrincipalName?: (ctx: PrincipalNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.withGrantOption`.
	 * @param ctx the parse tree
	 */
	enterWithGrantOption?: (ctx: WithGrantOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.withGrantOption`.
	 * @param ctx the parse tree
	 */
	exitWithGrantOption?: (ctx: WithGrantOptionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.grantOptionFor`.
	 * @param ctx the parse tree
	 */
	enterGrantOptionFor?: (ctx: GrantOptionForContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.grantOptionFor`.
	 * @param ctx the parse tree
	 */
	exitGrantOptionFor?: (ctx: GrantOptionForContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.adminOptionFor`.
	 * @param ctx the parse tree
	 */
	enterAdminOptionFor?: (ctx: AdminOptionForContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.adminOptionFor`.
	 * @param ctx the parse tree
	 */
	exitAdminOptionFor?: (ctx: AdminOptionForContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.withAdminOption`.
	 * @param ctx the parse tree
	 */
	enterWithAdminOption?: (ctx: WithAdminOptionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.withAdminOption`.
	 * @param ctx the parse tree
	 */
	exitWithAdminOption?: (ctx: WithAdminOptionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.metastoreCheck`.
	 * @param ctx the parse tree
	 */
	enterMetastoreCheck?: (ctx: MetastoreCheckContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.metastoreCheck`.
	 * @param ctx the parse tree
	 */
	exitMetastoreCheck?: (ctx: MetastoreCheckContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.resourceList`.
	 * @param ctx the parse tree
	 */
	enterResourceList?: (ctx: ResourceListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.resourceList`.
	 * @param ctx the parse tree
	 */
	exitResourceList?: (ctx: ResourceListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.resourceType`.
	 * @param ctx the parse tree
	 */
	enterResourceType?: (ctx: ResourceTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.resourceType`.
	 * @param ctx the parse tree
	 */
	exitResourceType?: (ctx: ResourceTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropFunctionStatement`.
	 * @param ctx the parse tree
	 */
	enterDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropFunctionStatement`.
	 * @param ctx the parse tree
	 */
	exitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 */
	enterReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 */
	exitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createMacroStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createMacroStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropMacroStatement`.
	 * @param ctx the parse tree
	 */
	enterDropMacroStatement?: (ctx: DropMacroStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropMacroStatement`.
	 * @param ctx the parse tree
	 */
	exitDropMacroStatement?: (ctx: DropMacroStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createViewStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createViewStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateViewStatement?: (ctx: CreateViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewPartition`.
	 * @param ctx the parse tree
	 */
	enterViewPartition?: (ctx: ViewPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewPartition`.
	 * @param ctx the parse tree
	 */
	exitViewPartition?: (ctx: ViewPartitionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewOrganization`.
	 * @param ctx the parse tree
	 */
	enterViewOrganization?: (ctx: ViewOrganizationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewOrganization`.
	 * @param ctx the parse tree
	 */
	exitViewOrganization?: (ctx: ViewOrganizationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewClusterSpec`.
	 * @param ctx the parse tree
	 */
	enterViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewClusterSpec`.
	 * @param ctx the parse tree
	 */
	exitViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewComplexSpec`.
	 * @param ctx the parse tree
	 */
	enterViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewComplexSpec`.
	 * @param ctx the parse tree
	 */
	exitViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewDistSpec`.
	 * @param ctx the parse tree
	 */
	enterViewDistSpec?: (ctx: ViewDistSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewDistSpec`.
	 * @param ctx the parse tree
	 */
	exitViewDistSpec?: (ctx: ViewDistSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewSortSpec`.
	 * @param ctx the parse tree
	 */
	enterViewSortSpec?: (ctx: ViewSortSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewSortSpec`.
	 * @param ctx the parse tree
	 */
	exitViewSortSpec?: (ctx: ViewSortSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropViewStatement`.
	 * @param ctx the parse tree
	 */
	enterDropViewStatement?: (ctx: DropViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropViewStatement`.
	 * @param ctx the parse tree
	 */
	exitDropViewStatement?: (ctx: DropViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	enterDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 */
	exitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 */
	enterAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 */
	exitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.scheduleSpec`.
	 * @param ctx the parse tree
	 */
	enterScheduleSpec?: (ctx: ScheduleSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.scheduleSpec`.
	 * @param ctx the parse tree
	 */
	exitScheduleSpec?: (ctx: ScheduleSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.executedAsSpec`.
	 * @param ctx the parse tree
	 */
	enterExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.executedAsSpec`.
	 * @param ctx the parse tree
	 */
	exitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.definedAsSpec`.
	 * @param ctx the parse tree
	 */
	enterDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.definedAsSpec`.
	 * @param ctx the parse tree
	 */
	exitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.showStmtIdentifier`.
	 * @param ctx the parse tree
	 */
	enterShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.showStmtIdentifier`.
	 * @param ctx the parse tree
	 */
	exitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableComment`.
	 * @param ctx the parse tree
	 */
	enterTableComment?: (ctx: TableCommentContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableComment`.
	 * @param ctx the parse tree
	 */
	exitTableComment?: (ctx: TableCommentContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableUsing`.
	 * @param ctx the parse tree
	 */
	enterTableUsing?: (ctx: TableUsingContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableUsing`.
	 * @param ctx the parse tree
	 */
	exitTableUsing?: (ctx: TableUsingContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 */
	enterCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 */
	exitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 */
	enterCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 */
	exitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 */
	enterCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 */
	exitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionTransformSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionTransformSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionTransformType`.
	 * @param ctx the parse tree
	 */
	enterPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionTransformType`.
	 * @param ctx the parse tree
	 */
	exitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableBuckets`.
	 * @param ctx the parse tree
	 */
	enterTableBuckets?: (ctx: TableBucketsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableBuckets`.
	 * @param ctx the parse tree
	 */
	exitTableBuckets?: (ctx: TableBucketsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableImplBuckets`.
	 * @param ctx the parse tree
	 */
	enterTableImplBuckets?: (ctx: TableImplBucketsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableImplBuckets`.
	 * @param ctx the parse tree
	 */
	exitTableImplBuckets?: (ctx: TableImplBucketsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableSkewed`.
	 * @param ctx the parse tree
	 */
	enterTableSkewed?: (ctx: TableSkewedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableSkewed`.
	 * @param ctx the parse tree
	 */
	exitTableSkewed?: (ctx: TableSkewedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	enterRowFormat?: (ctx: RowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rowFormat`.
	 * @param ctx the parse tree
	 */
	exitRowFormat?: (ctx: RowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.recordReader`.
	 * @param ctx the parse tree
	 */
	enterRecordReader?: (ctx: RecordReaderContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.recordReader`.
	 * @param ctx the parse tree
	 */
	exitRecordReader?: (ctx: RecordReaderContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.recordWriter`.
	 * @param ctx the parse tree
	 */
	enterRecordWriter?: (ctx: RecordWriterContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.recordWriter`.
	 * @param ctx the parse tree
	 */
	exitRecordWriter?: (ctx: RecordWriterContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rowFormatSerde`.
	 * @param ctx the parse tree
	 */
	enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rowFormatSerde`.
	 * @param ctx the parse tree
	 */
	exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rowFormatDelimited`.
	 * @param ctx the parse tree
	 */
	enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rowFormatDelimited`.
	 * @param ctx the parse tree
	 */
	exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableRowFormat`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormat?: (ctx: TableRowFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableRowFormat`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormat?: (ctx: TableRowFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 */
	enterTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 */
	exitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableProperties`.
	 * @param ctx the parse tree
	 */
	enterTableProperties?: (ctx: TablePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableProperties`.
	 * @param ctx the parse tree
	 */
	exitTableProperties?: (ctx: TablePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tablePropertiesList`.
	 * @param ctx the parse tree
	 */
	enterTablePropertiesList?: (ctx: TablePropertiesListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tablePropertiesList`.
	 * @param ctx the parse tree
	 */
	exitTablePropertiesList?: (ctx: TablePropertiesListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.keyValueProperty`.
	 * @param ctx the parse tree
	 */
	enterKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.keyValueProperty`.
	 * @param ctx the parse tree
	 */
	exitKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.keyProperty`.
	 * @param ctx the parse tree
	 */
	enterKeyProperty?: (ctx: KeyPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.keyProperty`.
	 * @param ctx the parse tree
	 */
	exitKeyProperty?: (ctx: KeyPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 */
	enterTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 */
	exitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableRowNullFormat`.
	 * @param ctx the parse tree
	 */
	enterTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableRowNullFormat`.
	 * @param ctx the parse tree
	 */
	exitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableFileFormat`.
	 * @param ctx the parse tree
	 */
	enterTableFileFormat?: (ctx: TableFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableFileFormat`.
	 * @param ctx the parse tree
	 */
	exitTableFileFormat?: (ctx: TableFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableLocation`.
	 * @param ctx the parse tree
	 */
	enterTableLocation?: (ctx: TableLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableLocation`.
	 * @param ctx the parse tree
	 */
	exitTableLocation?: (ctx: TableLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameTypeList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameTypeList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameList?: (ctx: ColumnNameListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameList?: (ctx: ColumnNameListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnName`.
	 * @param ctx the parse tree
	 */
	enterColumnName?: (ctx: ColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnName`.
	 * @param ctx the parse tree
	 */
	exitColumnName?: (ctx: ColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.extColumnName`.
	 * @param ctx the parse tree
	 */
	enterExtColumnName?: (ctx: ExtColumnNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.extColumnName`.
	 * @param ctx the parse tree
	 */
	exitExtColumnName?: (ctx: ExtColumnNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameOrderList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameOrderList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnParenthesesList`.
	 * @param ctx the parse tree
	 */
	enterColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnParenthesesList`.
	 * @param ctx the parse tree
	 */
	exitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.enableValidateSpecification`.
	 * @param ctx the parse tree
	 */
	enterEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.enableValidateSpecification`.
	 * @param ctx the parse tree
	 */
	exitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.enableSpecification`.
	 * @param ctx the parse tree
	 */
	enterEnableSpecification?: (ctx: EnableSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.enableSpecification`.
	 * @param ctx the parse tree
	 */
	exitEnableSpecification?: (ctx: EnableSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.validateSpecification`.
	 * @param ctx the parse tree
	 */
	enterValidateSpecification?: (ctx: ValidateSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.validateSpecification`.
	 * @param ctx the parse tree
	 */
	exitValidateSpecification?: (ctx: ValidateSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.enforcedSpecification`.
	 * @param ctx the parse tree
	 */
	enterEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.enforcedSpecification`.
	 * @param ctx the parse tree
	 */
	exitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.relySpecification`.
	 * @param ctx the parse tree
	 */
	enterRelySpecification?: (ctx: RelySpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.relySpecification`.
	 * @param ctx the parse tree
	 */
	exitRelySpecification?: (ctx: RelySpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createConstraint`.
	 * @param ctx the parse tree
	 */
	enterCreateConstraint?: (ctx: CreateConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createConstraint`.
	 * @param ctx the parse tree
	 */
	exitCreateConstraint?: (ctx: CreateConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterConstraintWithName`.
	 * @param ctx the parse tree
	 */
	enterAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterConstraintWithName`.
	 * @param ctx the parse tree
	 */
	exitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableLevelConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableLevelConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.pkUkConstraint`.
	 * @param ctx the parse tree
	 */
	enterPkUkConstraint?: (ctx: PkUkConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.pkUkConstraint`.
	 * @param ctx the parse tree
	 */
	exitPkUkConstraint?: (ctx: PkUkConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.checkConstraint`.
	 * @param ctx the parse tree
	 */
	enterCheckConstraint?: (ctx: CheckConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.checkConstraint`.
	 * @param ctx the parse tree
	 */
	exitCheckConstraint?: (ctx: CheckConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createForeignKey`.
	 * @param ctx the parse tree
	 */
	enterCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createForeignKey`.
	 * @param ctx the parse tree
	 */
	exitCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 */
	enterAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 */
	exitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedValueElement`.
	 * @param ctx the parse tree
	 */
	enterSkewedValueElement?: (ctx: SkewedValueElementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedValueElement`.
	 * @param ctx the parse tree
	 */
	exitSkewedValueElement?: (ctx: SkewedValueElementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedColumnValues`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedColumnValues`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedColumnValue`.
	 * @param ctx the parse tree
	 */
	enterSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedColumnValue`.
	 * @param ctx the parse tree
	 */
	exitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 */
	enterSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 */
	exitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.orderSpecification`.
	 * @param ctx the parse tree
	 */
	enterOrderSpecification?: (ctx: OrderSpecificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.orderSpecification`.
	 * @param ctx the parse tree
	 */
	exitOrderSpecification?: (ctx: OrderSpecificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.nullOrdering`.
	 * @param ctx the parse tree
	 */
	enterNullOrdering?: (ctx: NullOrderingContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.nullOrdering`.
	 * @param ctx the parse tree
	 */
	exitNullOrdering?: (ctx: NullOrderingContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameOrder`.
	 * @param ctx the parse tree
	 */
	enterColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameOrder`.
	 * @param ctx the parse tree
	 */
	exitColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameCommentList`.
	 * @param ctx the parse tree
	 */
	enterColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameCommentList`.
	 * @param ctx the parse tree
	 */
	exitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameComment`.
	 * @param ctx the parse tree
	 */
	enterColumnNameComment?: (ctx: ColumnNameCommentContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameComment`.
	 * @param ctx the parse tree
	 */
	exitColumnNameComment?: (ctx: ColumnNameCommentContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 */
	enterOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 */
	exitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnRefOrder`.
	 * @param ctx the parse tree
	 */
	enterColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnRefOrder`.
	 * @param ctx the parse tree
	 */
	exitColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameType`.
	 * @param ctx the parse tree
	 */
	enterColumnNameType?: (ctx: ColumnNameTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameType`.
	 * @param ctx the parse tree
	 */
	exitColumnNameType?: (ctx: ColumnNameTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	enterTableConstraint?: (ctx: TableConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 */
	exitTableConstraint?: (ctx: TableConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 */
	exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	enterForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	exitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.colConstraint`.
	 * @param ctx the parse tree
	 */
	enterColConstraint?: (ctx: ColConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.colConstraint`.
	 * @param ctx the parse tree
	 */
	exitColConstraint?: (ctx: ColConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterColumnConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterColumnConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterColConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterColConstraint?: (ctx: AlterColConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterColConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterColConstraint?: (ctx: AlterColConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnConstraintType`.
	 * @param ctx the parse tree
	 */
	enterColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnConstraintType`.
	 * @param ctx the parse tree
	 */
	exitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.defaultVal`.
	 * @param ctx the parse tree
	 */
	enterDefaultVal?: (ctx: DefaultValContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.defaultVal`.
	 * @param ctx the parse tree
	 */
	exitDefaultVal?: (ctx: DefaultValContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableConstraintType`.
	 * @param ctx the parse tree
	 */
	enterTableConstraintType?: (ctx: TableConstraintTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableConstraintType`.
	 * @param ctx the parse tree
	 */
	exitTableConstraintType?: (ctx: TableConstraintTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.constraintOptsCreate`.
	 * @param ctx the parse tree
	 */
	enterConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.constraintOptsCreate`.
	 * @param ctx the parse tree
	 */
	exitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.constraintOptsAlter`.
	 * @param ctx the parse tree
	 */
	enterConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.constraintOptsAlter`.
	 * @param ctx the parse tree
	 */
	exitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnNameColonType`.
	 * @param ctx the parse tree
	 */
	enterColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnNameColonType`.
	 * @param ctx the parse tree
	 */
	exitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.colType`.
	 * @param ctx the parse tree
	 */
	enterColType?: (ctx: ColTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.colType`.
	 * @param ctx the parse tree
	 */
	exitColType?: (ctx: ColTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.colTypeList`.
	 * @param ctx the parse tree
	 */
	enterColTypeList?: (ctx: ColTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.colTypeList`.
	 * @param ctx the parse tree
	 */
	exitColTypeList?: (ctx: ColTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.primitiveType`.
	 * @param ctx the parse tree
	 */
	exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.listType`.
	 * @param ctx the parse tree
	 */
	enterListType?: (ctx: ListTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.listType`.
	 * @param ctx the parse tree
	 */
	exitListType?: (ctx: ListTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.structType`.
	 * @param ctx the parse tree
	 */
	enterStructType?: (ctx: StructTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.structType`.
	 * @param ctx the parse tree
	 */
	exitStructType?: (ctx: StructTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.mapType`.
	 * @param ctx the parse tree
	 */
	enterMapType?: (ctx: MapTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.mapType`.
	 * @param ctx the parse tree
	 */
	exitMapType?: (ctx: MapTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.unionType`.
	 * @param ctx the parse tree
	 */
	enterUnionType?: (ctx: UnionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.unionType`.
	 * @param ctx the parse tree
	 */
	exitUnionType?: (ctx: UnionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.setOperator`.
	 * @param ctx the parse tree
	 */
	enterSetOperator?: (ctx: SetOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.setOperator`.
	 * @param ctx the parse tree
	 */
	exitSetOperator?: (ctx: SetOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.queryStatementExpression`.
	 * @param ctx the parse tree
	 */
	enterQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.queryStatementExpression`.
	 * @param ctx the parse tree
	 */
	exitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 */
	enterQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 */
	exitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.cteStatement`.
	 * @param ctx the parse tree
	 */
	enterCteStatement?: (ctx: CteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.cteStatement`.
	 * @param ctx the parse tree
	 */
	exitCteStatement?: (ctx: CteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.fromStatement`.
	 * @param ctx the parse tree
	 */
	enterFromStatement?: (ctx: FromStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.fromStatement`.
	 * @param ctx the parse tree
	 */
	exitFromStatement?: (ctx: FromStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.singleFromStatement`.
	 * @param ctx the parse tree
	 */
	enterSingleFromStatement?: (ctx: SingleFromStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.singleFromStatement`.
	 * @param ctx the parse tree
	 */
	exitSingleFromStatement?: (ctx: SingleFromStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.regularBody`.
	 * @param ctx the parse tree
	 */
	enterRegularBody?: (ctx: RegularBodyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.regularBody`.
	 * @param ctx the parse tree
	 */
	exitRegularBody?: (ctx: RegularBodyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.atomSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.atomSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	enterSelectStatement?: (ctx: SelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectStatement`.
	 * @param ctx the parse tree
	 */
	exitSelectStatement?: (ctx: SelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.setOpSelectStatement`.
	 * @param ctx the parse tree
	 */
	enterSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.setOpSelectStatement`.
	 * @param ctx the parse tree
	 */
	exitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 */
	enterSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 */
	exitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.insertClause`.
	 * @param ctx the parse tree
	 */
	enterInsertClause?: (ctx: InsertClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.insertClause`.
	 * @param ctx the parse tree
	 */
	exitInsertClause?: (ctx: InsertClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.destination`.
	 * @param ctx the parse tree
	 */
	enterDestination?: (ctx: DestinationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.destination`.
	 * @param ctx the parse tree
	 */
	exitDestination?: (ctx: DestinationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.limitClause`.
	 * @param ctx the parse tree
	 */
	enterLimitClause?: (ctx: LimitClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.limitClause`.
	 * @param ctx the parse tree
	 */
	exitLimitClause?: (ctx: LimitClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.deleteStatement`.
	 * @param ctx the parse tree
	 */
	exitDeleteStatement?: (ctx: DeleteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnAssignmentClause`.
	 * @param ctx the parse tree
	 */
	enterColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnAssignmentClause`.
	 * @param ctx the parse tree
	 */
	exitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 */
	enterPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 */
	exitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.setColumnsClause`.
	 * @param ctx the parse tree
	 */
	enterSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.setColumnsClause`.
	 * @param ctx the parse tree
	 */
	exitSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.updateStatement`.
	 * @param ctx the parse tree
	 */
	exitUpdateStatement?: (ctx: UpdateStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.startTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.startTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionMode?: (ctx: TransactionModeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.transactionMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionMode?: (ctx: TransactionModeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 */
	exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.isolationLevel`.
	 * @param ctx the parse tree
	 */
	enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.isolationLevel`.
	 * @param ctx the parse tree
	 */
	exitIsolationLevel?: (ctx: IsolationLevelContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	enterLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 */
	exitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.commitStatement`.
	 * @param ctx the parse tree
	 */
	enterCommitStatement?: (ctx: CommitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.commitStatement`.
	 * @param ctx the parse tree
	 */
	exitCommitStatement?: (ctx: CommitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rollbackStatement`.
	 * @param ctx the parse tree
	 */
	enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rollbackStatement`.
	 * @param ctx the parse tree
	 */
	exitRollbackStatement?: (ctx: RollbackStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 */
	enterSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 */
	exitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.abortTransactionStatement`.
	 * @param ctx the parse tree
	 */
	enterAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.abortTransactionStatement`.
	 * @param ctx the parse tree
	 */
	exitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.abortCompactionStatement`.
	 * @param ctx the parse tree
	 */
	enterAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.abortCompactionStatement`.
	 * @param ctx the parse tree
	 */
	exitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	enterMergeStatement?: (ctx: MergeStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.mergeStatement`.
	 * @param ctx the parse tree
	 */
	exitMergeStatement?: (ctx: MergeStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.whenClauses`.
	 * @param ctx the parse tree
	 */
	enterWhenClauses?: (ctx: WhenClausesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.whenClauses`.
	 * @param ctx the parse tree
	 */
	exitWhenClauses?: (ctx: WhenClausesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 */
	enterWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 */
	exitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 */
	enterWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 */
	exitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 */
	enterWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 */
	exitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.updateOrDelete`.
	 * @param ctx the parse tree
	 */
	enterUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.updateOrDelete`.
	 * @param ctx the parse tree
	 */
	exitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.killQueryStatement`.
	 * @param ctx the parse tree
	 */
	enterKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.killQueryStatement`.
	 * @param ctx the parse tree
	 */
	exitKillQueryStatement?: (ctx: KillQueryStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.compactionId`.
	 * @param ctx the parse tree
	 */
	enterCompactionId?: (ctx: CompactionIdContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.compactionId`.
	 * @param ctx the parse tree
	 */
	exitCompactionId?: (ctx: CompactionIdContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.compactionPool`.
	 * @param ctx the parse tree
	 */
	enterCompactionPool?: (ctx: CompactionPoolContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.compactionPool`.
	 * @param ctx the parse tree
	 */
	exitCompactionPool?: (ctx: CompactionPoolContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.compactionType`.
	 * @param ctx the parse tree
	 */
	enterCompactionType?: (ctx: CompactionTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.compactionType`.
	 * @param ctx the parse tree
	 */
	exitCompactionType?: (ctx: CompactionTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.compactionStatus`.
	 * @param ctx the parse tree
	 */
	enterCompactionStatus?: (ctx: CompactionStatusContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.compactionStatus`.
	 * @param ctx the parse tree
	 */
	exitCompactionStatus?: (ctx: CompactionStatusContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatement?: (ctx: AlterStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatement?: (ctx: AlterStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterScopeProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterScopeProperties?: (ctx: AlterScopePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterScopeProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterScopeProperties?: (ctx: AlterScopePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionLocation`.
	 * @param ctx the parse tree
	 */
	enterPartitionLocation?: (ctx: PartitionLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionLocation`.
	 * @param ctx the parse tree
	 */
	exitPartitionLocation?: (ctx: PartitionLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 */
	enterTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 */
	exitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedLocations`.
	 * @param ctx the parse tree
	 */
	enterSkewedLocations?: (ctx: SkewedLocationsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedLocations`.
	 * @param ctx the parse tree
	 */
	exitSkewedLocations?: (ctx: SkewedLocationsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedLocationsList`.
	 * @param ctx the parse tree
	 */
	enterSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedLocationsList`.
	 * @param ctx the parse tree
	 */
	exitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.skewedLocationMap`.
	 * @param ctx the parse tree
	 */
	enterSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.skewedLocationMap`.
	 * @param ctx the parse tree
	 */
	exitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.blocking`.
	 * @param ctx the parse tree
	 */
	enterBlocking?: (ctx: BlockingContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.blocking`.
	 * @param ctx the parse tree
	 */
	exitBlocking?: (ctx: BlockingContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.compactPool`.
	 * @param ctx the parse tree
	 */
	enterCompactPool?: (ctx: CompactPoolContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.compactPool`.
	 * @param ctx the parse tree
	 */
	exitCompactPool?: (ctx: CompactPoolContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 */
	enterAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 */
	exitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	enterFileFormat?: (ctx: FileFormatContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.fileFormat`.
	 * @param ctx the parse tree
	 */
	exitFileFormat?: (ctx: FileFormatContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 */
	enterAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 */
	exitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.likeTableOrFile`.
	 * @param ctx the parse tree
	 */
	enterLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.likeTableOrFile`.
	 * @param ctx the parse tree
	 */
	exitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dataConnectorComment`.
	 * @param ctx the parse tree
	 */
	enterDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dataConnectorComment`.
	 * @param ctx the parse tree
	 */
	exitDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dataConnectorUrl`.
	 * @param ctx the parse tree
	 */
	enterDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dataConnectorUrl`.
	 * @param ctx the parse tree
	 */
	exitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dataConnectorType`.
	 * @param ctx the parse tree
	 */
	enterDataConnectorType?: (ctx: DataConnectorTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dataConnectorType`.
	 * @param ctx the parse tree
	 */
	exitDataConnectorType?: (ctx: DataConnectorTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dcProperties`.
	 * @param ctx the parse tree
	 */
	enterDcProperties?: (ctx: DcPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dcProperties`.
	 * @param ctx the parse tree
	 */
	exitDcProperties?: (ctx: DcPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	enterDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 */
	exitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableAllColumns`.
	 * @param ctx the parse tree
	 */
	enterTableAllColumns?: (ctx: TableAllColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableAllColumns`.
	 * @param ctx the parse tree
	 */
	exitTableAllColumns?: (ctx: TableAllColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableOrColumn`.
	 * @param ctx the parse tree
	 */
	enterTableOrColumn?: (ctx: TableOrColumnContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableOrColumn`.
	 * @param ctx the parse tree
	 */
	exitTableOrColumn?: (ctx: TableOrColumnContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	enterDefaultValue?: (ctx: DefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.defaultValue`.
	 * @param ctx the parse tree
	 */
	exitDefaultValue?: (ctx: DefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.aliasList`.
	 * @param ctx the parse tree
	 */
	enterAliasList?: (ctx: AliasListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.aliasList`.
	 * @param ctx the parse tree
	 */
	exitAliasList?: (ctx: AliasListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.fromClause`.
	 * @param ctx the parse tree
	 */
	enterFromClause?: (ctx: FromClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.fromClause`.
	 * @param ctx the parse tree
	 */
	exitFromClause?: (ctx: FromClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.fromSource`.
	 * @param ctx the parse tree
	 */
	enterFromSource?: (ctx: FromSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.fromSource`.
	 * @param ctx the parse tree
	 */
	exitFromSource?: (ctx: FromSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.atomjoinSource`.
	 * @param ctx the parse tree
	 */
	enterAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.atomjoinSource`.
	 * @param ctx the parse tree
	 */
	exitAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.joinSource`.
	 * @param ctx the parse tree
	 */
	enterJoinSource?: (ctx: JoinSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.joinSource`.
	 * @param ctx the parse tree
	 */
	exitJoinSource?: (ctx: JoinSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.joinSourcePart`.
	 * @param ctx the parse tree
	 */
	enterJoinSourcePart?: (ctx: JoinSourcePartContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.joinSourcePart`.
	 * @param ctx the parse tree
	 */
	exitJoinSourcePart?: (ctx: JoinSourcePartContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.uniqueJoinSource`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.uniqueJoinSource`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.uniqueJoinToken`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.uniqueJoinToken`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.joinToken`.
	 * @param ctx the parse tree
	 */
	enterJoinToken?: (ctx: JoinTokenContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.joinToken`.
	 * @param ctx the parse tree
	 */
	exitJoinToken?: (ctx: JoinTokenContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.lateralView`.
	 * @param ctx the parse tree
	 */
	enterLateralView?: (ctx: LateralViewContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.lateralView`.
	 * @param ctx the parse tree
	 */
	exitLateralView?: (ctx: LateralViewContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	enterTableAlias?: (ctx: TableAliasContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableAlias`.
	 * @param ctx the parse tree
	 */
	exitTableAlias?: (ctx: TableAliasContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableBucketSample`.
	 * @param ctx the parse tree
	 */
	enterTableBucketSample?: (ctx: TableBucketSampleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableBucketSample`.
	 * @param ctx the parse tree
	 */
	exitTableBucketSample?: (ctx: TableBucketSampleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.splitSample`.
	 * @param ctx the parse tree
	 */
	enterSplitSample?: (ctx: SplitSampleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.splitSample`.
	 * @param ctx the parse tree
	 */
	exitSplitSample?: (ctx: SplitSampleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableSample`.
	 * @param ctx the parse tree
	 */
	enterTableSample?: (ctx: TableSampleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableSample`.
	 * @param ctx the parse tree
	 */
	exitTableSample?: (ctx: TableSampleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableSource`.
	 * @param ctx the parse tree
	 */
	enterTableSource?: (ctx: TableSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableSource`.
	 * @param ctx the parse tree
	 */
	exitTableSource?: (ctx: TableSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.asOfClause`.
	 * @param ctx the parse tree
	 */
	enterAsOfClause?: (ctx: AsOfClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.asOfClause`.
	 * @param ctx the parse tree
	 */
	exitAsOfClause?: (ctx: AsOfClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 */
	enterUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 */
	exitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableName`.
	 * @param ctx the parse tree
	 */
	enterTableName?: (ctx: TableNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableName`.
	 * @param ctx the parse tree
	 */
	exitTableName?: (ctx: TableNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.viewName`.
	 * @param ctx the parse tree
	 */
	enterViewName?: (ctx: ViewNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.viewName`.
	 * @param ctx the parse tree
	 */
	exitViewName?: (ctx: ViewNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.subQuerySource`.
	 * @param ctx the parse tree
	 */
	enterSubQuerySource?: (ctx: SubQuerySourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.subQuerySource`.
	 * @param ctx the parse tree
	 */
	exitSubQuerySource?: (ctx: SubQuerySourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitioningSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitioningSpec?: (ctx: PartitioningSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitioningSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitioningSpec?: (ctx: PartitioningSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 */
	enterPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 */
	exitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionedTableFunction`.
	 * @param ctx the parse tree
	 */
	enterPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionedTableFunction`.
	 * @param ctx the parse tree
	 */
	exitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.whereClause`.
	 * @param ctx the parse tree
	 */
	enterWhereClause?: (ctx: WhereClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.whereClause`.
	 * @param ctx the parse tree
	 */
	exitWhereClause?: (ctx: WhereClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.searchCondition`.
	 * @param ctx the parse tree
	 */
	enterSearchCondition?: (ctx: SearchConditionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.searchCondition`.
	 * @param ctx the parse tree
	 */
	exitSearchCondition?: (ctx: SearchConditionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.valuesSource`.
	 * @param ctx the parse tree
	 */
	enterValuesSource?: (ctx: ValuesSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.valuesSource`.
	 * @param ctx the parse tree
	 */
	exitValuesSource?: (ctx: ValuesSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.valuesClause`.
	 * @param ctx the parse tree
	 */
	enterValuesClause?: (ctx: ValuesClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.valuesClause`.
	 * @param ctx the parse tree
	 */
	exitValuesClause?: (ctx: ValuesClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.valuesTableConstructor`.
	 * @param ctx the parse tree
	 */
	enterValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.valuesTableConstructor`.
	 * @param ctx the parse tree
	 */
	exitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.valueRowConstructor`.
	 * @param ctx the parse tree
	 */
	enterValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.valueRowConstructor`.
	 * @param ctx the parse tree
	 */
	exitValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 */
	enterFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 */
	exitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.virtualTableSource`.
	 * @param ctx the parse tree
	 */
	enterVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.virtualTableSource`.
	 * @param ctx the parse tree
	 */
	exitVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectClause`.
	 * @param ctx the parse tree
	 */
	enterSelectClause?: (ctx: SelectClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectClause`.
	 * @param ctx the parse tree
	 */
	exitSelectClause?: (ctx: SelectClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.all_distinct`.
	 * @param ctx the parse tree
	 */
	enterAll_distinct?: (ctx: All_distinctContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.all_distinct`.
	 * @param ctx the parse tree
	 */
	exitAll_distinct?: (ctx: All_distinctContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectList`.
	 * @param ctx the parse tree
	 */
	enterSelectList?: (ctx: SelectListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectList`.
	 * @param ctx the parse tree
	 */
	exitSelectList?: (ctx: SelectListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectTrfmClause`.
	 * @param ctx the parse tree
	 */
	enterSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectTrfmClause`.
	 * @param ctx the parse tree
	 */
	exitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	enterSelectItem?: (ctx: SelectItemContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectItem`.
	 * @param ctx the parse tree
	 */
	exitSelectItem?: (ctx: SelectItemContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.trfmClause`.
	 * @param ctx the parse tree
	 */
	enterTrfmClause?: (ctx: TrfmClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.trfmClause`.
	 * @param ctx the parse tree
	 */
	exitTrfmClause?: (ctx: TrfmClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectExpression`.
	 * @param ctx the parse tree
	 */
	enterSelectExpression?: (ctx: SelectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectExpression`.
	 * @param ctx the parse tree
	 */
	exitSelectExpression?: (ctx: SelectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.selectExpressionList`.
	 * @param ctx the parse tree
	 */
	enterSelectExpressionList?: (ctx: SelectExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.selectExpressionList`.
	 * @param ctx the parse tree
	 */
	exitSelectExpressionList?: (ctx: SelectExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_clause`.
	 * @param ctx the parse tree
	 */
	enterWindow_clause?: (ctx: Window_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_clause`.
	 * @param ctx the parse tree
	 */
	exitWindow_clause?: (ctx: Window_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_defn`.
	 * @param ctx the parse tree
	 */
	enterWindow_defn?: (ctx: Window_defnContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_defn`.
	 * @param ctx the parse tree
	 */
	exitWindow_defn?: (ctx: Window_defnContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_specification`.
	 * @param ctx the parse tree
	 */
	enterWindow_specification?: (ctx: Window_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_specification`.
	 * @param ctx the parse tree
	 */
	exitWindow_specification?: (ctx: Window_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_frame`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame?: (ctx: Window_frameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_frame`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame?: (ctx: Window_frameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_range_expression`.
	 * @param ctx the parse tree
	 */
	enterWindow_range_expression?: (ctx: Window_range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_range_expression`.
	 * @param ctx the parse tree
	 */
	exitWindow_range_expression?: (ctx: Window_range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_value_expression`.
	 * @param ctx the parse tree
	 */
	enterWindow_value_expression?: (ctx: Window_value_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_value_expression`.
	 * @param ctx the parse tree
	 */
	exitWindow_value_expression?: (ctx: Window_value_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.window_frame_boundary`.
	 * @param ctx the parse tree
	 */
	enterWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.window_frame_boundary`.
	 * @param ctx the parse tree
	 */
	exitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	enterGroupByClause?: (ctx: GroupByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.groupByClause`.
	 * @param ctx the parse tree
	 */
	exitGroupByClause?: (ctx: GroupByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.groupby_expression`.
	 * @param ctx the parse tree
	 */
	enterGroupby_expression?: (ctx: Groupby_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.groupby_expression`.
	 * @param ctx the parse tree
	 */
	exitGroupby_expression?: (ctx: Groupby_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.groupByEmpty`.
	 * @param ctx the parse tree
	 */
	enterGroupByEmpty?: (ctx: GroupByEmptyContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.groupByEmpty`.
	 * @param ctx the parse tree
	 */
	exitGroupByEmpty?: (ctx: GroupByEmptyContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rollupStandard`.
	 * @param ctx the parse tree
	 */
	enterRollupStandard?: (ctx: RollupStandardContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rollupStandard`.
	 * @param ctx the parse tree
	 */
	exitRollupStandard?: (ctx: RollupStandardContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rollupOldSyntax`.
	 * @param ctx the parse tree
	 */
	enterRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rollupOldSyntax`.
	 * @param ctx the parse tree
	 */
	exitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.groupingSetExpression`.
	 * @param ctx the parse tree
	 */
	enterGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.groupingSetExpression`.
	 * @param ctx the parse tree
	 */
	exitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 */
	enterGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 */
	exitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 */
	enterGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 */
	exitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.havingClause`.
	 * @param ctx the parse tree
	 */
	enterHavingClause?: (ctx: HavingClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.havingClause`.
	 * @param ctx the parse tree
	 */
	exitHavingClause?: (ctx: HavingClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.qualifyClause`.
	 * @param ctx the parse tree
	 */
	enterQualifyClause?: (ctx: QualifyClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.qualifyClause`.
	 * @param ctx the parse tree
	 */
	exitQualifyClause?: (ctx: QualifyClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.havingCondition`.
	 * @param ctx the parse tree
	 */
	enterHavingCondition?: (ctx: HavingConditionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.havingCondition`.
	 * @param ctx the parse tree
	 */
	exitHavingCondition?: (ctx: HavingConditionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressionPart`.
	 * @param ctx the parse tree
	 */
	enterExpressionPart?: (ctx: ExpressionPartContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressionPart`.
	 * @param ctx the parse tree
	 */
	exitExpressionPart?: (ctx: ExpressionPartContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 */
	enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 */
	exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 */
	enterFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 */
	exitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressionWithAlias`.
	 * @param ctx the parse tree
	 */
	enterExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressionWithAlias`.
	 * @param ctx the parse tree
	 */
	exitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expressions`.
	 * @param ctx the parse tree
	 */
	enterExpressions?: (ctx: ExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expressions`.
	 * @param ctx the parse tree
	 */
	exitExpressions?: (ctx: ExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	enterColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 */
	exitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	enterOrderByClause?: (ctx: OrderByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.orderByClause`.
	 * @param ctx the parse tree
	 */
	exitOrderByClause?: (ctx: OrderByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.clusterByClause`.
	 * @param ctx the parse tree
	 */
	enterClusterByClause?: (ctx: ClusterByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.clusterByClause`.
	 * @param ctx the parse tree
	 */
	exitClusterByClause?: (ctx: ClusterByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 */
	exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.distributeByClause`.
	 * @param ctx the parse tree
	 */
	enterDistributeByClause?: (ctx: DistributeByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.distributeByClause`.
	 * @param ctx the parse tree
	 */
	exitDistributeByClause?: (ctx: DistributeByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.sortByClause`.
	 * @param ctx the parse tree
	 */
	enterSortByClause?: (ctx: SortByClauseContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.sortByClause`.
	 * @param ctx the parse tree
	 */
	exitSortByClause?: (ctx: SortByClauseContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.trimFunction`.
	 * @param ctx the parse tree
	 */
	enterTrimFunction?: (ctx: TrimFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.trimFunction`.
	 * @param ctx the parse tree
	 */
	exitTrimFunction?: (ctx: TrimFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.function_`.
	 * @param ctx the parse tree
	 */
	enterFunction_?: (ctx: Function_Context) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.function_`.
	 * @param ctx the parse tree
	 */
	exitFunction_?: (ctx: Function_Context) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.null_treatment`.
	 * @param ctx the parse tree
	 */
	enterNull_treatment?: (ctx: Null_treatmentContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.null_treatment`.
	 * @param ctx the parse tree
	 */
	exitNull_treatment?: (ctx: Null_treatmentContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.functionName`.
	 * @param ctx the parse tree
	 */
	enterFunctionName?: (ctx: FunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.functionName`.
	 * @param ctx the parse tree
	 */
	exitFunctionName?: (ctx: FunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.castExpression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.castExpression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.caseExpression`.
	 * @param ctx the parse tree
	 */
	enterCaseExpression?: (ctx: CaseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.caseExpression`.
	 * @param ctx the parse tree
	 */
	exitCaseExpression?: (ctx: CaseExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.whenExpression`.
	 * @param ctx the parse tree
	 */
	enterWhenExpression?: (ctx: WhenExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.whenExpression`.
	 * @param ctx the parse tree
	 */
	exitWhenExpression?: (ctx: WhenExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.floorExpression`.
	 * @param ctx the parse tree
	 */
	enterFloorExpression?: (ctx: FloorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.floorExpression`.
	 * @param ctx the parse tree
	 */
	exitFloorExpression?: (ctx: FloorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.floorDateQualifiers`.
	 * @param ctx the parse tree
	 */
	enterFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.floorDateQualifiers`.
	 * @param ctx the parse tree
	 */
	exitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.extractExpression`.
	 * @param ctx the parse tree
	 */
	enterExtractExpression?: (ctx: ExtractExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.extractExpression`.
	 * @param ctx the parse tree
	 */
	exitExtractExpression?: (ctx: ExtractExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.timeQualifiers`.
	 * @param ctx the parse tree
	 */
	enterTimeQualifiers?: (ctx: TimeQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.timeQualifiers`.
	 * @param ctx the parse tree
	 */
	exitTimeQualifiers?: (ctx: TimeQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.prepareStmtParam`.
	 * @param ctx the parse tree
	 */
	enterPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.prepareStmtParam`.
	 * @param ctx the parse tree
	 */
	exitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.parameterIdx`.
	 * @param ctx the parse tree
	 */
	enterParameterIdx?: (ctx: ParameterIdxContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.parameterIdx`.
	 * @param ctx the parse tree
	 */
	exitParameterIdx?: (ctx: ParameterIdxContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.stringLiteralSequence`.
	 * @param ctx the parse tree
	 */
	enterStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.stringLiteralSequence`.
	 * @param ctx the parse tree
	 */
	exitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.charSetStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.charSetStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dateLiteral`.
	 * @param ctx the parse tree
	 */
	enterDateLiteral?: (ctx: DateLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dateLiteral`.
	 * @param ctx the parse tree
	 */
	exitDateLiteral?: (ctx: DateLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.timestampLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimestampLiteral?: (ctx: TimestampLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.timestampLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimestampLiteral?: (ctx: TimestampLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 */
	enterTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 */
	exitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	enterIntervalValue?: (ctx: IntervalValueContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.intervalValue`.
	 * @param ctx the parse tree
	 */
	exitIntervalValue?: (ctx: IntervalValueContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.intervalLiteral`.
	 * @param ctx the parse tree
	 */
	enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.intervalLiteral`.
	 * @param ctx the parse tree
	 */
	exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	enterIntervalExpression?: (ctx: IntervalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.intervalExpression`.
	 * @param ctx the parse tree
	 */
	exitIntervalExpression?: (ctx: IntervalExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.intervalQualifiers`.
	 * @param ctx the parse tree
	 */
	enterIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.intervalQualifiers`.
	 * @param ctx the parse tree
	 */
	exitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.atomExpression`.
	 * @param ctx the parse tree
	 */
	enterAtomExpression?: (ctx: AtomExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.atomExpression`.
	 * @param ctx the parse tree
	 */
	exitAtomExpression?: (ctx: AtomExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceStarOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceStarOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceStarExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceStarExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedencePlusOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedencePlusOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedencePlusExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedencePlusExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.subQueryExpression`.
	 * @param ctx the parse tree
	 */
	enterSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.subQueryExpression`.
	 * @param ctx the parse tree
	 */
	exitSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.quantifierType`.
	 * @param ctx the parse tree
	 */
	enterQuantifierType?: (ctx: QuantifierTypeContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.quantifierType`.
	 * @param ctx the parse tree
	 */
	exitQuantifierType?: (ctx: QuantifierTypeContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.isCondition`.
	 * @param ctx the parse tree
	 */
	enterIsCondition?: (ctx: IsConditionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.isCondition`.
	 * @param ctx the parse tree
	 */
	exitIsCondition?: (ctx: IsConditionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceNotOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceNotOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceNotExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceNotExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceAndOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceAndOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceAndExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceAndExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceOrOperator`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceOrOperator`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.precedenceOrExpression`.
	 * @param ctx the parse tree
	 */
	enterPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.precedenceOrExpression`.
	 * @param ctx the parse tree
	 */
	exitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.booleanValueTok`.
	 * @param ctx the parse tree
	 */
	enterBooleanValueTok?: (ctx: BooleanValueTokContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.booleanValueTok`.
	 * @param ctx the parse tree
	 */
	exitBooleanValueTok?: (ctx: BooleanValueTokContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.tableOrPartition`.
	 * @param ctx the parse tree
	 */
	enterTableOrPartition?: (ctx: TableOrPartitionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.tableOrPartition`.
	 * @param ctx the parse tree
	 */
	exitTableOrPartition?: (ctx: TableOrPartitionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSpec?: (ctx: PartitionSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionVal`.
	 * @param ctx the parse tree
	 */
	enterPartitionVal?: (ctx: PartitionValContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionVal`.
	 * @param ctx the parse tree
	 */
	exitPartitionVal?: (ctx: PartitionValContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 */
	enterPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 */
	exitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionSelectorVal`.
	 * @param ctx the parse tree
	 */
	enterPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionSelectorVal`.
	 * @param ctx the parse tree
	 */
	exitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 */
	enterPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 */
	exitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 */
	enterSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 */
	exitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.sysFuncNames`.
	 * @param ctx the parse tree
	 */
	enterSysFuncNames?: (ctx: SysFuncNamesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.sysFuncNames`.
	 * @param ctx the parse tree
	 */
	exitSysFuncNames?: (ctx: SysFuncNamesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.descFuncNames`.
	 * @param ctx the parse tree
	 */
	enterDescFuncNames?: (ctx: DescFuncNamesContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.descFuncNames`.
	 * @param ctx the parse tree
	 */
	exitDescFuncNames?: (ctx: DescFuncNamesContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.id_`.
	 * @param ctx the parse tree
	 */
	enterId_?: (ctx: Id_Context) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.id_`.
	 * @param ctx the parse tree
	 */
	exitId_?: (ctx: Id_Context) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.functionIdentifier`.
	 * @param ctx the parse tree
	 */
	exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.principalIdentifier`.
	 * @param ctx the parse tree
	 */
	enterPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.principalIdentifier`.
	 * @param ctx the parse tree
	 */
	exitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	enterNonReserved?: (ctx: NonReservedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.nonReserved`.
	 * @param ctx the parse tree
	 */
	exitNonReserved?: (ctx: NonReservedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 */
	enterSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 */
	exitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.hint`.
	 * @param ctx the parse tree
	 */
	enterHint?: (ctx: HintContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.hint`.
	 * @param ctx the parse tree
	 */
	exitHint?: (ctx: HintContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.hintList`.
	 * @param ctx the parse tree
	 */
	enterHintList?: (ctx: HintListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.hintList`.
	 * @param ctx the parse tree
	 */
	exitHintList?: (ctx: HintListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.hintItem`.
	 * @param ctx the parse tree
	 */
	enterHintItem?: (ctx: HintItemContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.hintItem`.
	 * @param ctx the parse tree
	 */
	exitHintItem?: (ctx: HintItemContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.hintName`.
	 * @param ctx the parse tree
	 */
	enterHintName?: (ctx: HintNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.hintName`.
	 * @param ctx the parse tree
	 */
	exitHintName?: (ctx: HintNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.hintArgs`.
	 * @param ctx the parse tree
	 */
	enterHintArgs?: (ctx: HintArgsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.hintArgs`.
	 * @param ctx the parse tree
	 */
	exitHintArgs?: (ctx: HintArgsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.hintArgName`.
	 * @param ctx the parse tree
	 */
	enterHintArgName?: (ctx: HintArgNameContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.hintArgName`.
	 * @param ctx the parse tree
	 */
	exitHintArgName?: (ctx: HintArgNameContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.prepareStatement`.
	 * @param ctx the parse tree
	 */
	enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.prepareStatement`.
	 * @param ctx the parse tree
	 */
	exitPrepareStatement?: (ctx: PrepareStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.executeStatement`.
	 * @param ctx the parse tree
	 */
	enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.executeStatement`.
	 * @param ctx the parse tree
	 */
	exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.executeParamList`.
	 * @param ctx the parse tree
	 */
	enterExecuteParamList?: (ctx: ExecuteParamListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.executeParamList`.
	 * @param ctx the parse tree
	 */
	exitExecuteParamList?: (ctx: ExecuteParamListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 */
	enterResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 */
	exitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rpAssign`.
	 * @param ctx the parse tree
	 */
	enterRpAssign?: (ctx: RpAssignContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rpAssign`.
	 * @param ctx the parse tree
	 */
	exitRpAssign?: (ctx: RpAssignContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rpAssignList`.
	 * @param ctx the parse tree
	 */
	enterRpAssignList?: (ctx: RpAssignListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rpAssignList`.
	 * @param ctx the parse tree
	 */
	exitRpAssignList?: (ctx: RpAssignListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rpUnassign`.
	 * @param ctx the parse tree
	 */
	enterRpUnassign?: (ctx: RpUnassignContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rpUnassign`.
	 * @param ctx the parse tree
	 */
	exitRpUnassign?: (ctx: RpUnassignContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.rpUnassignList`.
	 * @param ctx the parse tree
	 */
	enterRpUnassignList?: (ctx: RpUnassignListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.rpUnassignList`.
	 * @param ctx the parse tree
	 */
	exitRpUnassignList?: (ctx: RpUnassignListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.withReplace`.
	 * @param ctx the parse tree
	 */
	enterWithReplace?: (ctx: WithReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.withReplace`.
	 * @param ctx the parse tree
	 */
	exitWithReplace?: (ctx: WithReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.activate`.
	 * @param ctx the parse tree
	 */
	enterActivate?: (ctx: ActivateContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.activate`.
	 * @param ctx the parse tree
	 */
	exitActivate?: (ctx: ActivateContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.enable`.
	 * @param ctx the parse tree
	 */
	enterEnable?: (ctx: EnableContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.enable`.
	 * @param ctx the parse tree
	 */
	exitEnable?: (ctx: EnableContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.disable`.
	 * @param ctx the parse tree
	 */
	enterDisable?: (ctx: DisableContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.disable`.
	 * @param ctx the parse tree
	 */
	exitDisable?: (ctx: DisableContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.unmanaged`.
	 * @param ctx the parse tree
	 */
	enterUnmanaged?: (ctx: UnmanagedContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.unmanaged`.
	 * @param ctx the parse tree
	 */
	exitUnmanaged?: (ctx: UnmanagedContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.globalWmStatement`.
	 * @param ctx the parse tree
	 */
	enterGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.globalWmStatement`.
	 * @param ctx the parse tree
	 */
	exitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	enterDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 */
	exitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.poolPath`.
	 * @param ctx the parse tree
	 */
	enterPoolPath?: (ctx: PoolPathContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.poolPath`.
	 * @param ctx the parse tree
	 */
	exitPoolPath?: (ctx: PoolPathContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerExpression?: (ctx: TriggerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerExpression?: (ctx: TriggerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	enterTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	exitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerOrExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerOrExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerAndExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerAndExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerAtomExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerAtomExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerLiteral`.
	 * @param ctx the parse tree
	 */
	enterTriggerLiteral?: (ctx: TriggerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerLiteral`.
	 * @param ctx the parse tree
	 */
	exitTriggerLiteral?: (ctx: TriggerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.comparisionOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.comparisionOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisionOperator?: (ctx: ComparisionOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerActionExpression`.
	 * @param ctx the parse tree
	 */
	enterTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerActionExpression`.
	 * @param ctx the parse tree
	 */
	exitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	enterTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 */
	exitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createTriggerStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createTriggerStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterTriggerStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterTriggerStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropTriggerStatement`.
	 * @param ctx the parse tree
	 */
	enterDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropTriggerStatement`.
	 * @param ctx the parse tree
	 */
	exitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.poolAssign`.
	 * @param ctx the parse tree
	 */
	enterPoolAssign?: (ctx: PoolAssignContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.poolAssign`.
	 * @param ctx the parse tree
	 */
	exitPoolAssign?: (ctx: PoolAssignContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.poolAssignList`.
	 * @param ctx the parse tree
	 */
	enterPoolAssignList?: (ctx: PoolAssignListContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.poolAssignList`.
	 * @param ctx the parse tree
	 */
	exitPoolAssignList?: (ctx: PoolAssignListContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createPoolStatement`.
	 * @param ctx the parse tree
	 */
	enterCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createPoolStatement`.
	 * @param ctx the parse tree
	 */
	exitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterPoolStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterPoolStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropPoolStatement`.
	 * @param ctx the parse tree
	 */
	enterDropPoolStatement?: (ctx: DropPoolStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropPoolStatement`.
	 * @param ctx the parse tree
	 */
	exitDropPoolStatement?: (ctx: DropPoolStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.createMappingStatement`.
	 * @param ctx the parse tree
	 */
	enterCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.createMappingStatement`.
	 * @param ctx the parse tree
	 */
	exitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.alterMappingStatement`.
	 * @param ctx the parse tree
	 */
	enterAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.alterMappingStatement`.
	 * @param ctx the parse tree
	 */
	exitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;

	/**
	 * Enter a parse tree produced by `SQLParser.dropMappingStatement`.
	 * @param ctx the parse tree
	 */
	enterDropMappingStatement?: (ctx: DropMappingStatementContext) => void;
	/**
	 * Exit a parse tree produced by `SQLParser.dropMappingStatement`.
	 * @param ctx the parse tree
	 */
	exitDropMappingStatement?: (ctx: DropMappingStatementContext) => void;
}

