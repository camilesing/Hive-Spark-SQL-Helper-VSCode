grammar HiveSQL;


// starting rule
statement
    : (explainStatement | execStatement) (EOF|SEMICOLON)
    ;

explainStatement
    : KW_EXPLAIN (
        explainOption* execStatement
        | KW_REWRITE queryStatementExpression
      )
    ;

explainOption
    : KW_EXTENDED
    | KW_FORMATTED
    | KW_DEPENDENCY
    | KW_CBO (KW_COST | KW_JOINCOST)?
    | KW_LOGICAL
    | KW_AUTHORIZATION
    | KW_ANALYZE
    | KW_REOPTIMIZATION
    | KW_LOCKS
    | KW_AST
    | KW_VECTORIZATION vectorizationOnly? vectorizatonDetail?
    | KW_DEBUG
    | KW_DDL
    ;

vectorizationOnly
    : KW_ONLY
    ;

vectorizatonDetail
    : KW_SUMMARY
    | KW_OPERATOR
    | KW_EXPRESSION
    | KW_DETAIL
    ;

execStatement
    : queryStatementExpression
    | loadStatement
    | exportStatement
    | importStatement
    | replDumpStatement
    | replLoadStatement
    | replStatusStatement
    | ddlStatement
    | deleteStatement
    | updateStatement
    | sqlTransactionStatement
    | mergeStatement
    | prepareStatement
    | executeStatement
    ;

loadStatement
    : KW_LOAD KW_DATA KW_LOCAL? KW_INPATH StringLiteral KW_OVERWRITE? KW_INTO KW_TABLE tableOrPartition inputFileFormat?
    ;

replicationClause
    : KW_FOR KW_METADATA? KW_REPLICATION LPAREN StringLiteral RPAREN
    ;

exportStatement
    : KW_EXPORT
      KW_TABLE tableOrPartition
      KW_TO StringLiteral
      replicationClause?
    ;

importStatement
       : KW_IMPORT
         (KW_EXTERNAL? KW_TABLE tableOrPartition)?
         KW_FROM path=StringLiteral
         tableLocation?
    ;

replDumpStatement
    : KW_REPL KW_DUMP
        dbPolicy=replDbPolicy
        (KW_REPLACE oldDbPolicy=replDbPolicy)?
        (KW_WITH replConf=replConfigs)?
    ;

replDbPolicy
    : dbName=id_ (DOT tablePolicy=replTableLevelPolicy)?
    ;

replLoadStatement
    : KW_REPL KW_LOAD
      sourceDbPolicy=replDbPolicy
      (KW_INTO dbName=id_)?
      (KW_WITH replConf=replConfigs)?
    ;

replConfigs
    : LPAREN replConfigsList RPAREN
    ;

replConfigsList
    : keyValueProperty (COMMA keyValueProperty)*
    ;

replTableLevelPolicy
    : replTablesIncludeList=StringLiteral (DOT replTablesExcludeList=StringLiteral)?
    ;

replStatusStatement
    : KW_REPL KW_STATUS
        dbName=id_
        (KW_WITH replConf=replConfigs)?
    ;

ddlStatement
    : createDatabaseStatement
    | switchDatabaseStatement
    | dropDatabaseStatement
    | createTableStatement
    | dropTableStatement
    | truncateTableStatement
    | alterStatement
    | descStatement
    | showStatement
    | metastoreCheck
    | createViewStatement
    | createMaterializedViewStatement
    | createScheduledQueryStatement
    | alterScheduledQueryStatement
    | dropScheduledQueryStatement
    | dropViewStatement
    | dropMaterializedViewStatement
    | createFunctionStatement
    | createMacroStatement
    | dropFunctionStatement
    | reloadFunctionsStatement
    | dropMacroStatement
    | analyzeStatement
    | lockStatement
    | unlockStatement
    | lockDatabase
    | unlockDatabase
    | createRoleStatement
    | dropRoleStatement
    | grantPrivileges
    | revokePrivileges
    | showGrants
    | showRoleGrants
    | showRolePrincipals
    | showRoles
    | grantRole
    | revokeRole
    | setRole
    | showCurrentRole
    | abortTransactionStatement
    | abortCompactionStatement
    | killQueryStatement
    | resourcePlanDdlStatements
    | createDataConnectorStatement
    | dropDataConnectorStatement
    ;

ifExists
    : KW_IF KW_EXISTS
    ;

restrictOrCascade
    : KW_RESTRICT
    | KW_CASCADE
    ;

ifNotExists
    : KW_IF KW_NOT KW_EXISTS
    ;

force
    : KW_FORCE
    ;

rewriteEnabled
    : KW_ENABLE KW_REWRITE
    ;

rewriteDisabled
    : KW_DISABLE KW_REWRITE
    ;

storedAsDirs
    : KW_STORED KW_AS KW_DIRECTORIES
    ;

orReplace
    : KW_OR KW_REPLACE
    ;

createDatabaseStatement
    : KW_CREATE db_schema
        ifNotExists?
        name=id_
        databaseComment?
        dbLocation?
        dbManagedLocation?
        (KW_WITH KW_DBPROPERTIES dbprops=dbProperties)?
    | KW_CREATE KW_REMOTE db_schema
        ifNotExists?
        name=id_
        databaseComment?
        dbConnectorName
        (KW_WITH KW_DBPROPERTIES dbprops=dbProperties)?
    ;

dbLocation
    : KW_LOCATION locn=StringLiteral
    ;

dbManagedLocation
    : KW_MANAGEDLOCATION locn=StringLiteral
    ;

dbProperties
    : LPAREN dbPropertiesList RPAREN
    ;

dbPropertiesList
    : keyValueProperty (COMMA keyValueProperty)*
    ;

dbConnectorName
    : KW_USING dcName=id_
    ;

switchDatabaseStatement
    : KW_USE id_
    ;

dropDatabaseStatement
    : KW_DROP db_schema ifExists? id_ restrictOrCascade?
    ;

databaseComment
    : KW_COMMENT comment=StringLiteral
    ;

truncateTableStatement
    : KW_TRUNCATE KW_TABLE? tablePartitionPrefix (KW_COLUMNS LPAREN columnNameList RPAREN)? force?
    ;

dropTableStatement
    : KW_DROP KW_TABLE ifExists? tableName KW_PURGE? replicationClause?
    ;

inputFileFormat
    : KW_INPUTFORMAT inFmt=StringLiteral KW_SERDE serdeCls=StringLiteral
    ;

tabTypeExpr
    : id_ (DOT id_)?
        (id_ (DOT (KW_ELEM_TYPE | KW_KEY_TYPE | KW_VALUE_TYPE | id_))*)?
    ;

partTypeExpr
    : tabTypeExpr partitionSpec?
    ;

tabPartColTypeExpr
    : tableName partitionSpec? extColumnName?
    ;

descStatement
    : (KW_DESCRIBE | KW_DESC)
    (
        db_schema KW_EXTENDED? dbName=id_
        | KW_DATACONNECTOR KW_EXTENDED? dcName=id_
        | KW_FUNCTION KW_EXTENDED? name=descFuncNames
        | (descOptions=KW_FORMATTED | descOptions=KW_EXTENDED) parttype=tabPartColTypeExpr
        | parttype=tabPartColTypeExpr
    )
    ;

analyzeStatement
    : KW_ANALYZE KW_TABLE parttype=tableOrPartition
      ( KW_COMPUTE KW_STATISTICS (noscan=KW_NOSCAN | KW_FOR KW_COLUMNS statsColumnName=columnNameList?)?
      | KW_CACHE KW_METADATA
      )
    ;

from_in
    : KW_FROM
    | KW_IN
    ;

db_schema
    : KW_DATABASE
    | KW_SCHEMA
    ;

showStatement
    : KW_SHOW (KW_DATABASES | KW_SCHEMAS) (KW_LIKE showStmtIdentifier)?
    | KW_SHOW isExtended=KW_EXTENDED? KW_TABLES (from_in db_name=id_)? filter=showTablesFilterExpr?
    | KW_SHOW KW_VIEWS (from_in db_name=id_)? (KW_LIKE showStmtIdentifier | showStmtIdentifier)?
    | KW_SHOW KW_MATERIALIZED KW_VIEWS (from_in db_name=id_)? (KW_LIKE showStmtIdentifier|showStmtIdentifier)?
    | KW_SHOW KW_SORTED? KW_COLUMNS from_in tableName (from_in db_name=id_)? (KW_LIKE showStmtIdentifier|showStmtIdentifier)?
    | KW_SHOW KW_FUNCTIONS (KW_LIKE showFunctionIdentifier)?
    | KW_SHOW KW_PARTITIONS tabName=tableName partitionSpec? whereClause? orderByClause? limitClause?
    | KW_SHOW KW_CREATE (db_schema db_name=id_ | KW_TABLE tabName=tableName)
    | KW_SHOW KW_TABLE KW_EXTENDED (from_in db_name=id_)? KW_LIKE showStmtIdentifier partitionSpec?
    | KW_SHOW KW_TBLPROPERTIES tableName (LPAREN prptyName=StringLiteral RPAREN)?
    | KW_SHOW KW_LOCKS (db_schema dbName=id_ isExtended=KW_EXTENDED? | parttype=partTypeExpr? isExtended=KW_EXTENDED?)
    | KW_SHOW KW_COMPACTIONS
      ( compactionId
      | db_schema dbName=id_ compactionPool? compactionType? compactionStatus? orderByClause? limitClause?
      | parttype=partTypeExpr? compactionPool? compactionType? compactionStatus? orderByClause? limitClause?
      )
    | KW_SHOW KW_TRANSACTIONS
    | KW_SHOW KW_CONF StringLiteral
    | KW_SHOW KW_RESOURCE (KW_PLAN rp_name=id_ | KW_PLANS)
    | KW_SHOW KW_DATACONNECTORS
    ;

showTablesFilterExpr
    : KW_WHERE id_ EQUAL StringLiteral
    | KW_LIKE showStmtIdentifier
    | showStmtIdentifier
    ;

lockStatement
    : KW_LOCK KW_TABLE tableName partitionSpec? lockMode
    ;

lockDatabase
    : KW_LOCK db_schema dbName=id_ lockMode
    ;

lockMode
    : KW_SHARED
    | KW_EXCLUSIVE
    ;

unlockStatement
    : KW_UNLOCK KW_TABLE tableName partitionSpec?
    ;

unlockDatabase
    : KW_UNLOCK db_schema dbName=id_
    ;

createRoleStatement
    : KW_CREATE KW_ROLE roleName=id_
    ;

dropRoleStatement
    : KW_DROP KW_ROLE roleName=id_
    ;

grantPrivileges
    : KW_GRANT privList=privilegeList
      privilegeObject?
      KW_TO principalSpecification
      withGrantOption?
    ;

revokePrivileges
    : KW_REVOKE grantOptionFor? privilegeList privilegeObject? KW_FROM principalSpecification
    ;

grantRole
    : KW_GRANT KW_ROLE? id_ (COMMA id_)* KW_TO principalSpecification withAdminOption?
    ;

revokeRole
    : KW_REVOKE adminOptionFor? KW_ROLE? id_ (COMMA id_)* KW_FROM principalSpecification
    ;

showRoleGrants
    : KW_SHOW KW_ROLE KW_GRANT principalName
    ;

showRoles
    : KW_SHOW KW_ROLES
    ;

showCurrentRole
    : KW_SHOW KW_CURRENT KW_ROLES
    ;

setRole
    : KW_SET KW_ROLE
        ( all=KW_ALL
        | none=KW_NONE
        | id_
        )
    ;

showGrants
    : KW_SHOW KW_GRANT principalName? (KW_ON privilegeIncludeColObject)?
    ;

showRolePrincipals
    : KW_SHOW KW_PRINCIPALS roleName=id_
    ;

privilegeIncludeColObject
    : KW_ALL
    | privObjectCols
    ;

privilegeObject
    : KW_ON privObject
    ;

/**
database or table type. Type is optional, default type is table
*/
privObject
    : db_schema id_
    | KW_TABLE? tableName partitionSpec?
    | KW_URI path=StringLiteral
    | KW_SERVER id_
    ;

privObjectCols
    : db_schema id_
    | KW_TABLE? tableName (LPAREN cols=columnNameList RPAREN)? partitionSpec?
    | KW_URI path=StringLiteral
    | KW_SERVER id_
    ;

privilegeList
    : privlegeDef (COMMA privlegeDef)*
    ;

privlegeDef
    : privilegeType (LPAREN cols=columnNameList RPAREN)?
    ;

privilegeType
    : KW_ALL
    | KW_ALTER
    | KW_UPDATE
    | KW_CREATE
    | KW_DROP
    | KW_LOCK
    | KW_SELECT
    | KW_SHOW_DATABASE
    | KW_INSERT
    | KW_DELETE
    ;

principalSpecification
    : principalName (COMMA principalName)*
    ;

principalName
    : KW_USER principalIdentifier
    | KW_GROUP principalIdentifier
    | KW_ROLE id_
    ;

withGrantOption
    : KW_WITH KW_GRANT KW_OPTION
    ;

grantOptionFor
    : KW_GRANT KW_OPTION KW_FOR
    ;

adminOptionFor
    : KW_ADMIN KW_OPTION KW_FOR
    ;

withAdminOption
    : KW_WITH KW_ADMIN KW_OPTION
    ;

metastoreCheck
    : KW_MSCK repair=KW_REPAIR?
      (KW_TABLE tableName
          (opt=(KW_ADD | KW_DROP | KW_SYNC) parts=KW_PARTITIONS partitionSelectorSpec?)?
      )
    ;

