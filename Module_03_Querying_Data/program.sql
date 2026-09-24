-- SQL Training Module 3: Querying Data
USE sql_training;

-- Sample data
SELECT * FROM employees;

-- WHERE
SELECT * FROM employees
WHERE department = 'IT';

-- Comparison operators
SELECT * FROM employees
WHERE salary > 40000;

-- AND
SELECT * FROM employees
WHERE department = 'IT' AND salary > 40000;

-- OR
SELECT * FROM employees
WHERE department = 'IT' OR department = 'HR';

-- NOT
SELECT * FROM employees
WHERE NOT department = 'Sales';

-- ORDER BY
SELECT * FROM employees
ORDER BY salary ASC;

SELECT * FROM employees
ORDER BY salary DESC;

-- DISTINCT
SELECT DISTINCT department
FROM employees;

-- IN
SELECT * FROM employees
WHERE department IN ('IT', 'HR');

-- BETWEEN
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 55000;

-- LIKE
SELECT * FROM employees
WHERE employee_name LIKE 'A%';

SELECT * FROM employees
WHERE employee_name LIKE '%a%';

-- IS NULL
SELECT * FROM employees
WHERE phone IS NULL;

-- IS NOT NULL
SELECT * FROM employees
WHERE phone IS NOT NULL;
