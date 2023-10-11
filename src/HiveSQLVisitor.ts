// Generated from gen/HiveSQL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StatementContext } from "./HiveSQLParser";
import { ExplainStatementContext } from "./HiveSQLParser";
import { ExplainOptionContext } from "./HiveSQLParser";
import { VectorizationOnlyContext } from "./HiveSQLParser";
import { VectorizatonDetailContext } from "./HiveSQLParser";
import { ExecStatementContext } from "./HiveSQLParser";
import { LoadStatementContext } from "./HiveSQLParser";
import { ReplicationClauseContext } from "./HiveSQLParser";
import { ExportStatementContext } from "./HiveSQLParser";
import { ImportStatementContext } from "./HiveSQLParser";
import { ReplDumpStatementContext } from "./HiveSQLParser";
import { ReplDbPolicyContext } from "./HiveSQLParser";
import { ReplLoadStatementContext } from "./HiveSQLParser";
import { ReplConfigsContext } from "./HiveSQLParser";
import { ReplConfigsListContext } from "./HiveSQLParser";
import { ReplTableLevelPolicyContext } from "./HiveSQLParser";
import { ReplStatusStatementContext } from "./HiveSQLParser";
import { DdlStatementContext } from "./HiveSQLParser";
import { IfExistsContext } from "./HiveSQLParser";
import { RestrictOrCascadeContext } from "./HiveSQLParser";
import { IfNotExistsContext } from "./HiveSQLParser";
import { ForceContext } from "./HiveSQLParser";
import { RewriteEnabledContext } from "./HiveSQLParser";
import { RewriteDisabledContext } from "./HiveSQLParser";
import { StoredAsDirsContext } from "./HiveSQLParser";
import { OrReplaceContext } from "./HiveSQLParser";
import { CreateDatabaseStatementContext } from "./HiveSQLParser";
import { DbLocationContext } from "./HiveSQLParser";
import { DbManagedLocationContext } from "./HiveSQLParser";
import { DbPropertiesContext } from "./HiveSQLParser";
import { DbPropertiesListContext } from "./HiveSQLParser";
import { DbConnectorNameContext } from "./HiveSQLParser";
import { SwitchDatabaseStatementContext } from "./HiveSQLParser";
import { DropDatabaseStatementContext } from "./HiveSQLParser";
import { DatabaseCommentContext } from "./HiveSQLParser";
import { TruncateTableStatementContext } from "./HiveSQLParser";
import { DropTableStatementContext } from "./HiveSQLParser";
import { InputFileFormatContext } from "./HiveSQLParser";
import { TabTypeExprContext } from "./HiveSQLParser";
import { PartTypeExprContext } from "./HiveSQLParser";
import { TabPartColTypeExprContext } from "./HiveSQLParser";
import { DescStatementContext } from "./HiveSQLParser";
import { AnalyzeStatementContext } from "./HiveSQLParser";
import { From_inContext } from "./HiveSQLParser";
import { Db_schemaContext } from "./HiveSQLParser";
import { ShowStatementContext } from "./HiveSQLParser";
import { ShowTablesFilterExprContext } from "./HiveSQLParser";
import { LockStatementContext } from "./HiveSQLParser";
import { LockDatabaseContext } from "./HiveSQLParser";
import { LockModeContext } from "./HiveSQLParser";
import { UnlockStatementContext } from "./HiveSQLParser";
import { UnlockDatabaseContext } from "./HiveSQLParser";
import { CreateRoleStatementContext } from "./HiveSQLParser";
import { DropRoleStatementContext } from "./HiveSQLParser";
import { GrantPrivilegesContext } from "./HiveSQLParser";
import { RevokePrivilegesContext } from "./HiveSQLParser";
import { GrantRoleContext } from "./HiveSQLParser";
import { RevokeRoleContext } from "./HiveSQLParser";
import { ShowRoleGrantsContext } from "./HiveSQLParser";
import { ShowRolesContext } from "./HiveSQLParser";
import { ShowCurrentRoleContext } from "./HiveSQLParser";
import { SetRoleContext } from "./HiveSQLParser";
import { ShowGrantsContext } from "./HiveSQLParser";
import { ShowRolePrincipalsContext } from "./HiveSQLParser";
import { PrivilegeIncludeColObjectContext } from "./HiveSQLParser";
import { PrivilegeObjectContext } from "./HiveSQLParser";
import { PrivObjectContext } from "./HiveSQLParser";
import { PrivObjectColsContext } from "./HiveSQLParser";
import { PrivilegeListContext } from "./HiveSQLParser";
import { PrivlegeDefContext } from "./HiveSQLParser";
import { PrivilegeTypeContext } from "./HiveSQLParser";
import { PrincipalSpecificationContext } from "./HiveSQLParser";
import { PrincipalNameContext } from "./HiveSQLParser";
import { WithGrantOptionContext } from "./HiveSQLParser";
import { GrantOptionForContext } from "./HiveSQLParser";
import { AdminOptionForContext } from "./HiveSQLParser";
import { WithAdminOptionContext } from "./HiveSQLParser";
import { MetastoreCheckContext } from "./HiveSQLParser";
import { ResourceListContext } from "./HiveSQLParser";
import { ResourceContext } from "./HiveSQLParser";
import { ResourceTypeContext } from "./HiveSQLParser";
import { CreateFunctionStatementContext } from "./HiveSQLParser";
import { DropFunctionStatementContext } from "./HiveSQLParser";
import { ReloadFunctionsStatementContext } from "./HiveSQLParser";
import { CreateMacroStatementContext } from "./HiveSQLParser";
import { DropMacroStatementContext } from "./HiveSQLParser";
import { CreateViewStatementContext } from "./HiveSQLParser";
import { ViewPartitionContext } from "./HiveSQLParser";
import { ViewOrganizationContext } from "./HiveSQLParser";
import { ViewClusterSpecContext } from "./HiveSQLParser";
import { ViewComplexSpecContext } from "./HiveSQLParser";
import { ViewDistSpecContext } from "./HiveSQLParser";
import { ViewSortSpecContext } from "./HiveSQLParser";
import { DropViewStatementContext } from "./HiveSQLParser";
import { CreateMaterializedViewStatementContext } from "./HiveSQLParser";
import { DropMaterializedViewStatementContext } from "./HiveSQLParser";
import { CreateScheduledQueryStatementContext } from "./HiveSQLParser";
import { DropScheduledQueryStatementContext } from "./HiveSQLParser";
import { AlterScheduledQueryStatementContext } from "./HiveSQLParser";
import { AlterScheduledQueryChangeContext } from "./HiveSQLParser";
import { ScheduleSpecContext } from "./HiveSQLParser";
import { ExecutedAsSpecContext } from "./HiveSQLParser";
import { DefinedAsSpecContext } from "./HiveSQLParser";
import { ShowFunctionIdentifierContext } from "./HiveSQLParser";
import { ShowStmtIdentifierContext } from "./HiveSQLParser";
import { TableCommentContext } from "./HiveSQLParser";
import { CreateTablePartitionSpecContext } from "./HiveSQLParser";
import { CreateTablePartitionColumnTypeSpecContext } from "./HiveSQLParser";
import { CreateTablePartitionColumnSpecContext } from "./HiveSQLParser";
import { PartitionTransformSpecContext } from "./HiveSQLParser";
import { ColumnNameTransformConstraintContext } from "./HiveSQLParser";
import { PartitionTransformTypeContext } from "./HiveSQLParser";
import { TableBucketsContext } from "./HiveSQLParser";
import { TableImplBucketsContext } from "./HiveSQLParser";
import { TableSkewedContext } from "./HiveSQLParser";
import { RowFormatContext } from "./HiveSQLParser";
import { RecordReaderContext } from "./HiveSQLParser";
import { RecordWriterContext } from "./HiveSQLParser";
import { RowFormatSerdeContext } from "./HiveSQLParser";
import { RowFormatDelimitedContext } from "./HiveSQLParser";
import { TableRowFormatContext } from "./HiveSQLParser";
import { TablePropertiesPrefixedContext } from "./HiveSQLParser";
import { TablePropertiesContext } from "./HiveSQLParser";
import { TablePropertiesListContext } from "./HiveSQLParser";
import { KeyValuePropertyContext } from "./HiveSQLParser";
import { KeyPropertyContext } from "./HiveSQLParser";
import { TableRowFormatFieldIdentifierContext } from "./HiveSQLParser";
import { TableRowFormatCollItemsIdentifierContext } from "./HiveSQLParser";
import { TableRowFormatMapKeysIdentifierContext } from "./HiveSQLParser";
import { TableRowFormatLinesIdentifierContext } from "./HiveSQLParser";
import { TableRowNullFormatContext } from "./HiveSQLParser";
import { TableFileFormatContext } from "./HiveSQLParser";
import { TableLocationContext } from "./HiveSQLParser";
import { ColumnNameTypeListContext } from "./HiveSQLParser";
import { ColumnNameTypeOrConstraintListContext } from "./HiveSQLParser";
import { ColumnNameColonTypeListContext } from "./HiveSQLParser";
import { ColumnNameListContext } from "./HiveSQLParser";
import { ColumnNameContext } from "./HiveSQLParser";
import { ExtColumnNameContext } from "./HiveSQLParser";
import { ColumnNameOrderListContext } from "./HiveSQLParser";
import { ColumnParenthesesListContext } from "./HiveSQLParser";
import { EnableValidateSpecificationContext } from "./HiveSQLParser";
import { EnableSpecificationContext } from "./HiveSQLParser";
import { ValidateSpecificationContext } from "./HiveSQLParser";
import { EnforcedSpecificationContext } from "./HiveSQLParser";
import { RelySpecificationContext } from "./HiveSQLParser";
import { CreateConstraintContext } from "./HiveSQLParser";
import { AlterConstraintWithNameContext } from "./HiveSQLParser";
import { TableLevelConstraintContext } from "./HiveSQLParser";
import { PkUkConstraintContext } from "./HiveSQLParser";
import { CheckConstraintContext } from "./HiveSQLParser";
import { CreateForeignKeyContext } from "./HiveSQLParser";
import { AlterForeignKeyWithNameContext } from "./HiveSQLParser";
import { SkewedValueElementContext } from "./HiveSQLParser";
import { SkewedColumnValuePairListContext } from "./HiveSQLParser";
import { SkewedColumnValuePairContext } from "./HiveSQLParser";
import { SkewedColumnValuesContext } from "./HiveSQLParser";
import { SkewedColumnValueContext } from "./HiveSQLParser";
import { SkewedValueLocationElementContext } from "./HiveSQLParser";
import { OrderSpecificationContext } from "./HiveSQLParser";
import { NullOrderingContext } from "./HiveSQLParser";
import { ColumnNameOrderContext } from "./HiveSQLParser";
import { ColumnNameCommentListContext } from "./HiveSQLParser";
import { ColumnNameCommentContext } from "./HiveSQLParser";
import { OrderSpecificationRewriteContext } from "./HiveSQLParser";
import { ColumnRefOrderContext } from "./HiveSQLParser";
import { ColumnNameTypeContext } from "./HiveSQLParser";
import { ColumnNameTypeOrConstraintContext } from "./HiveSQLParser";
import { TableConstraintContext } from "./HiveSQLParser";
import { ColumnNameTypeConstraintContext } from "./HiveSQLParser";
import { ColumnConstraintContext } from "./HiveSQLParser";
import { ForeignKeyConstraintContext } from "./HiveSQLParser";
import { ColConstraintContext } from "./HiveSQLParser";
import { AlterColumnConstraintContext } from "./HiveSQLParser";
import { AlterForeignKeyConstraintContext } from "./HiveSQLParser";
import { AlterColConstraintContext } from "./HiveSQLParser";
import { ColumnConstraintTypeContext } from "./HiveSQLParser";
import { DefaultValContext } from "./HiveSQLParser";
import { TableConstraintTypeContext } from "./HiveSQLParser";
import { ConstraintOptsCreateContext } from "./HiveSQLParser";
import { ConstraintOptsAlterContext } from "./HiveSQLParser";
import { ColumnNameColonTypeContext } from "./HiveSQLParser";
import { ColTypeContext } from "./HiveSQLParser";
import { ColTypeListContext } from "./HiveSQLParser";
import { TypeContext } from "./HiveSQLParser";
import { PrimitiveTypeContext } from "./HiveSQLParser";
import { ListTypeContext } from "./HiveSQLParser";
import { StructTypeContext } from "./HiveSQLParser";
import { MapTypeContext } from "./HiveSQLParser";
import { UnionTypeContext } from "./HiveSQLParser";
import { SetOperatorContext } from "./HiveSQLParser";
import { QueryStatementExpressionContext } from "./HiveSQLParser";
import { QueryStatementExpressionBodyContext } from "./HiveSQLParser";
import { WithClauseContext } from "./HiveSQLParser";
import { CteStatementContext } from "./HiveSQLParser";
import { FromStatementContext } from "./HiveSQLParser";
import { SingleFromStatementContext } from "./HiveSQLParser";
import { RegularBodyContext } from "./HiveSQLParser";
import { AtomSelectStatementContext } from "./HiveSQLParser";
import { SelectStatementContext } from "./HiveSQLParser";
import { SetOpSelectStatementContext } from "./HiveSQLParser";
import { SelectStatementWithCTEContext } from "./HiveSQLParser";
import { BodyContext } from "./HiveSQLParser";
import { InsertClauseContext } from "./HiveSQLParser";
import { DestinationContext } from "./HiveSQLParser";
import { LimitClauseContext } from "./HiveSQLParser";
import { DeleteStatementContext } from "./HiveSQLParser";
import { ColumnAssignmentClauseContext } from "./HiveSQLParser";
import { PrecedencePlusExpressionOrDefaultContext } from "./HiveSQLParser";
import { SetColumnsClauseContext } from "./HiveSQLParser";
import { UpdateStatementContext } from "./HiveSQLParser";
import { SqlTransactionStatementContext } from "./HiveSQLParser";
import { StartTransactionStatementContext } from "./HiveSQLParser";
import { TransactionModeContext } from "./HiveSQLParser";
import { TransactionAccessModeContext } from "./HiveSQLParser";
import { IsolationLevelContext } from "./HiveSQLParser";
import { LevelOfIsolationContext } from "./HiveSQLParser";
import { CommitStatementContext } from "./HiveSQLParser";
import { RollbackStatementContext } from "./HiveSQLParser";
import { SetAutoCommitStatementContext } from "./HiveSQLParser";
import { AbortTransactionStatementContext } from "./HiveSQLParser";
import { AbortCompactionStatementContext } from "./HiveSQLParser";
import { MergeStatementContext } from "./HiveSQLParser";
import { WhenClausesContext } from "./HiveSQLParser";
import { WhenNotMatchedClauseContext } from "./HiveSQLParser";
import { WhenMatchedAndClauseContext } from "./HiveSQLParser";
import { WhenMatchedThenClauseContext } from "./HiveSQLParser";
import { UpdateOrDeleteContext } from "./HiveSQLParser";
import { KillQueryStatementContext } from "./HiveSQLParser";
import { CompactionIdContext } from "./HiveSQLParser";
import { CompactionPoolContext } from "./HiveSQLParser";
import { CompactionTypeContext } from "./HiveSQLParser";
import { CompactionStatusContext } from "./HiveSQLParser";
import { AlterStatementContext } from "./HiveSQLParser";
import { AlterTableStatementSuffixContext } from "./HiveSQLParser";
import { AlterTblPartitionStatementSuffixContext } from "./HiveSQLParser";
import { AlterStatementPartitionKeyTypeContext } from "./HiveSQLParser";
import { AlterViewStatementSuffixContext } from "./HiveSQLParser";
import { AlterMaterializedViewStatementSuffixContext } from "./HiveSQLParser";
import { AlterMaterializedViewSuffixRewriteContext } from "./HiveSQLParser";
import { AlterMaterializedViewSuffixRebuildContext } from "./HiveSQLParser";
import { AlterDatabaseStatementSuffixContext } from "./HiveSQLParser";
import { AlterDatabaseSuffixPropertiesContext } from "./HiveSQLParser";
import { AlterDatabaseSuffixSetOwnerContext } from "./HiveSQLParser";
import { AlterDatabaseSuffixSetLocationContext } from "./HiveSQLParser";
import { AlterDatabaseSuffixSetManagedLocationContext } from "./HiveSQLParser";
import { AlterStatementSuffixRenameContext } from "./HiveSQLParser";
import { AlterStatementSuffixAddColContext } from "./HiveSQLParser";
import { AlterStatementSuffixAddConstraintContext } from "./HiveSQLParser";
import { AlterStatementSuffixUpdateColumnsContext } from "./HiveSQLParser";
import { AlterStatementSuffixDropConstraintContext } from "./HiveSQLParser";
import { AlterStatementSuffixRenameColContext } from "./HiveSQLParser";
import { AlterStatementSuffixUpdateStatsColContext } from "./HiveSQLParser";
import { AlterStatementSuffixUpdateStatsContext } from "./HiveSQLParser";
import { AlterStatementChangeColPositionContext } from "./HiveSQLParser";
import { AlterStatementSuffixAddPartitionsContext } from "./HiveSQLParser";
import { AlterStatementSuffixAddPartitionsElementContext } from "./HiveSQLParser";
import { AlterStatementSuffixTouchContext } from "./HiveSQLParser";
import { AlterStatementSuffixArchiveContext } from "./HiveSQLParser";
import { AlterStatementSuffixUnArchiveContext } from "./HiveSQLParser";
import { PartitionLocationContext } from "./HiveSQLParser";
import { AlterStatementSuffixDropPartitionsContext } from "./HiveSQLParser";
import { AlterStatementSuffixPropertiesContext } from "./HiveSQLParser";
import { AlterViewSuffixPropertiesContext } from "./HiveSQLParser";
import { AlterStatementSuffixSerdePropertiesContext } from "./HiveSQLParser";
import { TablePartitionPrefixContext } from "./HiveSQLParser";
import { AlterStatementSuffixFileFormatContext } from "./HiveSQLParser";
import { AlterStatementSuffixClusterbySortbyContext } from "./HiveSQLParser";
import { AlterTblPartitionStatementSuffixSkewedLocationContext } from "./HiveSQLParser";
import { SkewedLocationsContext } from "./HiveSQLParser";
import { SkewedLocationsListContext } from "./HiveSQLParser";
import { SkewedLocationMapContext } from "./HiveSQLParser";
import { AlterStatementSuffixLocationContext } from "./HiveSQLParser";
import { AlterStatementSuffixSkewedbyContext } from "./HiveSQLParser";
import { AlterStatementSuffixExchangePartitionContext } from "./HiveSQLParser";
import { AlterStatementSuffixRenamePartContext } from "./HiveSQLParser";
import { AlterStatementSuffixStatsPartContext } from "./HiveSQLParser";
import { AlterStatementSuffixMergeFilesContext } from "./HiveSQLParser";
import { AlterStatementSuffixBucketNumContext } from "./HiveSQLParser";
import { BlockingContext } from "./HiveSQLParser";
import { CompactPoolContext } from "./HiveSQLParser";
import { AlterStatementSuffixCompactContext } from "./HiveSQLParser";
import { AlterStatementSuffixSetOwnerContext } from "./HiveSQLParser";
import { AlterStatementSuffixSetPartSpecContext } from "./HiveSQLParser";
import { AlterStatementSuffixExecuteContext } from "./HiveSQLParser";
import { FileFormatContext } from "./HiveSQLParser";
import { AlterDataConnectorStatementSuffixContext } from "./HiveSQLParser";
import { AlterDataConnectorSuffixPropertiesContext } from "./HiveSQLParser";
import { AlterDataConnectorSuffixSetOwnerContext } from "./HiveSQLParser";
import { AlterDataConnectorSuffixSetUrlContext } from "./HiveSQLParser";
import { LikeTableOrFileContext } from "./HiveSQLParser";
import { CreateTableStatementContext } from "./HiveSQLParser";
import { CreateDataConnectorStatementContext } from "./HiveSQLParser";
import { DataConnectorCommentContext } from "./HiveSQLParser";
import { DataConnectorUrlContext } from "./HiveSQLParser";
import { DataConnectorTypeContext } from "./HiveSQLParser";
import { DcPropertiesContext } from "./HiveSQLParser";
import { DropDataConnectorStatementContext } from "./HiveSQLParser";
import { TableAllColumnsContext } from "./HiveSQLParser";
import { TableOrColumnContext } from "./HiveSQLParser";
import { DefaultValueContext } from "./HiveSQLParser";
import { ExpressionListContext } from "./HiveSQLParser";
import { AliasListContext } from "./HiveSQLParser";
import { FromClauseContext } from "./HiveSQLParser";
import { FromSourceContext } from "./HiveSQLParser";
import { AtomjoinSourceContext } from "./HiveSQLParser";
import { JoinSourceContext } from "./HiveSQLParser";
import { JoinSourcePartContext } from "./HiveSQLParser";
import { UniqueJoinSourceContext } from "./HiveSQLParser";
import { UniqueJoinExprContext } from "./HiveSQLParser";
import { UniqueJoinTokenContext } from "./HiveSQLParser";
import { JoinTokenContext } from "./HiveSQLParser";
import { LateralViewContext } from "./HiveSQLParser";
import { TableAliasContext } from "./HiveSQLParser";
import { TableBucketSampleContext } from "./HiveSQLParser";
import { SplitSampleContext } from "./HiveSQLParser";
import { TableSampleContext } from "./HiveSQLParser";
import { TableSourceContext } from "./HiveSQLParser";
import { AsOfClauseContext } from "./HiveSQLParser";
import { UniqueJoinTableSourceContext } from "./HiveSQLParser";
import { TableNameContext } from "./HiveSQLParser";
import { ViewNameContext } from "./HiveSQLParser";
import { SubQuerySourceContext } from "./HiveSQLParser";
import { PartitioningSpecContext } from "./HiveSQLParser";
import { PartitionTableFunctionSourceContext } from "./HiveSQLParser";
import { PartitionedTableFunctionContext } from "./HiveSQLParser";
import { WhereClauseContext } from "./HiveSQLParser";
import { SearchConditionContext } from "./HiveSQLParser";
import { ValuesSourceContext } from "./HiveSQLParser";
import { ValuesClauseContext } from "./HiveSQLParser";
import { ValuesTableConstructorContext } from "./HiveSQLParser";
import { ValueRowConstructorContext } from "./HiveSQLParser";
import { FirstValueRowConstructorContext } from "./HiveSQLParser";
import { VirtualTableSourceContext } from "./HiveSQLParser";
import { SelectClauseContext } from "./HiveSQLParser";
import { All_distinctContext } from "./HiveSQLParser";
import { SelectListContext } from "./HiveSQLParser";
import { SelectTrfmClauseContext } from "./HiveSQLParser";
import { SelectItemContext } from "./HiveSQLParser";
import { TrfmClauseContext } from "./HiveSQLParser";
import { SelectExpressionContext } from "./HiveSQLParser";
import { SelectExpressionListContext } from "./HiveSQLParser";
import { Window_clauseContext } from "./HiveSQLParser";
import { Window_defnContext } from "./HiveSQLParser";
import { Window_specificationContext } from "./HiveSQLParser";
import { Window_frameContext } from "./HiveSQLParser";
import { Window_range_expressionContext } from "./HiveSQLParser";
import { Window_value_expressionContext } from "./HiveSQLParser";
import { Window_frame_start_boundaryContext } from "./HiveSQLParser";
import { Window_frame_boundaryContext } from "./HiveSQLParser";
import { GroupByClauseContext } from "./HiveSQLParser";
import { Groupby_expressionContext } from "./HiveSQLParser";
import { GroupByEmptyContext } from "./HiveSQLParser";
import { RollupStandardContext } from "./HiveSQLParser";
import { RollupOldSyntaxContext } from "./HiveSQLParser";
import { GroupingSetExpressionContext } from "./HiveSQLParser";
import { GroupingSetExpressionMultipleContext } from "./HiveSQLParser";
import { GroupingExpressionSingleContext } from "./HiveSQLParser";
import { HavingClauseContext } from "./HiveSQLParser";
import { QualifyClauseContext } from "./HiveSQLParser";
import { HavingConditionContext } from "./HiveSQLParser";
import { ExpressionsInParenthesisContext } from "./HiveSQLParser";
import { ExpressionsNotInParenthesisContext } from "./HiveSQLParser";
import { ExpressionPartContext } from "./HiveSQLParser";
import { ExpressionOrDefaultContext } from "./HiveSQLParser";
import { FirstExpressionsWithAliasContext } from "./HiveSQLParser";
import { ExpressionWithAliasContext } from "./HiveSQLParser";
import { ExpressionsContext } from "./HiveSQLParser";
import { ColumnRefOrderInParenthesisContext } from "./HiveSQLParser";
import { ColumnRefOrderNotInParenthesisContext } from "./HiveSQLParser";
import { OrderByClauseContext } from "./HiveSQLParser";
import { ClusterByClauseContext } from "./HiveSQLParser";
import { PartitionByClauseContext } from "./HiveSQLParser";
import { DistributeByClauseContext } from "./HiveSQLParser";
import { SortByClauseContext } from "./HiveSQLParser";
import { TrimFunctionContext } from "./HiveSQLParser";
import { Function_Context } from "./HiveSQLParser";
import { Null_treatmentContext } from "./HiveSQLParser";
import { FunctionNameContext } from "./HiveSQLParser";
import { CastExpressionContext } from "./HiveSQLParser";
import { CaseExpressionContext } from "./HiveSQLParser";
import { WhenExpressionContext } from "./HiveSQLParser";
import { FloorExpressionContext } from "./HiveSQLParser";
import { FloorDateQualifiersContext } from "./HiveSQLParser";
import { ExtractExpressionContext } from "./HiveSQLParser";
import { TimeQualifiersContext } from "./HiveSQLParser";
import { ConstantContext } from "./HiveSQLParser";
import { PrepareStmtParamContext } from "./HiveSQLParser";
import { ParameterIdxContext } from "./HiveSQLParser";
import { StringLiteralSequenceContext } from "./HiveSQLParser";
import { CharSetStringLiteralContext } from "./HiveSQLParser";
import { DateLiteralContext } from "./HiveSQLParser";
import { TimestampLiteralContext } from "./HiveSQLParser";
import { TimestampLocalTZLiteralContext } from "./HiveSQLParser";
import { IntervalValueContext } from "./HiveSQLParser";
import { IntervalLiteralContext } from "./HiveSQLParser";
import { IntervalExpressionContext } from "./HiveSQLParser";
import { IntervalQualifiersContext } from "./HiveSQLParser";
import { ExpressionContext } from "./HiveSQLParser";
import { AtomExpressionContext } from "./HiveSQLParser";
import { PrecedenceFieldExpressionContext } from "./HiveSQLParser";
import { PrecedenceUnaryOperatorContext } from "./HiveSQLParser";
import { PrecedenceUnaryPrefixExpressionContext } from "./HiveSQLParser";
import { PrecedenceBitwiseXorOperatorContext } from "./HiveSQLParser";
import { PrecedenceBitwiseXorExpressionContext } from "./HiveSQLParser";
import { PrecedenceStarOperatorContext } from "./HiveSQLParser";
import { PrecedenceStarExpressionContext } from "./HiveSQLParser";
import { PrecedencePlusOperatorContext } from "./HiveSQLParser";
import { PrecedencePlusExpressionContext } from "./HiveSQLParser";
import { PrecedenceConcatenateOperatorContext } from "./HiveSQLParser";
import { PrecedenceConcatenateExpressionContext } from "./HiveSQLParser";
import { PrecedenceAmpersandOperatorContext } from "./HiveSQLParser";
import { PrecedenceAmpersandExpressionContext } from "./HiveSQLParser";
import { PrecedenceBitwiseOrOperatorContext } from "./HiveSQLParser";
import { PrecedenceBitwiseOrExpressionContext } from "./HiveSQLParser";
import { PrecedenceRegexpOperatorContext } from "./HiveSQLParser";
import { PrecedenceSimilarOperatorContext } from "./HiveSQLParser";
import { SubQueryExpressionContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionMainContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionPartContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionAtomContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionQuantifierPredicateContext } from "./HiveSQLParser";
import { QuantifierTypeContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionInContext } from "./HiveSQLParser";
import { PrecedenceSimilarExpressionPartNotContext } from "./HiveSQLParser";
import { PrecedenceDistinctOperatorContext } from "./HiveSQLParser";
import { PrecedenceEqualOperatorContext } from "./HiveSQLParser";
import { PrecedenceEqualExpressionContext } from "./HiveSQLParser";
import { IsConditionContext } from "./HiveSQLParser";
import { PrecedenceUnarySuffixExpressionContext } from "./HiveSQLParser";
import { PrecedenceNotOperatorContext } from "./HiveSQLParser";
import { PrecedenceNotExpressionContext } from "./HiveSQLParser";
import { PrecedenceAndOperatorContext } from "./HiveSQLParser";
import { PrecedenceAndExpressionContext } from "./HiveSQLParser";
import { PrecedenceOrOperatorContext } from "./HiveSQLParser";
import { PrecedenceOrExpressionContext } from "./HiveSQLParser";
import { BooleanValueContext } from "./HiveSQLParser";
import { BooleanValueTokContext } from "./HiveSQLParser";
import { TableOrPartitionContext } from "./HiveSQLParser";
import { PartitionSpecContext } from "./HiveSQLParser";
import { PartitionValContext } from "./HiveSQLParser";
import { PartitionSelectorSpecContext } from "./HiveSQLParser";
import { PartitionSelectorValContext } from "./HiveSQLParser";
import { PartitionSelectorOperatorContext } from "./HiveSQLParser";
import { SubQuerySelectorOperatorContext } from "./HiveSQLParser";
import { SysFuncNamesContext } from "./HiveSQLParser";
import { DescFuncNamesContext } from "./HiveSQLParser";
import { Id_Context } from "./HiveSQLParser";
import { FunctionIdentifierContext } from "./HiveSQLParser";
import { PrincipalIdentifierContext } from "./HiveSQLParser";
import { NonReservedContext } from "./HiveSQLParser";
import { Sql11ReservedKeywordsUsedAsFunctionNameContext } from "./HiveSQLParser";
import { HintContext } from "./HiveSQLParser";
import { HintListContext } from "./HiveSQLParser";
import { HintItemContext } from "./HiveSQLParser";
import { HintNameContext } from "./HiveSQLParser";
import { HintArgsContext } from "./HiveSQLParser";
import { HintArgNameContext } from "./HiveSQLParser";
import { PrepareStatementContext } from "./HiveSQLParser";
import { ExecuteStatementContext } from "./HiveSQLParser";
import { ExecuteParamListContext } from "./HiveSQLParser";
import { ResourcePlanDdlStatementsContext } from "./HiveSQLParser";
import { RpAssignContext } from "./HiveSQLParser";
import { RpAssignListContext } from "./HiveSQLParser";
import { RpUnassignContext } from "./HiveSQLParser";
import { RpUnassignListContext } from "./HiveSQLParser";
import { CreateResourcePlanStatementContext } from "./HiveSQLParser";
import { WithReplaceContext } from "./HiveSQLParser";
import { ActivateContext } from "./HiveSQLParser";
import { EnableContext } from "./HiveSQLParser";
import { DisableContext } from "./HiveSQLParser";
import { UnmanagedContext } from "./HiveSQLParser";
import { AlterResourcePlanStatementContext } from "./HiveSQLParser";
import { GlobalWmStatementContext } from "./HiveSQLParser";
import { ReplaceResourcePlanStatementContext } from "./HiveSQLParser";
import { DropResourcePlanStatementContext } from "./HiveSQLParser";
import { PoolPathContext } from "./HiveSQLParser";
import { TriggerExpressionContext } from "./HiveSQLParser";
import { TriggerExpressionStandaloneContext } from "./HiveSQLParser";
import { TriggerOrExpressionContext } from "./HiveSQLParser";
import { TriggerAndExpressionContext } from "./HiveSQLParser";
import { TriggerAtomExpressionContext } from "./HiveSQLParser";
import { TriggerLiteralContext } from "./HiveSQLParser";
import { ComparisionOperatorContext } from "./HiveSQLParser";
import { TriggerActionExpressionContext } from "./HiveSQLParser";
import { TriggerActionExpressionStandaloneContext } from "./HiveSQLParser";
import { CreateTriggerStatementContext } from "./HiveSQLParser";
import { AlterTriggerStatementContext } from "./HiveSQLParser";
import { DropTriggerStatementContext } from "./HiveSQLParser";
import { PoolAssignContext } from "./HiveSQLParser";
import { PoolAssignListContext } from "./HiveSQLParser";
import { CreatePoolStatementContext } from "./HiveSQLParser";
import { AlterPoolStatementContext } from "./HiveSQLParser";
import { DropPoolStatementContext } from "./HiveSQLParser";
import { CreateMappingStatementContext } from "./HiveSQLParser";
import { AlterMappingStatementContext } from "./HiveSQLParser";
import { DropMappingStatementContext } from "./HiveSQLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HiveSQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HiveSQLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HiveSQLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.explainStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainStatement?: (ctx: ExplainStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.explainOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplainOption?: (ctx: ExplainOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.vectorizationOnly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVectorizationOnly?: (ctx: VectorizationOnlyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.vectorizatonDetail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.execStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecStatement?: (ctx: ExecStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.loadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStatement?: (ctx: LoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replicationClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationClause?: (ctx: ReplicationClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.exportStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExportStatement?: (ctx: ExportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replDumpStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplDumpStatement?: (ctx: ReplDumpStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replDbPolicy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplDbPolicy?: (ctx: ReplDbPolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replLoadStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplLoadStatement?: (ctx: ReplLoadStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replConfigs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplConfigs?: (ctx: ReplConfigsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replConfigsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplConfigsList?: (ctx: ReplConfigsListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replTableLevelPolicy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replStatusStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplStatusStatement?: (ctx: ReplStatusStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.ddlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdlStatement?: (ctx: DdlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.ifExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExists?: (ctx: IfExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.restrictOrCascade`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.ifNotExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExists?: (ctx: IfNotExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.force`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForce?: (ctx: ForceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rewriteEnabled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteEnabled?: (ctx: RewriteEnabledContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rewriteDisabled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRewriteDisabled?: (ctx: RewriteDisabledContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.storedAsDirs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStoredAsDirs?: (ctx: StoredAsDirsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.orReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrReplace?: (ctx: OrReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dbLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbLocation?: (ctx: DbLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dbManagedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbManagedLocation?: (ctx: DbManagedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dbProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbProperties?: (ctx: DbPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dbPropertiesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbPropertiesList?: (ctx: DbPropertiesListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dbConnectorName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbConnectorName?: (ctx: DbConnectorNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.switchDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropDatabaseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.databaseComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabaseComment?: (ctx: DatabaseCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.truncateTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTableStatement?: (ctx: DropTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.inputFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputFileFormat?: (ctx: InputFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tabTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabTypeExpr?: (ctx: TabTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartTypeExpr?: (ctx: PartTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tabPartColTypeExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.descStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescStatement?: (ctx: DescStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.analyzeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.from_in`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_in?: (ctx: From_inContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.db_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_schema?: (ctx: Db_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStatement?: (ctx: ShowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showTablesFilterExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.lockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStatement?: (ctx: LockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.lockDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockDatabase?: (ctx: LockDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.lockMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockMode?: (ctx: LockModeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.unlockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockStatement?: (ctx: UnlockStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.unlockDatabase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockDatabase?: (ctx: UnlockDatabaseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createRoleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropRoleStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRoleStatement?: (ctx: DropRoleStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.grantPrivileges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantPrivileges?: (ctx: GrantPrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.revokePrivileges`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokePrivileges?: (ctx: RevokePrivilegesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.grantRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantRole?: (ctx: GrantRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.revokeRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevokeRole?: (ctx: RevokeRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showRoleGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showRoles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRoles?: (ctx: ShowRolesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showCurrentRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.setRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetRole?: (ctx: SetRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showGrants`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowGrants?: (ctx: ShowGrantsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showRolePrincipals`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privilegeIncludeColObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privilegeObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeObject?: (ctx: PrivilegeObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privObject`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivObject?: (ctx: PrivObjectContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privObjectCols`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivObjectCols?: (ctx: PrivObjectColsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privilegeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeList?: (ctx: PrivilegeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privlegeDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivlegeDef?: (ctx: PrivlegeDefContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.privilegeType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivilegeType?: (ctx: PrivilegeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.principalSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.principalName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalName?: (ctx: PrincipalNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.withGrantOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithGrantOption?: (ctx: WithGrantOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.grantOptionFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrantOptionFor?: (ctx: GrantOptionForContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.adminOptionFor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdminOptionFor?: (ctx: AdminOptionForContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.withAdminOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithAdminOption?: (ctx: WithAdminOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.metastoreCheck`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetastoreCheck?: (ctx: MetastoreCheckContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.resourceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceType?: (ctx: ResourceTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropFunctionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.reloadFunctionsStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createMacroStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropMacroStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMacroStatement?: (ctx: DropMacroStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateViewStatement?: (ctx: CreateViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewPartition?: (ctx: ViewPartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewOrganization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewOrganization?: (ctx: ViewOrganizationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewClusterSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewClusterSpec?: (ctx: ViewClusterSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewComplexSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewComplexSpec?: (ctx: ViewComplexSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewDistSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewDistSpec?: (ctx: ViewDistSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewSortSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewSortSpec?: (ctx: ViewSortSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropViewStatement?: (ctx: DropViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createMaterializedViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropMaterializedViewStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterScheduledQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterScheduledQueryChange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.scheduleSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScheduleSpec?: (ctx: ScheduleSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.executedAsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.definedAsSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showFunctionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.showStmtIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableComment?: (ctx: TableCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createTablePartitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createTablePartitionColumnTypeSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createTablePartitionColumnSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionTransformSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameTransformConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionTransformType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableBuckets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableBuckets?: (ctx: TableBucketsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableImplBuckets`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableImplBuckets?: (ctx: TableImplBucketsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableSkewed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSkewed?: (ctx: TableSkewedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormat?: (ctx: RowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.recordReader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordReader?: (ctx: RecordReaderContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.recordWriter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordWriter?: (ctx: RecordWriterContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rowFormatSerde`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatSerde?: (ctx: RowFormatSerdeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rowFormatDelimited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableRowFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormat?: (ctx: TableRowFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tablePropertiesPrefixed`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableProperties?: (ctx: TablePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tablePropertiesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePropertiesList?: (ctx: TablePropertiesListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.keyValueProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyValueProperty?: (ctx: KeyValuePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.keyProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyProperty?: (ctx: KeyPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableRowFormatFieldIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableRowFormatCollItemsIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableRowFormatMapKeysIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableRowFormatLinesIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableRowNullFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableFileFormat?: (ctx: TableFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLocation?: (ctx: TableLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameTypeOrConstraintList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameColonTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameList?: (ctx: ColumnNameListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnName?: (ctx: ColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.extColumnName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtColumnName?: (ctx: ExtColumnNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameOrderList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnParenthesesList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.enableValidateSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.enableSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnableSpecification?: (ctx: EnableSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.validateSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValidateSpecification?: (ctx: ValidateSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.enforcedSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.relySpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelySpecification?: (ctx: RelySpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateConstraint?: (ctx: CreateConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterConstraintWithName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableLevelConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.pkUkConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPkUkConstraint?: (ctx: PkUkConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.checkConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCheckConstraint?: (ctx: CheckConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createForeignKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateForeignKey?: (ctx: CreateForeignKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterForeignKeyWithName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedValueElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedValueElement?: (ctx: SkewedValueElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedColumnValuePairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedColumnValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedColumnValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedColumnValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedValueLocationElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.orderSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecification?: (ctx: OrderSpecificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.nullOrdering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullOrdering?: (ctx: NullOrderingContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameOrder?: (ctx: ColumnNameOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameCommentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameComment?: (ctx: ColumnNameCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.orderSpecificationRewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnRefOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrder?: (ctx: ColumnRefOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameType?: (ctx: ColumnNameTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameTypeOrConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraint?: (ctx: TableConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameTypeConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraint?: (ctx: ColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.foreignKeyConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.colConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColConstraint?: (ctx: ColConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterColumnConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterForeignKeyConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterColConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterColConstraint?: (ctx: AlterColConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnConstraintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.defaultVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultVal?: (ctx: DefaultValContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableConstraintType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableConstraintType?: (ctx: TableConstraintTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.constraintOptsCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.constraintOptsAlter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnNameColonType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.colType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColType?: (ctx: ColTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.colTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColTypeList?: (ctx: ColTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.listType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListType?: (ctx: ListTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.structType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructType?: (ctx: StructTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.mapType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMapType?: (ctx: MapTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.unionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionType?: (ctx: UnionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.setOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOperator?: (ctx: SetOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.queryStatementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.queryStatementExpressionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.cteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCteStatement?: (ctx: CteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.fromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromStatement?: (ctx: FromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.singleFromStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleFromStatement?: (ctx: SingleFromStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.regularBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegularBody?: (ctx: RegularBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.atomSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatement?: (ctx: SelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.setOpSelectStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectStatementWithCTE`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.insertClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertClause?: (ctx: InsertClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.destination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestination?: (ctx: DestinationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.limitClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitClause?: (ctx: LimitClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.deleteStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteStatement?: (ctx: DeleteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnAssignmentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedencePlusExpressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.setColumnsClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetColumnsClause?: (ctx: SetColumnsClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.updateStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateStatement?: (ctx: UpdateStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.sqlTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.startTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.transactionMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionMode?: (ctx: TransactionModeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.transactionAccessMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.isolationLevel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsolationLevel?: (ctx: IsolationLevelContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.levelOfIsolation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.commitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommitStatement?: (ctx: CommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rollbackStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollbackStatement?: (ctx: RollbackStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.setAutoCommitStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.abortTransactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.abortCompactionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.mergeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMergeStatement?: (ctx: MergeStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.whenClauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenClauses?: (ctx: WhenClausesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.whenNotMatchedClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.whenMatchedAndClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.whenMatchedThenClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.updateOrDelete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.killQueryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillQueryStatement?: (ctx: KillQueryStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.compactionId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionId?: (ctx: CompactionIdContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.compactionPool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionPool?: (ctx: CompactionPoolContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.compactionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionType?: (ctx: CompactionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.compactionStatus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactionStatus?: (ctx: CompactionStatusContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatement?: (ctx: AlterStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterTableStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterTblPartitionStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementPartitionKeyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterViewStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterMaterializedViewStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterMaterializedViewSuffixRewrite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterMaterializedViewSuffixRebuild`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDatabaseStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetManagedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixRename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixDropConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixRenameCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateStatsCol`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateStats`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementChangeColPosition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddPartitionsElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixTouch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixArchive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixUnArchive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionLocation?: (ctx: PartitionLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixDropPartitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterViewSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixSerdeProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tablePartitionPrefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixFileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixClusterbySortby`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterTblPartitionStatementSuffixSkewedLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedLocations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocations?: (ctx: SkewedLocationsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedLocationsList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.skewedLocationMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixLocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixSkewedby`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixExchangePartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixRenamePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixStatsPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixMergeFiles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixBucketNum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.blocking`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlocking?: (ctx: BlockingContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.compactPool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompactPool?: (ctx: CompactPoolContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixCompact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixSetPartSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterStatementSuffixExecute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.fileFormat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileFormat?: (ctx: FileFormatContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDataConnectorStatementSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixSetOwner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixSetUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.likeTableOrFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createTableStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTableStatement?: (ctx: CreateTableStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createDataConnectorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dataConnectorComment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorComment?: (ctx: DataConnectorCommentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dataConnectorUrl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dataConnectorType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConnectorType?: (ctx: DataConnectorTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dcProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDcProperties?: (ctx: DcPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropDataConnectorStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableAllColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAllColumns?: (ctx: TableAllColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableOrColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrColumn?: (ctx: TableOrColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.aliasList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasList?: (ctx: AliasListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.fromClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromClause?: (ctx: FromClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.fromSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSource?: (ctx: FromSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.atomjoinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomjoinSource?: (ctx: AtomjoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.joinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSource?: (ctx: JoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.joinSourcePart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinSourcePart?: (ctx: JoinSourcePartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.uniqueJoinSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.uniqueJoinExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.uniqueJoinToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.joinToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoinToken?: (ctx: JoinTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.lateralView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLateralView?: (ctx: LateralViewContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableAlias?: (ctx: TableAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableBucketSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableBucketSample?: (ctx: TableBucketSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.splitSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSplitSample?: (ctx: SplitSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableSample`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSample?: (ctx: TableSampleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableSource?: (ctx: TableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.asOfClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsOfClause?: (ctx: AsOfClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.uniqueJoinTableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableName?: (ctx: TableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.viewName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitViewName?: (ctx: ViewNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.subQuerySource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuerySource?: (ctx: SubQuerySourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitioningSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitioningSpec?: (ctx: PartitioningSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionTableFunctionSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionedTableFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.searchCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearchCondition?: (ctx: SearchConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.valuesSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesSource?: (ctx: ValuesSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.valuesClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesClause?: (ctx: ValuesClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.valuesTableConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.valueRowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueRowConstructor?: (ctx: ValueRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.firstValueRowConstructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.virtualTableSource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVirtualTableSource?: (ctx: VirtualTableSourceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectClause?: (ctx: SelectClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.all_distinct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_distinct?: (ctx: All_distinctContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectList?: (ctx: SelectListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectTrfmClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectItem?: (ctx: SelectItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.trfmClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrfmClause?: (ctx: TrfmClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpression?: (ctx: SelectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.selectExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectExpressionList?: (ctx: SelectExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_clause?: (ctx: Window_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_defn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_defn?: (ctx: Window_defnContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_specification?: (ctx: Window_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_frame`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame?: (ctx: Window_frameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_range_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_range_expression?: (ctx: Window_range_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_value_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_value_expression?: (ctx: Window_value_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_frame_start_boundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.window_frame_boundary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.groupByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByClause?: (ctx: GroupByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.groupby_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupby_expression?: (ctx: Groupby_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.groupByEmpty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupByEmpty?: (ctx: GroupByEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rollupStandard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupStandard?: (ctx: RollupStandardContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rollupOldSyntax`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.groupingSetExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.groupingSetExpressionMultiple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.groupingExpressionSingle`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.havingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingClause?: (ctx: HavingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.qualifyClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifyClause?: (ctx: QualifyClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.havingCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHavingCondition?: (ctx: HavingConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressionsInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressionsNotInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionPart?: (ctx: ExpressionPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressionOrDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.firstExpressionsWithAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressionWithAlias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressions?: (ctx: ExpressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnRefOrderInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.columnRefOrderNotInParenthesis`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.orderByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderByClause?: (ctx: OrderByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.clusterByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusterByClause?: (ctx: ClusterByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionByClause?: (ctx: PartitionByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.distributeByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistributeByClause?: (ctx: DistributeByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.sortByClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSortByClause?: (ctx: SortByClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.trimFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrimFunction?: (ctx: TrimFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.function_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_?: (ctx: Function_Context) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.null_treatment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_treatment?: (ctx: Null_treatmentContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.caseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseExpression?: (ctx: CaseExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.whenExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenExpression?: (ctx: WhenExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.floorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorExpression?: (ctx: FloorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.floorDateQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.extractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtractExpression?: (ctx: ExtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.timeQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeQualifiers?: (ctx: TimeQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.prepareStmtParam`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.parameterIdx`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterIdx?: (ctx: ParameterIdxContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.stringLiteralSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.charSetStringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dateLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateLiteral?: (ctx: DateLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.timestampLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampLiteral?: (ctx: TimestampLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.timestampLocalTZLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.intervalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalValue?: (ctx: IntervalValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.intervalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalLiteral?: (ctx: IntervalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.intervalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalExpression?: (ctx: IntervalExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.intervalQualifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.atomExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtomExpression?: (ctx: AtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceFieldExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceUnaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceUnaryPrefixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceBitwiseXorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceBitwiseXorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceStarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceStarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedencePlusOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedencePlusExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceConcatenateOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceConcatenateExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceAmpersandOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceAmpersandExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceBitwiseOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceBitwiseOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceRegexpOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.subQueryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQueryExpression?: (ctx: SubQueryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionMain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionQuantifierPredicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.quantifierType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuantifierType?: (ctx: QuantifierTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionPartNot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceDistinctOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceEqualOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceEqualExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.isCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsCondition?: (ctx: IsConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceUnarySuffixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceNotOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceNotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceAndOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceOrOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.precedenceOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.booleanValueTok`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValueTok?: (ctx: BooleanValueTokContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.tableOrPartition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOrPartition?: (ctx: TableOrPartitionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSpec?: (ctx: PartitionSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionVal?: (ctx: PartitionValContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionSelectorSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionSelectorVal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.partitionSelectorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.subQuerySelectorOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.sysFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSysFuncNames?: (ctx: SysFuncNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.descFuncNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescFuncNames?: (ctx: DescFuncNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.id_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_?: (ctx: Id_Context) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.functionIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.principalIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.nonReserved`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonReserved?: (ctx: NonReservedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.sql11ReservedKeywordsUsedAsFunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHint?: (ctx: HintContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.hintList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintList?: (ctx: HintListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.hintItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintItem?: (ctx: HintItemContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.hintName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintName?: (ctx: HintNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.hintArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintArgs?: (ctx: HintArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.hintArgName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHintArgName?: (ctx: HintArgNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.prepareStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrepareStatement?: (ctx: PrepareStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.executeStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteStatement?: (ctx: ExecuteStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.executeParamList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecuteParamList?: (ctx: ExecuteParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.resourcePlanDdlStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rpAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpAssign?: (ctx: RpAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rpAssignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpAssignList?: (ctx: RpAssignListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rpUnassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpUnassign?: (ctx: RpUnassignContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.rpUnassignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRpUnassignList?: (ctx: RpUnassignListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.withReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithReplace?: (ctx: WithReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.activate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitActivate?: (ctx: ActivateContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.enable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable?: (ctx: EnableContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.disable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisable?: (ctx: DisableContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.unmanaged`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnmanaged?: (ctx: UnmanagedContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.globalWmStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.replaceResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropResourcePlanStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.poolPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolPath?: (ctx: PoolPathContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerExpression?: (ctx: TriggerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerExpressionStandalone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerAtomExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerLiteral?: (ctx: TriggerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.comparisionOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisionOperator?: (ctx: ComparisionOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerActionExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.triggerActionExpressionStandalone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropTriggerStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.poolAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolAssign?: (ctx: PoolAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.poolAssignList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPoolAssignList?: (ctx: PoolAssignListContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropPoolStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropPoolStatement?: (ctx: DropPoolStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.createMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.alterMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HiveSQLParser.dropMappingStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMappingStatement?: (ctx: DropMappingStatementContext) => Result;
}

