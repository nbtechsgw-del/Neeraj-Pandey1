-- SQL Training Module 4: Functions
USE sql_training;

-- STRING FUNCTIONS
SELECT UPPER(employee_name) AS upper_name FROM employees;
SELECT LOWER(employee_name) AS lower_name FROM employees;
SELECT CONCAT(employee_name, ' - ', department) AS employee_info FROM employees;
SELECT SUBSTRING(employee_name, 1, 3) AS short_name FROM employees;
SELECT TRIM('   SQL Training   ') AS trimmed_text;

-- NUMERIC FUNCTIONS
SELECT ROUND(4567.891, 2) AS rounded_value;
SELECT ABS(-25) AS absolute_value;
SELECT CEIL(12.3) AS ceiling_value;
SELECT FLOOR(12.9) AS floor_value;

-- DATE/TIME FUNCTIONS (MySQL)
SELECT NOW() AS current_datetime;
SELECT DATEDIFF('2026-12-31', '2026-01-01') AS days_difference;
SELECT EXTRACT(YEAR FROM joining_date) AS joining_year
FROM employees;

-- SQL Server equivalent of date addition:
-- SELECT DATEADD(day, 10, GETDATE());

-- PostgreSQL date addition:
-- SELECT CURRENT_DATE + INTERVAL '10 days';

-- AGGREGATE FUNCTIONS
SELECT COUNT(*) AS total_employees FROM employees;
SELECT SUM(salary) AS total_salary FROM employees;
SELECT AVG(salary) AS average_salary FROM employees;
SELECT MIN(salary) AS minimum_salary FROM employees;
SELECT MAX(salary) AS maximum_salary FROM employees;
