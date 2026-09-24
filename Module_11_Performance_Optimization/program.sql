-- SQL Training Module 11: Performance Optimization
USE sql_training;

-- 1. Inspect the query plan
EXPLAIN SELECT *
FROM employees
WHERE department_id = 1;

-- 2. Use an index for frequently filtered columns
CREATE INDEX idx_department_id
ON employees(department_id);

-- 3. Compare a query with/without unnecessary columns
SELECT employee_id, employee_name, salary
FROM employees
WHERE department_id = 1;

-- Avoid SELECT * in application queries when only a few columns are needed.

-- 4. Search by indexed column
SELECT *
FROM employees
WHERE employee_id = 101;

-- 5. Check indexes
SHOW INDEX FROM employees;

-- Optimization checklist:
-- * Use EXPLAIN/EXPLAIN ANALYZE where supported.
-- * Index columns used frequently in WHERE/JOIN/ORDER BY.
-- * Avoid unnecessary indexes because they increase write/storage cost.
-- * Return only required columns.
-- * Filter early where appropriate.
-- * Avoid functions on indexed columns when they prevent index use.
-- * Keep statistics updated according to the database system.
