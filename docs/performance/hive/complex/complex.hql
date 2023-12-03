SELECT anon_id,
             from_unixtime (UNIX_TIMESTAMP (reading_date_v2, 'ddMMMyy'))
                  AS proper_date,
            year (from_unixtime (UNIX_TIMESTAMP (reading_date_v2, 'ddMMMyy')))
                 AS full_year,
            month (from_unixtime (UNIX_TIMESTAMP (reading_date_v2, 'ddMMMyy')))
                AS full_month,
            day (from_unixtime (UNIX_TIMESTAMP (reading_date_v2, 'ddMMMyy')))
               AS full_day,
           last_day (from_unixtime (UNIX_TIMESTAMP (reading_date_v2, 'ddMMMyy')))
              AS last_day_of_month,
           date_add ( (from_unixtime (UNIX_TIMESTAMP (reading_date_v2, 'ddMMMyy'))),10)
              AS added_days
FROM elec_days
ORDER BY proper_date;
 