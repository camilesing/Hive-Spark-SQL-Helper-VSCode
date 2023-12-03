INSERT INTO TABLE schema_name.table_name
SELECT
    column_names
FROM
    source_schema_name.source_table_name;

INSERT OVERWRITE TABLE schema_name.table_name
SELECT
    column_names
FROM
    source_schema_name.source_table_name;