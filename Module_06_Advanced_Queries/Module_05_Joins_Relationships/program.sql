-- SQL Training Module 5: Joins & Relationships
USE sql_training;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50) UNIQUE
);

INSERT INTO departments VALUES
(1, 'IT'), (2, 'HR'), (3, 'Sales'), (4, 'Finance');

ALTER TABLE employees ADD COLUMN department_id INT;

UPDATE employees SET department_id = 1 WHERE department = 'IT';
UPDATE employees SET department_id = 2 WHERE department = 'HR';
UPDATE employees SET department_id = 3 WHERE department = 'Sales';

-- INNER JOIN
SELECT e.employee_name, e.salary, d.department_name
FROM employees e
INNER JOIN departments d
ON e.department_id = d.department_id;

-- LEFT JOIN
SELECT e.employee_name, d.department_name
FROM employees e
LEFT JOIN departments d
ON e.department_id = d.department_id;

-- RIGHT JOIN
SELECT e.employee_name, d.department_name
FROM employees e
RIGHT JOIN departments d
ON e.department_id = d.department_id;

-- FULL JOIN is not directly supported by MySQL.
-- Standard approach using UNION:
SELECT e.employee_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id
UNION
SELECT e.employee_name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;

-- SELF JOIN example
SELECT e1.employee_name AS employee1, e2.employee_name AS employee2
FROM employees e1
JOIN employees e2
ON e1.department_id = e2.department_id
AND e1.employee_id < e2.employee_id;

-- CROSS JOIN
SELECT e.employee_name, d.department_name
FROM employees e
CROSS JOIN departments d;

-- Aliases
SELECT e.employee_name AS name, e.salary AS monthly_salary
FROM employees AS e;
