-- SQL Training Module 8: Constraints & Indexing
USE sql_training;

DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    age INT CHECK (age >= 18),
    city VARCHAR(50) DEFAULT 'Delhi'
);

INSERT INTO customers (customer_id, customer_name, email, age)
VALUES
(1, 'Anil', 'anil@example.com', 25),
(2, 'Sunita', 'sunita@example.com', 30);

-- Primary Key: uniquely identifies each row.
-- Foreign Key: references a key in another table.
ALTER TABLE employees
ADD CONSTRAINT fk_employee_department
FOREIGN KEY (department_id)
REFERENCES departments(department_id);

-- Index
CREATE INDEX idx_employee_department
ON employees(department_id);

CREATE INDEX idx_employee_salary
ON employees(salary);

-- View indexes (MySQL)
SHOW INDEX FROM employees;

-- Clustered vs non-clustered:
-- MySQL InnoDB organizes table data around the primary key.
-- SQL Server explicitly supports clustered and non-clustered indexes.
