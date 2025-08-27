import * as antlr from "antlr4ng";



export class SemanticContext {
    private readonly ast: antlr.ParserRuleContext
    private metaDataMapping = new Map<string, TableMetaData>()
    constructor(ast: antlr.ParserRuleContext) {
        this.ast = ast;
    }

    //生成ast的get方法
    getAst(): antlr.ParserRuleContext {
        return this.ast;
    }


    getMetaData(key: string): TableMetaData | undefined {
        return this.metaDataMapping.get(key);
    }


    putMetaData(key: string, value: TableMetaData) {
        this.metaDataMapping.set(key, value);
    }

}

export class TableMetaData {
    private columnMetaDataList = new Set<ColumnMetaData>();
    private columnNameList = new Set<string>();
    getColumnMetaDataList(): Set<ColumnMetaData> {
        return this.columnMetaDataList;
    }

    hasColumn(columnName: string): boolean {
        return this.columnNameList.has(columnName);
    }

    addColumnMetaData(columnMetaData: ColumnMetaData) {
        this.columnNameList.add(columnMetaData.getName());
        this.columnMetaDataList.add(columnMetaData);
    }
}

export class ColumnMetaData {
    private name: string
    private type: string
    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }
}