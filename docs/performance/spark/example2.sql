SELECT my_table.name, other_table.address
FROM my_table
JOIN other_table ON my_table.id = other_table.id;