resourceList
    :  resource (COMMA resource)*
    ;

resource
    : resType=resourceType resPath=StringLiteral
    ;

resourceType
    : KW_JAR
    | KW_FILE
    | KW_ARCHIVE
    ;

createFunctionStatement
    : KW_CREATE temp=KW_TEMPORARY? KW_FUNCTION functionIdentifier KW_AS StringLiteral
      (KW_USING rList=resourceList)?
    ;

dropFunctionStatement
    : KW_DROP temp=KW_TEMPORARY? KW_FUNCTION ifExists? functionIdentifier
    ;

reloadFunctionsStatement
    : KW_RELOAD (KW_FUNCTIONS | KW_FUNCTION)
    ;

createMacroStatement
    : KW_CREATE KW_TEMPORARY KW_MACRO Identifier
      LPAREN columnNameTypeList? RPAREN expression
    ;

dropMacroStatement
    : KW_DROP KW_TEMPORARY KW_MACRO ifExists? Identifier
    ;

createViewStatement
    : KW_CREATE orReplace? KW_VIEW ifNotExists? name=tableName
        (LPAREN columnNameCommentList RPAREN)? tableComment? viewPartition?
        tablePropertiesPrefixed?
        KW_AS
        selectStatementWithCTE
    ;

viewPartition
    : KW_PARTITIONED KW_ON (LPAREN columnNameList | KW_SPEC LPAREN spec=partitionTransformSpec) RPAREN
    ;

viewOrganization
    : viewClusterSpec
    | viewComplexSpec
    ;

viewClusterSpec
    : KW_CLUSTERED KW_ON LPAREN columnNameList RPAREN
    ;

viewComplexSpec
    : viewDistSpec viewSortSpec
    ;

viewDistSpec
    : KW_DISTRIBUTED KW_ON LPAREN colList=columnNameList RPAREN
    ;

viewSortSpec
    : KW_SORTED KW_ON LPAREN colList=columnNameList RPAREN
    ;

dropViewStatement
    : KW_DROP KW_VIEW ifExists? viewName
    ;

createMaterializedViewStatement
    : KW_CREATE KW_MATERIALIZED KW_VIEW ifNotExists? name=tableName
        rewriteDisabled? tableComment? viewPartition? viewOrganization?
        tableRowFormat? tableFileFormat? tableLocation?
        tablePropertiesPrefixed? KW_AS selectStatementWithCTE
    ;

dropMaterializedViewStatement
    : KW_DROP KW_MATERIALIZED KW_VIEW ifExists? viewName
    ;

createScheduledQueryStatement
    : KW_CREATE KW_SCHEDULED KW_QUERY name=id_
        scheduleSpec
        executedAsSpec?
        enableSpecification?
        definedAsSpec
    ;

dropScheduledQueryStatement
    : KW_DROP KW_SCHEDULED KW_QUERY name=id_
    ;

alterScheduledQueryStatement
    : KW_ALTER KW_SCHEDULED KW_QUERY name=id_ mod=alterScheduledQueryChange
    ;

alterScheduledQueryChange
    : scheduleSpec
    | executedAsSpec
    | enableSpecification
    | definedAsSpec
    | KW_EXECUTE
    ;

scheduleSpec
    : KW_CRON cronString=StringLiteral
    | KW_EVERY value=Number? qualifier=intervalQualifiers
        ((KW_AT | KW_OFFSET KW_BY) offsetTs=StringLiteral)?
    ;

executedAsSpec
    : KW_EXECUTED KW_AS executedAs=StringLiteral
    ;

definedAsSpec
    : KW_DEFINED? KW_AS statement
    ;

showFunctionIdentifier
    : functionIdentifier
    | StringLiteral
    ;

showStmtIdentifier
    : id_
    | StringLiteral
    ;

tableComment
    : KW_COMMENT comment=StringLiteral
    ;

createTablePartitionSpec
    : KW_PARTITIONED KW_BY
        ( LPAREN (opt1=createTablePartitionColumnTypeSpec | opt2=createTablePartitionColumnSpec)
        | KW_SPEC LPAREN spec=partitionTransformSpec
        ) RPAREN
    ;

createTablePartitionColumnTypeSpec
    : columnNameTypeConstraint (COMMA columnNameTypeConstraint)*
    ;

createTablePartitionColumnSpec
    : columnName (COMMA columnName)*
    ;

partitionTransformSpec
    : columnNameTransformConstraint (COMMA columnNameTransformConstraint)*
    ;

columnNameTransformConstraint
    : partitionTransformType
    ;

partitionTransformType
    : columnName
    | (KW_YEAR | KW_MONTH | KW_DAY | KW_HOUR) LPAREN columnName RPAREN
    | (KW_TRUNCATE | KW_BUCKET) LPAREN value=Number COMMA columnName RPAREN
    ;

tableBuckets
    : KW_CLUSTERED KW_BY LPAREN bucketCols=columnNameList RPAREN
        (KW_SORTED KW_BY LPAREN sortCols=columnNameOrderList RPAREN)? KW_INTO num=Number KW_BUCKETS
    ;

tableImplBuckets
    : KW_CLUSTERED KW_INTO num=Number KW_BUCKETS
    ;

tableSkewed
    : KW_SKEWED KW_BY LPAREN skewedCols=columnNameList RPAREN KW_ON LPAREN skewedValues=skewedValueElement RPAREN storedAsDirs?
    ;

rowFormat
    : rowFormatSerde
    | rowFormatDelimited
    ;

recordReader
    : KW_RECORDREADER StringLiteral
    ;

recordWriter
    : KW_RECORDWRITER StringLiteral
    ;

rowFormatSerde
    : KW_ROW KW_FORMAT KW_SERDE name=StringLiteral (KW_WITH KW_SERDEPROPERTIES serdeprops=tableProperties)?
    ;

rowFormatDelimited
    : KW_ROW KW_FORMAT KW_DELIMITED tableRowFormatFieldIdentifier? tableRowFormatCollItemsIdentifier?
        tableRowFormatMapKeysIdentifier? tableRowFormatLinesIdentifier? tableRowNullFormat?
    ;

tableRowFormat
    : rowFormatDelimited
    | rowFormatSerde
    ;

tablePropertiesPrefixed
    : KW_TBLPROPERTIES tableProperties
    ;

tableProperties
    : LPAREN tablePropertiesList RPAREN
    ;

tablePropertiesList
    : keyValueProperty (COMMA keyValueProperty)*
    | keyProperty (COMMA keyProperty)*
    ;

keyValueProperty
    : key=StringLiteral EQUAL value=StringLiteral
    ;

keyProperty
    : key=StringLiteral
    ;

tableRowFormatFieldIdentifier
    : KW_FIELDS KW_TERMINATED KW_BY fldIdnt=StringLiteral (KW_ESCAPED KW_BY fldEscape=StringLiteral)?
    ;

tableRowFormatCollItemsIdentifier
    : KW_COLLECTION KW_ITEMS KW_TERMINATED KW_BY collIdnt=StringLiteral
    ;

tableRowFormatMapKeysIdentifier
    : KW_MAP KW_KEYS KW_TERMINATED KW_BY mapKeysIdnt=StringLiteral
    ;

tableRowFormatLinesIdentifier
    : KW_LINES KW_TERMINATED KW_BY linesIdnt=StringLiteral
    ;

tableRowNullFormat
    : KW_NULL KW_DEFINED KW_AS nullIdnt=StringLiteral
    ;

tableFileFormat
    : KW_STORED KW_AS KW_INPUTFORMAT
        inFmt=StringLiteral KW_OUTPUTFORMAT
        outFmt=StringLiteral
        (KW_INPUTDRIVER inDriver=StringLiteral KW_OUTPUTDRIVER outDriver=StringLiteral)?
    | KW_STORED KW_BY storageHandler=StringLiteral
        (KW_WITH KW_SERDEPROPERTIES serdeprops=tableProperties)?
        (KW_STORED KW_AS fileformat=id_)?
    | KW_STORED KW_BY genericSpec=id_
        (KW_WITH KW_SERDEPROPERTIES serdeprops=tableProperties)?
        (KW_STORED KW_AS fileformat=id_)?
    | KW_STORED KW_AS genericSpec=id_
    ;

tableLocation
    : KW_LOCATION locn=StringLiteral
    ;

columnNameTypeList
    : columnNameType (COMMA columnNameType)*
    ;

columnNameTypeOrConstraintList
    : columnNameTypeOrConstraint (COMMA columnNameTypeOrConstraint)*
    ;

columnNameColonTypeList
    : columnNameColonType (COMMA columnNameColonType)*
    ;

columnNameList
    : columnName (COMMA columnName)*
    ;

columnName
    : id_
    ;

extColumnName
    : id_ (DOT (KW_ELEM_TYPE | KW_KEY_TYPE | KW_VALUE_TYPE | id_))*
    ;

columnNameOrderList
    : columnNameOrder (COMMA columnNameOrder)*
    ;

columnParenthesesList
    : LPAREN columnNameList RPAREN
    ;

enableValidateSpecification
    : enableSpecification validateSpecification?
    | enforcedSpecification
    ;

enableSpecification
    : KW_ENABLE
    | KW_DISABLE
    ;

validateSpecification
    : KW_VALIDATE
    | KW_NOVALIDATE
    ;

enforcedSpecification
    : KW_ENFORCED
    | KW_NOT KW_ENFORCED
    ;

relySpecification
    :  KW_RELY
    |  KW_NORELY
    ;

createConstraint
    : (KW_CONSTRAINT constraintName=id_)? tableLevelConstraint constraintOptsCreate?
    ;

alterConstraintWithName
    : KW_CONSTRAINT constraintName=id_ tableLevelConstraint constraintOptsAlter?
    ;

tableLevelConstraint
    : pkUkConstraint
    | checkConstraint
    ;

pkUkConstraint
    : tableConstraintType pkCols=columnParenthesesList
    ;

checkConstraint
    : KW_CHECK LPAREN expression RPAREN
    ;

createForeignKey
    : (KW_CONSTRAINT constraintName=id_)? KW_FOREIGN KW_KEY fkCols=columnParenthesesList
        KW_REFERENCES tabName=tableName parCols=columnParenthesesList constraintOptsCreate?
    ;

alterForeignKeyWithName
    : KW_CONSTRAINT constraintName=id_ KW_FOREIGN KW_KEY fkCols=columnParenthesesList
        KW_REFERENCES tabName=tableName parCols=columnParenthesesList constraintOptsAlter?
    ;

skewedValueElement
    : skewedColumnValues
    | skewedColumnValuePairList
    ;

skewedColumnValuePairList
    : skewedColumnValuePair (COMMA skewedColumnValuePair)*
    ;

skewedColumnValuePair
    : LPAREN colValues=skewedColumnValues RPAREN
    ;

skewedColumnValues
    : skewedColumnValue (COMMA skewedColumnValue)*
    ;

skewedColumnValue
    : constant
    ;

skewedValueLocationElement
    : skewedColumnValue
    | skewedColumnValuePair
    ;

orderSpecification
    : KW_ASC
    | KW_DESC
    ;

nullOrdering
    : KW_NULLS (KW_FIRST | KW_LAST)
    ;

columnNameOrder
    : id_ orderSpec=orderSpecification? nullSpec=nullOrdering?
    ;

columnNameCommentList
    : columnNameComment (COMMA columnNameComment)*
    ;

columnNameComment
    : colName=id_ (KW_COMMENT comment=StringLiteral)?
    ;

orderSpecificationRewrite
    : KW_ASC
    | KW_DESC
    ;

columnRefOrder
    : expression orderSpec=orderSpecificationRewrite? nullSpec=nullOrdering?
    ;

columnNameType
    : colName=id_ colType (KW_COMMENT comment=StringLiteral)?
    ;

columnNameTypeOrConstraint
    : tableConstraint
    | columnNameTypeConstraint
    ;

tableConstraint
    : createForeignKey
    | createConstraint
    ;

columnNameTypeConstraint
    : colName=id_ colType columnConstraint? (KW_COMMENT comment=StringLiteral)?
    ;

columnConstraint
    : foreignKeyConstraint
    | colConstraint
    ;

foreignKeyConstraint
    : (KW_CONSTRAINT constraintName=id_)? KW_REFERENCES tabName=tableName LPAREN colName=columnName RPAREN constraintOptsCreate?
    ;

colConstraint
    : (KW_CONSTRAINT constraintName=id_)? columnConstraintType constraintOptsCreate?
    ;

alterColumnConstraint
    : alterForeignKeyConstraint
    | alterColConstraint
    ;

alterForeignKeyConstraint
    : (KW_CONSTRAINT constraintName=id_)? KW_REFERENCES tabName=tableName LPAREN colName=columnName RPAREN constraintOptsAlter?
    ;

alterColConstraint
    : (KW_CONSTRAINT constraintName=id_)? columnConstraintType constraintOptsAlter?
    ;

columnConstraintType
    : KW_NOT KW_NULL
    | KW_DEFAULT defaultVal
    | checkConstraint
    | tableConstraintType
    ;

defaultVal
    : constant
    | function_
    | castExpression
    ;

tableConstraintType
    : KW_PRIMARY KW_KEY
    | KW_UNIQUE
    ;

constraintOptsCreate
    : enableValidateSpecification relySpecification?
    ;

constraintOptsAlter
    : enableValidateSpecification relySpecification?
    ;

columnNameColonType
    : colName=id_ COLON colType (KW_COMMENT comment=StringLiteral)?
    ;

colType
    : type
    ;

