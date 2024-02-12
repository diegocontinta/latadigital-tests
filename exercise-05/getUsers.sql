--
-- This query get all emails of users that to start with A
--

SELECT * FROM users WHERE UPPER(first_name) LIKE 'A%';