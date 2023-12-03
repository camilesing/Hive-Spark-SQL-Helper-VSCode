CREATE TABLE IF NOT EXISTS schema_name.table_name AS 
SELECT
    column_names
FROM
    source_schema_name.source_table_name;

CREATE TABLE IF NOT EXISTS schema_name.table_name
LIKE source_table_schema.source_table_name
;