USE schema_name;
ALTER TABLE table_name
CHANGE COLUMN old_column_name new_column_name column_data_type COMMENT 'column_comment';

USE schema_name;
ALTER TABLE table_name PARTITION (partition_spec)
CHANGE COLUMN old_column_name new_column_name column_data_type COMMENT 'column_comment';

USE schema_name;
ALTER TABLE table_name RENAME TO new_table_name;

USE schema_name;
ALTER TABLE table_name SET TBLPROPERTIES ('comment' = 'new_comment');

USE schema_name
ALTER TABLE table_name SET TBLPROPERTIES('EXTERNAL' = 'TRUE');
