// Generated from gen/HiveSQL.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StatementContext } from "./HiveSQLParser.js";
import { SqlStatementContext } from "./HiveSQLParser.js";
import { ExplainStatementContext } from "./HiveSQLParser.js";
import { ExplainOptionContext } from "./HiveSQLParser.js";
import { VectorizationOnlyContext } from "./HiveSQLParser.js";
import { VectorizatonDetailContext } from "./HiveSQLParser.js";
import { ExecStatementContext } from "./HiveSQLParser.js";
import { LoadStatementContext } from "./HiveSQLParser.js";
import { ReplicationClauseContext } from "./HiveSQLParser.js";
import { ExportStatementContext } from "./HiveSQLParser.js";
import { ImportStatementContext } from "./HiveSQLParser.js";
import { ReplDumpStatementContext } from "./HiveSQLParser.js";
import { ReplDbPolicyContext } from "./HiveSQLParser.js";
import { ReplLoadStatementContext } from "./HiveSQLParser.js";
import { ReplConfigsContext } from "./HiveSQLParser.js";
import { ReplConfigsListContext } from "./HiveSQLParser.js";
import { ReplTableLevelPolicyContext } from "./HiveSQLParser.js";
import { ReplStatusStatementContext } from "./HiveSQLParser.js";
import { DdlStatementContext } from "./HiveSQLParser.js";
import { IfExistsContext } from "./HiveSQLParser.js";
import { RestrictOrCascadeContext } from "./HiveSQLParser.js";
import { IfNotExistsContext } from "./HiveSQLParser.js";
import { ForceContext } from "./HiveSQLParser.js";
import { RewriteEnabledContext } from "./HiveSQLParser.js";
import { RewriteDisabledContext } from "./HiveSQLParser.js";
import { StoredAsDirsContext } from "./HiveSQLParser.js";
import { OrReplaceContext } from "./HiveSQLParser.js";
import { CreateDatabaseStatementContext } from "./HiveSQLParser.js";
import { DbLocationContext } from "./HiveSQLParser.js";
import { DbManagedLocationContext } from "./HiveSQLParser.js";
import { DbPropertiesContext } from "./HiveSQLParser.js";
import { DbPropertiesListContext } from "./HiveSQLParser.js";
import { DbConnectorNameContext } from "./HiveSQLParser.js";
import { SwitchDatabaseStatementContext } from "./HiveSQLParser.js";
import { DropDatabaseStatementContext } from "./HiveSQLParser.js";
import { DatabaseCommentContext } from "./HiveSQLParser.js";
import { TruncateTableStatementContext } from "./HiveSQLParser.js";
import { DropTableStatementContext } from "./HiveSQLParser.js";
import { InputFileFormatContext } from "./HiveSQLParser.js";
import { TabTypeExprContext } from "./HiveSQLParser.js";
import { PartTypeExprContext } from "./HiveSQLParser.js";
import { TabPartColTypeExprContext } from "./HiveSQLParser.js";
import { DescStatementContext } from "./HiveSQLParser.js";
import { AnalyzeStatementContext } from "./HiveSQLParser.js";
import { From_inContext } from "./HiveSQLParser.js";
import { Db_schemaContext } from "./HiveSQLParser.js";
import { ShowStatementContext } from "./HiveSQLParser.js";
import { ShowTablesFilterExprContext } from "./HiveSQLParser.js";
import { LockStatementContext } from "./HiveSQLParser.js";
import { LockDatabaseContext } from "./HiveSQLParser.js";
import { LockModeContext } from "./HiveSQLParser.js";
import { UnlockStatementContext } from "./HiveSQLParser.js";
import { UnlockDatabaseContext } from "./HiveSQLParser.js";
import { CreateRoleStatementContext } from "./HiveSQLParser.js";
import { DropRoleStatementContext } from "./HiveSQLParser.js";
import { GrantPrivilegesContext } from "./HiveSQLParser.js";
import { RevokePrivilegesContext } from "./HiveSQLParser.js";
import { GrantRoleContext } from "./HiveSQLParser.js";
import { RevokeRoleContext } from "./HiveSQLParser.js";
import { ShowRoleGrantsContext } from "./HiveSQLParser.js";
import { ShowRolesContext } from "./HiveSQLParser.js";
import { ShowCurrentRoleContext } from "./HiveSQLParser.js";
import { SetRoleContext } from "./HiveSQLParser.js";
import { ShowGrantsContext } from "./HiveSQLParser.js";
import { ShowRolePrincipalsContext } from "./HiveSQLParser.js";
import { PrivilegeIncludeColObjectContext } from "./HiveSQLParser.js";
import { PrivilegeObjectContext } from "./HiveSQLParser.js";
import { PrivObjectContext } from "./HiveSQLParser.js";
import { PrivObjectColsContext } from "./HiveSQLParser.js";
import { PrivilegeListContext } from "./HiveSQLParser.js";
import { PrivlegeDefContext } from "./HiveSQLParser.js";
import { PrivilegeTypeContext } from "./HiveSQLParser.js";
import { PrincipalSpecificationContext } from "./HiveSQLParser.js";
import { PrincipalNameContext } from "./HiveSQLParser.js";
import { WithGrantOptionContext } from "./HiveSQLParser.js";
import { GrantOptionForContext } from "./HiveSQLParser.js";
import { AdminOptionForContext } from "./HiveSQLParser.js";
import { WithAdminOptionContext } from "./HiveSQLParser.js";
import { MetastoreCheckContext } from "./HiveSQLParser.js";
import { ResourceListContext } from "./HiveSQLParser.js";
import { ResourceContext } from "./HiveSQLParser.js";
import { ResourceTypeContext } from "./HiveSQLParser.js";
import { CreateFunctionStatementContext } from "./HiveSQLParser.js";
import { DropFunctionStatementContext } from "./HiveSQLParser.js";
import { ReloadFunctionsStatementContext } from "./HiveSQLParser.js";
import { CreateMacroStatementContext } from "./HiveSQLParser.js";
import { DropMacroStatementContext } from "./HiveSQLParser.js";
import { CreateViewStatementContext } from "./HiveSQLParser.js";
import { ViewPartitionContext } from "./HiveSQLParser.js";
import { ViewOrganizationContext } from "./HiveSQLParser.js";
import { ViewClusterSpecContext } from "./HiveSQLParser.js";
import { ViewComplexSpecContext } from "./HiveSQLParser.js";
import { ViewDistSpecContext } from "./HiveSQLParser.js";
import { ViewSortSpecContext } from "./HiveSQLParser.js";
import { DropViewStatementContext } from "./HiveSQLParser.js";
import { CreateMaterializedViewStatementContext } from "./HiveSQLParser.js";
import { DropMaterializedViewStatementContext } from "./HiveSQLParser.js";
import { CreateScheduledQueryStatementContext } from "./HiveSQLParser.js";
import { DropScheduledQueryStatementContext } from "./HiveSQLParser.js";
import { AlterScheduledQueryStatementContext } from "./HiveSQLParser.js";
import { AlterScheduledQueryChangeContext } from "./HiveSQLParser.js";
import { ScheduleSpecContext } from "./HiveSQLParser.js";
import { ExecutedAsSpecContext } from "./HiveSQLParser.js";
import { DefinedAsSpecContext } from "./HiveSQLParser.js";
import { ShowFunctionIdentifierContext } from "./HiveSQLParser.js";
import { ShowStmtIdentifierContext } from "./HiveSQLParser.js";
import { TableCommentContext } from "./HiveSQLParser.js";
import { TableUsingContext } from "./HiveSQLParser.js";
import { CreateTablePartitionSpecContext } from "./HiveSQLParser.js";
import { CreateTablePartitionColumnTypeSpecContext } from "./HiveSQLParser.js";
import { CreateTablePartitionColumnSpecContext } from "./HiveSQLParser.js";
import { PartitionTransformSpecContext } from "./HiveSQLParser.js";
import { ColumnNameTransformConstraintContext } from "./HiveSQLParser.js";
import { PartitionTransformTypeContext } from "./HiveSQLParser.js";
import { TableBucketsContext } from "./HiveSQLParser.js";
import { TableImplBucketsContext } from "./HiveSQLParser.js";
import { TableSkewedContext } from "./HiveSQLParser.js";
import { RowFormatContext } from "./HiveSQLParser.js";
import { RecordReaderContext } from "./HiveSQLParser.js";
import { RecordWriterContext } from "./HiveSQLParser.js";
import { RowFormatSerdeContext } from "./HiveSQLParser.js";
import { RowFormatDelimitedContext } from "./HiveSQLParser.js";
import { TableRowFormatContext } from "./HiveSQLParser.js";
import { TablePropertiesPrefixedContext } from "./HiveSQLParser.js";
import { TablePropertiesContext } from "./HiveSQLParser.js";
import { TablePropertiesListContext } from "./HiveSQLParser.js";
import { KeyValuePropertyContext } from "./HiveSQLParser.js";
import { KeyPropertyContext } from "./HiveSQLParser.js";
import { TableRowFormatFieldIdentifierContext } from "./HiveSQLParser.js";
import { TableRowFormatCollItemsIdentifierContext } from "./HiveSQLParser.js";
import { TableRowFormatMapKeysIdentifierContext } from "./HiveSQLParser.js";
import { TableRowFormatLinesIdentifierContext } from "./HiveSQLParser.js";
import { TableRowNullFormatContext } from "./HiveSQLParser.js";
import { TableFileFormatContext } from "./HiveSQLParser.js";
import { TableLocationContext } from "./HiveSQLParser.js";
import { ColumnNameTypeListContext } from "./HiveSQLParser.js";
import { ColumnNameTypeOrConstraintListContext } from "./HiveSQLParser.js";
import { ColumnNameColonTypeListContext } from "./HiveSQLParser.js";
import { ColumnNameListContext } from "./HiveSQLParser.js";
import { ColumnNameContext } from "./HiveSQLParser.js";
import { ExtColumnNameContext } from "./HiveSQLParser.js";
import { ColumnNameOrderListContext } from "./HiveSQLParser.js";
import { ColumnParenthesesListContext } from "./HiveSQLParser.js";
import { EnableValidateSpecificationContext } from "./HiveSQLParser.js";
import { EnableSpecificationContext } from "./HiveSQLParser.js";
import { ValidateSpecificationContext } from "./HiveSQLParser.js";
import { EnforcedSpecificationContext } from "./HiveSQLParser.js";
import { RelySpecificationContext } from "./HiveSQLParser.js";
import { CreateConstraintContext } from "./HiveSQLParser.js";
import { AlterConstraintWithNameContext } from "./HiveSQLParser.js";
import { TableLevelConstraintContext } from "./HiveSQLParser.js";
import { PkUkConstraintContext } from "./HiveSQLParser.js";
import { CheckConstraintContext } from "./HiveSQLParser.js";
import { CreateForeignKeyContext } from "./HiveSQLParser.js";
import { AlterForeignKeyWithNameContext } from "./HiveSQLParser.js";
import { SkewedValueElementContext } from "./HiveSQLParser.js";
import { SkewedColumnValuePairListContext } from "./HiveSQLParser.js";
import { SkewedColumnValuePairContext } from "./HiveSQLParser.js";
import { SkewedColumnValuesContext } from "./HiveSQLParser.js";
import { SkewedColumnValueContext } from "./HiveSQLParser.js";
import { SkewedValueLocationElementContext } from "./HiveSQLParser.js";
import { OrderSpecificationContext } from "./HiveSQLParser.js";
import { NullOrderingContext } from "./HiveSQLParser.js";
import { ColumnNameOrderContext } from "./HiveSQLParser.js";
import { ColumnNameCommentListContext } from "./HiveSQLParser.js";
import { ColumnNameCommentContext } from "./HiveSQLParser.js";
import { OrderSpecificationRewriteContext } from "./HiveSQLParser.js";
import { ColumnRefOrderContext } from "./HiveSQLParser.js";
import { ColumnNameTypeContext } from "./HiveSQLParser.js";
import { ColumnNameTypeOrConstraintContext } from "./HiveSQLParser.js";
import { TableConstraintContext } from "./HiveSQLParser.js";
import { ColumnNameTypeConstraintContext } from "./HiveSQLParser.js";
import { ColumnConstraintContext } from "./HiveSQLParser.js";
import { ForeignKeyConstraintContext } from "./HiveSQLParser.js";
import { ColConstraintContext } from "./HiveSQLParser.js";
import { AlterColumnConstraintContext } from "./HiveSQLParser.js";
import { AlterForeignKeyConstraintContext } from "./HiveSQLParser.js";
import { AlterColConstraintContext } from "./HiveSQLParser.js";
import { ColumnConstraintTypeContext } from "./HiveSQLParser.js";
import { DefaultValContext } from "./HiveSQLParser.js";
import { TableConstraintTypeContext } from "./HiveSQLParser.js";
import { ConstraintOptsCreateContext } from "./HiveSQLParser.js";
import { ConstraintOptsAlterContext } from "./HiveSQLParser.js";
import { ColumnNameColonTypeContext } from "./HiveSQLParser.js";
import { ColTypeContext } from "./HiveSQLParser.js";
import { ColTypeListContext } from "./HiveSQLParser.js";
import { TypeContext } from "./HiveSQLParser.js";
import { PrimitiveTypeContext } from "./HiveSQLParser.js";
import { ListTypeContext } from "./HiveSQLParser.js";
import { StructTypeContext } from "./HiveSQLParser.js";
import { MapTypeContext } from "./HiveSQLParser.js";
import { UnionTypeContext } from "./HiveSQLParser.js";
import { SetOperatorContext } from "./HiveSQLParser.js";
import { QueryStatementExpressionContext } from "./HiveSQLParser.js";
import { QueryStatementExpressionBodyContext } from "./HiveSQLParser.js";
import { WithClauseContext } from "./HiveSQLParser.js";
import { CteStatementContext } from "./HiveSQLParser.js";
import { FromStatementContext } from "./HiveSQLParser.js";
import { SingleFromStatementContext } from "./HiveSQLParser.js";
import { RegularBodyContext } from "./HiveSQLParser.js";
import { AtomSelectStatementContext } from "./HiveSQLParser.js";
import { SelectStatementContext } from "./HiveSQLParser.js";
import { SetOpSelectStatementContext } from "./HiveSQLParser.js";
import { SelectStatementWithCTEContext } from "./HiveSQLParser.js";
import { BodyContext } from "./HiveSQLParser.js";
import { InsertClauseContext } from "./HiveSQLParser.js";
import { DestinationContext } from "./HiveSQLParser.js";
import { LimitClauseContext } from "./HiveSQLParser.js";
import { DeleteStatementContext } from "./HiveSQLParser.js";
import { ColumnAssignmentClauseContext } from "./HiveSQLParser.js";
import { PrecedencePlusExpressionOrDefaultContext } from "./HiveSQLParser.js";
import { SetColumnsClauseContext } from "./HiveSQLParser.js";
import { UpdateStatementContext } from "./HiveSQLParser.js";
import { SqlTransactionStatementContext } from "./HiveSQLParser.js";
import { StartTransactionStatementContext } from "./HiveSQLParser.js";
import { TransactionModeContext } from "./HiveSQLParser.js";
import { TransactionAccessModeContext } from "./HiveSQLParser.js";
import { IsolationLevelContext } from "./HiveSQLParser.js";
import { LevelOfIsolationContext } from "./HiveSQLParser.js";
import { CommitStatementContext } from "./HiveSQLParser.js";
import { RollbackStatementContext } from "./HiveSQLParser.js";
import { SetAutoCommitStatementContext } from "./HiveSQLParser.js";
import { AbortTransactionStatementContext } from "./HiveSQLParser.js";
import { AbortCompactionStatementContext } from "./HiveSQLParser.js";
import { MergeStatementContext } from "./HiveSQLParser.js";
import { WhenClausesContext } from "./HiveSQLParser.js";
import { WhenNotMatchedClauseContext } from "./HiveSQLParser.js";
import { WhenMatchedAndClauseContext } from "./HiveSQLParser.js";
import { WhenMatchedThenClauseContext } from "./HiveSQLParser.js";
import { UpdateOrDeleteContext } from "./HiveSQLParser.js";
import { KillQueryStatementContext } from "./HiveSQLParser.js";
import { CompactionIdContext } from "./HiveSQLParser.js";
import { CompactionPoolContext } from "./HiveSQLParser.js";
import { CompactionTypeContext } from "./HiveSQLParser.js";
import { CompactionStatusContext } from "./HiveSQLParser.js";
import { AlterStatementContext } from "./HiveSQLParser.js";
import { AlterTableStatementSuffixContext } from "./HiveSQLParser.js";
import { AlterTblPartitionStatementSuffixContext } from "./HiveSQLParser.js";
import { AlterStatementPartitionKeyTypeContext } from "./HiveSQLParser.js";
import { AlterViewStatementSuffixContext } from "./HiveSQLParser.js";
import { AlterMaterializedViewStatementSuffixContext } from "./HiveSQLParser.js";
import { AlterMaterializedViewSuffixRewriteContext } from "./HiveSQLParser.js";
import { AlterMaterializedViewSuffixRebuildContext } from "./HiveSQLParser.js";
import { AlterDatabaseStatementSuffixContext } from "./HiveSQLParser.js";
import { AlterDatabaseSuffixPropertiesContext } from "./HiveSQLParser.js";
import { AlterScopePropertiesContext } from "./HiveSQLParser.js";
import { AlterDatabaseSuffixSetOwnerContext } from "./HiveSQLParser.js";
import { AlterDatabaseSuffixSetLocationContext } from "./HiveSQLParser.js";
import { AlterDatabaseSuffixSetManagedLocationContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixRenameContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixAddColContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixAddConstraintContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixUpdateColumnsContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixDropConstraintContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixRenameColContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixUpdateStatsColContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixUpdateStatsContext } from "./HiveSQLParser.js";
import { AlterStatementChangeColPositionContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixAddPartitionsContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixAddPartitionsElementContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixTouchContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixArchiveContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixUnArchiveContext } from "./HiveSQLParser.js";
import { PartitionLocationContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixDropPartitionsContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixPropertiesContext } from "./HiveSQLParser.js";
import { AlterViewSuffixPropertiesContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixSerdePropertiesContext } from "./HiveSQLParser.js";
import { TablePartitionPrefixContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixFileFormatContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixClusterbySortbyContext } from "./HiveSQLParser.js";
import { AlterTblPartitionStatementSuffixSkewedLocationContext } from "./HiveSQLParser.js";
import { SkewedLocationsContext } from "./HiveSQLParser.js";
import { SkewedLocationsListContext } from "./HiveSQLParser.js";
import { SkewedLocationMapContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixLocationContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixSkewedbyContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixExchangePartitionContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixRenamePartContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixStatsPartContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixMergeFilesContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixBucketNumContext } from "./HiveSQLParser.js";
import { BlockingContext } from "./HiveSQLParser.js";
import { CompactPoolContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixCompactContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixSetOwnerContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixSetPartSpecContext } from "./HiveSQLParser.js";
import { AlterStatementSuffixExecuteContext } from "./HiveSQLParser.js";
import { FileFormatContext } from "./HiveSQLParser.js";
import { AlterDataConnectorStatementSuffixContext } from "./HiveSQLParser.js";
import { AlterDataConnectorSuffixPropertiesContext } from "./HiveSQLParser.js";
import { AlterDataConnectorSuffixSetOwnerContext } from "./HiveSQLParser.js";
import { AlterDataConnectorSuffixSetUrlContext } from "./HiveSQLParser.js";
import { LikeTableOrFileContext } from "./HiveSQLParser.js";
import { CreateTableStatementContext } from "./HiveSQLParser.js";
import { CreateDataConnectorStatementContext } from "./HiveSQLParser.js";
import { DataConnectorCommentContext } from "./HiveSQLParser.js";
import { DataConnectorUrlContext } from "./HiveSQLParser.js";
import { DataConnectorTypeContext } from "./HiveSQLParser.js";
import { DcPropertiesContext } from "./HiveSQLParser.js";
import { DropDataConnectorStatementContext } from "./HiveSQLParser.js";
import { TableAllColumnsContext } from "./HiveSQLParser.js";
import { TableOrColumnContext } from "./HiveSQLParser.js";
import { DefaultValueContext } from "./HiveSQLParser.js";
import { ExpressionListContext } from "./HiveSQLParser.js";
import { AliasListContext } from "./HiveSQLParser.js";
import { FromClauseContext } from "./HiveSQLParser.js";
import { FromSourceContext } from "./HiveSQLParser.js";
import { AtomjoinSourceContext } from "./HiveSQLParser.js";
import { JoinSourceContext } from "./HiveSQLParser.js";
import { JoinSourcePartContext } from "./HiveSQLParser.js";
import { UniqueJoinSourceContext } from "./HiveSQLParser.js";
import { UniqueJoinExprContext } from "./HiveSQLParser.js";
import { UniqueJoinTokenContext } from "./HiveSQLParser.js";
import { JoinTokenContext } from "./HiveSQLParser.js";
import { LateralViewContext } from "./HiveSQLParser.js";
import { TableAliasContext } from "./HiveSQLParser.js";
import { TableBucketSampleContext } from "./HiveSQLParser.js";
import { SplitSampleContext } from "./HiveSQLParser.js";
import { TableSampleContext } from "./HiveSQLParser.js";
import { TableSourceContext } from "./HiveSQLParser.js";
import { AsOfClauseContext } from "./HiveSQLParser.js";
import { UniqueJoinTableSourceContext } from "./HiveSQLParser.js";
import { TableNameContext } from "./HiveSQLParser.js";
import { ViewNameContext } from "./HiveSQLParser.js";
import { SubQuerySourceContext } from "./HiveSQLParser.js";
import { PartitioningSpecContext } from "./HiveSQLParser.js";
import { PartitionTableFunctionSourceContext } from "./HiveSQLParser.js";
import { PartitionedTableFunctionContext } from "./HiveSQLParser.js";
import { WhereClauseContext } from "./HiveSQLParser.js";
import { SearchConditionContext } from "./HiveSQLParser.js";
import { ValuesSourceContext } from "./HiveSQLParser.js";
import { ValuesClauseContext } from "./HiveSQLParser.js";
import { ValuesTableConstructorContext } from "./HiveSQLParser.js";
import { ValueRowConstructorContext } from "./HiveSQLParser.js";
import { FirstValueRowConstructorContext } from "./HiveSQLParser.js";
import { VirtualTableSourceContext } from "./HiveSQLParser.js";
import { SelectClauseContext } from "./HiveSQLParser.js";
import { All_distinctContext } from "./HiveSQLParser.js";
import { SelectListContext } from "./HiveSQLParser.js";
import { SelectTrfmClauseContext } from "./HiveSQLParser.js";
import { SelectItemContext } from "./HiveSQLParser.js";
import { TrfmClauseContext } from "./HiveSQLParser.js";
import { SelectExpressionContext } from "./HiveSQLParser.js";
import { SelectExpressionListContext } from "./HiveSQLParser.js";
import { Window_clauseContext } from "./HiveSQLParser.js";
import { Window_defnContext } from "./HiveSQLParser.js";
import { Window_specificationContext } from "./HiveSQLParser.js";
import { Window_frameContext } from "./HiveSQLParser.js";
import { Window_range_expressionContext } from "./HiveSQLParser.js";
import { Window_value_expressionContext } from "./HiveSQLParser.js";
import { Window_frame_start_boundaryContext } from "./HiveSQLParser.js";
import { Window_frame_boundaryContext } from "./HiveSQLParser.js";
import { GroupByClauseContext } from "./HiveSQLParser.js";
import { Groupby_expressionContext } from "./HiveSQLParser.js";
import { GroupByEmptyContext } from "./HiveSQLParser.js";
import { RollupStandardContext } from "./HiveSQLParser.js";
import { RollupOldSyntaxContext } from "./HiveSQLParser.js";
import { GroupingSetExpressionContext } from "./HiveSQLParser.js";
import { GroupingSetExpressionMultipleContext } from "./HiveSQLParser.js";
import { GroupingExpressionSingleContext } from "./HiveSQLParser.js";
import { HavingClauseContext } from "./HiveSQLParser.js";
import { QualifyClauseContext } from "./HiveSQLParser.js";
import { HavingConditionContext } from "./HiveSQLParser.js";
import { ExpressionsInParenthesisContext } from "./HiveSQLParser.js";
import { ExpressionsNotInParenthesisContext } from "./HiveSQLParser.js";
import { ExpressionPartContext } from "./HiveSQLParser.js";
import { ExpressionOrDefaultContext } from "./HiveSQLParser.js";
import { FirstExpressionsWithAliasContext } from "./HiveSQLParser.js";
import { ExpressionWithAliasContext } from "./HiveSQLParser.js";
import { ExpressionsContext } from "./HiveSQLParser.js";
import { ColumnRefOrderInParenthesisContext } from "./HiveSQLParser.js";
import { ColumnRefOrderNotInParenthesisContext } from "./HiveSQLParser.js";
import { OrderByClauseContext } from "./HiveSQLParser.js";
import { ClusterByClauseContext } from "./HiveSQLParser.js";
import { PartitionByClauseContext } from "./HiveSQLParser.js";
import { DistributeByClauseContext } from "./HiveSQLParser.js";
import { SortByClauseContext } from "./HiveSQLParser.js";
import { TrimFunctionContext } from "./HiveSQLParser.js";
import { Function_Context } from "./HiveSQLParser.js";
import { Null_treatmentContext } from "./HiveSQLParser.js";
import { FunctionNameContext } from "./HiveSQLParser.js";
import { CastExpressionContext } from "./HiveSQLParser.js";
import { CaseExpressionContext } from "./HiveSQLParser.js";
import { WhenExpressionContext } from "./HiveSQLParser.js";
import { FloorExpressionContext } from "./HiveSQLParser.js";
import { FloorDateQualifiersContext } from "./HiveSQLParser.js";
import { ExtractExpressionContext } from "./HiveSQLParser.js";
import { TimeQualifiersContext } from "./HiveSQLParser.js";
import { ConstantContext } from "./HiveSQLParser.js";
import { PrepareStmtParamContext } from "./HiveSQLParser.js";
import { ParameterIdxContext } from "./HiveSQLParser.js";
import { StringLiteralSequenceContext } from "./HiveSQLParser.js";
import { CharSetStringLiteralContext } from "./HiveSQLParser.js";
import { DateLiteralContext } from "./HiveSQLParser.js";
import { TimestampLiteralContext } from "./HiveSQLParser.js";
import { TimestampLocalTZLiteralContext } from "./HiveSQLParser.js";
import { IntervalValueContext } from "./HiveSQLParser.js";
import { IntervalLiteralContext } from "./HiveSQLParser.js";
import { IntervalExpressionContext } from "./HiveSQLParser.js";
import { IntervalQualifiersContext } from "./HiveSQLParser.js";
import { ExpressionContext } from "./HiveSQLParser.js";
import { AtomExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceFieldExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceUnaryOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceUnaryPrefixExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceBitwiseXorOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceBitwiseXorExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceStarOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceStarExpressionContext } from "./HiveSQLParser.js";
import { PrecedencePlusOperatorContext } from "./HiveSQLParser.js";
import { PrecedencePlusExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceConcatenateOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceConcatenateExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceAmpersandOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceAmpersandExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceBitwiseOrOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceBitwiseOrExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceRegexpOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarOperatorContext } from "./HiveSQLParser.js";
import { SubQueryExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionMainContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionPartContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionAtomContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionQuantifierPredicateContext } from "./HiveSQLParser.js";
import { QuantifierTypeContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionInContext } from "./HiveSQLParser.js";
import { PrecedenceSimilarExpressionPartNotContext } from "./HiveSQLParser.js";
import { PrecedenceDistinctOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceEqualOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceEqualExpressionContext } from "./HiveSQLParser.js";
import { IsConditionContext } from "./HiveSQLParser.js";
import { PrecedenceUnarySuffixExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceNotOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceNotExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceAndOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceAndExpressionContext } from "./HiveSQLParser.js";
import { PrecedenceOrOperatorContext } from "./HiveSQLParser.js";
import { PrecedenceOrExpressionContext } from "./HiveSQLParser.js";
import { BooleanValueContext } from "./HiveSQLParser.js";
import { BooleanValueTokContext } from "./HiveSQLParser.js";
import { TableOrPartitionContext } from "./HiveSQLParser.js";
import { PartitionSpecContext } from "./HiveSQLParser.js";
import { PartitionValContext } from "./HiveSQLParser.js";
import { PartitionSelectorSpecContext } from "./HiveSQLParser.js";
import { PartitionSelectorValContext } from "./HiveSQLParser.js";
import { PartitionSelectorOperatorContext } from "./HiveSQLParser.js";
import { SubQuerySelectorOperatorContext } from "./HiveSQLParser.js";
import { SysFuncNamesContext } from "./HiveSQLParser.js";
import { DescFuncNamesContext } from "./HiveSQLParser.js";
import { Id_Context } from "./HiveSQLParser.js";
import { FunctionIdentifierContext } from "./HiveSQLParser.js";
import { PrincipalIdentifierContext } from "./HiveSQLParser.js";
import { NonReservedContext } from "./HiveSQLParser.js";
import { Sql11ReservedKeywordsUsedAsFunctionNameContext } from "./HiveSQLParser.js";
import { HintContext } from "./HiveSQLParser.js";
import { HintListContext } from "./HiveSQLParser.js";
import { HintItemContext } from "./HiveSQLParser.js";
import { HintNameContext } from "./HiveSQLParser.js";
import { HintArgsContext } from "./HiveSQLParser.js";
import { HintArgNameContext } from "./HiveSQLParser.js";
import { PrepareStatementContext } from "./HiveSQLParser.js";
import { ExecuteStatementContext } from "./HiveSQLParser.js";
import { ExecuteParamListContext } from "./HiveSQLParser.js";
import { ResourcePlanDdlStatementsContext } from "./HiveSQLParser.js";
import { RpAssignContext } from "./HiveSQLParser.js";
import { RpAssignListContext } from "./HiveSQLParser.js";
import { RpUnassignContext } from "./HiveSQLParser.js";
import { RpUnassignListContext } from "./HiveSQLParser.js";
import { CreateResourcePlanStatementContext } from "./HiveSQLParser.js";
import { WithReplaceContext } from "./HiveSQLParser.js";
import { ActivateContext } from "./HiveSQLParser.js";
import { EnableContext } from "./HiveSQLParser.js";
import { DisableContext } from "./HiveSQLParser.js";
import { UnmanagedContext } from "./HiveSQLParser.js";
import { AlterResourcePlanStatementContext } from "./HiveSQLParser.js";
import { GlobalWmStatementContext } from "./HiveSQLParser.js";
import { ReplaceResourcePlanStatementContext } from "./HiveSQLParser.js";
import { DropResourcePlanStatementContext } from "./HiveSQLParser.js";
import { PoolPathContext } from "./HiveSQLParser.js";
import { TriggerExpressionContext } from "./HiveSQLParser.js";
import { TriggerExpressionStandaloneContext } from "./HiveSQLParser.js";
import { TriggerOrExpressionContext } from "./HiveSQLParser.js";
import { TriggerAndExpressionContext } from "./HiveSQLParser.js";
import { TriggerAtomExpressionContext } from "./HiveSQLParser.js";
import { TriggerLiteralContext } from "./HiveSQLParser.js";
import { ComparisionOperatorContext } from "./HiveSQLParser.js";
import { TriggerActionExpressionContext } from "./HiveSQLParser.js";
import { TriggerActionExpressionStandaloneContext } from "./HiveSQLParser.js";
import { CreateTriggerStatementContext } from "./HiveSQLParser.js";
import { AlterTriggerStatementContext } from "./HiveSQLParser.js";
import { DropTriggerStatementContext } from "./HiveSQLParser.js";
import { PoolAssignContext } from "./HiveSQLParser.js";
import { PoolAssignListContext } from "./HiveSQLParser.js";
import { CreatePoolStatementContext } from "./HiveSQLParser.js";
import { AlterPoolStatementContext } from "./HiveSQLParser.js";
import { DropPoolStatementContext } from "./HiveSQLParser.js";
import { CreateMappingStatementContext } from "./HiveSQLParser.js";
import { AlterMappingStatementContext } from "./HiveSQLParser.js";
import { DropMappingStatementContext } from "./HiveSQLParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HiveSQLParser`.
 */
