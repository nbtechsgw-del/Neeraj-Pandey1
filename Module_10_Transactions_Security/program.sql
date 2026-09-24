-- SQL Training Module 10: Transactions & Security
USE sql_training;

-- Transaction example
START TRANSACTION;

UPDATE employees
SET salary = salary + 1000
WHERE employee_id = 101;

-- Check before committing
SELECT * FROM employees WHERE employee_id = 101;

COMMIT;

-- ROLLBACK example
START TRANSACTION;

UPDATE employees
SET salary = salary + 5000
WHERE employee_id = 102;

ROLLBACK;

-- SAVEPOINT example
START TRANSACTION;

UPDATE employees SET salary = salary + 500 WHERE employee_id = 101;
SAVEPOINT salary_change;

UPDATE employees SET salary = salary + 1000 WHERE employee_id = 102;

ROLLBACK TO SAVEPOINT salary_change;

COMMIT;

-- ACID:
-- Atomicity, Consistency, Isolation, Durability.

-- SECURITY EXAMPLES (run with an account that has administrative privileges)
-- CREATE USER 'training_user'@'localhost' IDENTIFIED BY 'StrongPassword123!';
-- GRANT SELECT, INSERT, UPDATE ON sql_training.* TO 'training_user'@'localhost';
-- REVOKE UPDATE ON sql_training.* FROM 'training_user'@'localhost';

-- Basic security:
-- 1. Use strong passwords.
-- 2. Give users only required privileges.
-- 3. Use parameterized queries in applications.
-- 4. Do not store passwords as plain text.
-- 5. Back up databases regularly.
