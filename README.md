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


### 1.6 Show References

![](docs/images/show_references.gif)

 
### 1.6 Format

![](docs/images/format.gif)

## 2. User Guide

Enable the extension on your file, either name the file with a extension `.HQL`.
  
Or press F1, type 'Change Language Mode', and then choose HiveSQL.

### 2.1 Color theme recommend

Press F1, choose `Preference: Open User Setting(JSON)` then paste:

~~~json
{
    "editor.tokenColorCustomizations": {
        "textMateRules": [
                {
                    "scope": "keyword.control.hive",
                    "settings": {
                        "foreground": "#559DD6"
                    }
                },
                {
                    "scope": "storage.type.hive",
                    "settings": {
                        "foreground": "#C27432"
                    }
                },
                {
                    "scope": "support.type.hive",
                    "settings": {
                        "foreground": "#C27432"
                    }
                },
                {
                    "scope": "constant.language.hive",
                    "settings": {
                        "foreground": "#C27432"
                    }
                },
                {
                    "scope": "constant.language.hive",
                    "settings": {
                        "foreground": "#F4BE6B"
                    }
                },
                {
                    "scope": "string.quoted.double.hive",
                    "settings": {
                        "foreground":"#F4BE6B"
                    }
                },
                {
                    "scope": "string.quoted.single.hive",
                    "settings": {
                        "foreground": "#C27432"
                    }
                },      
                {
                    "scope": "keyword.operator.arithmetic.hive",
                    "settings": {
                        "foreground": "#F0F400"
                    }
                },
                {
                    "scope": "keyword.operator.relational.hive",
                    "settings": {
                        "foreground": "#F0F400"
                    }
                },
                {
                    "scope": "keyword.operator.logical.hive",
                    "settings": {
                        "foreground": "#F0F400"
                    }
                },
                {
                    "scope": "support.function.udf.complex.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.mathematic.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.collection.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.type-cast.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.date.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.conditional.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.string.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.masking.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udf.misc.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udaf.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                },
                {
                    "scope": "support.function.udtf.hive",
                    "settings": {
                        "foreground": "#F2BC69"
                    }
                }
        ],
    }
}
~~~


### 2.2 Format

Press alt+shift+f to format your HiveSQL.