colTypeList
    : colType (COMMA colType)*
    ;

type
    : primitiveType
    | listType
    | structType
    | mapType
    | unionType;

primitiveType
    : KW_TINYINT
    | KW_SMALLINT
    | KW_INT
    | KW_BIGINT
    | KW_BOOLEAN
    | KW_FLOAT
    | KW_REAL
    | KW_DOUBLE KW_PRECISION?
    | KW_DATE
    | KW_DATETIME
    | KW_TIMESTAMP
    | KW_TIMESTAMPLOCALTZ
    //| KW_TIMESTAMPTZ
    | KW_TIMESTAMP KW_WITH KW_LOCAL KW_TIME KW_ZONE
    //| KW_TIMESTAMP KW_WITH KW_TIME KW_ZONE
    // Uncomment to allow intervals as table column types
    //| KW_INTERVAL KW_YEAR KW_TO KW_MONTH
    //| KW_INTERVAL KW_DAY KW_TO KW_SECOND
    | KW_STRING
    | KW_BINARY
    | KW_DECIMAL (LPAREN prec=Number (COMMA scale=Number)? RPAREN)?
    | (KW_VARCHAR | KW_CHAR) LPAREN length=Number RPAREN
    ;

listType
    : KW_ARRAY LESSTHAN type GREATERTHAN
    ;

structType
    : KW_STRUCT LESSTHAN columnNameColonTypeList GREATERTHAN
    ;

mapType
    : KW_MAP LESSTHAN left=primitiveType COMMA right=type GREATERTHAN
    ;

unionType
    : KW_UNIONTYPE LESSTHAN colTypeList GREATERTHAN
    ;

setOperator
    : (KW_UNION | KW_INTERSECT | KW_EXCEPT | KW_MINUS) (KW_ALL | KW_DISTINCT)?
    ;

queryStatementExpression
    /* Would be nice to do this as a gated semantic perdicate
       But the predicate gets pushed as a lookahead decision.
       Calling rule doesnot know about topLevel
    */
    : w=withClause? queryStatementExpressionBody
    ;

queryStatementExpressionBody
    : fromStatement
    | regularBody
    ;

withClause
    : KW_WITH cteStatement (COMMA cteStatement)*
    ;

cteStatement
    : id_ (LPAREN colAliases=columnNameList RPAREN)? KW_AS LPAREN queryStatementExpression RPAREN
    ;

fromStatement
    : singleFromStatement (u=setOperator r=singleFromStatement)*
    ;

singleFromStatement
    : fromClause b+=body+
    ;

/*
The valuesClause rule below ensures that the parse tree for
"insert into table FOO values (1,2),(3,4)" looks the same as
"insert into table FOO select a,b from (values(1,2),(3,4)) as BAR(a,b)" which itself is made to look
very similar to the tree for "insert into table FOO select a,b from BAR".
*/
regularBody
    : i=insertClause s=selectStatement
    | selectStatement
    ;

atomSelectStatement
    : s=selectClause
      f=fromClause?
      w=whereClause?
      g=groupByClause?
      h=havingClause?
      win=window_clause?
      q=qualifyClause?
    | LPAREN selectStatement RPAREN
    | valuesSource
    ;

selectStatement
    : a=atomSelectStatement
      set=setOpSelectStatement?
      o=orderByClause?
      c=clusterByClause?
      d=distributeByClause?
      sort=sortByClause?
      l=limitClause?
    ;

setOpSelectStatement
    : (u=setOperator b=atomSelectStatement)+
    ;

selectStatementWithCTE
    : w=withClause? selectStatement
    ;

body
    : insertClause
      selectClause
      lateralView?
      whereClause?
      groupByClause?
      havingClause?
      window_clause?
      qualifyClause?
      orderByClause?
      clusterByClause?
      distributeByClause?
      sortByClause?
      limitClause?
    | selectClause
      lateralView?
      whereClause?
      groupByClause?
      havingClause?
      window_clause?
      qualifyClause?
      orderByClause?
      clusterByClause?
      distributeByClause?
      sortByClause?
      limitClause?
    ;

insertClause
    : KW_INSERT ( KW_OVERWRITE destination ifNotExists?
                | KW_INTO KW_TABLE? tableOrPartition (LPAREN targetCols=columnNameList RPAREN)?
                )
    ;

destination
    : local=KW_LOCAL? KW_DIRECTORY StringLiteral tableRowFormat? tableFileFormat?
    | KW_TABLE tableOrPartition
    ;

limitClause
    : KW_LIMIT ((offset=Number COMMA)? num=Number | num=Number KW_OFFSET offset=Number)
    ;

/**
DELETE FROM <tableName> WHERE ...;
*/
deleteStatement
    : KW_DELETE KW_FROM tableName whereClause?
    ;

/*SET <columName> = (3 + col2)*/
columnAssignmentClause
    : tableOrColumn EQUAL precedencePlusExpressionOrDefault
    ;

precedencePlusExpressionOrDefault
    : defaultValue
    | precedencePlusExpression
    ;

/*SET col1 = 5, col2 = (4 + col4), ...*/
setColumnsClause
    : KW_SET columnAssignmentClause (COMMA columnAssignmentClause)*
    ;

/*
  UPDATE <table>
  SET col1 = val1, col2 = val2... WHERE ...
*/
updateStatement
    : KW_UPDATE tableName setColumnsClause whereClause?
    ;

/*
BEGIN user defined transaction boundaries; follows SQL 2003 standard exactly except for addition of
"setAutoCommitStatement" which is not in the standard doc but is supported by most SQL engines.
*/
sqlTransactionStatement
    : startTransactionStatement
    | commitStatement
    | rollbackStatement
    | setAutoCommitStatement
    ;

startTransactionStatement
    : KW_START KW_TRANSACTION (transactionMode (COMMA transactionMode)* )?
    ;

transactionMode
    : isolationLevel
    | transactionAccessMode
    ;

transactionAccessMode
    : KW_READ (KW_ONLY | KW_WRITE)
    ;

isolationLevel
    : KW_ISOLATION KW_LEVEL levelOfIsolation
    ;

/*READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE may be supported later*/
levelOfIsolation
    : KW_SNAPSHOT
    ;

commitStatement
    : KW_COMMIT KW_WORK?
    ;

rollbackStatement
    : KW_ROLLBACK KW_WORK?
    ;

setAutoCommitStatement
    : KW_SET KW_AUTOCOMMIT booleanValueTok
    ;
/*
END user defined transaction boundaries
*/

abortTransactionStatement
    : KW_ABORT KW_TRANSACTIONS Number+
    ;

abortCompactionStatement
    : KW_ABORT KW_COMPACTIONS Number+
    ;

/*
BEGIN SQL Merge statement
*/
mergeStatement
    : KW_MERGE QUERY_HINT? KW_INTO tableName (KW_AS? id_)? KW_USING joinSourcePart KW_ON expression whenClauses
    ;
/*
Allow 0,1 or 2 WHEN MATCHED clauses and 0 or 1 WHEN NOT MATCHED
Each WHEN clause may have AND <boolean predicate>.
If 2 WHEN MATCHED clauses are present, 1 must be UPDATE the other DELETE and the 1st one
must have AND <boolean predicate>
*/
whenClauses
    : (whenMatchedAndClause | whenMatchedThenClause)* whenNotMatchedClause?
    ;

whenNotMatchedClause
    : KW_WHEN KW_NOT KW_MATCHED (KW_AND expression)? KW_THEN KW_INSERT targetCols=columnParenthesesList? KW_VALUES valueRowConstructor
    ;

whenMatchedAndClause
    : KW_WHEN KW_MATCHED KW_AND expression KW_THEN updateOrDelete
    ;

whenMatchedThenClause
    : KW_WHEN KW_MATCHED KW_THEN updateOrDelete
    ;

updateOrDelete
    : KW_UPDATE setColumnsClause
    | KW_DELETE
    ;
/*
END SQL Merge statement
*/

killQueryStatement
    : KW_KILL KW_QUERY StringLiteral+
    ;

/*
BEGIN SHOW COMPACTIONS statement
*/
compactionId
    : KW_COMPACT_ID EQUAL compactId=Number
    ;

compactionPool
    : KW_POOL poolName=StringLiteral
    ;

compactionType
    : KW_TYPE compactType=StringLiteral
    ;

compactionStatus
    : KW_STATUS status=StringLiteral
    ;

/*
END SHOW COMPACTIONS statement
*/

alterStatement
    : KW_ALTER ( KW_TABLE tableName alterTableStatementSuffix
               | KW_VIEW tableName KW_AS? alterViewStatementSuffix
               | KW_MATERIALIZED KW_VIEW tableNameTree=tableName alterMaterializedViewStatementSuffix
               | db_schema alterDatabaseStatementSuffix
               | KW_DATACONNECTOR alterDataConnectorStatementSuffix
               )
    ;

alterTableStatementSuffix
    : alterStatementSuffixRename
    | alterStatementSuffixDropPartitions
    | alterStatementSuffixAddPartitions
    | alterStatementSuffixTouch
    | alterStatementSuffixArchive
    | alterStatementSuffixUnArchive
    | alterStatementSuffixProperties
    | alterStatementSuffixSkewedby
    | alterStatementSuffixExchangePartition
    | alterStatementPartitionKeyType
    | alterStatementSuffixDropConstraint
    | alterStatementSuffixAddConstraint
    | alterTblPartitionStatementSuffix
    | partitionSpec alterTblPartitionStatementSuffix
    | alterStatementSuffixSetOwner
    | alterStatementSuffixSetPartSpec
    | alterStatementSuffixExecute
    ;

alterTblPartitionStatementSuffix
    : alterStatementSuffixFileFormat
    | alterStatementSuffixLocation
    | alterStatementSuffixMergeFiles
    | alterStatementSuffixSerdeProperties
    | alterStatementSuffixRenamePart
    | alterStatementSuffixBucketNum
    | alterTblPartitionStatementSuffixSkewedLocation
    | alterStatementSuffixClusterbySortby
    | alterStatementSuffixCompact
    | alterStatementSuffixUpdateStatsCol
    | alterStatementSuffixUpdateStats
    | alterStatementSuffixRenameCol
    | alterStatementSuffixAddCol
    | alterStatementSuffixUpdateColumns
    ;

alterStatementPartitionKeyType
    : KW_PARTITION KW_COLUMN LPAREN columnNameType RPAREN
    ;

alterViewStatementSuffix
    : alterViewSuffixProperties
    | alterStatementSuffixRename
    | alterStatementSuffixAddPartitions
    | alterStatementSuffixDropPartitions
    | selectStatementWithCTE
    ;

alterMaterializedViewStatementSuffix
    : alterMaterializedViewSuffixRewrite
    | alterMaterializedViewSuffixRebuild
    ;

alterMaterializedViewSuffixRewrite
    : mvRewriteFlag=rewriteEnabled
    | mvRewriteFlag2=rewriteDisabled
    ;

alterMaterializedViewSuffixRebuild
    : KW_REBUILD
    ;

alterDatabaseStatementSuffix
    : alterDatabaseSuffixProperties
    | alterDatabaseSuffixSetOwner
    | alterDatabaseSuffixSetLocation
    ;

alterDatabaseSuffixProperties
    : name=id_ KW_SET KW_DBPROPERTIES dbProperties
    ;

alterDatabaseSuffixSetOwner
    : dbName=id_ KW_SET KW_OWNER principalName
    ;

alterDatabaseSuffixSetLocation
    : dbName=id_ KW_SET (KW_LOCATION | KW_MANAGEDLOCATION) newLocation=StringLiteral
    ;

alterDatabaseSuffixSetManagedLocation
    : dbName=id_ KW_SET KW_MANAGEDLOCATION newLocation=StringLiteral
    ;

alterStatementSuffixRename
    : KW_RENAME KW_TO tableName
    ;

alterStatementSuffixAddCol
    : (add=KW_ADD | replace=KW_REPLACE) KW_COLUMNS LPAREN columnNameTypeList RPAREN restrictOrCascade?
    ;

alterStatementSuffixAddConstraint
    :  KW_ADD (fk=alterForeignKeyWithName | alterConstraintWithName)
    ;

alterStatementSuffixUpdateColumns
    : KW_UPDATE KW_COLUMNS restrictOrCascade?
    ;

alterStatementSuffixDropConstraint
    : KW_DROP KW_CONSTRAINT cName=id_
    ;

alterStatementSuffixRenameCol
    : KW_CHANGE KW_COLUMN? oldName=id_ newName=id_ colType alterColumnConstraint?
        (KW_COMMENT comment=StringLiteral)? alterStatementChangeColPosition? restrictOrCascade?
    ;

alterStatementSuffixUpdateStatsCol
    : KW_UPDATE KW_STATISTICS KW_FOR KW_COLUMN? colName=id_ KW_SET tableProperties (KW_COMMENT comment=StringLiteral)?
    ;

alterStatementSuffixUpdateStats
    : KW_UPDATE KW_STATISTICS KW_SET tableProperties
    ;

alterStatementChangeColPosition
    : first=KW_FIRST
    | KW_AFTER afterCol=id_
    ;

alterStatementSuffixAddPartitions
    : KW_ADD ifNotExists? alterStatementSuffixAddPartitionsElement+
    ;

alterStatementSuffixAddPartitionsElement
    : partitionSpec partitionLocation?
    ;

alterStatementSuffixTouch
    : KW_TOUCH partitionSpec*
    ;

alterStatementSuffixArchive
    : KW_ARCHIVE partitionSpec*
    ;

