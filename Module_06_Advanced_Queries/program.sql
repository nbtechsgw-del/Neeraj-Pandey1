-- SQL Training Module 6: Advanced Queries
USE sql_training;

-- Single-row subquery
SELECT *
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Multi-row subquery
SELECT *
FROM employees
WHERE department_id IN (
    SELECT department_id
    FROM departments
    WHERE department_name IN ('IT', 'HR')
);

-- EXISTS
SELECT d.department_name
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department_id = d.department_id
);

-- IN vs EXISTS
SELECT * FROM employees
WHERE department_id IN (SELECT department_id FROM departments);

SELECT * FROM employees e
WHERE EXISTS (
    SELECT 1 FROM departments d
    WHERE d.department_id = e.department_id
);

-- ANY
SELECT * FROM employees
WHERE salary > ANY (
    SELECT salary FROM employees WHERE department_id = 2
);

-- ALL
SELECT * FROM employees
WHERE salary > ALL (
    SELECT salary FROM employees WHERE department_id = 2
);

-- Correlated subquery
SELECT e1.*
FROM employees e1
WHERE e1.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);

-- CTE
WITH high_salary AS (
    SELECT *
    FROM employees
    WHERE salary >= 45000
)
SELECT * FROM high_salary;

-- CTE with aggregation
WITH dept_salary AS (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT d.department_name, ds.avg_salary
FROM dept_salary ds
JOIN departments d ON d.department_id = ds.department_id;
