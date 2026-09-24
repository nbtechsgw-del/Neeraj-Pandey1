-- SQL Training Module 9: Views & Stored Objects
USE sql_training;

-- VIEW
DROP VIEW IF EXISTS it_employees;

CREATE VIEW it_employees AS
SELECT employee_id, employee_name, salary
FROM employees
WHERE department = 'IT';

SELECT * FROM it_employees;

-- Update a view definition
CREATE OR REPLACE VIEW employee_salary_view AS
SELECT employee_id, employee_name, salary
FROM employees;

-- STORED PROCEDURE (MySQL)
DROP PROCEDURE IF EXISTS GetEmployeesByDepartment;

DELIMITER //

CREATE PROCEDURE GetEmployeesByDepartment(IN dept_name VARCHAR(50))
BEGIN
    SELECT employee_id, employee_name, salary
    FROM employees
    WHERE department = dept_name;
END //

DELIMITER ;

CALL GetEmployeesByDepartment('IT');

-- STORED FUNCTION
DROP FUNCTION IF EXISTS AnnualSalary;

DELIMITER //

CREATE FUNCTION AnnualSalary(monthly_salary DECIMAL(10,2))
RETURNS DECIMAL(12,2)
DETERMINISTIC
BEGIN
    RETURN monthly_salary * 12;
END //

DELIMITER ;

SELECT employee_name, AnnualSalary(salary) AS annual_salary
FROM employees;

-- TRIGGER example
DROP TRIGGER IF EXISTS before_employee_insert;

DELIMITER //

CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;
END //

DELIMITER ;