alterStatementSuffixUnArchive
    : KW_UNARCHIVE partitionSpec*
    ;

partitionLocation
    : KW_LOCATION locn=StringLiteral
    ;

alterStatementSuffixDropPartitions
    : KW_DROP ifExists? KW_PARTITION partitionSelectorSpec (COMMA KW_PARTITION partitionSelectorSpec)* KW_PURGE? replicationClause?
    ;

alterStatementSuffixProperties
    : KW_SET KW_TBLPROPERTIES tableProperties
    | KW_UNSET KW_TBLPROPERTIES ifExists? tableProperties
    ;

alterViewSuffixProperties
    : KW_SET KW_TBLPROPERTIES tableProperties
    | KW_UNSET KW_TBLPROPERTIES ifExists? tableProperties
    ;

alterStatementSuffixSerdeProperties
    : KW_SET ( KW_SERDE serdeName=StringLiteral (KW_WITH KW_SERDEPROPERTIES tableProperties)?
             | KW_SERDEPROPERTIES tableProperties
             )
    | KW_UNSET KW_SERDEPROPERTIES tableProperties
    ;

tablePartitionPrefix
    : tableName partitionSpec?
    ;

alterStatementSuffixFileFormat
    : KW_SET KW_FILEFORMAT fileFormat
    ;

alterStatementSuffixClusterbySortby
    : KW_NOT (KW_CLUSTERED | KW_SORTED)
    | tableBuckets
    ;

alterTblPartitionStatementSuffixSkewedLocation
    : KW_SET KW_SKEWED KW_LOCATION skewedLocations
    ;

skewedLocations
    : LPAREN skewedLocationsList RPAREN
    ;

skewedLocationsList
    : skewedLocationMap (COMMA skewedLocationMap)*
    ;

skewedLocationMap
    : key=skewedValueLocationElement EQUAL value=StringLiteral
    ;

alterStatementSuffixLocation
    : KW_SET KW_LOCATION newLoc=StringLiteral
    ;

alterStatementSuffixSkewedby
    : tableSkewed
    | KW_NOT (KW_SKEWED | storedAsDirs)
    ;

alterStatementSuffixExchangePartition
    : KW_EXCHANGE partitionSpec KW_WITH KW_TABLE exchangename=tableName
    ;

alterStatementSuffixRenamePart
    : KW_RENAME KW_TO partitionSpec
    ;

alterStatementSuffixStatsPart
    : KW_UPDATE KW_STATISTICS KW_FOR KW_COLUMN? colName=id_ KW_SET tableProperties (KW_COMMENT comment=StringLiteral)?
    ;

alterStatementSuffixMergeFiles
    : KW_CONCATENATE
    ;

alterStatementSuffixBucketNum
    : KW_INTO num=Number KW_BUCKETS
    ;

blocking
    : KW_AND KW_WAIT
    ;

compactPool
    : KW_POOL poolName=StringLiteral
    ;

alterStatementSuffixCompact
    : KW_COMPACT compactType=StringLiteral tableImplBuckets? blocking? compactPool? (KW_WITH KW_OVERWRITE KW_TBLPROPERTIES tableProperties)?
    ;

alterStatementSuffixSetOwner
    : KW_SET KW_OWNER principalName
    ;

alterStatementSuffixSetPartSpec
    : KW_SET KW_PARTITION KW_SPEC LPAREN spec=partitionTransformSpec RPAREN
    ;

alterStatementSuffixExecute
    : KW_EXECUTE ( KW_ROLLBACK LPAREN rollbackParam=(StringLiteral | Number)
                 | KW_EXPIRE_SNAPSHOTS LPAREN expireParam=StringLiteral
                 | KW_SET_CURRENT_SNAPSHOT LPAREN snapshotParam=Number
                 ) RPAREN
    ;

fileFormat
    : KW_INPUTFORMAT inFmt=StringLiteral KW_OUTPUTFORMAT outFmt=StringLiteral KW_SERDE serdeCls=StringLiteral
        (KW_INPUTDRIVER inDriver=StringLiteral KW_OUTPUTDRIVER outDriver=StringLiteral)?
    | genericSpec=id_
    ;

alterDataConnectorStatementSuffix
    : alterDataConnectorSuffixProperties
    | alterDataConnectorSuffixSetOwner
    | alterDataConnectorSuffixSetUrl
    ;

alterDataConnectorSuffixProperties
    : name=id_ KW_SET KW_DCPROPERTIES dcProperties
    ;

alterDataConnectorSuffixSetOwner
    : dcName=id_ KW_SET KW_OWNER principalName
    ;

alterDataConnectorSuffixSetUrl
    : dcName=id_ KW_SET KW_URL newUri=StringLiteral
    ;

likeTableOrFile
    : KW_LIKE KW_FILE
    | KW_LIKE KW_FILE format=id_ uri=StringLiteral
    | KW_LIKE likeName=tableName
    ;

/**
Rules for parsing createtable
*/
createTableStatement
    : KW_CREATE temp=KW_TEMPORARY? trans=KW_TRANSACTIONAL? ext=KW_EXTERNAL? KW_TABLE ifNotExists? name=tableName
      (  likeTableOrFile
         createTablePartitionSpec?
         tableRowFormat?
         tableFileFormat?
         tableLocation?
         tablePropertiesPrefixed?
       | (LPAREN columnNameTypeOrConstraintList RPAREN)?
         tableComment?
         createTablePartitionSpec?
         tableBuckets?
         tableSkewed?
         tableRowFormat?
         tableFileFormat?
         tableLocation?
         tablePropertiesPrefixed?
         (KW_AS selectStatementWithCTE)?
      )
    | KW_CREATE mgd=KW_MANAGED KW_TABLE ifNotExists? name=tableName
       ( likeTableOrFile
         tableRowFormat?
         tableFileFormat?
         tableLocation?
         tablePropertiesPrefixed?
       | (LPAREN columnNameTypeOrConstraintList RPAREN)?
         tableComment?
         createTablePartitionSpec?
         tableBuckets?
         tableSkewed?
         tableRowFormat?
         tableFileFormat?
         tableLocation?
         tablePropertiesPrefixed?
         (KW_AS selectStatementWithCTE)?
       )
    ;

createDataConnectorStatement
    : KW_CREATE KW_DATACONNECTOR ifNotExists? name=id_ dataConnectorType dataConnectorUrl dataConnectorComment?
        (KW_WITH KW_DCPROPERTIES dcprops=dcProperties)?
    ;

dataConnectorComment
    : KW_COMMENT comment=StringLiteral
    ;

dataConnectorUrl
    : KW_URL url=StringLiteral
    ;

dataConnectorType
    : KW_TYPE dcType=StringLiteral
    ;

dcProperties
    : LPAREN dbPropertiesList RPAREN
    ;

dropDataConnectorStatement
    : KW_DROP KW_DATACONNECTOR ifExists? id_
    ;

tableAllColumns
    : STAR
    | tableName DOT STAR
    ;

// (table|column)
tableOrColumn
    : id_
    ;

defaultValue
    : KW_DEFAULT
    ;

expressionList
    : expression (COMMA expression)*
    ;

aliasList
    : id_ (COMMA id_)*
    ;

/**
Rules for parsing fromClause
  from [col1, col2, col3] table1, [col4, col5] table2
*/
fromClause
    : KW_FROM fromSource
    ;

fromSource
    : uniqueJoinToken uniqueJoinSource (COMMA uniqueJoinSource)+
    | joinSource
    ;

atomjoinSource
    : tableSource lateralView*
    | virtualTableSource lateralView*
    | subQuerySource lateralView*
    | partitionedTableFunction lateralView*
    | LPAREN joinSource RPAREN
    ;

joinSource
    : atomjoinSource (joinToken joinSourcePart (KW_ON expression | KW_USING columnParenthesesList)?)*
    ;

joinSourcePart
    : (tableSource | virtualTableSource | subQuerySource | partitionedTableFunction) lateralView*
    ;

uniqueJoinSource
    : KW_PRESERVE? uniqueJoinTableSource uniqueJoinExpr
    ;

uniqueJoinExpr
    : LPAREN expressionList RPAREN
    ;

uniqueJoinToken
    : KW_UNIQUEJOIN
    ;

joinToken
    : COMMA
    | ( KW_INNER
      | KW_CROSS
      | (KW_RIGHT | KW_FULL) KW_OUTER?
      | KW_LEFT (KW_SEMI | KW_ANTI | KW_OUTER)?
      )? KW_JOIN
    ;

lateralView
    : KW_LATERAL KW_VIEW KW_OUTER function_ tableAlias (KW_AS id_ (COMMA id_)*)?
    | COMMA? KW_LATERAL ( KW_VIEW function_ tableAlias (KW_AS id_ (COMMA id_)*)?
                        | KW_TABLE LPAREN valuesClause RPAREN KW_AS? tableAlias (LPAREN id_ (COMMA id_)* RPAREN)?
                        )
    ;

tableAlias
    : id_
    ;

tableBucketSample
    : KW_TABLESAMPLE LPAREN KW_BUCKET numerator=Number KW_OUT KW_OF denominator=Number
        (KW_ON expr+=expression (COMMA expr+=expression)*)? RPAREN
    ;

splitSample
    : KW_TABLESAMPLE LPAREN (Number (KW_PERCENT | KW_ROWS) | ByteLengthLiteral) RPAREN
    ;

tableSample
    : tableBucketSample
    | splitSample
    ;

tableSource
    : tabname=tableName props=tableProperties? ts=tableSample? asOf=asOfClause? (KW_AS? alias=id_)?
    ;

asOfClause
    : KW_FOR ( KW_SYSTEM_TIME KW_AS KW_OF asOfTime=expression
             | KW_FOR KW_SYSTEM_VERSION KW_AS KW_OF asOfVersion=Number
             )
    ;

uniqueJoinTableSource
    : tabname=tableName ts=tableSample? (KW_AS? alias=id_)?
    ;

tableName
    : db=id_ DOT tab=id_ (DOT meta=id_)?
    | tab=id_
    ;

viewName
    : (db=id_ DOT)? view=id_
    ;

subQuerySource
    : LPAREN queryStatementExpression RPAREN KW_AS? id_
    ;

/**
Rules for parsing PTF clauses
*/
partitioningSpec
    : partitionByClause orderByClause?
    | orderByClause
    | distributeByClause sortByClause?
    | sortByClause
    | clusterByClause
    ;

partitionTableFunctionSource
    : subQuerySource
    | tableSource
    | partitionedTableFunction
    ;

partitionedTableFunction
    : n=id_ LPAREN KW_ON
        ptfsrc=partitionTableFunctionSource spec=partitioningSpec?
        (Identifier LPAREN expression RPAREN (COMMA Identifier LPAREN expression RPAREN)*)?
        RPAREN alias=id_?
    ;

/**
Rules for parsing whereClause
 where a=b and ...
*/
whereClause
    : KW_WHERE searchCondition
    ;

searchCondition
    : expression
    ;

/**
Row Constructor
*/
valuesSource
    : valuesClause
    ;

/**
in support of SELECT * FROM (VALUES(1,2,3),(4,5,6),...) as FOO(a,b,c) and
 INSERT INTO <table> (col1,col2,...) VALUES(...),(...),...
 INSERT INTO <table> (col1,col2,...) SELECT * FROM (VALUES(1,2,3),(4,5,6),...) as Foo(a,b,c)

VALUES(1),(2) means 2 rows, 1 column each.
VALUES(1,2),(3,4) means 2 rows, 2 columns each.
VALUES(1,2,3) means 1 row, 3 columns
*/
valuesClause
    : KW_VALUES valuesTableConstructor
    ;

valuesTableConstructor
    : valueRowConstructor (COMMA valueRowConstructor)*
    | firstValueRowConstructor (COMMA valueRowConstructor)*
    ;

valueRowConstructor
    : expressionsInParenthesis
    ;

firstValueRowConstructor
    : LPAREN firstExpressionsWithAlias RPAREN
    ;

/*
This represents a clause like this:
TABLE(VALUES(1,2),(2,3)) as VirtTable(col1,col2)
*/
virtualTableSource
    : KW_TABLE LPAREN valuesClause RPAREN KW_AS? tableAlias (LPAREN id_ (COMMA id_)*)? RPAREN
    ;

/*
Rules for parsing selectClause
 select a,b,c ...
*/
selectClause
    : KW_SELECT QUERY_HINT? (all_distinct? selectList | KW_TRANSFORM selectTrfmClause)
    | trfmClause
    ;

all_distinct
    : KW_ALL
    | KW_DISTINCT
    ;

selectList
    : selectItem (COMMA selectItem)*
    ;

selectTrfmClause
    : LPAREN selectExpressionList RPAREN
        rowFormat recordWriter
        KW_USING StringLiteral
        (KW_AS (LPAREN (aliasList | columnNameTypeList) RPAREN | aliasList | columnNameTypeList))?
        rowFormat recordReader
    ;

selectItem
    : tableAllColumns
    | (expression (KW_AS? id_ | KW_AS LPAREN id_ (COMMA id_)* RPAREN)?)
    ;

trfmClause
    : (KW_MAP | KW_REDUCE) selectExpressionList
        rowFormat recordWriter
        KW_USING StringLiteral
        (KW_AS (LPAREN (aliasList | columnNameTypeList) RPAREN | aliasList | columnNameTypeList))?
        rowFormat recordReader
    ;

selectExpression
    : tableAllColumns
    | expression
    ;

selectExpressionList
    : selectExpression (COMMA selectExpression)*
    ;

/**
Rules for windowing clauses
*/
window_clause
    : KW_WINDOW window_defn (COMMA window_defn)*
    ;

