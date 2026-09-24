-- SQL Training Module 7: GROUP BY, HAVING, ROLLUP
USE sql_training;

-- GROUP BY
SELECT department_id, COUNT(*) AS employee_count
FROM employees
GROUP BY department_id;

-- SUM and AVG by department
SELECT department_id,
       COUNT(*) AS total_employees,
       SUM(salary) AS total_salary,
       AVG(salary) AS average_salary
FROM employees
GROUP BY department_id;

-- HAVING
SELECT department_id, AVG(salary) AS average_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 40000;

-- ROLLUP (MySQL)
SELECT department_id, SUM(salary) AS total_salary
FROM employees
GROUP BY department_id WITH ROLLUP;

-- CUBE example for databases that support it (PostgreSQL/SQL Server syntax differs):
-- SELECT department_id, is_active, SUM(salary)
-- FROM employees
-- GROUP BY CUBE(department_id, is_active);

-- Difference:
-- WHERE filters rows before grouping.
-- HAVING filters groups after GROUP BY.
