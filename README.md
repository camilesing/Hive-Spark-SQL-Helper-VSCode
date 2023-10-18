# Hive-SQL-Helper

Help you efficiently and focus on HiveSQL development. support Hive SQL error grammar check, syntax highlighting, complete keywords, rename, find all references.

> I suggest that you develop and debug on vscode based on the information (https://learn.microsoft.com/en-us/sql/big-data-cluster/spark-hive-tools-vscode?view=sql-server-ver15) to obtain a better experience.

## 1.Features

### 1.1 Grammar Check

Setting plugin config like
1. ![](docs/images/setting_1.jpg)
2. ![](docs/images/setting_2.jpg)

then the plugin will check grammar when you save edit (suggest you turn off automatic saving).

example:

- ![](docs/images/expect_comma.jpg)
- ![](docs/images/expect_semicolon.jpg)

### 1.2 Refactorings

![](docs/images/refactorings.gif)

### 1.3 Code Completion Proposals

![](docs/images/code_completion_proposal.gif)

### 1.4 Snippets

snippets keywords:

- insert
- create
- alter

#### insert

![](docs/images/insert_snippets.gif)

#### create

![](docs/images/create_snippets.gif)

#### alter

![](docs/images/alter_snippets.gif)

 
### 1.5 Find All References

![](docs/images/find_all_references.gif)

 
## 2. User Guide

Enable the extension on your file, either name the file with a extension `.HQL`.
  
Or press F1, type 'Change Language Mode', and then choose HiveSQL.