window_defn
    : id_ KW_AS window_specification
    ;

window_specification
    : id_
    | LPAREN id_? partitioningSpec? window_frame? RPAREN
    ;

window_frame
    : window_range_expression
    | window_value_expression
    ;

window_range_expression
    : KW_ROWS ( window_frame_start_boundary
              | KW_BETWEEN window_frame_boundary KW_AND window_frame_boundary
              )
    ;

window_value_expression
    : KW_RANGE ( window_frame_start_boundary
               | KW_BETWEEN window_frame_boundary KW_AND window_frame_boundary
               )
    ;

window_frame_start_boundary
    : KW_UNBOUNDED KW_PRECEDING
    | KW_CURRENT KW_ROW
    | Number KW_PRECEDING
    ;

window_frame_boundary
    : (KW_UNBOUNDED | Number) (KW_PRECEDING | KW_FOLLOWING)
    | KW_CURRENT KW_ROW
    ;

// group by a,b
groupByClause
    : KW_GROUP KW_BY groupby_expression
    ;

// support for new and old rollup/cube syntax
groupby_expression
    : rollupStandard
    | rollupOldSyntax
    | groupByEmpty
    ;

groupByEmpty
    : LPAREN RPAREN
    ;

// standard rollup syntax
rollupStandard
    : (rollup=KW_ROLLUP | cube=KW_CUBE)
    LPAREN expression (COMMA expression)* RPAREN
    ;

// old hive rollup syntax
rollupOldSyntax
    : expr=expressionsNotInParenthesis
        (rollup=KW_WITH KW_ROLLUP | cube=KW_WITH KW_CUBE)?
        (sets=KW_GROUPING KW_SETS LPAREN groupingSetExpression (COMMA groupingSetExpression)* RPAREN)?
    ;

groupingSetExpression
    : groupingSetExpressionMultiple
    | groupingExpressionSingle
    ;

groupingSetExpressionMultiple
    : LPAREN expression? (COMMA expression)* RPAREN
    ;

groupingExpressionSingle
    : expression
    ;

havingClause
    : KW_HAVING havingCondition
    ;

qualifyClause
    : KW_QUALIFY expression
    ;

havingCondition
    : expression
    ;

expressionsInParenthesis
    : LPAREN expressionsNotInParenthesis RPAREN
    ;

expressionsNotInParenthesis
    : first=expressionOrDefault more=expressionPart?
    ;

expressionPart
    : (COMMA expressionOrDefault)+
    ;

expressionOrDefault
    : defaultValue
    | expression
    ;

/**
Parses comma separated list of expressions with optionally specified aliases.
 <expression> [<alias>] [, <expression> [<alias>]]
*/
firstExpressionsWithAlias
    : first=expression KW_AS? colAlias=id_? (COMMA expressionWithAlias)*
    ;

/** Parses expressions which may have alias.
 If alias is not specified generate one.
*/
expressionWithAlias
    : expression KW_AS? alias=id_?
    ;

expressions
    : expressionsInParenthesis
    | expressionsNotInParenthesis
    ;

columnRefOrderInParenthesis
    : LPAREN columnRefOrder (COMMA columnRefOrder)* RPAREN
    ;

columnRefOrderNotInParenthesis
    : columnRefOrder (COMMA columnRefOrder)*
    ;

// order by a,b
orderByClause
    : KW_ORDER KW_BY columnRefOrder (COMMA columnRefOrder)*
    ;

clusterByClause
    : KW_CLUSTER KW_BY expressions
    ;

partitionByClause
    : KW_PARTITION KW_BY expressions
    ;

distributeByClause
    : KW_DISTRIBUTE KW_BY expressions
    ;

sortByClause
    : KW_SORT KW_BY (columnRefOrderInParenthesis | columnRefOrderNotInParenthesis)
    ;

// TRIM([LEADING|TRAILING|BOTH] trim_characters FROM str)
trimFunction
    : KW_TRIM LPAREN (leading=KW_LEADING | trailing=KW_TRAILING | KW_BOTH)?
        trim_characters=selectExpression? KW_FROM str=selectExpression RPAREN
    ;

// fun(par1, par2, par3)
function_
    : trimFunction
    | functionName
    LPAREN
      (star=STAR | dist=all_distinct? (selectExpression (COMMA selectExpression)*)?)
      (
        // SELECT rank(3) WITHIN GROUP (<order by clause>)
        RPAREN within=KW_WITHIN KW_GROUP LPAREN ordBy=orderByClause RPAREN
        // No null treatment: SELECT first_value(b) OVER (<window spec>)
        // Standard null treatment spec: SELECT first_value(b) IGNORE NULLS OVER (<window spec>)
        | RPAREN nt=null_treatment? KW_OVER ws=window_specification
        // Non-standard null treatment spec: SELECT first_value(b IGNORE NULLS) OVER (<window spec>)
        | nt=null_treatment RPAREN KW_OVER ws=window_specification
        | RPAREN
      )
    ;

null_treatment
    : KW_RESPECT KW_NULLS
    | KW_IGNORE KW_NULLS
    ;

functionName
    : functionIdentifier // Keyword IF is also a function name
    | sql11ReservedKeywordsUsedAsFunctionName
    ;

castExpression
    : KW_CAST
    LPAREN
          expression
          KW_AS
          toType=primitiveType
          (fmt=KW_FORMAT StringLiteral)?
    RPAREN
    ;

caseExpression
    : KW_CASE expression
    (KW_WHEN expression KW_THEN expression)+
    (KW_ELSE expression)?
    KW_END
    ;

whenExpression
    : KW_CASE
    (KW_WHEN expression KW_THEN expression)+
    (KW_ELSE expression)?
    KW_END
    ;

floorExpression
    : KW_FLOOR LPAREN expression (KW_TO floorUnit=floorDateQualifiers)? RPAREN
    ;

floorDateQualifiers
    : KW_YEAR
    | KW_QUARTER
    | KW_MONTH
    | KW_WEEK
    | KW_DAY
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    ;

extractExpression
    : KW_EXTRACT LPAREN timeUnit=timeQualifiers KW_FROM expression RPAREN
    ;

timeQualifiers
    : KW_YEAR
    | KW_QUARTER
    | KW_MONTH
    | KW_WEEK
    | KW_DAY
    | KW_DOW
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    ;

constant
    : intervalLiteral
    | Number
    | dateLiteral
    | timestampLiteral
    | timestampLocalTZLiteral
    | StringLiteral
    | stringLiteralSequence
    | IntegralLiteral
    | NumberLiteral
    | charSetStringLiteral
    | booleanValue
    | KW_NULL
    | prepareStmtParam
    ;

prepareStmtParam
    : p=parameterIdx
    ;

parameterIdx
    : QUESTION
    ;

stringLiteralSequence
    : StringLiteral StringLiteral+
    ;

charSetStringLiteral
    : csName=CharSetName csLiteral=CharSetLiteral
    ;

dateLiteral
    : KW_DATE StringLiteral
    | KW_CURRENT_DATE
    ;

timestampLiteral
    : KW_TIMESTAMP StringLiteral
    | KW_CURRENT_TIMESTAMP
    ;

timestampLocalTZLiteral
    : KW_TIMESTAMPLOCALTZ StringLiteral
    ;

intervalValue
    : StringLiteral
    | Number
    ;

intervalLiteral
    : value=intervalValue qualifiers=intervalQualifiers
    ;

intervalExpression
    : LPAREN value=intervalValue RPAREN qualifiers=intervalQualifiers
    | KW_INTERVAL (value=intervalValue | LPAREN expr=expression RPAREN) qualifiers=intervalQualifiers
    ;

intervalQualifiers
    : KW_YEAR KW_TO KW_MONTH
    | KW_DAY KW_TO KW_SECOND
    | KW_YEAR
    | KW_MONTH
    | KW_DAY
    | KW_HOUR
    | KW_MINUTE
    | KW_SECOND
    ;

expression
    : precedenceOrExpression
    ;

atomExpression
    : constant
    | intervalExpression
    | castExpression
    | extractExpression
    | floorExpression
    | caseExpression
    | whenExpression
    | subQueryExpression
    | function_
    | tableOrColumn
    | expressionsInParenthesis
    ;

precedenceFieldExpression
    : atomExpression (LSQUARE expression RSQUARE | DOT id_)*
    ;

precedenceUnaryOperator
    : PLUS
    | MINUS
    | TILDE
    ;

precedenceUnaryPrefixExpression
    : precedenceUnaryOperator* precedenceFieldExpression
    ;

precedenceBitwiseXorOperator
    : BITWISEXOR
    ;

precedenceBitwiseXorExpression
    : precedenceUnaryPrefixExpression (precedenceBitwiseXorOperator precedenceUnaryPrefixExpression)*
    ;

precedenceStarOperator
    : STAR
    | DIVIDE
    | MOD
    | DIV
    ;

precedenceStarExpression
    : precedenceBitwiseXorExpression (precedenceStarOperator precedenceBitwiseXorExpression)*
    ;

precedencePlusOperator
    : PLUS
    | MINUS
    ;

precedencePlusExpression
    : precedenceStarExpression (precedencePlusOperator precedenceStarExpression)*
    ;

precedenceConcatenateOperator
    : CONCATENATE
    ;

precedenceConcatenateExpression
    : precedencePlusExpression (precedenceConcatenateOperator plus=precedencePlusExpression)*

    ;

precedenceAmpersandOperator
    : AMPERSAND
    ;

precedenceAmpersandExpression
    : precedenceConcatenateExpression (precedenceAmpersandOperator precedenceConcatenateExpression)*
    ;

precedenceBitwiseOrOperator
    : BITWISEOR
    ;

precedenceBitwiseOrExpression
    : precedenceAmpersandExpression (precedenceBitwiseOrOperator precedenceAmpersandExpression)*
    ;

precedenceRegexpOperator
    : KW_LIKE
    | KW_RLIKE
    | KW_REGEXP
    ;

precedenceSimilarOperator
    : precedenceRegexpOperator
    | LESSTHANOREQUALTO
    | LESSTHAN
    | GREATERTHANOREQUALTO
    | GREATERTHAN
    ;

subQueryExpression
    : LPAREN selectStatement RPAREN
    ;

precedenceSimilarExpression
    : precedenceSimilarExpressionMain
    | KW_EXISTS subQueryExpression
    ;

precedenceSimilarExpressionMain
    : a=precedenceBitwiseOrExpression part=precedenceSimilarExpressionPart?
    ;

precedenceSimilarExpressionPart
    : precedenceSimilarOperator equalExpr=precedenceBitwiseOrExpression
    | precedenceSimilarExpressionAtom
    | KW_NOT precedenceSimilarExpressionPartNot
    ;

precedenceSimilarExpressionAtom
    : KW_IN precedenceSimilarExpressionIn
    | KW_BETWEEN min=precedenceBitwiseOrExpression KW_AND max=precedenceBitwiseOrExpression
    | KW_LIKE (KW_ANY | KW_ALL) expr=expressionsInParenthesis
    | precedenceSimilarExpressionQuantifierPredicate
    ;

precedenceSimilarExpressionQuantifierPredicate
    : subQuerySelectorOperator quantifierType subQueryExpression
    ;

quantifierType
    : KW_ANY
    | KW_SOME
    | KW_ALL
    ;

precedenceSimilarExpressionIn
    : subQueryExpression
    | expr=expressionsInParenthesis
    ;

precedenceSimilarExpressionPartNot
    : precedenceRegexpOperator notExpr=precedenceBitwiseOrExpression
    | precedenceSimilarExpressionAtom
    ;

precedenceDistinctOperator
    : KW_IS KW_DISTINCT KW_FROM
    ;

precedenceEqualOperator
    : EQUAL
    | EQUAL_NS
    | NOTEQUAL
    | KW_IS KW_NOT KW_DISTINCT KW_FROM
    ;

precedenceEqualExpression
    : precedenceSimilarExpression
        ( equal+=precedenceEqualOperator p+=precedenceSimilarExpression
        | dist+=precedenceDistinctOperator p+=precedenceSimilarExpression
        )*
    ;

isCondition
    : KW_NULL
    | KW_TRUE
    | KW_FALSE
    | KW_UNKNOWN
    | KW_NOT KW_NULL
    | KW_NOT KW_TRUE
    | KW_NOT KW_FALSE
    | KW_NOT KW_UNKNOWN
    ;

precedenceUnarySuffixExpression
    : precedenceEqualExpression (a=KW_IS isCondition)?
    ;

precedenceNotOperator
    : KW_NOT
    ;

precedenceNotExpression
    : precedenceNotOperator* precedenceUnarySuffixExpression
    ;

precedenceAndOperator
    : KW_AND
    ;

precedenceAndExpression
    : precedenceNotExpression (precedenceAndOperator precedenceNotExpression)*
    ;

precedenceOrOperator
    : KW_OR
    ;

precedenceOrExpression
    : precedenceAndExpression (precedenceOrOperator precedenceAndExpression)*
    ;

booleanValue
    : KW_TRUE
    | KW_FALSE
    ;

booleanValueTok
    : KW_TRUE
    | KW_FALSE
    ;

tableOrPartition
    : tableName partitionSpec?
    ;

partitionSpec
    : KW_PARTITION LPAREN partitionVal (COMMA partitionVal)* RPAREN
    ;

partitionVal
    : id_ (EQUAL constant)?
    ;

partitionSelectorSpec
    : LPAREN partitionSelectorVal (COMMA partitionSelectorVal)* RPAREN
    ;