export class HiveSQLListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `HiveSQLParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.sqlStatement`.
     * @param ctx the parse tree
     */
    enterSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.sqlStatement`.
     * @param ctx the parse tree
     */
    exitSqlStatement?: (ctx: SqlStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.explainStatement`.
     * @param ctx the parse tree
     */
    enterExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.explainStatement`.
     * @param ctx the parse tree
     */
    exitExplainStatement?: (ctx: ExplainStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.explainOption`.
     * @param ctx the parse tree
     */
    enterExplainOption?: (ctx: ExplainOptionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.explainOption`.
     * @param ctx the parse tree
     */
    exitExplainOption?: (ctx: ExplainOptionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.vectorizationOnly`.
     * @param ctx the parse tree
     */
    enterVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.vectorizationOnly`.
     * @param ctx the parse tree
     */
    exitVectorizationOnly?: (ctx: VectorizationOnlyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.vectorizatonDetail`.
     * @param ctx the parse tree
     */
    enterVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.vectorizatonDetail`.
     * @param ctx the parse tree
     */
    exitVectorizatonDetail?: (ctx: VectorizatonDetailContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.execStatement`.
     * @param ctx the parse tree
     */
    enterExecStatement?: (ctx: ExecStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.execStatement`.
     * @param ctx the parse tree
     */
    exitExecStatement?: (ctx: ExecStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.loadStatement`.
     * @param ctx the parse tree
     */
    enterLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.loadStatement`.
     * @param ctx the parse tree
     */
    exitLoadStatement?: (ctx: LoadStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replicationClause`.
     * @param ctx the parse tree
     */
    enterReplicationClause?: (ctx: ReplicationClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replicationClause`.
     * @param ctx the parse tree
     */
    exitReplicationClause?: (ctx: ReplicationClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.exportStatement`.
     * @param ctx the parse tree
     */
    enterExportStatement?: (ctx: ExportStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.exportStatement`.
     * @param ctx the parse tree
     */
    exitExportStatement?: (ctx: ExportStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.importStatement`.
     * @param ctx the parse tree
     */
    enterImportStatement?: (ctx: ImportStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.importStatement`.
     * @param ctx the parse tree
     */
    exitImportStatement?: (ctx: ImportStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replDumpStatement`.
     * @param ctx the parse tree
     */
    enterReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replDumpStatement`.
     * @param ctx the parse tree
     */
    exitReplDumpStatement?: (ctx: ReplDumpStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replDbPolicy`.
     * @param ctx the parse tree
     */
    enterReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replDbPolicy`.
     * @param ctx the parse tree
     */
    exitReplDbPolicy?: (ctx: ReplDbPolicyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replLoadStatement`.
     * @param ctx the parse tree
     */
    enterReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replLoadStatement`.
     * @param ctx the parse tree
     */
    exitReplLoadStatement?: (ctx: ReplLoadStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replConfigs`.
     * @param ctx the parse tree
     */
    enterReplConfigs?: (ctx: ReplConfigsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replConfigs`.
     * @param ctx the parse tree
     */
    exitReplConfigs?: (ctx: ReplConfigsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replConfigsList`.
     * @param ctx the parse tree
     */
    enterReplConfigsList?: (ctx: ReplConfigsListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replConfigsList`.
     * @param ctx the parse tree
     */
    exitReplConfigsList?: (ctx: ReplConfigsListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replTableLevelPolicy`.
     * @param ctx the parse tree
     */
    enterReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replTableLevelPolicy`.
     * @param ctx the parse tree
     */
    exitReplTableLevelPolicy?: (ctx: ReplTableLevelPolicyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replStatusStatement`.
     * @param ctx the parse tree
     */
    enterReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replStatusStatement`.
     * @param ctx the parse tree
     */
    exitReplStatusStatement?: (ctx: ReplStatusStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.ddlStatement`.
     * @param ctx the parse tree
     */
    enterDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.ddlStatement`.
     * @param ctx the parse tree
     */
    exitDdlStatement?: (ctx: DdlStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.ifExists`.
     * @param ctx the parse tree
     */
    enterIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.ifExists`.
     * @param ctx the parse tree
     */
    exitIfExists?: (ctx: IfExistsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.restrictOrCascade`.
     * @param ctx the parse tree
     */
    enterRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.restrictOrCascade`.
     * @param ctx the parse tree
     */
    exitRestrictOrCascade?: (ctx: RestrictOrCascadeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.ifNotExists`.
     * @param ctx the parse tree
     */
    enterIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.ifNotExists`.
     * @param ctx the parse tree
     */
    exitIfNotExists?: (ctx: IfNotExistsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.force`.
     * @param ctx the parse tree
     */
    enterForce?: (ctx: ForceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.force`.
     * @param ctx the parse tree
     */
    exitForce?: (ctx: ForceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rewriteEnabled`.
     * @param ctx the parse tree
     */
    enterRewriteEnabled?: (ctx: RewriteEnabledContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rewriteEnabled`.
     * @param ctx the parse tree
     */
    exitRewriteEnabled?: (ctx: RewriteEnabledContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rewriteDisabled`.
     * @param ctx the parse tree
     */
    enterRewriteDisabled?: (ctx: RewriteDisabledContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rewriteDisabled`.
     * @param ctx the parse tree
     */
    exitRewriteDisabled?: (ctx: RewriteDisabledContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.storedAsDirs`.
     * @param ctx the parse tree
     */
    enterStoredAsDirs?: (ctx: StoredAsDirsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.storedAsDirs`.
     * @param ctx the parse tree
     */
    exitStoredAsDirs?: (ctx: StoredAsDirsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.orReplace`.
     * @param ctx the parse tree
     */
    enterOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.orReplace`.
     * @param ctx the parse tree
     */
    exitOrReplace?: (ctx: OrReplaceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitCreateDatabaseStatement?: (ctx: CreateDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dbLocation`.
     * @param ctx the parse tree
     */
    enterDbLocation?: (ctx: DbLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dbLocation`.
     * @param ctx the parse tree
     */
    exitDbLocation?: (ctx: DbLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dbManagedLocation`.
     * @param ctx the parse tree
     */
    enterDbManagedLocation?: (ctx: DbManagedLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dbManagedLocation`.
     * @param ctx the parse tree
     */
    exitDbManagedLocation?: (ctx: DbManagedLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dbProperties`.
     * @param ctx the parse tree
     */
    enterDbProperties?: (ctx: DbPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dbProperties`.
     * @param ctx the parse tree
     */
    exitDbProperties?: (ctx: DbPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dbPropertiesList`.
     * @param ctx the parse tree
     */
    enterDbPropertiesList?: (ctx: DbPropertiesListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dbPropertiesList`.
     * @param ctx the parse tree
     */
    exitDbPropertiesList?: (ctx: DbPropertiesListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dbConnectorName`.
     * @param ctx the parse tree
     */
    enterDbConnectorName?: (ctx: DbConnectorNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dbConnectorName`.
     * @param ctx the parse tree
     */
    exitDbConnectorName?: (ctx: DbConnectorNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.switchDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.switchDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitSwitchDatabaseStatement?: (ctx: SwitchDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropDatabaseStatement`.
     * @param ctx the parse tree
     */
    enterDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropDatabaseStatement`.
     * @param ctx the parse tree
     */
    exitDropDatabaseStatement?: (ctx: DropDatabaseStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.databaseComment`.
     * @param ctx the parse tree
     */
    enterDatabaseComment?: (ctx: DatabaseCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.databaseComment`.
     * @param ctx the parse tree
     */
    exitDatabaseComment?: (ctx: DatabaseCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.truncateTableStatement`.
     * @param ctx the parse tree
     */
    enterTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.truncateTableStatement`.
     * @param ctx the parse tree
     */
    exitTruncateTableStatement?: (ctx: TruncateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    enterDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropTableStatement`.
     * @param ctx the parse tree
     */
    exitDropTableStatement?: (ctx: DropTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.inputFileFormat`.
     * @param ctx the parse tree
     */
    enterInputFileFormat?: (ctx: InputFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.inputFileFormat`.
     * @param ctx the parse tree
     */
    exitInputFileFormat?: (ctx: InputFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tabTypeExpr`.
     * @param ctx the parse tree
     */
    enterTabTypeExpr?: (ctx: TabTypeExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tabTypeExpr`.
     * @param ctx the parse tree
     */
    exitTabTypeExpr?: (ctx: TabTypeExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partTypeExpr`.
     * @param ctx the parse tree
     */
    enterPartTypeExpr?: (ctx: PartTypeExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partTypeExpr`.
     * @param ctx the parse tree
     */
    exitPartTypeExpr?: (ctx: PartTypeExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tabPartColTypeExpr`.
     * @param ctx the parse tree
     */
    enterTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tabPartColTypeExpr`.
     * @param ctx the parse tree
     */
    exitTabPartColTypeExpr?: (ctx: TabPartColTypeExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.descStatement`.
     * @param ctx the parse tree
     */
    enterDescStatement?: (ctx: DescStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.descStatement`.
     * @param ctx the parse tree
     */
    exitDescStatement?: (ctx: DescStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.analyzeStatement`.
     * @param ctx the parse tree
     */
    enterAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.analyzeStatement`.
     * @param ctx the parse tree
     */
    exitAnalyzeStatement?: (ctx: AnalyzeStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.from_in`.
     * @param ctx the parse tree
     */
    enterFrom_in?: (ctx: From_inContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.from_in`.
     * @param ctx the parse tree
     */
    exitFrom_in?: (ctx: From_inContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.db_schema`.
     * @param ctx the parse tree
     */
    enterDb_schema?: (ctx: Db_schemaContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.db_schema`.
     * @param ctx the parse tree
     */
    exitDb_schema?: (ctx: Db_schemaContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showStatement`.
     * @param ctx the parse tree
     */
    enterShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showStatement`.
     * @param ctx the parse tree
     */
    exitShowStatement?: (ctx: ShowStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showTablesFilterExpr`.
     * @param ctx the parse tree
     */
    enterShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showTablesFilterExpr`.
     * @param ctx the parse tree
     */
    exitShowTablesFilterExpr?: (ctx: ShowTablesFilterExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.lockStatement`.
     * @param ctx the parse tree
     */
    enterLockStatement?: (ctx: LockStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.lockStatement`.
     * @param ctx the parse tree
     */
    exitLockStatement?: (ctx: LockStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.lockDatabase`.
     * @param ctx the parse tree
     */
    enterLockDatabase?: (ctx: LockDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.lockDatabase`.
     * @param ctx the parse tree
     */
    exitLockDatabase?: (ctx: LockDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.lockMode`.
     * @param ctx the parse tree
     */
    enterLockMode?: (ctx: LockModeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.lockMode`.
     * @param ctx the parse tree
     */
    exitLockMode?: (ctx: LockModeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.unlockStatement`.
     * @param ctx the parse tree
     */
    enterUnlockStatement?: (ctx: UnlockStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.unlockStatement`.
     * @param ctx the parse tree
     */
    exitUnlockStatement?: (ctx: UnlockStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.unlockDatabase`.
     * @param ctx the parse tree
     */
    enterUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.unlockDatabase`.
     * @param ctx the parse tree
     */
    exitUnlockDatabase?: (ctx: UnlockDatabaseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createRoleStatement`.
     * @param ctx the parse tree
     */
    enterCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createRoleStatement`.
     * @param ctx the parse tree
     */
    exitCreateRoleStatement?: (ctx: CreateRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropRoleStatement`.
     * @param ctx the parse tree
     */
    enterDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropRoleStatement`.
     * @param ctx the parse tree
     */
    exitDropRoleStatement?: (ctx: DropRoleStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.grantPrivileges`.
     * @param ctx the parse tree
     */
    enterGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.grantPrivileges`.
     * @param ctx the parse tree
     */
    exitGrantPrivileges?: (ctx: GrantPrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.revokePrivileges`.
     * @param ctx the parse tree
     */
    enterRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.revokePrivileges`.
     * @param ctx the parse tree
     */
    exitRevokePrivileges?: (ctx: RevokePrivilegesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.grantRole`.
     * @param ctx the parse tree
     */
    enterGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.grantRole`.
     * @param ctx the parse tree
     */
    exitGrantRole?: (ctx: GrantRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.revokeRole`.
     * @param ctx the parse tree
     */
    enterRevokeRole?: (ctx: RevokeRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.revokeRole`.
     * @param ctx the parse tree
     */
    exitRevokeRole?: (ctx: RevokeRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showRoleGrants`.
     * @param ctx the parse tree
     */
    enterShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showRoleGrants`.
     * @param ctx the parse tree
     */
    exitShowRoleGrants?: (ctx: ShowRoleGrantsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showRoles`.
     * @param ctx the parse tree
     */
    enterShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showRoles`.
     * @param ctx the parse tree
     */
    exitShowRoles?: (ctx: ShowRolesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showCurrentRole`.
     * @param ctx the parse tree
     */
    enterShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showCurrentRole`.
     * @param ctx the parse tree
     */
    exitShowCurrentRole?: (ctx: ShowCurrentRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.setRole`.
     * @param ctx the parse tree
     */
    enterSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.setRole`.
     * @param ctx the parse tree
     */
    exitSetRole?: (ctx: SetRoleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showGrants`.
     * @param ctx the parse tree
     */
    enterShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showGrants`.
     * @param ctx the parse tree
     */
    exitShowGrants?: (ctx: ShowGrantsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showRolePrincipals`.
     * @param ctx the parse tree
     */
    enterShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showRolePrincipals`.
     * @param ctx the parse tree
     */
    exitShowRolePrincipals?: (ctx: ShowRolePrincipalsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privilegeIncludeColObject`.
     * @param ctx the parse tree
     */
    enterPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privilegeIncludeColObject`.
     * @param ctx the parse tree
     */
    exitPrivilegeIncludeColObject?: (ctx: PrivilegeIncludeColObjectContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privilegeObject`.
     * @param ctx the parse tree
     */
    enterPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privilegeObject`.
     * @param ctx the parse tree
     */
    exitPrivilegeObject?: (ctx: PrivilegeObjectContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privObject`.
     * @param ctx the parse tree
     */
    enterPrivObject?: (ctx: PrivObjectContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privObject`.
     * @param ctx the parse tree
     */
    exitPrivObject?: (ctx: PrivObjectContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privObjectCols`.
     * @param ctx the parse tree
     */
    enterPrivObjectCols?: (ctx: PrivObjectColsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privObjectCols`.
     * @param ctx the parse tree
     */
    exitPrivObjectCols?: (ctx: PrivObjectColsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privilegeList`.
     * @param ctx the parse tree
     */
    enterPrivilegeList?: (ctx: PrivilegeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privilegeList`.
     * @param ctx the parse tree
     */
    exitPrivilegeList?: (ctx: PrivilegeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privlegeDef`.
     * @param ctx the parse tree
     */
    enterPrivlegeDef?: (ctx: PrivlegeDefContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privlegeDef`.
     * @param ctx the parse tree
     */
    exitPrivlegeDef?: (ctx: PrivlegeDefContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.privilegeType`.
     * @param ctx the parse tree
     */
    enterPrivilegeType?: (ctx: PrivilegeTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.privilegeType`.
     * @param ctx the parse tree
     */
    exitPrivilegeType?: (ctx: PrivilegeTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.principalSpecification`.
     * @param ctx the parse tree
     */
    enterPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.principalSpecification`.
     * @param ctx the parse tree
     */
    exitPrincipalSpecification?: (ctx: PrincipalSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.principalName`.
     * @param ctx the parse tree
     */
    enterPrincipalName?: (ctx: PrincipalNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.principalName`.
     * @param ctx the parse tree
     */
    exitPrincipalName?: (ctx: PrincipalNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.withGrantOption`.
     * @param ctx the parse tree
     */
    enterWithGrantOption?: (ctx: WithGrantOptionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.withGrantOption`.
     * @param ctx the parse tree
     */
    exitWithGrantOption?: (ctx: WithGrantOptionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.grantOptionFor`.
     * @param ctx the parse tree
     */
    enterGrantOptionFor?: (ctx: GrantOptionForContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.grantOptionFor`.
     * @param ctx the parse tree
     */
    exitGrantOptionFor?: (ctx: GrantOptionForContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.adminOptionFor`.
     * @param ctx the parse tree
     */
    enterAdminOptionFor?: (ctx: AdminOptionForContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.adminOptionFor`.
     * @param ctx the parse tree
     */
    exitAdminOptionFor?: (ctx: AdminOptionForContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.withAdminOption`.
     * @param ctx the parse tree
     */
    enterWithAdminOption?: (ctx: WithAdminOptionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.withAdminOption`.
     * @param ctx the parse tree
     */
    exitWithAdminOption?: (ctx: WithAdminOptionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.metastoreCheck`.
     * @param ctx the parse tree
     */
    enterMetastoreCheck?: (ctx: MetastoreCheckContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.metastoreCheck`.
     * @param ctx the parse tree
     */
    exitMetastoreCheck?: (ctx: MetastoreCheckContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.resourceList`.
     * @param ctx the parse tree
     */
    enterResourceList?: (ctx: ResourceListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.resourceList`.
     * @param ctx the parse tree
     */
    exitResourceList?: (ctx: ResourceListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.resource`.
     * @param ctx the parse tree
     */
    enterResource?: (ctx: ResourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.resource`.
     * @param ctx the parse tree
     */
    exitResource?: (ctx: ResourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.resourceType`.
     * @param ctx the parse tree
     */
    enterResourceType?: (ctx: ResourceTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.resourceType`.
     * @param ctx the parse tree
     */
    exitResourceType?: (ctx: ResourceTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createFunctionStatement`.
     * @param ctx the parse tree
     */
    enterCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createFunctionStatement`.
     * @param ctx the parse tree
     */
    exitCreateFunctionStatement?: (ctx: CreateFunctionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropFunctionStatement`.
     * @param ctx the parse tree
     */
    enterDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropFunctionStatement`.
     * @param ctx the parse tree
     */
    exitDropFunctionStatement?: (ctx: DropFunctionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.reloadFunctionsStatement`.
     * @param ctx the parse tree
     */
    enterReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.reloadFunctionsStatement`.
     * @param ctx the parse tree
     */
    exitReloadFunctionsStatement?: (ctx: ReloadFunctionsStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createMacroStatement`.
     * @param ctx the parse tree
     */
    enterCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createMacroStatement`.
     * @param ctx the parse tree
     */
    exitCreateMacroStatement?: (ctx: CreateMacroStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropMacroStatement`.
     * @param ctx the parse tree
     */
    enterDropMacroStatement?: (ctx: DropMacroStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropMacroStatement`.
     * @param ctx the parse tree
     */
    exitDropMacroStatement?: (ctx: DropMacroStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createViewStatement`.
     * @param ctx the parse tree
     */
    enterCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createViewStatement`.
     * @param ctx the parse tree
     */
    exitCreateViewStatement?: (ctx: CreateViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewPartition`.
     * @param ctx the parse tree
     */
    enterViewPartition?: (ctx: ViewPartitionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewPartition`.
     * @param ctx the parse tree
     */
    exitViewPartition?: (ctx: ViewPartitionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewOrganization`.
     * @param ctx the parse tree
     */
    enterViewOrganization?: (ctx: ViewOrganizationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewOrganization`.
     * @param ctx the parse tree
     */
    exitViewOrganization?: (ctx: ViewOrganizationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewClusterSpec`.
     * @param ctx the parse tree
     */
    enterViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewClusterSpec`.
     * @param ctx the parse tree
     */
    exitViewClusterSpec?: (ctx: ViewClusterSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewComplexSpec`.
     * @param ctx the parse tree
     */
    enterViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewComplexSpec`.
     * @param ctx the parse tree
     */
    exitViewComplexSpec?: (ctx: ViewComplexSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewDistSpec`.
     * @param ctx the parse tree
     */
    enterViewDistSpec?: (ctx: ViewDistSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewDistSpec`.
     * @param ctx the parse tree
     */
    exitViewDistSpec?: (ctx: ViewDistSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewSortSpec`.
     * @param ctx the parse tree
     */
    enterViewSortSpec?: (ctx: ViewSortSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewSortSpec`.
     * @param ctx the parse tree
     */
    exitViewSortSpec?: (ctx: ViewSortSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropViewStatement`.
     * @param ctx the parse tree
     */
    enterDropViewStatement?: (ctx: DropViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropViewStatement`.
     * @param ctx the parse tree
     */
    exitDropViewStatement?: (ctx: DropViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    enterCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    exitCreateMaterializedViewStatement?: (ctx: CreateMaterializedViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    enterDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropMaterializedViewStatement`.
     * @param ctx the parse tree
     */
    exitDropMaterializedViewStatement?: (ctx: DropMaterializedViewStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    enterCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    exitCreateScheduledQueryStatement?: (ctx: CreateScheduledQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    enterDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    exitDropScheduledQueryStatement?: (ctx: DropScheduledQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    enterAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterScheduledQueryStatement`.
     * @param ctx the parse tree
     */
    exitAlterScheduledQueryStatement?: (ctx: AlterScheduledQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterScheduledQueryChange`.
     * @param ctx the parse tree
     */
    enterAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterScheduledQueryChange`.
     * @param ctx the parse tree
     */
    exitAlterScheduledQueryChange?: (ctx: AlterScheduledQueryChangeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.scheduleSpec`.
     * @param ctx the parse tree
     */
    enterScheduleSpec?: (ctx: ScheduleSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.scheduleSpec`.
     * @param ctx the parse tree
     */
    exitScheduleSpec?: (ctx: ScheduleSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.executedAsSpec`.
     * @param ctx the parse tree
     */
    enterExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.executedAsSpec`.
     * @param ctx the parse tree
     */
    exitExecutedAsSpec?: (ctx: ExecutedAsSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.definedAsSpec`.
     * @param ctx the parse tree
     */
    enterDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.definedAsSpec`.
     * @param ctx the parse tree
     */
    exitDefinedAsSpec?: (ctx: DefinedAsSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showFunctionIdentifier`.
     * @param ctx the parse tree
     */
    enterShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showFunctionIdentifier`.
     * @param ctx the parse tree
     */
    exitShowFunctionIdentifier?: (ctx: ShowFunctionIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.showStmtIdentifier`.
     * @param ctx the parse tree
     */
    enterShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.showStmtIdentifier`.
     * @param ctx the parse tree
     */
    exitShowStmtIdentifier?: (ctx: ShowStmtIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableComment`.
     * @param ctx the parse tree
     */
    enterTableComment?: (ctx: TableCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableComment`.
     * @param ctx the parse tree
     */
    exitTableComment?: (ctx: TableCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableUsing`.
     * @param ctx the parse tree
     */
    enterTableUsing?: (ctx: TableUsingContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableUsing`.
     * @param ctx the parse tree
     */
    exitTableUsing?: (ctx: TableUsingContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createTablePartitionSpec`.
     * @param ctx the parse tree
     */
    enterCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createTablePartitionSpec`.
     * @param ctx the parse tree
     */
    exitCreateTablePartitionSpec?: (ctx: CreateTablePartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createTablePartitionColumnTypeSpec`.
     * @param ctx the parse tree
     */
    enterCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createTablePartitionColumnTypeSpec`.
     * @param ctx the parse tree
     */
    exitCreateTablePartitionColumnTypeSpec?: (ctx: CreateTablePartitionColumnTypeSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createTablePartitionColumnSpec`.
     * @param ctx the parse tree
     */
    enterCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createTablePartitionColumnSpec`.
     * @param ctx the parse tree
     */
    exitCreateTablePartitionColumnSpec?: (ctx: CreateTablePartitionColumnSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionTransformSpec`.
     * @param ctx the parse tree
     */
    enterPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionTransformSpec`.
     * @param ctx the parse tree
     */
    exitPartitionTransformSpec?: (ctx: PartitionTransformSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameTransformConstraint`.
     * @param ctx the parse tree
     */
    enterColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameTransformConstraint`.
     * @param ctx the parse tree
     */
    exitColumnNameTransformConstraint?: (ctx: ColumnNameTransformConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionTransformType`.
     * @param ctx the parse tree
     */
    enterPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionTransformType`.
     * @param ctx the parse tree
     */
    exitPartitionTransformType?: (ctx: PartitionTransformTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableBuckets`.
     * @param ctx the parse tree
     */
    enterTableBuckets?: (ctx: TableBucketsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableBuckets`.
     * @param ctx the parse tree
     */
    exitTableBuckets?: (ctx: TableBucketsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableImplBuckets`.
     * @param ctx the parse tree
     */
    enterTableImplBuckets?: (ctx: TableImplBucketsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableImplBuckets`.
     * @param ctx the parse tree
     */
    exitTableImplBuckets?: (ctx: TableImplBucketsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableSkewed`.
     * @param ctx the parse tree
     */
    enterTableSkewed?: (ctx: TableSkewedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableSkewed`.
     * @param ctx the parse tree
     */
    exitTableSkewed?: (ctx: TableSkewedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rowFormat`.
     * @param ctx the parse tree
     */
    enterRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rowFormat`.
     * @param ctx the parse tree
     */
    exitRowFormat?: (ctx: RowFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.recordReader`.
     * @param ctx the parse tree
     */
    enterRecordReader?: (ctx: RecordReaderContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.recordReader`.
     * @param ctx the parse tree
     */
    exitRecordReader?: (ctx: RecordReaderContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.recordWriter`.
     * @param ctx the parse tree
     */
    enterRecordWriter?: (ctx: RecordWriterContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.recordWriter`.
     * @param ctx the parse tree
     */
    exitRecordWriter?: (ctx: RecordWriterContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rowFormatSerde`.
     * @param ctx the parse tree
     */
    enterRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rowFormatSerde`.
     * @param ctx the parse tree
     */
    exitRowFormatSerde?: (ctx: RowFormatSerdeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rowFormatDelimited`.
     * @param ctx the parse tree
     */
    enterRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rowFormatDelimited`.
     * @param ctx the parse tree
     */
    exitRowFormatDelimited?: (ctx: RowFormatDelimitedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableRowFormat`.
     * @param ctx the parse tree
     */
    enterTableRowFormat?: (ctx: TableRowFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableRowFormat`.
     * @param ctx the parse tree
     */
    exitTableRowFormat?: (ctx: TableRowFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tablePropertiesPrefixed`.
     * @param ctx the parse tree
     */
    enterTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tablePropertiesPrefixed`.
     * @param ctx the parse tree
     */
    exitTablePropertiesPrefixed?: (ctx: TablePropertiesPrefixedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableProperties`.
     * @param ctx the parse tree
     */
    enterTableProperties?: (ctx: TablePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableProperties`.
     * @param ctx the parse tree
     */
    exitTableProperties?: (ctx: TablePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tablePropertiesList`.
     * @param ctx the parse tree
     */
    enterTablePropertiesList?: (ctx: TablePropertiesListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tablePropertiesList`.
     * @param ctx the parse tree
     */
    exitTablePropertiesList?: (ctx: TablePropertiesListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.keyValueProperty`.
     * @param ctx the parse tree
     */
    enterKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.keyValueProperty`.
     * @param ctx the parse tree
     */
    exitKeyValueProperty?: (ctx: KeyValuePropertyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.keyProperty`.
     * @param ctx the parse tree
     */
    enterKeyProperty?: (ctx: KeyPropertyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.keyProperty`.
     * @param ctx the parse tree
     */
    exitKeyProperty?: (ctx: KeyPropertyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableRowFormatFieldIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableRowFormatFieldIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatFieldIdentifier?: (ctx: TableRowFormatFieldIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableRowFormatCollItemsIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableRowFormatCollItemsIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatCollItemsIdentifier?: (ctx: TableRowFormatCollItemsIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableRowFormatMapKeysIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableRowFormatMapKeysIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatMapKeysIdentifier?: (ctx: TableRowFormatMapKeysIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableRowFormatLinesIdentifier`.
     * @param ctx the parse tree
     */
    enterTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableRowFormatLinesIdentifier`.
     * @param ctx the parse tree
     */
    exitTableRowFormatLinesIdentifier?: (ctx: TableRowFormatLinesIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableRowNullFormat`.
     * @param ctx the parse tree
     */
    enterTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableRowNullFormat`.
     * @param ctx the parse tree
     */
    exitTableRowNullFormat?: (ctx: TableRowNullFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableFileFormat`.
     * @param ctx the parse tree
     */
    enterTableFileFormat?: (ctx: TableFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableFileFormat`.
     * @param ctx the parse tree
     */
    exitTableFileFormat?: (ctx: TableFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableLocation`.
     * @param ctx the parse tree
     */
    enterTableLocation?: (ctx: TableLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableLocation`.
     * @param ctx the parse tree
     */
    exitTableLocation?: (ctx: TableLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameTypeList`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameTypeList`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeList?: (ctx: ColumnNameTypeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameTypeOrConstraintList`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameTypeOrConstraintList`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeOrConstraintList?: (ctx: ColumnNameTypeOrConstraintListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameColonTypeList`.
     * @param ctx the parse tree
     */
    enterColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameColonTypeList`.
     * @param ctx the parse tree
     */
    exitColumnNameColonTypeList?: (ctx: ColumnNameColonTypeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameList`.
     * @param ctx the parse tree
     */
    enterColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameList`.
     * @param ctx the parse tree
     */
    exitColumnNameList?: (ctx: ColumnNameListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnName`.
     * @param ctx the parse tree
     */
    enterColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnName`.
     * @param ctx the parse tree
     */
    exitColumnName?: (ctx: ColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.extColumnName`.
     * @param ctx the parse tree
     */
    enterExtColumnName?: (ctx: ExtColumnNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.extColumnName`.
     * @param ctx the parse tree
     */
    exitExtColumnName?: (ctx: ExtColumnNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameOrderList`.
     * @param ctx the parse tree
     */
    enterColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameOrderList`.
     * @param ctx the parse tree
     */
    exitColumnNameOrderList?: (ctx: ColumnNameOrderListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnParenthesesList`.
     * @param ctx the parse tree
     */
    enterColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnParenthesesList`.
     * @param ctx the parse tree
     */
    exitColumnParenthesesList?: (ctx: ColumnParenthesesListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.enableValidateSpecification`.
     * @param ctx the parse tree
     */
    enterEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.enableValidateSpecification`.
     * @param ctx the parse tree
     */
    exitEnableValidateSpecification?: (ctx: EnableValidateSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.enableSpecification`.
     * @param ctx the parse tree
     */
    enterEnableSpecification?: (ctx: EnableSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.enableSpecification`.
     * @param ctx the parse tree
     */
    exitEnableSpecification?: (ctx: EnableSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.validateSpecification`.
     * @param ctx the parse tree
     */
    enterValidateSpecification?: (ctx: ValidateSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.validateSpecification`.
     * @param ctx the parse tree
     */
    exitValidateSpecification?: (ctx: ValidateSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.enforcedSpecification`.
     * @param ctx the parse tree
     */
    enterEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.enforcedSpecification`.
     * @param ctx the parse tree
     */
    exitEnforcedSpecification?: (ctx: EnforcedSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.relySpecification`.
     * @param ctx the parse tree
     */
    enterRelySpecification?: (ctx: RelySpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.relySpecification`.
     * @param ctx the parse tree
     */
    exitRelySpecification?: (ctx: RelySpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createConstraint`.
     * @param ctx the parse tree
     */
    enterCreateConstraint?: (ctx: CreateConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createConstraint`.
     * @param ctx the parse tree
     */
    exitCreateConstraint?: (ctx: CreateConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterConstraintWithName`.
     * @param ctx the parse tree
     */
    enterAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterConstraintWithName`.
     * @param ctx the parse tree
     */
    exitAlterConstraintWithName?: (ctx: AlterConstraintWithNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableLevelConstraint`.
     * @param ctx the parse tree
     */
    enterTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableLevelConstraint`.
     * @param ctx the parse tree
     */
    exitTableLevelConstraint?: (ctx: TableLevelConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.pkUkConstraint`.
     * @param ctx the parse tree
     */
    enterPkUkConstraint?: (ctx: PkUkConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.pkUkConstraint`.
     * @param ctx the parse tree
     */
    exitPkUkConstraint?: (ctx: PkUkConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.checkConstraint`.
     * @param ctx the parse tree
     */
    enterCheckConstraint?: (ctx: CheckConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.checkConstraint`.
     * @param ctx the parse tree
     */
    exitCheckConstraint?: (ctx: CheckConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createForeignKey`.
     * @param ctx the parse tree
     */
    enterCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createForeignKey`.
     * @param ctx the parse tree
     */
    exitCreateForeignKey?: (ctx: CreateForeignKeyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterForeignKeyWithName`.
     * @param ctx the parse tree
     */
    enterAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterForeignKeyWithName`.
     * @param ctx the parse tree
     */
    exitAlterForeignKeyWithName?: (ctx: AlterForeignKeyWithNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedValueElement`.
     * @param ctx the parse tree
     */
    enterSkewedValueElement?: (ctx: SkewedValueElementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedValueElement`.
     * @param ctx the parse tree
     */
    exitSkewedValueElement?: (ctx: SkewedValueElementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedColumnValuePairList`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedColumnValuePairList`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValuePairList?: (ctx: SkewedColumnValuePairListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedColumnValuePair`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedColumnValuePair`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValuePair?: (ctx: SkewedColumnValuePairContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedColumnValues`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedColumnValues`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValues?: (ctx: SkewedColumnValuesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedColumnValue`.
     * @param ctx the parse tree
     */
    enterSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedColumnValue`.
     * @param ctx the parse tree
     */
    exitSkewedColumnValue?: (ctx: SkewedColumnValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedValueLocationElement`.
     * @param ctx the parse tree
     */
    enterSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedValueLocationElement`.
     * @param ctx the parse tree
     */
    exitSkewedValueLocationElement?: (ctx: SkewedValueLocationElementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.orderSpecification`.
     * @param ctx the parse tree
     */
    enterOrderSpecification?: (ctx: OrderSpecificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.orderSpecification`.
     * @param ctx the parse tree
     */
    exitOrderSpecification?: (ctx: OrderSpecificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.nullOrdering`.
     * @param ctx the parse tree
     */
    enterNullOrdering?: (ctx: NullOrderingContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.nullOrdering`.
     * @param ctx the parse tree
     */
    exitNullOrdering?: (ctx: NullOrderingContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameOrder`.
     * @param ctx the parse tree
     */
    enterColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameOrder`.
     * @param ctx the parse tree
     */
    exitColumnNameOrder?: (ctx: ColumnNameOrderContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameCommentList`.
     * @param ctx the parse tree
     */
    enterColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameCommentList`.
     * @param ctx the parse tree
     */
    exitColumnNameCommentList?: (ctx: ColumnNameCommentListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameComment`.
     * @param ctx the parse tree
     */
    enterColumnNameComment?: (ctx: ColumnNameCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameComment`.
     * @param ctx the parse tree
     */
    exitColumnNameComment?: (ctx: ColumnNameCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.orderSpecificationRewrite`.
     * @param ctx the parse tree
     */
    enterOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.orderSpecificationRewrite`.
     * @param ctx the parse tree
     */
    exitOrderSpecificationRewrite?: (ctx: OrderSpecificationRewriteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnRefOrder`.
     * @param ctx the parse tree
     */
    enterColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnRefOrder`.
     * @param ctx the parse tree
     */
    exitColumnRefOrder?: (ctx: ColumnRefOrderContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameType`.
     * @param ctx the parse tree
     */
    enterColumnNameType?: (ctx: ColumnNameTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameType`.
     * @param ctx the parse tree
     */
    exitColumnNameType?: (ctx: ColumnNameTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameTypeOrConstraint`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameTypeOrConstraint`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeOrConstraint?: (ctx: ColumnNameTypeOrConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableConstraint`.
     * @param ctx the parse tree
     */
    enterTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableConstraint`.
     * @param ctx the parse tree
     */
    exitTableConstraint?: (ctx: TableConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameTypeConstraint`.
     * @param ctx the parse tree
     */
    enterColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameTypeConstraint`.
     * @param ctx the parse tree
     */
    exitColumnNameTypeConstraint?: (ctx: ColumnNameTypeConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnConstraint`.
     * @param ctx the parse tree
     */
    enterColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnConstraint`.
     * @param ctx the parse tree
     */
    exitColumnConstraint?: (ctx: ColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.foreignKeyConstraint`.
     * @param ctx the parse tree
     */
    enterForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.foreignKeyConstraint`.
     * @param ctx the parse tree
     */
    exitForeignKeyConstraint?: (ctx: ForeignKeyConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.colConstraint`.
     * @param ctx the parse tree
     */
    enterColConstraint?: (ctx: ColConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.colConstraint`.
     * @param ctx the parse tree
     */
    exitColConstraint?: (ctx: ColConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterColumnConstraint`.
     * @param ctx the parse tree
     */
    enterAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterColumnConstraint`.
     * @param ctx the parse tree
     */
    exitAlterColumnConstraint?: (ctx: AlterColumnConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterForeignKeyConstraint`.
     * @param ctx the parse tree
     */
    enterAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterForeignKeyConstraint`.
     * @param ctx the parse tree
     */
    exitAlterForeignKeyConstraint?: (ctx: AlterForeignKeyConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterColConstraint`.
     * @param ctx the parse tree
     */
    enterAlterColConstraint?: (ctx: AlterColConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterColConstraint`.
     * @param ctx the parse tree
     */
    exitAlterColConstraint?: (ctx: AlterColConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnConstraintType`.
     * @param ctx the parse tree
     */
    enterColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnConstraintType`.
     * @param ctx the parse tree
     */
    exitColumnConstraintType?: (ctx: ColumnConstraintTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.defaultVal`.
     * @param ctx the parse tree
     */
    enterDefaultVal?: (ctx: DefaultValContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.defaultVal`.
     * @param ctx the parse tree
     */
    exitDefaultVal?: (ctx: DefaultValContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableConstraintType`.
     * @param ctx the parse tree
     */
    enterTableConstraintType?: (ctx: TableConstraintTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableConstraintType`.
     * @param ctx the parse tree
     */
    exitTableConstraintType?: (ctx: TableConstraintTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.constraintOptsCreate`.
     * @param ctx the parse tree
     */
    enterConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.constraintOptsCreate`.
     * @param ctx the parse tree
     */
    exitConstraintOptsCreate?: (ctx: ConstraintOptsCreateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.constraintOptsAlter`.
     * @param ctx the parse tree
     */
    enterConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.constraintOptsAlter`.
     * @param ctx the parse tree
     */
    exitConstraintOptsAlter?: (ctx: ConstraintOptsAlterContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnNameColonType`.
     * @param ctx the parse tree
     */
    enterColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnNameColonType`.
     * @param ctx the parse tree
     */
    exitColumnNameColonType?: (ctx: ColumnNameColonTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.colType`.
     * @param ctx the parse tree
     */
    enterColType?: (ctx: ColTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.colType`.
     * @param ctx the parse tree
     */
    exitColType?: (ctx: ColTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.colTypeList`.
     * @param ctx the parse tree
     */
    enterColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.colTypeList`.
     * @param ctx the parse tree
     */
    exitColTypeList?: (ctx: ColTypeListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.primitiveType`.
     * @param ctx the parse tree
     */
    enterPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.primitiveType`.
     * @param ctx the parse tree
     */
    exitPrimitiveType?: (ctx: PrimitiveTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.listType`.
     * @param ctx the parse tree
     */
    enterListType?: (ctx: ListTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.listType`.
     * @param ctx the parse tree
     */
    exitListType?: (ctx: ListTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.structType`.
     * @param ctx the parse tree
     */
    enterStructType?: (ctx: StructTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.structType`.
     * @param ctx the parse tree
     */
    exitStructType?: (ctx: StructTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.mapType`.
     * @param ctx the parse tree
     */
    enterMapType?: (ctx: MapTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.mapType`.
     * @param ctx the parse tree
     */
    exitMapType?: (ctx: MapTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.unionType`.
     * @param ctx the parse tree
     */
    enterUnionType?: (ctx: UnionTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.unionType`.
     * @param ctx the parse tree
     */
    exitUnionType?: (ctx: UnionTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.setOperator`.
     * @param ctx the parse tree
     */
    enterSetOperator?: (ctx: SetOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.setOperator`.
     * @param ctx the parse tree
     */
    exitSetOperator?: (ctx: SetOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.queryStatementExpression`.
     * @param ctx the parse tree
     */
    enterQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.queryStatementExpression`.
     * @param ctx the parse tree
     */
    exitQueryStatementExpression?: (ctx: QueryStatementExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.queryStatementExpressionBody`.
     * @param ctx the parse tree
     */
    enterQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.queryStatementExpressionBody`.
     * @param ctx the parse tree
     */
    exitQueryStatementExpressionBody?: (ctx: QueryStatementExpressionBodyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.withClause`.
     * @param ctx the parse tree
     */
    enterWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.withClause`.
     * @param ctx the parse tree
     */
    exitWithClause?: (ctx: WithClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.cteStatement`.
     * @param ctx the parse tree
     */
    enterCteStatement?: (ctx: CteStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.cteStatement`.
     * @param ctx the parse tree
     */
    exitCteStatement?: (ctx: CteStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.fromStatement`.
     * @param ctx the parse tree
     */
    enterFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.fromStatement`.
     * @param ctx the parse tree
     */
    exitFromStatement?: (ctx: FromStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.singleFromStatement`.
     * @param ctx the parse tree
     */
    enterSingleFromStatement?: (ctx: SingleFromStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.singleFromStatement`.
     * @param ctx the parse tree
     */
    exitSingleFromStatement?: (ctx: SingleFromStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.regularBody`.
     * @param ctx the parse tree
     */
    enterRegularBody?: (ctx: RegularBodyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.regularBody`.
     * @param ctx the parse tree
     */
    exitRegularBody?: (ctx: RegularBodyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.atomSelectStatement`.
     * @param ctx the parse tree
     */
    enterAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.atomSelectStatement`.
     * @param ctx the parse tree
     */
    exitAtomSelectStatement?: (ctx: AtomSelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    enterSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectStatement`.
     * @param ctx the parse tree
     */
    exitSelectStatement?: (ctx: SelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.setOpSelectStatement`.
     * @param ctx the parse tree
     */
    enterSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.setOpSelectStatement`.
     * @param ctx the parse tree
     */
    exitSetOpSelectStatement?: (ctx: SetOpSelectStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectStatementWithCTE`.
     * @param ctx the parse tree
     */
    enterSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectStatementWithCTE`.
     * @param ctx the parse tree
     */
    exitSelectStatementWithCTE?: (ctx: SelectStatementWithCTEContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.body`.
     * @param ctx the parse tree
     */
    enterBody?: (ctx: BodyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.body`.
     * @param ctx the parse tree
     */
    exitBody?: (ctx: BodyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.insertClause`.
     * @param ctx the parse tree
     */
    enterInsertClause?: (ctx: InsertClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.insertClause`.
     * @param ctx the parse tree
     */
    exitInsertClause?: (ctx: InsertClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.destination`.
     * @param ctx the parse tree
     */
    enterDestination?: (ctx: DestinationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.destination`.
     * @param ctx the parse tree
     */
    exitDestination?: (ctx: DestinationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.limitClause`.
     * @param ctx the parse tree
     */
    enterLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.limitClause`.
     * @param ctx the parse tree
     */
    exitLimitClause?: (ctx: LimitClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.deleteStatement`.
     * @param ctx the parse tree
     */
    enterDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.deleteStatement`.
     * @param ctx the parse tree
     */
    exitDeleteStatement?: (ctx: DeleteStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnAssignmentClause`.
     * @param ctx the parse tree
     */
    enterColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnAssignmentClause`.
     * @param ctx the parse tree
     */
    exitColumnAssignmentClause?: (ctx: ColumnAssignmentClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedencePlusExpressionOrDefault`.
     * @param ctx the parse tree
     */
    enterPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedencePlusExpressionOrDefault`.
     * @param ctx the parse tree
     */
    exitPrecedencePlusExpressionOrDefault?: (ctx: PrecedencePlusExpressionOrDefaultContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.setColumnsClause`.
     * @param ctx the parse tree
     */
    enterSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.setColumnsClause`.
     * @param ctx the parse tree
     */
    exitSetColumnsClause?: (ctx: SetColumnsClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.updateStatement`.
     * @param ctx the parse tree
     */
    enterUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.updateStatement`.
     * @param ctx the parse tree
     */
    exitUpdateStatement?: (ctx: UpdateStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.sqlTransactionStatement`.
     * @param ctx the parse tree
     */
    enterSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.sqlTransactionStatement`.
     * @param ctx the parse tree
     */
    exitSqlTransactionStatement?: (ctx: SqlTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.startTransactionStatement`.
     * @param ctx the parse tree
     */
    enterStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.startTransactionStatement`.
     * @param ctx the parse tree
     */
    exitStartTransactionStatement?: (ctx: StartTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    enterTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.transactionMode`.
     * @param ctx the parse tree
     */
    exitTransactionMode?: (ctx: TransactionModeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    enterTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.transactionAccessMode`.
     * @param ctx the parse tree
     */
    exitTransactionAccessMode?: (ctx: TransactionAccessModeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.isolationLevel`.
     * @param ctx the parse tree
     */
    enterIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.isolationLevel`.
     * @param ctx the parse tree
     */
    exitIsolationLevel?: (ctx: IsolationLevelContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    enterLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.levelOfIsolation`.
     * @param ctx the parse tree
     */
    exitLevelOfIsolation?: (ctx: LevelOfIsolationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.commitStatement`.
     * @param ctx the parse tree
     */
    enterCommitStatement?: (ctx: CommitStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.commitStatement`.
     * @param ctx the parse tree
     */
    exitCommitStatement?: (ctx: CommitStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    enterRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rollbackStatement`.
     * @param ctx the parse tree
     */
    exitRollbackStatement?: (ctx: RollbackStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.setAutoCommitStatement`.
     * @param ctx the parse tree
     */
    enterSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.setAutoCommitStatement`.
     * @param ctx the parse tree
     */
    exitSetAutoCommitStatement?: (ctx: SetAutoCommitStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.abortTransactionStatement`.
     * @param ctx the parse tree
     */
    enterAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.abortTransactionStatement`.
     * @param ctx the parse tree
     */
    exitAbortTransactionStatement?: (ctx: AbortTransactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.abortCompactionStatement`.
     * @param ctx the parse tree
     */
    enterAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.abortCompactionStatement`.
     * @param ctx the parse tree
     */
    exitAbortCompactionStatement?: (ctx: AbortCompactionStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.mergeStatement`.
     * @param ctx the parse tree
     */
    enterMergeStatement?: (ctx: MergeStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.mergeStatement`.
     * @param ctx the parse tree
     */
    exitMergeStatement?: (ctx: MergeStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.whenClauses`.
     * @param ctx the parse tree
     */
    enterWhenClauses?: (ctx: WhenClausesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.whenClauses`.
     * @param ctx the parse tree
     */
    exitWhenClauses?: (ctx: WhenClausesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.whenNotMatchedClause`.
     * @param ctx the parse tree
     */
    enterWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.whenNotMatchedClause`.
     * @param ctx the parse tree
     */
    exitWhenNotMatchedClause?: (ctx: WhenNotMatchedClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.whenMatchedAndClause`.
     * @param ctx the parse tree
     */
    enterWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.whenMatchedAndClause`.
     * @param ctx the parse tree
     */
    exitWhenMatchedAndClause?: (ctx: WhenMatchedAndClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.whenMatchedThenClause`.
     * @param ctx the parse tree
     */
    enterWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.whenMatchedThenClause`.
     * @param ctx the parse tree
     */
    exitWhenMatchedThenClause?: (ctx: WhenMatchedThenClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.updateOrDelete`.
     * @param ctx the parse tree
     */
    enterUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.updateOrDelete`.
     * @param ctx the parse tree
     */
    exitUpdateOrDelete?: (ctx: UpdateOrDeleteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.killQueryStatement`.
     * @param ctx the parse tree
     */
    enterKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.killQueryStatement`.
     * @param ctx the parse tree
     */
    exitKillQueryStatement?: (ctx: KillQueryStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.compactionId`.
     * @param ctx the parse tree
     */
    enterCompactionId?: (ctx: CompactionIdContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.compactionId`.
     * @param ctx the parse tree
     */
    exitCompactionId?: (ctx: CompactionIdContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.compactionPool`.
     * @param ctx the parse tree
     */
    enterCompactionPool?: (ctx: CompactionPoolContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.compactionPool`.
     * @param ctx the parse tree
     */
    exitCompactionPool?: (ctx: CompactionPoolContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.compactionType`.
     * @param ctx the parse tree
     */
    enterCompactionType?: (ctx: CompactionTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.compactionType`.
     * @param ctx the parse tree
     */
    exitCompactionType?: (ctx: CompactionTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.compactionStatus`.
     * @param ctx the parse tree
     */
    enterCompactionStatus?: (ctx: CompactionStatusContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.compactionStatus`.
     * @param ctx the parse tree
     */
    exitCompactionStatus?: (ctx: CompactionStatusContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatement`.
     * @param ctx the parse tree
     */
    enterAlterStatement?: (ctx: AlterStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatement`.
     * @param ctx the parse tree
     */
    exitAlterStatement?: (ctx: AlterStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterTableStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterTableStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterTableStatementSuffix?: (ctx: AlterTableStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterTblPartitionStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterTblPartitionStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterTblPartitionStatementSuffix?: (ctx: AlterTblPartitionStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementPartitionKeyType`.
     * @param ctx the parse tree
     */
    enterAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementPartitionKeyType`.
     * @param ctx the parse tree
     */
    exitAlterStatementPartitionKeyType?: (ctx: AlterStatementPartitionKeyTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterViewStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterViewStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterViewStatementSuffix?: (ctx: AlterViewStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterMaterializedViewStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterMaterializedViewStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewStatementSuffix?: (ctx: AlterMaterializedViewStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterMaterializedViewSuffixRewrite`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterMaterializedViewSuffixRewrite`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewSuffixRewrite?: (ctx: AlterMaterializedViewSuffixRewriteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterMaterializedViewSuffixRebuild`.
     * @param ctx the parse tree
     */
    enterAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterMaterializedViewSuffixRebuild`.
     * @param ctx the parse tree
     */
    exitAlterMaterializedViewSuffixRebuild?: (ctx: AlterMaterializedViewSuffixRebuildContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDatabaseStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDatabaseStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseStatementSuffix?: (ctx: AlterDatabaseStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDatabaseSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixProperties?: (ctx: AlterDatabaseSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterScopeProperties`.
     * @param ctx the parse tree
     */
    enterAlterScopeProperties?: (ctx: AlterScopePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterScopeProperties`.
     * @param ctx the parse tree
     */
    exitAlterScopeProperties?: (ctx: AlterScopePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetOwner`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetOwner`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixSetOwner?: (ctx: AlterDatabaseSuffixSetOwnerContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetLocation`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetLocation`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixSetLocation?: (ctx: AlterDatabaseSuffixSetLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetManagedLocation`.
     * @param ctx the parse tree
     */
    enterAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDatabaseSuffixSetManagedLocation`.
     * @param ctx the parse tree
     */
    exitAlterDatabaseSuffixSetManagedLocation?: (ctx: AlterDatabaseSuffixSetManagedLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixRename`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixRename`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRename?: (ctx: AlterStatementSuffixRenameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixAddCol`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddCol`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddCol?: (ctx: AlterStatementSuffixAddColContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixAddConstraint`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddConstraint`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddConstraint?: (ctx: AlterStatementSuffixAddConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateColumns`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateColumns`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUpdateColumns?: (ctx: AlterStatementSuffixUpdateColumnsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixDropConstraint`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixDropConstraint`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixDropConstraint?: (ctx: AlterStatementSuffixDropConstraintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixRenameCol`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixRenameCol`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRenameCol?: (ctx: AlterStatementSuffixRenameColContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateStatsCol`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateStatsCol`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUpdateStatsCol?: (ctx: AlterStatementSuffixUpdateStatsColContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateStats`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixUpdateStats`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUpdateStats?: (ctx: AlterStatementSuffixUpdateStatsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementChangeColPosition`.
     * @param ctx the parse tree
     */
    enterAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementChangeColPosition`.
     * @param ctx the parse tree
     */
    exitAlterStatementChangeColPosition?: (ctx: AlterStatementChangeColPositionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixAddPartitions`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddPartitions`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddPartitions?: (ctx: AlterStatementSuffixAddPartitionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixAddPartitionsElement`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixAddPartitionsElement`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixAddPartitionsElement?: (ctx: AlterStatementSuffixAddPartitionsElementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixTouch`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixTouch`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixTouch?: (ctx: AlterStatementSuffixTouchContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixArchive`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixArchive`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixArchive?: (ctx: AlterStatementSuffixArchiveContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixUnArchive`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixUnArchive`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixUnArchive?: (ctx: AlterStatementSuffixUnArchiveContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionLocation`.
     * @param ctx the parse tree
     */
    enterPartitionLocation?: (ctx: PartitionLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionLocation`.
     * @param ctx the parse tree
     */
    exitPartitionLocation?: (ctx: PartitionLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixDropPartitions`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixDropPartitions`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixDropPartitions?: (ctx: AlterStatementSuffixDropPartitionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixProperties?: (ctx: AlterStatementSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterViewSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterViewSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterViewSuffixProperties?: (ctx: AlterViewSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixSerdeProperties`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixSerdeProperties`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSerdeProperties?: (ctx: AlterStatementSuffixSerdePropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tablePartitionPrefix`.
     * @param ctx the parse tree
     */
    enterTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tablePartitionPrefix`.
     * @param ctx the parse tree
     */
    exitTablePartitionPrefix?: (ctx: TablePartitionPrefixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixFileFormat`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixFileFormat`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixFileFormat?: (ctx: AlterStatementSuffixFileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixClusterbySortby`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixClusterbySortby`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixClusterbySortby?: (ctx: AlterStatementSuffixClusterbySortbyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterTblPartitionStatementSuffixSkewedLocation`.
     * @param ctx the parse tree
     */
    enterAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterTblPartitionStatementSuffixSkewedLocation`.
     * @param ctx the parse tree
     */
    exitAlterTblPartitionStatementSuffixSkewedLocation?: (ctx: AlterTblPartitionStatementSuffixSkewedLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedLocations`.
     * @param ctx the parse tree
     */
    enterSkewedLocations?: (ctx: SkewedLocationsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedLocations`.
     * @param ctx the parse tree
     */
    exitSkewedLocations?: (ctx: SkewedLocationsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedLocationsList`.
     * @param ctx the parse tree
     */
    enterSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedLocationsList`.
     * @param ctx the parse tree
     */
    exitSkewedLocationsList?: (ctx: SkewedLocationsListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.skewedLocationMap`.
     * @param ctx the parse tree
     */
    enterSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.skewedLocationMap`.
     * @param ctx the parse tree
     */
    exitSkewedLocationMap?: (ctx: SkewedLocationMapContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixLocation`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixLocation`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixLocation?: (ctx: AlterStatementSuffixLocationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixSkewedby`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixSkewedby`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSkewedby?: (ctx: AlterStatementSuffixSkewedbyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixExchangePartition`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixExchangePartition`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixExchangePartition?: (ctx: AlterStatementSuffixExchangePartitionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixRenamePart`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixRenamePart`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixRenamePart?: (ctx: AlterStatementSuffixRenamePartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixStatsPart`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixStatsPart`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixStatsPart?: (ctx: AlterStatementSuffixStatsPartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixMergeFiles`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixMergeFiles`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixMergeFiles?: (ctx: AlterStatementSuffixMergeFilesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixBucketNum`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixBucketNum`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixBucketNum?: (ctx: AlterStatementSuffixBucketNumContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.blocking`.
     * @param ctx the parse tree
     */
    enterBlocking?: (ctx: BlockingContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.blocking`.
     * @param ctx the parse tree
     */
    exitBlocking?: (ctx: BlockingContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.compactPool`.
     * @param ctx the parse tree
     */
    enterCompactPool?: (ctx: CompactPoolContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.compactPool`.
     * @param ctx the parse tree
     */
    exitCompactPool?: (ctx: CompactPoolContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixCompact`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixCompact`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixCompact?: (ctx: AlterStatementSuffixCompactContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixSetOwner`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixSetOwner`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSetOwner?: (ctx: AlterStatementSuffixSetOwnerContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixSetPartSpec`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixSetPartSpec`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixSetPartSpec?: (ctx: AlterStatementSuffixSetPartSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterStatementSuffixExecute`.
     * @param ctx the parse tree
     */
    enterAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterStatementSuffixExecute`.
     * @param ctx the parse tree
     */
    exitAlterStatementSuffixExecute?: (ctx: AlterStatementSuffixExecuteContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.fileFormat`.
     * @param ctx the parse tree
     */
    enterFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.fileFormat`.
     * @param ctx the parse tree
     */
    exitFileFormat?: (ctx: FileFormatContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDataConnectorStatementSuffix`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDataConnectorStatementSuffix`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorStatementSuffix?: (ctx: AlterDataConnectorStatementSuffixContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixProperties`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixProperties`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorSuffixProperties?: (ctx: AlterDataConnectorSuffixPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixSetOwner`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixSetOwner`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorSuffixSetOwner?: (ctx: AlterDataConnectorSuffixSetOwnerContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixSetUrl`.
     * @param ctx the parse tree
     */
    enterAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterDataConnectorSuffixSetUrl`.
     * @param ctx the parse tree
     */
    exitAlterDataConnectorSuffixSetUrl?: (ctx: AlterDataConnectorSuffixSetUrlContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.likeTableOrFile`.
     * @param ctx the parse tree
     */
    enterLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.likeTableOrFile`.
     * @param ctx the parse tree
     */
    exitLikeTableOrFile?: (ctx: LikeTableOrFileContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createTableStatement`.
     * @param ctx the parse tree
     */
    enterCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createTableStatement`.
     * @param ctx the parse tree
     */
    exitCreateTableStatement?: (ctx: CreateTableStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createDataConnectorStatement`.
     * @param ctx the parse tree
     */
    enterCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createDataConnectorStatement`.
     * @param ctx the parse tree
     */
    exitCreateDataConnectorStatement?: (ctx: CreateDataConnectorStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dataConnectorComment`.
     * @param ctx the parse tree
     */
    enterDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dataConnectorComment`.
     * @param ctx the parse tree
     */
    exitDataConnectorComment?: (ctx: DataConnectorCommentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dataConnectorUrl`.
     * @param ctx the parse tree
     */
    enterDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dataConnectorUrl`.
     * @param ctx the parse tree
     */
    exitDataConnectorUrl?: (ctx: DataConnectorUrlContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dataConnectorType`.
     * @param ctx the parse tree
     */
    enterDataConnectorType?: (ctx: DataConnectorTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dataConnectorType`.
     * @param ctx the parse tree
     */
    exitDataConnectorType?: (ctx: DataConnectorTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dcProperties`.
     * @param ctx the parse tree
     */
    enterDcProperties?: (ctx: DcPropertiesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dcProperties`.
     * @param ctx the parse tree
     */
    exitDcProperties?: (ctx: DcPropertiesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropDataConnectorStatement`.
     * @param ctx the parse tree
     */
    enterDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropDataConnectorStatement`.
     * @param ctx the parse tree
     */
    exitDropDataConnectorStatement?: (ctx: DropDataConnectorStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableAllColumns`.
     * @param ctx the parse tree
     */
    enterTableAllColumns?: (ctx: TableAllColumnsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableAllColumns`.
     * @param ctx the parse tree
     */
    exitTableAllColumns?: (ctx: TableAllColumnsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableOrColumn`.
     * @param ctx the parse tree
     */
    enterTableOrColumn?: (ctx: TableOrColumnContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableOrColumn`.
     * @param ctx the parse tree
     */
    exitTableOrColumn?: (ctx: TableOrColumnContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.defaultValue`.
     * @param ctx the parse tree
     */
    enterDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.defaultValue`.
     * @param ctx the parse tree
     */
    exitDefaultValue?: (ctx: DefaultValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressionList`.
     * @param ctx the parse tree
     */
    enterExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressionList`.
     * @param ctx the parse tree
     */
    exitExpressionList?: (ctx: ExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.aliasList`.
     * @param ctx the parse tree
     */
    enterAliasList?: (ctx: AliasListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.aliasList`.
     * @param ctx the parse tree
     */
    exitAliasList?: (ctx: AliasListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.fromClause`.
     * @param ctx the parse tree
     */
    enterFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.fromClause`.
     * @param ctx the parse tree
     */
    exitFromClause?: (ctx: FromClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.fromSource`.
     * @param ctx the parse tree
     */
    enterFromSource?: (ctx: FromSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.fromSource`.
     * @param ctx the parse tree
     */
    exitFromSource?: (ctx: FromSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.atomjoinSource`.
     * @param ctx the parse tree
     */
    enterAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.atomjoinSource`.
     * @param ctx the parse tree
     */
    exitAtomjoinSource?: (ctx: AtomjoinSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.joinSource`.
     * @param ctx the parse tree
     */
    enterJoinSource?: (ctx: JoinSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.joinSource`.
     * @param ctx the parse tree
     */
    exitJoinSource?: (ctx: JoinSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.joinSourcePart`.
     * @param ctx the parse tree
     */
    enterJoinSourcePart?: (ctx: JoinSourcePartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.joinSourcePart`.
     * @param ctx the parse tree
     */
    exitJoinSourcePart?: (ctx: JoinSourcePartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.uniqueJoinSource`.
     * @param ctx the parse tree
     */
    enterUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.uniqueJoinSource`.
     * @param ctx the parse tree
     */
    exitUniqueJoinSource?: (ctx: UniqueJoinSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.uniqueJoinExpr`.
     * @param ctx the parse tree
     */
    enterUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.uniqueJoinExpr`.
     * @param ctx the parse tree
     */
    exitUniqueJoinExpr?: (ctx: UniqueJoinExprContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.uniqueJoinToken`.
     * @param ctx the parse tree
     */
    enterUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.uniqueJoinToken`.
     * @param ctx the parse tree
     */
    exitUniqueJoinToken?: (ctx: UniqueJoinTokenContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.joinToken`.
     * @param ctx the parse tree
     */
    enterJoinToken?: (ctx: JoinTokenContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.joinToken`.
     * @param ctx the parse tree
     */
    exitJoinToken?: (ctx: JoinTokenContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.lateralView`.
     * @param ctx the parse tree
     */
    enterLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.lateralView`.
     * @param ctx the parse tree
     */
    exitLateralView?: (ctx: LateralViewContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableAlias`.
     * @param ctx the parse tree
     */
    enterTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableAlias`.
     * @param ctx the parse tree
     */
    exitTableAlias?: (ctx: TableAliasContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableBucketSample`.
     * @param ctx the parse tree
     */
    enterTableBucketSample?: (ctx: TableBucketSampleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableBucketSample`.
     * @param ctx the parse tree
     */
    exitTableBucketSample?: (ctx: TableBucketSampleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.splitSample`.
     * @param ctx the parse tree
     */
    enterSplitSample?: (ctx: SplitSampleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.splitSample`.
     * @param ctx the parse tree
     */
    exitSplitSample?: (ctx: SplitSampleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableSample`.
     * @param ctx the parse tree
     */
    enterTableSample?: (ctx: TableSampleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableSample`.
     * @param ctx the parse tree
     */
    exitTableSample?: (ctx: TableSampleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableSource`.
     * @param ctx the parse tree
     */
    enterTableSource?: (ctx: TableSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableSource`.
     * @param ctx the parse tree
     */
    exitTableSource?: (ctx: TableSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.asOfClause`.
     * @param ctx the parse tree
     */
    enterAsOfClause?: (ctx: AsOfClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.asOfClause`.
     * @param ctx the parse tree
     */
    exitAsOfClause?: (ctx: AsOfClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.uniqueJoinTableSource`.
     * @param ctx the parse tree
     */
    enterUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.uniqueJoinTableSource`.
     * @param ctx the parse tree
     */
    exitUniqueJoinTableSource?: (ctx: UniqueJoinTableSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableName`.
     * @param ctx the parse tree
     */
    enterTableName?: (ctx: TableNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableName`.
     * @param ctx the parse tree
     */
    exitTableName?: (ctx: TableNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.viewName`.
     * @param ctx the parse tree
     */
    enterViewName?: (ctx: ViewNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.viewName`.
     * @param ctx the parse tree
     */
    exitViewName?: (ctx: ViewNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.subQuerySource`.
     * @param ctx the parse tree
     */
    enterSubQuerySource?: (ctx: SubQuerySourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.subQuerySource`.
     * @param ctx the parse tree
     */
    exitSubQuerySource?: (ctx: SubQuerySourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitioningSpec`.
     * @param ctx the parse tree
     */
    enterPartitioningSpec?: (ctx: PartitioningSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitioningSpec`.
     * @param ctx the parse tree
     */
    exitPartitioningSpec?: (ctx: PartitioningSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionTableFunctionSource`.
     * @param ctx the parse tree
     */
    enterPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionTableFunctionSource`.
     * @param ctx the parse tree
     */
    exitPartitionTableFunctionSource?: (ctx: PartitionTableFunctionSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionedTableFunction`.
     * @param ctx the parse tree
     */
    enterPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionedTableFunction`.
     * @param ctx the parse tree
     */
    exitPartitionedTableFunction?: (ctx: PartitionedTableFunctionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.whereClause`.
     * @param ctx the parse tree
     */
    enterWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.whereClause`.
     * @param ctx the parse tree
     */
    exitWhereClause?: (ctx: WhereClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.searchCondition`.
     * @param ctx the parse tree
     */
    enterSearchCondition?: (ctx: SearchConditionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.searchCondition`.
     * @param ctx the parse tree
     */
    exitSearchCondition?: (ctx: SearchConditionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.valuesSource`.
     * @param ctx the parse tree
     */
    enterValuesSource?: (ctx: ValuesSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.valuesSource`.
     * @param ctx the parse tree
     */
    exitValuesSource?: (ctx: ValuesSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.valuesClause`.
     * @param ctx the parse tree
     */
    enterValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.valuesClause`.
     * @param ctx the parse tree
     */
    exitValuesClause?: (ctx: ValuesClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.valuesTableConstructor`.
     * @param ctx the parse tree
     */
    enterValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.valuesTableConstructor`.
     * @param ctx the parse tree
     */
    exitValuesTableConstructor?: (ctx: ValuesTableConstructorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.valueRowConstructor`.
     * @param ctx the parse tree
     */
    enterValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.valueRowConstructor`.
     * @param ctx the parse tree
     */
    exitValueRowConstructor?: (ctx: ValueRowConstructorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.firstValueRowConstructor`.
     * @param ctx the parse tree
     */
    enterFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.firstValueRowConstructor`.
     * @param ctx the parse tree
     */
    exitFirstValueRowConstructor?: (ctx: FirstValueRowConstructorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.virtualTableSource`.
     * @param ctx the parse tree
     */
    enterVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.virtualTableSource`.
     * @param ctx the parse tree
     */
    exitVirtualTableSource?: (ctx: VirtualTableSourceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectClause`.
     * @param ctx the parse tree
     */
    enterSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectClause`.
     * @param ctx the parse tree
     */
    exitSelectClause?: (ctx: SelectClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.all_distinct`.
     * @param ctx the parse tree
     */
    enterAll_distinct?: (ctx: All_distinctContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.all_distinct`.
     * @param ctx the parse tree
     */
    exitAll_distinct?: (ctx: All_distinctContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectList`.
     * @param ctx the parse tree
     */
    enterSelectList?: (ctx: SelectListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectList`.
     * @param ctx the parse tree
     */
    exitSelectList?: (ctx: SelectListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectTrfmClause`.
     * @param ctx the parse tree
     */
    enterSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectTrfmClause`.
     * @param ctx the parse tree
     */
    exitSelectTrfmClause?: (ctx: SelectTrfmClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectItem`.
     * @param ctx the parse tree
     */
    enterSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectItem`.
     * @param ctx the parse tree
     */
    exitSelectItem?: (ctx: SelectItemContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.trfmClause`.
     * @param ctx the parse tree
     */
    enterTrfmClause?: (ctx: TrfmClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.trfmClause`.
     * @param ctx the parse tree
     */
    exitTrfmClause?: (ctx: TrfmClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectExpression`.
     * @param ctx the parse tree
     */
    enterSelectExpression?: (ctx: SelectExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectExpression`.
     * @param ctx the parse tree
     */
    exitSelectExpression?: (ctx: SelectExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.selectExpressionList`.
     * @param ctx the parse tree
     */
    enterSelectExpressionList?: (ctx: SelectExpressionListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.selectExpressionList`.
     * @param ctx the parse tree
     */
    exitSelectExpressionList?: (ctx: SelectExpressionListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_clause`.
     * @param ctx the parse tree
     */
    enterWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_clause`.
     * @param ctx the parse tree
     */
    exitWindow_clause?: (ctx: Window_clauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_defn`.
     * @param ctx the parse tree
     */
    enterWindow_defn?: (ctx: Window_defnContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_defn`.
     * @param ctx the parse tree
     */
    exitWindow_defn?: (ctx: Window_defnContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_specification`.
     * @param ctx the parse tree
     */
    enterWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_specification`.
     * @param ctx the parse tree
     */
    exitWindow_specification?: (ctx: Window_specificationContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_frame`.
     * @param ctx the parse tree
     */
    enterWindow_frame?: (ctx: Window_frameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_frame`.
     * @param ctx the parse tree
     */
    exitWindow_frame?: (ctx: Window_frameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_range_expression`.
     * @param ctx the parse tree
     */
    enterWindow_range_expression?: (ctx: Window_range_expressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_range_expression`.
     * @param ctx the parse tree
     */
    exitWindow_range_expression?: (ctx: Window_range_expressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_value_expression`.
     * @param ctx the parse tree
     */
    enterWindow_value_expression?: (ctx: Window_value_expressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_value_expression`.
     * @param ctx the parse tree
     */
    exitWindow_value_expression?: (ctx: Window_value_expressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_frame_start_boundary`.
     * @param ctx the parse tree
     */
    enterWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_frame_start_boundary`.
     * @param ctx the parse tree
     */
    exitWindow_frame_start_boundary?: (ctx: Window_frame_start_boundaryContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.window_frame_boundary`.
     * @param ctx the parse tree
     */
    enterWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.window_frame_boundary`.
     * @param ctx the parse tree
     */
    exitWindow_frame_boundary?: (ctx: Window_frame_boundaryContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    enterGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.groupByClause`.
     * @param ctx the parse tree
     */
    exitGroupByClause?: (ctx: GroupByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.groupby_expression`.
     * @param ctx the parse tree
     */
    enterGroupby_expression?: (ctx: Groupby_expressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.groupby_expression`.
     * @param ctx the parse tree
     */
    exitGroupby_expression?: (ctx: Groupby_expressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.groupByEmpty`.
     * @param ctx the parse tree
     */
    enterGroupByEmpty?: (ctx: GroupByEmptyContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.groupByEmpty`.
     * @param ctx the parse tree
     */
    exitGroupByEmpty?: (ctx: GroupByEmptyContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rollupStandard`.
     * @param ctx the parse tree
     */
    enterRollupStandard?: (ctx: RollupStandardContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rollupStandard`.
     * @param ctx the parse tree
     */
    exitRollupStandard?: (ctx: RollupStandardContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rollupOldSyntax`.
     * @param ctx the parse tree
     */
    enterRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rollupOldSyntax`.
     * @param ctx the parse tree
     */
    exitRollupOldSyntax?: (ctx: RollupOldSyntaxContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.groupingSetExpression`.
     * @param ctx the parse tree
     */
    enterGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.groupingSetExpression`.
     * @param ctx the parse tree
     */
    exitGroupingSetExpression?: (ctx: GroupingSetExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.groupingSetExpressionMultiple`.
     * @param ctx the parse tree
     */
    enterGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.groupingSetExpressionMultiple`.
     * @param ctx the parse tree
     */
    exitGroupingSetExpressionMultiple?: (ctx: GroupingSetExpressionMultipleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.groupingExpressionSingle`.
     * @param ctx the parse tree
     */
    enterGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.groupingExpressionSingle`.
     * @param ctx the parse tree
     */
    exitGroupingExpressionSingle?: (ctx: GroupingExpressionSingleContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.havingClause`.
     * @param ctx the parse tree
     */
    enterHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.havingClause`.
     * @param ctx the parse tree
     */
    exitHavingClause?: (ctx: HavingClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.qualifyClause`.
     * @param ctx the parse tree
     */
    enterQualifyClause?: (ctx: QualifyClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.qualifyClause`.
     * @param ctx the parse tree
     */
    exitQualifyClause?: (ctx: QualifyClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.havingCondition`.
     * @param ctx the parse tree
     */
    enterHavingCondition?: (ctx: HavingConditionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.havingCondition`.
     * @param ctx the parse tree
     */
    exitHavingCondition?: (ctx: HavingConditionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressionsInParenthesis`.
     * @param ctx the parse tree
     */
    enterExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressionsInParenthesis`.
     * @param ctx the parse tree
     */
    exitExpressionsInParenthesis?: (ctx: ExpressionsInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressionsNotInParenthesis`.
     * @param ctx the parse tree
     */
    enterExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressionsNotInParenthesis`.
     * @param ctx the parse tree
     */
    exitExpressionsNotInParenthesis?: (ctx: ExpressionsNotInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressionPart`.
     * @param ctx the parse tree
     */
    enterExpressionPart?: (ctx: ExpressionPartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressionPart`.
     * @param ctx the parse tree
     */
    exitExpressionPart?: (ctx: ExpressionPartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    enterExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressionOrDefault`.
     * @param ctx the parse tree
     */
    exitExpressionOrDefault?: (ctx: ExpressionOrDefaultContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.firstExpressionsWithAlias`.
     * @param ctx the parse tree
     */
    enterFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.firstExpressionsWithAlias`.
     * @param ctx the parse tree
     */
    exitFirstExpressionsWithAlias?: (ctx: FirstExpressionsWithAliasContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressionWithAlias`.
     * @param ctx the parse tree
     */
    enterExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressionWithAlias`.
     * @param ctx the parse tree
     */
    exitExpressionWithAlias?: (ctx: ExpressionWithAliasContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expressions`.
     * @param ctx the parse tree
     */
    enterExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expressions`.
     * @param ctx the parse tree
     */
    exitExpressions?: (ctx: ExpressionsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnRefOrderInParenthesis`.
     * @param ctx the parse tree
     */
    enterColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnRefOrderInParenthesis`.
     * @param ctx the parse tree
     */
    exitColumnRefOrderInParenthesis?: (ctx: ColumnRefOrderInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.columnRefOrderNotInParenthesis`.
     * @param ctx the parse tree
     */
    enterColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.columnRefOrderNotInParenthesis`.
     * @param ctx the parse tree
     */
    exitColumnRefOrderNotInParenthesis?: (ctx: ColumnRefOrderNotInParenthesisContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.orderByClause`.
     * @param ctx the parse tree
     */
    enterOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.orderByClause`.
     * @param ctx the parse tree
     */
    exitOrderByClause?: (ctx: OrderByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.clusterByClause`.
     * @param ctx the parse tree
     */
    enterClusterByClause?: (ctx: ClusterByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.clusterByClause`.
     * @param ctx the parse tree
     */
    exitClusterByClause?: (ctx: ClusterByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionByClause`.
     * @param ctx the parse tree
     */
    enterPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionByClause`.
     * @param ctx the parse tree
     */
    exitPartitionByClause?: (ctx: PartitionByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.distributeByClause`.
     * @param ctx the parse tree
     */
    enterDistributeByClause?: (ctx: DistributeByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.distributeByClause`.
     * @param ctx the parse tree
     */
    exitDistributeByClause?: (ctx: DistributeByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.sortByClause`.
     * @param ctx the parse tree
     */
    enterSortByClause?: (ctx: SortByClauseContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.sortByClause`.
     * @param ctx the parse tree
     */
    exitSortByClause?: (ctx: SortByClauseContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.trimFunction`.
     * @param ctx the parse tree
     */
    enterTrimFunction?: (ctx: TrimFunctionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.trimFunction`.
     * @param ctx the parse tree
     */
    exitTrimFunction?: (ctx: TrimFunctionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.function_`.
     * @param ctx the parse tree
     */
    enterFunction_?: (ctx: Function_Context) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.function_`.
     * @param ctx the parse tree
     */
    exitFunction_?: (ctx: Function_Context) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.null_treatment`.
     * @param ctx the parse tree
     */
    enterNull_treatment?: (ctx: Null_treatmentContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.null_treatment`.
     * @param ctx the parse tree
     */
    exitNull_treatment?: (ctx: Null_treatmentContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.functionName`.
     * @param ctx the parse tree
     */
    enterFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.functionName`.
     * @param ctx the parse tree
     */
    exitFunctionName?: (ctx: FunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.castExpression`.
     * @param ctx the parse tree
     */
    enterCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.castExpression`.
     * @param ctx the parse tree
     */
    exitCastExpression?: (ctx: CastExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.caseExpression`.
     * @param ctx the parse tree
     */
    enterCaseExpression?: (ctx: CaseExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.caseExpression`.
     * @param ctx the parse tree
     */
    exitCaseExpression?: (ctx: CaseExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.whenExpression`.
     * @param ctx the parse tree
     */
    enterWhenExpression?: (ctx: WhenExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.whenExpression`.
     * @param ctx the parse tree
     */
    exitWhenExpression?: (ctx: WhenExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.floorExpression`.
     * @param ctx the parse tree
     */
    enterFloorExpression?: (ctx: FloorExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.floorExpression`.
     * @param ctx the parse tree
     */
    exitFloorExpression?: (ctx: FloorExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.floorDateQualifiers`.
     * @param ctx the parse tree
     */
    enterFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.floorDateQualifiers`.
     * @param ctx the parse tree
     */
    exitFloorDateQualifiers?: (ctx: FloorDateQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.extractExpression`.
     * @param ctx the parse tree
     */
    enterExtractExpression?: (ctx: ExtractExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.extractExpression`.
     * @param ctx the parse tree
     */
    exitExtractExpression?: (ctx: ExtractExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.timeQualifiers`.
     * @param ctx the parse tree
     */
    enterTimeQualifiers?: (ctx: TimeQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.timeQualifiers`.
     * @param ctx the parse tree
     */
    exitTimeQualifiers?: (ctx: TimeQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.constant`.
     * @param ctx the parse tree
     */
    enterConstant?: (ctx: ConstantContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.constant`.
     * @param ctx the parse tree
     */
    exitConstant?: (ctx: ConstantContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.prepareStmtParam`.
     * @param ctx the parse tree
     */
    enterPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.prepareStmtParam`.
     * @param ctx the parse tree
     */
    exitPrepareStmtParam?: (ctx: PrepareStmtParamContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.parameterIdx`.
     * @param ctx the parse tree
     */
    enterParameterIdx?: (ctx: ParameterIdxContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.parameterIdx`.
     * @param ctx the parse tree
     */
    exitParameterIdx?: (ctx: ParameterIdxContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.stringLiteralSequence`.
     * @param ctx the parse tree
     */
    enterStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.stringLiteralSequence`.
     * @param ctx the parse tree
     */
    exitStringLiteralSequence?: (ctx: StringLiteralSequenceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.charSetStringLiteral`.
     * @param ctx the parse tree
     */
    enterCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.charSetStringLiteral`.
     * @param ctx the parse tree
     */
    exitCharSetStringLiteral?: (ctx: CharSetStringLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dateLiteral`.
     * @param ctx the parse tree
     */
    enterDateLiteral?: (ctx: DateLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dateLiteral`.
     * @param ctx the parse tree
     */
    exitDateLiteral?: (ctx: DateLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.timestampLiteral`.
     * @param ctx the parse tree
     */
    enterTimestampLiteral?: (ctx: TimestampLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.timestampLiteral`.
     * @param ctx the parse tree
     */
    exitTimestampLiteral?: (ctx: TimestampLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.timestampLocalTZLiteral`.
     * @param ctx the parse tree
     */
    enterTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.timestampLocalTZLiteral`.
     * @param ctx the parse tree
     */
    exitTimestampLocalTZLiteral?: (ctx: TimestampLocalTZLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.intervalValue`.
     * @param ctx the parse tree
     */
    enterIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.intervalValue`.
     * @param ctx the parse tree
     */
    exitIntervalValue?: (ctx: IntervalValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.intervalLiteral`.
     * @param ctx the parse tree
     */
    enterIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.intervalLiteral`.
     * @param ctx the parse tree
     */
    exitIntervalLiteral?: (ctx: IntervalLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.intervalExpression`.
     * @param ctx the parse tree
     */
    enterIntervalExpression?: (ctx: IntervalExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.intervalExpression`.
     * @param ctx the parse tree
     */
    exitIntervalExpression?: (ctx: IntervalExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.intervalQualifiers`.
     * @param ctx the parse tree
     */
    enterIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.intervalQualifiers`.
     * @param ctx the parse tree
     */
    exitIntervalQualifiers?: (ctx: IntervalQualifiersContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.atomExpression`.
     * @param ctx the parse tree
     */
    enterAtomExpression?: (ctx: AtomExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.atomExpression`.
     * @param ctx the parse tree
     */
    exitAtomExpression?: (ctx: AtomExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceFieldExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceFieldExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceFieldExpression?: (ctx: PrecedenceFieldExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceUnaryOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceUnaryOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceUnaryOperator?: (ctx: PrecedenceUnaryOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceUnaryPrefixExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceUnaryPrefixExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceUnaryPrefixExpression?: (ctx: PrecedenceUnaryPrefixExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceBitwiseXorOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceBitwiseXorOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseXorOperator?: (ctx: PrecedenceBitwiseXorOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceBitwiseXorExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceBitwiseXorExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseXorExpression?: (ctx: PrecedenceBitwiseXorExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceStarOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceStarOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceStarOperator?: (ctx: PrecedenceStarOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceStarExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceStarExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceStarExpression?: (ctx: PrecedenceStarExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedencePlusOperator`.
     * @param ctx the parse tree
     */
    enterPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedencePlusOperator`.
     * @param ctx the parse tree
     */
    exitPrecedencePlusOperator?: (ctx: PrecedencePlusOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedencePlusExpression`.
     * @param ctx the parse tree
     */
    enterPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedencePlusExpression`.
     * @param ctx the parse tree
     */
    exitPrecedencePlusExpression?: (ctx: PrecedencePlusExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceConcatenateOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceConcatenateOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceConcatenateOperator?: (ctx: PrecedenceConcatenateOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceConcatenateExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceConcatenateExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceConcatenateExpression?: (ctx: PrecedenceConcatenateExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceAmpersandOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceAmpersandOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceAmpersandOperator?: (ctx: PrecedenceAmpersandOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceAmpersandExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceAmpersandExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceAmpersandExpression?: (ctx: PrecedenceAmpersandExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceBitwiseOrOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceBitwiseOrOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseOrOperator?: (ctx: PrecedenceBitwiseOrOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceBitwiseOrExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceBitwiseOrExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceBitwiseOrExpression?: (ctx: PrecedenceBitwiseOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceRegexpOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceRegexpOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceRegexpOperator?: (ctx: PrecedenceRegexpOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarOperator?: (ctx: PrecedenceSimilarOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.subQueryExpression`.
     * @param ctx the parse tree
     */
    enterSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.subQueryExpression`.
     * @param ctx the parse tree
     */
    exitSubQueryExpression?: (ctx: SubQueryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpression?: (ctx: PrecedenceSimilarExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionMain`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionMain`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionMain?: (ctx: PrecedenceSimilarExpressionMainContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionPart`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionPart`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionPart?: (ctx: PrecedenceSimilarExpressionPartContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionAtom`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionAtom`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionAtom?: (ctx: PrecedenceSimilarExpressionAtomContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionQuantifierPredicate`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionQuantifierPredicate`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionQuantifierPredicate?: (ctx: PrecedenceSimilarExpressionQuantifierPredicateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.quantifierType`.
     * @param ctx the parse tree
     */
    enterQuantifierType?: (ctx: QuantifierTypeContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.quantifierType`.
     * @param ctx the parse tree
     */
    exitQuantifierType?: (ctx: QuantifierTypeContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionIn`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionIn`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionIn?: (ctx: PrecedenceSimilarExpressionInContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionPartNot`.
     * @param ctx the parse tree
     */
    enterPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceSimilarExpressionPartNot`.
     * @param ctx the parse tree
     */
    exitPrecedenceSimilarExpressionPartNot?: (ctx: PrecedenceSimilarExpressionPartNotContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceDistinctOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceDistinctOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceDistinctOperator?: (ctx: PrecedenceDistinctOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceEqualOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceEqualOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceEqualOperator?: (ctx: PrecedenceEqualOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceEqualExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceEqualExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceEqualExpression?: (ctx: PrecedenceEqualExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.isCondition`.
     * @param ctx the parse tree
     */
    enterIsCondition?: (ctx: IsConditionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.isCondition`.
     * @param ctx the parse tree
     */
    exitIsCondition?: (ctx: IsConditionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceUnarySuffixExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceUnarySuffixExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceUnarySuffixExpression?: (ctx: PrecedenceUnarySuffixExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceNotOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceNotOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceNotOperator?: (ctx: PrecedenceNotOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceNotExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceNotExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceNotExpression?: (ctx: PrecedenceNotExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceAndOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceAndOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceAndOperator?: (ctx: PrecedenceAndOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceAndExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceAndExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceAndExpression?: (ctx: PrecedenceAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceOrOperator`.
     * @param ctx the parse tree
     */
    enterPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceOrOperator`.
     * @param ctx the parse tree
     */
    exitPrecedenceOrOperator?: (ctx: PrecedenceOrOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.precedenceOrExpression`.
     * @param ctx the parse tree
     */
    enterPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.precedenceOrExpression`.
     * @param ctx the parse tree
     */
    exitPrecedenceOrExpression?: (ctx: PrecedenceOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.booleanValue`.
     * @param ctx the parse tree
     */
    enterBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.booleanValue`.
     * @param ctx the parse tree
     */
    exitBooleanValue?: (ctx: BooleanValueContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.booleanValueTok`.
     * @param ctx the parse tree
     */
    enterBooleanValueTok?: (ctx: BooleanValueTokContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.booleanValueTok`.
     * @param ctx the parse tree
     */
    exitBooleanValueTok?: (ctx: BooleanValueTokContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.tableOrPartition`.
     * @param ctx the parse tree
     */
    enterTableOrPartition?: (ctx: TableOrPartitionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.tableOrPartition`.
     * @param ctx the parse tree
     */
    exitTableOrPartition?: (ctx: TableOrPartitionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSpec?: (ctx: PartitionSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionVal`.
     * @param ctx the parse tree
     */
    enterPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionVal`.
     * @param ctx the parse tree
     */
    exitPartitionVal?: (ctx: PartitionValContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionSelectorSpec`.
     * @param ctx the parse tree
     */
    enterPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionSelectorSpec`.
     * @param ctx the parse tree
     */
    exitPartitionSelectorSpec?: (ctx: PartitionSelectorSpecContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionSelectorVal`.
     * @param ctx the parse tree
     */
    enterPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionSelectorVal`.
     * @param ctx the parse tree
     */
    exitPartitionSelectorVal?: (ctx: PartitionSelectorValContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.partitionSelectorOperator`.
     * @param ctx the parse tree
     */
    enterPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.partitionSelectorOperator`.
     * @param ctx the parse tree
     */
    exitPartitionSelectorOperator?: (ctx: PartitionSelectorOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.subQuerySelectorOperator`.
     * @param ctx the parse tree
     */
    enterSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.subQuerySelectorOperator`.
     * @param ctx the parse tree
     */
    exitSubQuerySelectorOperator?: (ctx: SubQuerySelectorOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.sysFuncNames`.
     * @param ctx the parse tree
     */
    enterSysFuncNames?: (ctx: SysFuncNamesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.sysFuncNames`.
     * @param ctx the parse tree
     */
    exitSysFuncNames?: (ctx: SysFuncNamesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.descFuncNames`.
     * @param ctx the parse tree
     */
    enterDescFuncNames?: (ctx: DescFuncNamesContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.descFuncNames`.
     * @param ctx the parse tree
     */
    exitDescFuncNames?: (ctx: DescFuncNamesContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.id_`.
     * @param ctx the parse tree
     */
    enterId_?: (ctx: Id_Context) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.id_`.
     * @param ctx the parse tree
     */
    exitId_?: (ctx: Id_Context) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.functionIdentifier`.
     * @param ctx the parse tree
     */
    enterFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.functionIdentifier`.
     * @param ctx the parse tree
     */
    exitFunctionIdentifier?: (ctx: FunctionIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.principalIdentifier`.
     * @param ctx the parse tree
     */
    enterPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.principalIdentifier`.
     * @param ctx the parse tree
     */
    exitPrincipalIdentifier?: (ctx: PrincipalIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.nonReserved`.
     * @param ctx the parse tree
     */
    enterNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.nonReserved`.
     * @param ctx the parse tree
     */
    exitNonReserved?: (ctx: NonReservedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.sql11ReservedKeywordsUsedAsFunctionName`.
     * @param ctx the parse tree
     */
    enterSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.sql11ReservedKeywordsUsedAsFunctionName`.
     * @param ctx the parse tree
     */
    exitSql11ReservedKeywordsUsedAsFunctionName?: (ctx: Sql11ReservedKeywordsUsedAsFunctionNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.hint`.
     * @param ctx the parse tree
     */
    enterHint?: (ctx: HintContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.hint`.
     * @param ctx the parse tree
     */
    exitHint?: (ctx: HintContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.hintList`.
     * @param ctx the parse tree
     */
    enterHintList?: (ctx: HintListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.hintList`.
     * @param ctx the parse tree
     */
    exitHintList?: (ctx: HintListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.hintItem`.
     * @param ctx the parse tree
     */
    enterHintItem?: (ctx: HintItemContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.hintItem`.
     * @param ctx the parse tree
     */
    exitHintItem?: (ctx: HintItemContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.hintName`.
     * @param ctx the parse tree
     */
    enterHintName?: (ctx: HintNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.hintName`.
     * @param ctx the parse tree
     */
    exitHintName?: (ctx: HintNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.hintArgs`.
     * @param ctx the parse tree
     */
    enterHintArgs?: (ctx: HintArgsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.hintArgs`.
     * @param ctx the parse tree
     */
    exitHintArgs?: (ctx: HintArgsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.hintArgName`.
     * @param ctx the parse tree
     */
    enterHintArgName?: (ctx: HintArgNameContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.hintArgName`.
     * @param ctx the parse tree
     */
    exitHintArgName?: (ctx: HintArgNameContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.prepareStatement`.
     * @param ctx the parse tree
     */
    enterPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.prepareStatement`.
     * @param ctx the parse tree
     */
    exitPrepareStatement?: (ctx: PrepareStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.executeStatement`.
     * @param ctx the parse tree
     */
    enterExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.executeStatement`.
     * @param ctx the parse tree
     */
    exitExecuteStatement?: (ctx: ExecuteStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.executeParamList`.
     * @param ctx the parse tree
     */
    enterExecuteParamList?: (ctx: ExecuteParamListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.executeParamList`.
     * @param ctx the parse tree
     */
    exitExecuteParamList?: (ctx: ExecuteParamListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.resourcePlanDdlStatements`.
     * @param ctx the parse tree
     */
    enterResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.resourcePlanDdlStatements`.
     * @param ctx the parse tree
     */
    exitResourcePlanDdlStatements?: (ctx: ResourcePlanDdlStatementsContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rpAssign`.
     * @param ctx the parse tree
     */
    enterRpAssign?: (ctx: RpAssignContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rpAssign`.
     * @param ctx the parse tree
     */
    exitRpAssign?: (ctx: RpAssignContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rpAssignList`.
     * @param ctx the parse tree
     */
    enterRpAssignList?: (ctx: RpAssignListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rpAssignList`.
     * @param ctx the parse tree
     */
    exitRpAssignList?: (ctx: RpAssignListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rpUnassign`.
     * @param ctx the parse tree
     */
    enterRpUnassign?: (ctx: RpUnassignContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rpUnassign`.
     * @param ctx the parse tree
     */
    exitRpUnassign?: (ctx: RpUnassignContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.rpUnassignList`.
     * @param ctx the parse tree
     */
    enterRpUnassignList?: (ctx: RpUnassignListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.rpUnassignList`.
     * @param ctx the parse tree
     */
    exitRpUnassignList?: (ctx: RpUnassignListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitCreateResourcePlanStatement?: (ctx: CreateResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.withReplace`.
     * @param ctx the parse tree
     */
    enterWithReplace?: (ctx: WithReplaceContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.withReplace`.
     * @param ctx the parse tree
     */
    exitWithReplace?: (ctx: WithReplaceContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.activate`.
     * @param ctx the parse tree
     */
    enterActivate?: (ctx: ActivateContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.activate`.
     * @param ctx the parse tree
     */
    exitActivate?: (ctx: ActivateContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.enable`.
     * @param ctx the parse tree
     */
    enterEnable?: (ctx: EnableContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.enable`.
     * @param ctx the parse tree
     */
    exitEnable?: (ctx: EnableContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.disable`.
     * @param ctx the parse tree
     */
    enterDisable?: (ctx: DisableContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.disable`.
     * @param ctx the parse tree
     */
    exitDisable?: (ctx: DisableContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.unmanaged`.
     * @param ctx the parse tree
     */
    enterUnmanaged?: (ctx: UnmanagedContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.unmanaged`.
     * @param ctx the parse tree
     */
    exitUnmanaged?: (ctx: UnmanagedContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitAlterResourcePlanStatement?: (ctx: AlterResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.globalWmStatement`.
     * @param ctx the parse tree
     */
    enterGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.globalWmStatement`.
     * @param ctx the parse tree
     */
    exitGlobalWmStatement?: (ctx: GlobalWmStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.replaceResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.replaceResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitReplaceResourcePlanStatement?: (ctx: ReplaceResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropResourcePlanStatement`.
     * @param ctx the parse tree
     */
    enterDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropResourcePlanStatement`.
     * @param ctx the parse tree
     */
    exitDropResourcePlanStatement?: (ctx: DropResourcePlanStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.poolPath`.
     * @param ctx the parse tree
     */
    enterPoolPath?: (ctx: PoolPathContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.poolPath`.
     * @param ctx the parse tree
     */
    exitPoolPath?: (ctx: PoolPathContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerExpression`.
     * @param ctx the parse tree
     */
    enterTriggerExpression?: (ctx: TriggerExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerExpression`.
     * @param ctx the parse tree
     */
    exitTriggerExpression?: (ctx: TriggerExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerExpressionStandalone`.
     * @param ctx the parse tree
     */
    enterTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerExpressionStandalone`.
     * @param ctx the parse tree
     */
    exitTriggerExpressionStandalone?: (ctx: TriggerExpressionStandaloneContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerOrExpression`.
     * @param ctx the parse tree
     */
    enterTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerOrExpression`.
     * @param ctx the parse tree
     */
    exitTriggerOrExpression?: (ctx: TriggerOrExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerAndExpression`.
     * @param ctx the parse tree
     */
    enterTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerAndExpression`.
     * @param ctx the parse tree
     */
    exitTriggerAndExpression?: (ctx: TriggerAndExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerAtomExpression`.
     * @param ctx the parse tree
     */
    enterTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerAtomExpression`.
     * @param ctx the parse tree
     */
    exitTriggerAtomExpression?: (ctx: TriggerAtomExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerLiteral`.
     * @param ctx the parse tree
     */
    enterTriggerLiteral?: (ctx: TriggerLiteralContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerLiteral`.
     * @param ctx the parse tree
     */
    exitTriggerLiteral?: (ctx: TriggerLiteralContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.comparisionOperator`.
     * @param ctx the parse tree
     */
    enterComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.comparisionOperator`.
     * @param ctx the parse tree
     */
    exitComparisionOperator?: (ctx: ComparisionOperatorContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerActionExpression`.
     * @param ctx the parse tree
     */
    enterTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerActionExpression`.
     * @param ctx the parse tree
     */
    exitTriggerActionExpression?: (ctx: TriggerActionExpressionContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.triggerActionExpressionStandalone`.
     * @param ctx the parse tree
     */
    enterTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.triggerActionExpressionStandalone`.
     * @param ctx the parse tree
     */
    exitTriggerActionExpressionStandalone?: (ctx: TriggerActionExpressionStandaloneContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createTriggerStatement`.
     * @param ctx the parse tree
     */
    enterCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createTriggerStatement`.
     * @param ctx the parse tree
     */
    exitCreateTriggerStatement?: (ctx: CreateTriggerStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterTriggerStatement`.
     * @param ctx the parse tree
     */
    enterAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterTriggerStatement`.
     * @param ctx the parse tree
     */
    exitAlterTriggerStatement?: (ctx: AlterTriggerStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropTriggerStatement`.
     * @param ctx the parse tree
     */
    enterDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropTriggerStatement`.
     * @param ctx the parse tree
     */
    exitDropTriggerStatement?: (ctx: DropTriggerStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.poolAssign`.
     * @param ctx the parse tree
     */
    enterPoolAssign?: (ctx: PoolAssignContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.poolAssign`.
     * @param ctx the parse tree
     */
    exitPoolAssign?: (ctx: PoolAssignContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.poolAssignList`.
     * @param ctx the parse tree
     */
    enterPoolAssignList?: (ctx: PoolAssignListContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.poolAssignList`.
     * @param ctx the parse tree
     */
    exitPoolAssignList?: (ctx: PoolAssignListContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createPoolStatement`.
     * @param ctx the parse tree
     */
    enterCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createPoolStatement`.
     * @param ctx the parse tree
     */
    exitCreatePoolStatement?: (ctx: CreatePoolStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterPoolStatement`.
     * @param ctx the parse tree
     */
    enterAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterPoolStatement`.
     * @param ctx the parse tree
     */
    exitAlterPoolStatement?: (ctx: AlterPoolStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropPoolStatement`.
     * @param ctx the parse tree
     */
    enterDropPoolStatement?: (ctx: DropPoolStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropPoolStatement`.
     * @param ctx the parse tree
     */
    exitDropPoolStatement?: (ctx: DropPoolStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.createMappingStatement`.
     * @param ctx the parse tree
     */
    enterCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.createMappingStatement`.
     * @param ctx the parse tree
     */
    exitCreateMappingStatement?: (ctx: CreateMappingStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.alterMappingStatement`.
     * @param ctx the parse tree
     */
    enterAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.alterMappingStatement`.
     * @param ctx the parse tree
     */
    exitAlterMappingStatement?: (ctx: AlterMappingStatementContext) => void;
    /**
     * Enter a parse tree produced by `HiveSQLParser.dropMappingStatement`.
     * @param ctx the parse tree
     */
    enterDropMappingStatement?: (ctx: DropMappingStatementContext) => void;
    /**
     * Exit a parse tree produced by `HiveSQLParser.dropMappingStatement`.
     * @param ctx the parse tree
     */
    exitDropMappingStatement?: (ctx: DropMappingStatementContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

