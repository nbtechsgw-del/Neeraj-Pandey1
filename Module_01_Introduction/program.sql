-- SQL Training Module 1: Introduction to Databases & SQL
-- These are introductory notes and runnable examples.

-- 1. RDBMS example: tables with rows and columns.
-- Common RDBMS: MySQL, PostgreSQL, Oracle, SQL Server.

-- 2. Create a sample database (MySQL syntax)
CREATE DATABASE IF NOT EXISTS sql_training;
USE sql_training;

-- 3. Create a sample table
CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    email VARCHAR(150)
);

-- 4. Insert sample data
INSERT INTO students (student_id, student_name, email) VALUES
(1, 'Rahul', 'rahul@example.com'),
(2, 'Priya', 'priya@example.com');

-- 5. Read data
SELECT * FROM students;

-- SQL is used for creating, reading, updating and deleting relational data.
-- Note: SQL syntax varies by database vendor.