partitionSelectorVal
    : id_ partitionSelectorOperator constant
    ;

partitionSelectorOperator
    : KW_LIKE
    | subQuerySelectorOperator
    ;

subQuerySelectorOperator
    : EQUAL
    | NOTEQUAL
    | LESSTHANOREQUALTO
    | LESSTHAN
    | GREATERTHANOREQUALTO
    | GREATERTHAN
    ;

sysFuncNames
    : KW_AND
    | KW_OR
    | KW_NOT
    | KW_LIKE
    | KW_IF
    | KW_CASE
    | KW_WHEN
    | KW_FLOOR
    | KW_TINYINT
    | KW_SMALLINT
    | KW_INT
    | KW_BIGINT
    | KW_FLOAT
    | KW_REAL
    | KW_DOUBLE
    | KW_BOOLEAN
    | KW_STRING
    | KW_BINARY
    | KW_ARRAY
    | KW_MAP
    | KW_STRUCT
    | KW_UNIONTYPE
    | EQUAL
    | EQUAL_NS
    | NOTEQUAL
    | LESSTHANOREQUALTO
    | LESSTHAN
    | GREATERTHANOREQUALTO
    | GREATERTHAN
    | DIVIDE
    | PLUS
    | MINUS
    | STAR
    | MOD
    | DIV
    | AMPERSAND
    | TILDE
    | BITWISEOR
    | BITWISEXOR
    | KW_RLIKE
    | KW_REGEXP
    | KW_IN
    | KW_BETWEEN
    ;

descFuncNames
    : sysFuncNames
    | StringLiteral
    | functionIdentifier
    ;

id_
    : Identifier
    | nonReserved
    ;

functionIdentifier
    : id_ (DOT fn=id_)?
    ;

principalIdentifier
    : id_
    //| QuotedIdentifier
    ;

/**
 Here is what you have to do if you would like to add a new keyword.
 Note that non reserved keywords are basically the keywords that can be used as identifiers.
 (1) Add a new entry to HiveLexer, e.g., KW_TRUE : 'TRUE';
 (2) If it is reserved, you do NOT need to change IdentifiersParser.g
                        because all the KW_* are automatically not only keywords, but also reserved keywords.
                        However, you need to add a test to TestSQL11ReservedKeyWordsNegative.java.
     Otherwise it is non-reserved, you need to put them in the nonReserved list below.
If you are not sure, please refer to the SQL2011 column in
http://www.postgresql.org/docs/9.5/static/sql-keywords-appendix.html
*/
nonReserved
    : KW_ABORT
    | KW_ACTIVATE
    | KW_ACTIVE
    | KW_ADD
    | KW_ADMIN
    | KW_AFTER
    | KW_ALLOC_FRACTION
    | KW_ANALYZE
    | KW_ARCHIVE
    | KW_ASC
    | KW_AST
    | KW_AT
    | KW_AUTOCOMMIT
    | KW_BATCH
    | KW_BEFORE
    | KW_BUCKET
    | KW_BUCKETS
    | KW_CACHE
    | KW_CASCADE
    | KW_CBO
    | KW_CHANGE
    | KW_CHECK
    | KW_CLUSTER
    | KW_CLUSTERED
    | KW_CLUSTERSTATUS
    | KW_COLLECTION
    | KW_COLUMNS
    | KW_COMMENT
    | KW_COMPACT
    | KW_COMPACTIONS
    | KW_COMPUTE
    | KW_CONCATENATE
    | KW_CONTINUE
    | KW_COST
    | KW_CRON
    | KW_DATA
    | KW_DATABASES
    | KW_DATETIME
    | KW_DAY
    | KW_DAYOFWEEK
    | KW_DBPROPERTIES
    | KW_DCPROPERTIES
    | KW_DEBUG
    | KW_DEFAULT
    | KW_DEFERRED
    | KW_DEFINED
    | KW_DELIMITED
    | KW_DEPENDENCY
    | KW_DESC
    | KW_DETAIL
    | KW_DIRECTORIES
    | KW_DIRECTORY
    | KW_DISABLE
    | KW_DISTRIBUTE
    | KW_DISTRIBUTED
    | KW_DO
    | KW_DOW
    | KW_DUMP
    | KW_ELEM_TYPE
    | KW_ENABLE
    | KW_ENFORCED
    | KW_ESCAPED
    | KW_EVERY
    | KW_EXCLUSIVE
    | KW_EXECUTE
    | KW_EXECUTED
    | KW_EXPIRE_SNAPSHOTS
    | KW_EXPLAIN
    | KW_EXPORT
    | KW_EXPRESSION
    | KW_FIELDS
    | KW_FILE
    | KW_FILEFORMAT
    | KW_FIRST
    | KW_FORMAT
    | KW_FORMATTED
    | KW_FUNCTIONS
    | KW_HOLD_DDLTIME
    | KW_HOUR
    | KW_IDXPROPERTIES
    | KW_IGNORE
    | KW_INDEX
    | KW_INDEXES
    | KW_INPATH
    | KW_INPUTDRIVER
    | KW_INPUTFORMAT
    | KW_ISOLATION
    | KW_ITEMS
    | KW_JAR
    | KW_JOINCOST
    | KW_KEY
    | KW_KEYS
    | KW_KEY_TYPE
    | KW_KILL
    | KW_LAST
    | KW_LEVEL
    | KW_LIMIT
    | KW_LINES
    | KW_LOAD
    | KW_LOCATION
    | KW_LOCK
    | KW_LOCKS
    | KW_LOGICAL
    | KW_LONG
    | KW_MANAGED
    | KW_MANAGEDLOCATION
    | KW_MANAGEMENT
    | KW_MAPJOIN
    | KW_MAPPING
    | KW_MATCHED
    | KW_MATERIALIZED
    | KW_METADATA
    | KW_MINUTE
    | KW_MONTH
    | KW_MOVE
    | KW_MSCK
    | KW_NORELY
    | KW_NOSCAN
    | KW_NOVALIDATE
    | KW_NO_DROP
    | KW_NULLS
    | KW_OFFLINE
    | KW_OFFSET
    | KW_OPERATOR
    | KW_OPTION
    | KW_OUTPUTDRIVER
    | KW_OUTPUTFORMAT
    | KW_OVERWRITE
    | KW_OWNER
    | KW_PARTITIONED
    | KW_PARTITIONS
    | KW_PATH
    | KW_PLAN
    | KW_PLANS
    | KW_PLUS
    | KW_POOL
    | KW_PRINCIPALS
    | KW_PROTECTION
    | KW_PURGE
    | KW_QUARTER
    | KW_QUERY
    | KW_QUERY_PARALLELISM
    | KW_READ
    | KW_READONLY
    | KW_REBUILD
    | KW_RECORDREADER
    | KW_RECORDWRITER
    | KW_RELOAD
    | KW_RELY
    | KW_REMOTE
    | KW_RENAME
    | KW_REOPTIMIZATION
    | KW_REPAIR
    | KW_REPL
    | KW_REPLACE
    | KW_REPLICATION
    | KW_RESOURCE
    | KW_RESPECT
    | KW_RESTRICT
    | KW_REWRITE
    | KW_ROLE
    | KW_ROLES
    | KW_SCHEDULED
    | KW_SCHEDULING_POLICY
    | KW_SCHEMA
    | KW_SCHEMAS
    | KW_SECOND
    | KW_SEMI
    | KW_SERDE
    | KW_SERDEPROPERTIES
    | KW_SERVER
    | KW_SETS
    | KW_SET_CURRENT_SNAPSHOT
    | KW_SHARED
    | KW_SHOW
    | KW_SHOW_DATABASE
    | KW_SKEWED
    | KW_SNAPSHOT
    | KW_SORT
    | KW_SORTED
    | KW_SPEC
    | KW_SSL
    | KW_STATISTICS
    | KW_STATUS
    | KW_STORED
    | KW_STREAMTABLE
    | KW_STRING
    | KW_STRUCT
    | KW_SUMMARY
    | KW_SYSTEM_TIME
    | KW_SYSTEM_VERSION
    | KW_TABLES
    | KW_TBLPROPERTIES
    | KW_TEMPORARY
    | KW_TERMINATED
    | KW_TIMESTAMPTZ
    | KW_TINYINT
    | KW_TOUCH
    | KW_TRANSACTION
    | KW_TRANSACTIONAL
    | KW_TRANSACTIONS
    | KW_TRIM
    | KW_TYPE
    | KW_UNARCHIVE
    | KW_UNDO
    | KW_UNIONTYPE
    | KW_UNKNOWN
    | KW_UNLOCK
    | KW_UNMANAGED
    | KW_UNSET
    | KW_UNSIGNED
    | KW_URI
    | KW_URL
    | KW_USE
    | KW_UTC
    | KW_UTCTIMESTAMP
    | KW_VALIDATE
    | KW_VALUE_TYPE
    | KW_VECTORIZATION
    | KW_VIEW
    | KW_VIEWS
    | KW_WAIT
    | KW_WEEK
    | KW_WHILE
    | KW_WITHIN
    | KW_WORK
    | KW_WORKLOAD
    | KW_WRITE
    | KW_YEAR
    | KW_ZONE
    ;

/**
The following SQL2011 reserved keywords are used as function name only, but not as identifiers.
*/
sql11ReservedKeywordsUsedAsFunctionName
    : KW_ARRAY
    | KW_BIGINT
    | KW_BINARY
    | KW_BOOLEAN
    | KW_CURRENT_DATE
    | KW_CURRENT_TIMESTAMP
    | KW_DATE
    | KW_DOUBLE
    | KW_FLOAT
    | KW_GROUPING
    | KW_IF
    | KW_INT
    | KW_MAP
    | KW_REAL
    | KW_SMALLINT
    | KW_TIMESTAMP
    ;

// starting rule
hint
    : hintList EOF
    ;

hintList
    : hintItem (COMMA hintItem)*
    ;

hintItem
    : hintName (LPAREN hintArgs RPAREN)?
    ;

hintName
    : KW_MAPJOIN
    | KW_SEMI
    | KW_STREAMTABLE
    | KW_PKFK_JOIN
    ;

hintArgs
    : hintArgName (COMMA hintArgName)*
    ;

hintArgName
    : Identifier
    | Number
    | KW_NONE
    ;

//----------------------- Rules for parsing Prepare statement-----------------------------
prepareStatement
    : KW_PREPARE id_ KW_FROM queryStatementExpression
    ;

executeStatement
    : KW_EXECUTE id_ KW_USING executeParamList
    ;

//TODO: instead of constant using expression will provide richer and broader parameters
executeParamList
    : constant (COMMA constant)*
    ;

resourcePlanDdlStatements
    : createResourcePlanStatement
    | alterResourcePlanStatement
    | dropResourcePlanStatement
    | globalWmStatement
    | replaceResourcePlanStatement
    | createTriggerStatement
    | alterTriggerStatement
    | dropTriggerStatement
    | createPoolStatement
    | alterPoolStatement
    | dropPoolStatement
    | createMappingStatement
    | alterMappingStatement
    | dropMappingStatement
    ;

rpAssign
    : KW_QUERY_PARALLELISM EQUAL parallelism=Number
    | KW_DEFAULT KW_POOL EQUAL poolPath
    ;

rpAssignList
    : rpAssign (COMMA rpAssign)*
    ;

rpUnassign
    : KW_QUERY_PARALLELISM
    | KW_DEFAULT KW_POOL
    ;

rpUnassignList
    : rpUnassign (COMMA rpUnassign)*
    ;

createResourcePlanStatement
    : KW_CREATE KW_RESOURCE KW_PLAN ifNotExists?
        (name=id_ KW_LIKE likeName=id_ | name=id_ (KW_WITH rpAssignList)?)
    ;

withReplace
    : KW_WITH KW_REPLACE
    ;

activate
    : KW_ACTIVATE withReplace?
    ;

enable
    : KW_ENABLE
    ;

disable
    : KW_DISABLE
    ;

unmanaged
    : KW_UNMANAGED
    ;

alterResourcePlanStatement
    : KW_ALTER KW_RESOURCE KW_PLAN name=id_ (
          KW_VALIDATE
        | KW_DISABLE
        | KW_SET rpAssignList
        | KW_UNSET rpUnassignList
        | KW_RENAME KW_TO newName=id_
        | activate enable?
        | enable activate?
      )
    ;

/** It might make sense to make this more generic, if something else could be enabled/disabled.
    For now, it's only used for WM. Translate into another form of an alter statement. */
globalWmStatement
    : (KW_ENABLE | KW_DISABLE) KW_WORKLOAD KW_MANAGEMENT
    ;

replaceResourcePlanStatement
    : KW_REPLACE (
          KW_ACTIVE KW_RESOURCE KW_PLAN KW_WITH src=id_
        | KW_RESOURCE KW_PLAN dest=id_ KW_WITH src=id_
      )
    ;

dropResourcePlanStatement
    : KW_DROP KW_RESOURCE KW_PLAN ifExists? name=id_
    ;

poolPath
    : id_ (DOT id_)*
    ;

triggerExpression
    : triggerAtomExpression
    ;

triggerExpressionStandalone
    : triggerExpression EOF
    ;

/*
  The rules triggerOrExpression and triggerAndExpression are not being used right now.
  Only > operator is supported, this should be changed if logic in ExpressionFactory changes.
*/
triggerOrExpression
    : triggerAndExpression (KW_OR triggerAndExpression)*
    ;

triggerAndExpression
    : triggerAtomExpression (KW_AND triggerAtomExpression)*
    ;

triggerAtomExpression
    : id_ comparisionOperator triggerLiteral
    ;

