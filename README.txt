SQL TRAINING - 11 MODULE PROGRAMS
=================================

This ZIP contains runnable practice SQL programs for all 11 modules.

Database used in examples:
- MySQL 8.x syntax is the primary target.
- Some examples include comments showing PostgreSQL / SQL Server differences.

MODULES
-------
01 Introduction to Databases & SQL
02 SQL Basics
03 Querying Data
04 Functions
05 Joins & Relationships
06 Advanced Queries
07 Grouping & Aggregation
08 Constraints & Indexing
09 Views & Stored Objects
10 Transactions & Security
11 Performance Optimization

HOW TO RUN
----------
1. Install MySQL Server and MySQL Workbench (or use another MySQL client).
2. Open each program.sql file in MySQL Workbench.
3. Run Module 01 first.
4. Then run Modules 02 through 11 in order because later modules reuse tables created earlier.
5. Read the comments inside each SQL file for explanations and database-specific notes.

IMPORTANT
---------
- Some statements such as DROP TABLE, DROP VIEW, DROP PROCEDURE and security commands can modify your database.
- Security commands are commented out intentionally. Run them only if you understand user privileges.
- FULL OUTER JOIN is not directly supported by MySQL; the Module 05 file demonstrates a UNION-based approach.
- DATEADD is SQL Server syntax; MySQL uses functions such as DATE_ADD().
- ROLLUP and CUBE support varies by database system.

PRACTICE TASKS
--------------
After completing each module, try changing:
- employee names and salaries
- departments
- WHERE conditions
- JOIN conditions
- GROUP BY columns
- aggregate functions
- indexes
- transaction operations

Recommended learning order:
DDL -> DML -> SELECT -> WHERE -> Functions -> JOIN -> GROUP BY
-> Subqueries/CTEs -> Constraints -> Views/Procedures -> Transactions
-> Performance.
