-- SQL Training Module 2: SQL Basics
-- MySQL-compatible examples

CREATE DATABASE IF NOT EXISTS sql_training;
USE sql_training;

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    joining_date DATE,
    is_active BOOLEAN
);

-- INSERT
INSERT INTO employees
(employee_id, employee_name, department, salary, joining_date, is_active)
VALUES
(101, 'Amit', 'IT', 45000.00, '2024-01-15', TRUE),
(102, 'Neha', 'HR', 40000.00, '2024-03-10', TRUE),
(103, 'Ravi', 'IT', 55000.00, '2023-08-20', TRUE),
(104, 'Pooja', 'Sales', 38000.00, '2025-02-01', FALSE);

-- SELECT
SELECT * FROM employees;

SELECT employee_name, salary FROM employees;

-- UPDATE
UPDATE employees
SET salary = 48000
WHERE employee_id = 101;

-- DELETE
DELETE FROM employees
WHERE employee_id = 104;

-- ALTER TABLE
ALTER TABLE employees ADD COLUMN phone VARCHAR(15);

-- DROP COLUMN (run only if needed)
-- ALTER TABLE employees DROP COLUMN phone;

-- DROP TABLE (destructive; kept commented)
-- DROP TABLE employees;