triggerLiteral
    : Number
    | StringLiteral
    ;

comparisionOperator
    : GREATERTHAN
    ;

triggerActionExpression
    : KW_KILL
    | KW_MOVE KW_TO poolPath
    ;

triggerActionExpressionStandalone
    : triggerActionExpression EOF
    ;

createTriggerStatement
    : KW_CREATE KW_TRIGGER rpName=id_ DOT triggerName=id_
      KW_WHEN triggerExpression KW_DO triggerActionExpression
    ;

alterTriggerStatement
    : KW_ALTER KW_TRIGGER rpName=id_ DOT triggerName=id_
      ( KW_WHEN triggerExpression KW_DO triggerActionExpression
      | (KW_ADD KW_TO | KW_DROP KW_FROM) (KW_POOL poolName=poolPath | KW_UNMANAGED)
      )
    ;

dropTriggerStatement
    : KW_DROP KW_TRIGGER rpName=id_ DOT triggerName=id_
    ;

poolAssign
    : ( KW_ALLOC_FRACTION EQUAL allocFraction=Number
      | KW_QUERY_PARALLELISM EQUAL parallelism=Number
      | KW_SCHEDULING_POLICY EQUAL policy=StringLiteral
      | KW_PATH EQUAL path=poolPath
      )
    ;

poolAssignList
    : poolAssign (COMMA poolAssign)*
    ;

createPoolStatement
    : KW_CREATE KW_POOL rpName=id_ DOT poolPath
      KW_WITH poolAssignList
    ;

alterPoolStatement
    : KW_ALTER KW_POOL rpName=id_ DOT poolPath
        ( KW_SET poolAssignList
        | KW_UNSET KW_SCHEDULING_POLICY
        | (KW_ADD | KW_DROP) KW_TRIGGER triggerName=id_
        )
    ;

dropPoolStatement
    : KW_DROP KW_POOL rpName=id_ DOT poolPath
    ;

createMappingStatement
    : KW_CREATE mappingType=(KW_USER | KW_GROUP | KW_APPLICATION)
         KW_MAPPING name=StringLiteral
         KW_IN rpName=id_ (KW_TO path=poolPath | unmanaged)
         (KW_WITH KW_ORDER order=Number)?
    ;

alterMappingStatement
    : KW_ALTER mappingType=(KW_USER | KW_GROUP | KW_APPLICATION)
         KW_MAPPING name=StringLiteral
         KW_IN rpName=id_ (KW_TO path=poolPath | unmanaged)
         (KW_WITH KW_ORDER order=Number)?
    ;

dropMappingStatement
    : KW_DROP mappingType=(KW_USER | KW_GROUP | KW_APPLICATION) KW_MAPPING
         name=StringLiteral KW_IN rpName=id_
    ;

//Lexer
 
// Keywords
KW_ABORT                               : A B O R T;
KW_ACTIVATE                            : A C T I V A T E;
KW_ACTIVE                              : A C T I V E;
KW_ADD                                 : A D D;
KW_ADMIN                               : A D M I N;
KW_AFTER                               : A F T E R;
KW_ALL                                 : A L L;
KW_ALLOC_FRACTION                      : A L L O C UNDERLINE_SIGN F R A C T I O N;
KW_ALTER                               : A L T E R;
KW_ANALYZE                             : A N A L Y Z E;
KW_AND                                 : A N D;
KW_ANTI                                : A N T I;
KW_ANY                                 : A N Y;
KW_APPLICATION                         : A P P L I C A T I O N;
KW_ARCHIVE                             : A R C H I V E;
KW_ARRAY                               : A R R A Y;
KW_AS                                  : A S;
KW_ASC                                 : A S C;
KW_AST                                 : A S T;
KW_AT                                  : A T;
KW_AUTHORIZATION                       : A U T H O R I Z A T I O N;
KW_AUTOCOMMIT                          : A U T O C O M M I T;
KW_BATCH                               : K W UNDERLINE_SIGN B A T C H;
KW_BEFORE                              : B E F O R E;
KW_BETWEEN                             : B E T W E E N;
KW_BIGINT                              : B I G I N T;
KW_BINARY                              : B I N A R Y;
KW_BOOLEAN                             : B O O L E A N; 
KW_BOTH                                : B O T H;
KW_BUCKET                              : B U C K E T;
KW_BUCKETS                             : B U C K E T S;
KW_BY                                  : B Y;
KW_CACHE                               : C A C H E;
KW_CASCADE                             : C A S C A D E;
KW_CASE                                : C A S E;
KW_CAST                                : C A S T;
KW_CBO                                 : C B O;
KW_CHANGE                              : C H A N G E;
KW_CHAR                                : C H A R;
KW_CHECK                               : C H E C K;
KW_CLUSTER                             : C L U S T E R;
KW_CLUSTERED                           : C L U S T E R E D;
KW_CLUSTERSTATUS                       : C L U S T E R S T A T U S;
KW_COLLECTION                          : C O L L E C T I O N;
KW_COLUMN                              : C O L U M N;
KW_COLUMNS                             : C O L U M N S;
KW_COMMENT                             : C O M M E N T;
KW_COMMIT                              : C O M M I T;
KW_COMPACT                             : C O M P A C T;
KW_COMPACTIONS                         : C O M P A C T I O N S;
KW_COMPACT_ID                          : C O M P A C T I O N I D;
KW_COMPUTE                             : C O M P U T E;
KW_CONCATENATE                         : C O N C A T E N A T  E;
KW_CONF                                : C O N F;
KW_CONSTRAINT                          : C O N S T R A I N T;
KW_CONTINUE                            : C O N T I N U E;
KW_COST                                : C O S T;
KW_CREATE                              : C R E A T E;
KW_CRON                                : C R O N;
KW_CROSS                               : C R O S S;
KW_CUBE                                : C U B E;
KW_CURRENT                             : C U R R E N T;
KW_CURRENT_DATE                        : C U R R E N T UNDERLINE_SIGN D A T E;
KW_CURRENT_TIMESTAMP                   : C U R R E N T UNDERLINE_SIGN T I M E S T A M P;
KW_CURSOR                              : C U R S O R;
KW_DATA                                : D A T A;
KW_DATABASE                            : D A T A B A S E;
KW_DATABASES                           : D A T A B A S E S;
KW_DATACONNECTOR                       : C O N N E C T O R;
KW_DATACONNECTORS                      : C O N N E C T O R S;
KW_DATE                                : D A T E;
KW_DATETIME                            : D A T E T I M E;
KW_DAY                                 : D A Y S?;
KW_DAYOFWEEK                           : K W UNDERLINE_SIGN D A Y O F W E E K;
KW_DBPROPERTIES                        : D B P R O P E R T I E S;
KW_DCPROPERTIES                        : D C P R O P E R T I E S;
KW_DDL                                 : D D L;
KW_DEBUG                               : D E B U G;
KW_DECIMAL                             : D E C (I M A L)? | N U M E R I C;
KW_DEFAULT                             :  D E F A U L T;
KW_DEFERRED                            : D E F E R R E D;
KW_DEFINED                             : D E F I N E D;
KW_DELETE                              : D E L E T E;
KW_DELIMITED                           : D E L I M I T E D;
KW_DEPENDENCY                          : D E P E N D E N C Y;
KW_DESC                                : D E S C;
KW_DESCRIBE                            : D E S C R I B E;
KW_DETAIL                              : D E T A I L;
KW_DIRECTORIES                         : D I R E C T O R I E S;
KW_DIRECTORY                           : D I R E C T O R Y;
KW_DISABLE                             : D I S A B L E D?;
KW_DISTINCT                            : D I S T I N C T;
KW_DISTRIBUTE                          : D I S T R I B U T E;
KW_DISTRIBUTED                         : D I S T R I B U T E D;
KW_DO                                  : D O;
KW_DOUBLE                              : D O U B L E;
KW_DOW                                 : D A Y O F W  E E K;
KW_DROP                                : D R O P;
KW_DUMP                                : D U M P;
KW_ELEM_TYPE                           : DOLLAR E L E M DOLLAR;
KW_ELSE                                : E L S E;
KW_ENABLE                              : E N A B L E D?;
KW_END                                 : E N D;
KW_ENFORCED                            : E N F O R C E D;
KW_ESCAPED                             : E S C A P E D ;
KW_EVERY                               : E V E R Y;
KW_EXCEPT                              : E X C E P T;
KW_EXCHANGE                            : E X C H A N G E;
KW_EXCLUSIVE                           : E X C L U S I V E;
KW_EXECUTE                             : E X E C U T E ;
KW_EXECUTED                            : E X E C U T E D;
KW_EXISTS                              : E X I S T S;
KW_EXPIRE_SNAPSHOTS                    : E X P I R E UNDERLINE_SIGN S N A P S H O T S ;
KW_EXPLAIN                             : E X P L A I N;
KW_EXPORT                              : E X P O R T;
KW_EXPRESSION                          : E X P R E S S I O N;
KW_EXTENDED                            : E X T E N D E D;
KW_EXTERNAL                            : E X T E R N A L;
KW_EXTRACT                             : E X T R A C T;
KW_FALSE                               : F A L S E;
KW_FETCH                               : F E T C H;
KW_FIELDS                              : F I E L D S;
KW_FILE                                : F I L E;
KW_FILEFORMAT                          : F I L E F O R M A T;
KW_FIRST                               : F I R S T;
KW_FLOAT                               : F L O A T;
KW_FLOOR                               : F L O O R;
KW_FOLLOWING                           : F O L L O W I N G;
KW_FOR                                 : F O R;
KW_FORCE                               : F O R C E;
KW_FOREIGN                             : F O R E I G N;
KW_FORMAT                              : F O R M A T;
KW_FORMATTED                           : F O R M A T T E D;
KW_FROM                                : F R O M;
KW_FULL                                : F U L L;
KW_FUNCTION                            : F U N C T I O N;
KW_FUNCTIONS                           : F U N C T I O N S;
KW_GRANT                               : G R A N T;
KW_GROUP                               : G R O U P;
KW_GROUPING                            : G R O U P I N G;
KW_HAVING                              : H A V I N G;
KW_HOLD_DDLTIME                        : K W  UNDERLINE_SIGN H O L D  D D L T I M E;
KW_HOUR                                : H O U R S?;
KW_IDXPROPERTIES                       : I D X P R O P E R T I E S;
KW_IF                                  : I F;
KW_IGNORE                              : I G N O R E;
KW_IMPORT                              : I M P O R T;
KW_IN                                  : I N;
KW_INDEX                               : I N D E X ;
KW_INDEXES                             : I N D E X E S ;
KW_INNER                               : I N N E R;
KW_INPATH                              : I N P A T H;
KW_INPUTDRIVER                         : I N P U T D R I V E R;
KW_INPUTFORMAT                         : I N P U T F O R M A T;
KW_INSERT                              : I N S E R T;
KW_INT                                 : I N T ( E G E R )?;
KW_INTERSECT                           : I N T E R S E C T;
KW_INTERVAL                            : I N T E R V A L;
KW_INTO                                : I N T O;
KW_IS                                  : I S;
KW_ISOLATION                           : I S O L A T I O N; 
KW_ITEMS                               : I T E M S;
KW_JAR                                 : J A R;
KW_JOIN                                : J O I N;
KW_JOINCOST                            : J O I N C O S T;
KW_KEY                                 : K E Y;
KW_KEYS                                : K E Y S ;
KW_KEY_TYPE                            : DOLLAR K E Y DOLLAR;
KW_KILL                                : K I L L;
KW_LAST                                : L A S T;
KW_LATERAL                             : L A T E R A L ;
KW_LEADING                             : L E A D I N G;
KW_LEFT                                : L E F T;
KW_LESS                                : L E S S;
KW_LEVEL                               : L E V E L;
KW_LIKE                                : L I K E;
KW_LIMIT                               : L I M I T;
KW_LINES                               : L I N E S;
KW_LOAD                                : L O A D;
KW_LOCAL                               : L O C A L;
KW_LOCATION                            : L O C A T I O N;
KW_LOCK                                : L O C K;
KW_LOCKS                               : L O C K S;
KW_LOGICAL                             : L O G I C A L;
KW_LONG                                : L O N G;
KW_MACRO                               : M A C R O;
KW_MANAGED                             : M A N A G E D;
KW_MANAGEDLOCATION                     : M A N A G E D L O C A T I O N;
KW_MANAGEMENT                          : M A N A G E M E N T;
KW_MAP                                 : M A P;
KW_MAPJOIN                             : M A P J O I N;
KW_MAPPING                             : M A P P I N G;
KW_MATCHED                             : M A T C H E D ;
KW_MATERIALIZED                        : M A T E R I A L I Z E D;
KW_MERGE                               : M E R G E ;
KW_METADATA                            : M E T A D A T A;
KW_MINUS                               : M I N U S ;
KW_MINUTE                              : M I N U T E S?;
KW_MONTH                               : M O N T H  S?;
KW_MORE                                : M O R E ;
KW_MOVE                                : M O V E ;
KW_MSCK                                : M S C K;
KW_NONE                                : N O N E;
KW_NORELY                              : N O R E L Y;
KW_NOSCAN                              : N O S C A N ;
KW_NOT                                 : N O T | '!';
KW_NOVALIDATE                          : N O V A L I D A  T E;
KW_NO_DROP                             : K W UNDERLINE_SIGN N O UNDERLINE_SIGN D R O P;
KW_NULL                                : N U L L;
KW_NULLS                               : N U L L S ;
KW_OF                                  : O F;
KW_OFFLINE                             : K W UNDERLINE_SIGN O F F L I N E ;
KW_OFFSET                              : O F F S E T ;
KW_ON                                  : O N;
KW_ONLY                                : O N L Y;
KW_OPERATOR                            : O P E R A T O R;
KW_OPTION                              : O P T I O N;
KW_OR                                  : O R;
KW_ORDER                               : O R D E R;
KW_OUT                                 : O U T;
KW_OUTER                               : O U T E R;
KW_OUTPUTDRIVER                        : O U T P U T D R I V E R;
KW_OUTPUTFORMAT                        : O U T P U T F O R M A T ;
KW_OVER                                : O V E R;
KW_OVERWRITE                           : O V E R W R I T E;
KW_OWNER                               : O W N E R;
KW_PARTITION                           : P A R T I T I O N;
KW_PARTITIONED                         : P A R T I T I O N E D;
KW_PARTITIONS                          : P A R T I T I O N S;
KW_PATH                                : P A T H;
KW_PERCENT                             : P E R C E N T;
KW_PKFK_JOIN                           : P K F K  UNDERLINE_SIGN J O I N ;
KW_PLAN                                : P L A N;
KW_PLANS                               : P L A N S;
KW_PLUS                                : P L U S;
KW_POOL                                : P O O L;
KW_PRECEDING                           : P R E C E D I N G;
KW_PRECISION                           : P R E C I S I O N;
KW_PREPARE                             : P R E P A R E;
KW_PRESERVE                            : P R E S E R V E;
KW_PRIMARY                             : P R I M A R Y;
KW_PRINCIPALS                          : P R I N C I P A L S;
KW_PROCEDURE                           : P R O C E D U R E;
KW_PROTECTION                          : K W UNDERLINE_SIGN P R O T E C T I O N;
KW_PURGE                               : P U R G E ;
KW_QUALIFY                             : Q U A L I F Y;
KW_QUARTER                             : Q U A R T E R;
KW_QUERY                               : Q U E R Y ;
KW_QUERY_PARALLELISM                   : Q U E R Y UNDERLINE_SIGN P A R A L L E L I S M;
KW_RANGE                               : R A N G E ;
KW_READ                                : R E A D;
KW_READONLY                            : K W UNDERLINE_SIGN R E A D O N L Y ;
KW_READS                               : R E A D S;
KW_REAL                                : R E A L;
KW_REBUILD                             : R E B U I L D;
KW_RECORDREADER                        : R E C O R D  R E A D E R;
KW_RECORDWRITER                        : R E C O R D W R I T E R;
KW_REDUCE                              : R E D U C E;
KW_REFERENCES                          : R E F E R E N C E S;
KW_REGEXP                              : R E G E X P;
KW_RELOAD                              : R E L O A D;
KW_RELY                                : R E L Y;
KW_REMOTE                              : R E M O T E;
KW_RENAME                              : R E N A M E;
KW_REOPTIMIZATION                      : R E O P T I M I Z A T I O N;
KW_REPAIR                              : R E P A I R ;
KW_REPL                                : R E P L;
KW_REPLACE                             : R E P L A C E;
KW_REPLICATION                         : R E P L  I C A T I O N;
KW_RESOURCE                            : R E S O U R C E;
KW_RESPECT                             : R E S P E C T;
KW_RESTRICT                            : R E S T R I C T;
KW_REVOKE                              : R E V O K E;
KW_REWRITE                             : R E W R I T E ;
KW_RIGHT                               : R I G H T;
KW_RLIKE                               : R L I K E;
KW_ROLE                                : R O L E;
KW_ROLES                               : R O L E S;
KW_ROLLBACK                            : R O L L B A C K;
KW_ROLLUP                              : R O L L U P;
KW_ROW                                 : R O W;
KW_ROWS                                : R O W S;
KW_SCHEDULED                           : S C H E D U L E D;
KW_SCHEDULING_POLICY                   : S C H E D U L I N G UNDERLINE_SIGN P O L I C Y;
KW_SCHEMA                              : S C H E M A;
KW_SCHEMAS                             : S C H E M A S;
KW_SECOND                              : S E C O N D S?;
KW_SELECT                              : S E L E C T;
KW_SEMI                                : S E M I;
KW_SERDE                               : S E R D E;
KW_SERDEPROPERTIES                     : S E R D E P R O P E R T I E S;
KW_SERVER                              : S E R V E R;
KW_SET                                 : S E T;
KW_SETS                                : S E T S;
KW_SET_CURRENT_SNAPSHOT                : S E T UNDERLINE_SIGN C U R R E  N T UNDERLINE_SIGN S N A P S H O T ;
KW_SHARED                              : S H A R E D ;
KW_SHOW                                : S H O W ;
KW_SHOW_DATABASE                       : S H O W UNDERLINE_SIGN D A T A B A S E;
KW_SKEWED                              : S K E W E D;
KW_SMALLINT                            : S M A L L I N T;
KW_SNAPSHOT                            : S N A P S H O T;
KW_SOME                                : S O M E;
KW_SORT                                : S O R T;
KW_SORTED                              : S O R T E D;
KW_SPEC                                : S P E C;
KW_SSL                                 : S S L;
KW_START                               : S T A R T;
KW_STATISTICS                          : S T A T I S T I C S;
KW_STATUS                              : S T A T U S ;
KW_STORED                              : S T O R E D;
KW_STREAMTABLE                         : S T R E A M T A B L E;
KW_STRING                              : S T R I N G;
KW_STRUCT                              : S T R U C T;
KW_SUMMARY                             : S U M M A R Y;
KW_SYNC                                : S Y N C;
KW_SYSTEM_TIME                         : S Y S T E M UNDERLINE_SIGN T I M E;
KW_SYSTEM_VERSION                      : S Y S T E M UNDERLINE_SIGN V E R S I O N;
KW_TABLE                               : T A B L E;
KW_TABLES                              : T A B L E S;
KW_TABLESAMPLE                         : T A B L E S A M P L E;
KW_TBLPROPERTIES                       : T B L P R O P E R T I E S ;
KW_TEMPORARY                           : T E M P O R A R Y;
KW_TERMINATED                          : T E R M I N A T E D ;
KW_THEN                                : T H E N;
KW_TIME                                : T I M E;
KW_TIMESTAMP                           : T I M E  S T A M P;
KW_TIMESTAMPLOCALTZ                    : T I M E S T A M P L O C A L T Z;
KW_TIMESTAMPTZ                         : K W UNDERLINE_SIGN T I M E S T A M P T Z;
KW_TINYINT                             : T I N Y I N T;
KW_TO                                  : T O;
KW_TOUCH                               : T O U C H;
KW_TRAILING                            : T R A I L I N G;
KW_TRANSACTION                         : T R A N S A C T I O N;
KW_TRANSACTIONAL                       : T R A N S A C T I O N A L;
KW_TRANSACTIONS                        : T R A N S A C T I O N S;
KW_TRANSFORM                           : T R A N S F O R M ;
KW_TRIGGER                             : T R I G G E R;
KW_TRIM                                : T R I M ;
KW_TRUE                                : T R U E ;
KW_TRUNCATE                            : T R U N C A T E;
KW_TYPE                                : T Y P E;
KW_UNARCHIVE                           : U N A R C H I V E;
KW_UNBOUNDED                           : U N B O U N D E D;
KW_UNDO                                : U N D O;
KW_UNION                               : U N I O N ;
KW_UNIONTYPE                           : U N I O N T Y P E;
KW_UNIQUE                              : U N I Q U E;
KW_UNIQUEJOIN                          : U N I Q U E J O I N ;
KW_UNKNOWN                             : U N K N O W N;
KW_UNLOCK                              : U N L O C K;
KW_UNMANAGED                           : U N M A N A G E D;
KW_UNSET                               : U N S E T;
KW_UNSIGNED                            : U N S I G N E D;
KW_UPDATE                              : U P D A T E;
KW_URI                                 : U R I;
KW_URL                                 : U R L;
KW_USE                                 : U S E;
KW_USER                                : U S E R ;
KW_USING                               : U S I N G;
KW_UTC                                 : U T C;
KW_UTCTIMESTAMP                        : U T C UNDERLINE_SIGN T M E S T A M P;
KW_VALIDATE                            : V A L I D A T E;
KW_VALUES                              : V A L U E S;
KW_VALUE_TYPE                          : DOLLAR V A L U E DOLLAR;
KW_VARCHAR                             : V A R C H A R;
KW_VECTORIZATION                       : V E C T O R I Z A T I O N;
KW_VIEW                                : V I E W;
KW_VIEWS                               : V I E W S;
KW_WAIT                                : W A I T;
KW_WEEK                                : W E E K S?;
KW_WHEN                                : W H E N;
KW_WHERE                               : W H E R E;
KW_WHILE                               : W H I L E;
KW_WINDOW                              : W I N D O W;
KW_WITH                                : W I T H;
KW_WITHIN                              : W I T H I N;
KW_WORK                                : W O R K;
KW_WORKLOAD                            : W O R K L O A D;
KW_WRITE                               : W R I T E;
KW_YEAR                                : Y E A R S?;
KW_ZONE                                : Z O N E;

// fragment a-z
fragment A: ('A'|'a');
fragment B: ('B'|'b');
fragment C: ('C'|'c');
fragment D: ('D'|'d');
fragment E: ('E'|'e');
fragment F: ('F'|'f');
fragment G: ('G'|'g');
fragment H: ('H'|'h');
fragment I: ('I'|'i');
fragment J: ('J'|'j');
fragment K: ('K'|'k');
fragment L: ('L'|'l');
fragment M: ('M'|'m');
fragment N: ('N'|'n');
fragment O: ('O'|'o');
fragment P: ('P'|'p');
fragment Q: ('Q'|'q');
fragment R: ('R'|'r');
fragment S: ('S'|'s');
fragment T: ('T'|'t');
fragment U: ('U'|'u');
fragment V: ('V'|'v');
fragment W: ('W'|'w');
fragment X: ('X'|'x');
fragment Y: ('Y'|'y');
fragment Z: ('Z'|'z');


// Operators
// NOTE: if you add a new function/operator, add it to sysFuncNames so that describe function _FUNC_ will work.
DOT : '.'; // generated as a part of Number rule
COLON : ':' ;
COMMA : ',' ;
SEMICOLON : ';' ;

LPAREN : '(' ;
RPAREN : ')' ;
LSQUARE : '[' ;
RSQUARE : ']' ;
LCURLY : '{';
RCURLY : '}';

UNDERLINE_SIGN:                      '_';
EQUAL : '=' | '==';
EQUAL_NS : '<=>';
NOTEQUAL : '<>' | '!=';
LESSTHANOREQUALTO : '<=';
LESSTHAN : '<';
GREATERTHANOREQUALTO : '>=';
GREATERTHAN : '>';

DIVIDE : '/';
PLUS : '+';
MINUS : '-';
STAR : '*';
MOD : '%';
DIV : 'DIV';

AMPERSAND : '&';
TILDE : '~';
BITWISEOR : '|';
CONCATENATE : '||';
BITWISEXOR : '^';
QUESTION : '?';
DOLLAR : '$';

// LITERALS

StringLiteral
    : ( '\'' ( ~('\''|'\\') | ('\\' .) )* '\''
    | '"' ( ~('"'|'\\') | ('\\' .) )* '"'
    )+
    ;

CharSetLiteral
    : StringLiteral
    | '0' 'X' (HexDigit | Digit)+
    ;

IntegralLiteral
    : Digit+ ('L' | 'S' | 'Y')
    ;

NumberLiteral
    : Number ('B'? 'D')
    ;

ByteLengthLiteral
    : Digit+ [BKMG]
    ;

Number
    : Digit+ (DOT Digit* Exponent? | Exponent)?
    ;

/*
An Identifier can be:
- tableName
- columnName
- select expr alias
- lateral view aliases
- database name
- view name
- subquery alias
- function name
- ptf argument identifier
- index name
- property name for: db,tbl,partition...
- fileFormat
- role name
- privilege name
- principal name
- macro name
- hint name
- window name
*/
Identifier
    : (Letter | Digit) (Letter | Digit | '_')*
    | QuotedIdentifier
    | '`' RegexComponent+ '`'
    ;

fragment
QuotedIdentifier
    : '`'  ('``' | ~'`')* '`'
    ;

fragment
Letter
    : 'A'..'Z'
    ;

fragment
HexDigit
    : 'A'..'F'
    ;

fragment
Digit
    : '0'..'9'
    ;

fragment
Exponent
    : ('E') ( PLUS|MINUS )? (Digit)+
    ;

fragment
RegexComponent
    : 'A'..'Z' | '0'..'9' | '_'
    | PLUS | STAR | QUESTION | MINUS | DOT
    | LPAREN | RPAREN | LSQUARE | RSQUARE | LCURLY | RCURLY
    | BITWISEXOR | BITWISEOR | DOLLAR | '!'
    ;

CharSetName
    : '_' (Letter | Digit | '_' | '-' | '.' | ':')+
    ;

WHITE_SPACE
    : (' '|'\r'|'\t'|'\n') -> channel(HIDDEN)
    ;

LINE_COMMENT
    : '--' ~('\n' | '\r')* -> channel(HIDDEN)
    ;

QUERY_HINT
    : SHOW_HINT
    | HIDDEN_HINT
    ;

SHOW_HINT
    : '/*+' (QUERY_HINT | .)*? '*/' ->channel(HIDDEN)
    ;

HIDDEN_HINT
    : '/*' (QUERY_HINT | .)*? '*/' -> channel(HIDDEN)
    ;