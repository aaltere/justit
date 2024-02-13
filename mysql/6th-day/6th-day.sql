-- union
-- when you have a seperated table for each month report

-- generate yearly report / quarterly report
-- order products

CREATE DATABASE uniondb;

USE unionDB;

CREATE TABLE employees(
	id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE managers(
	id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

INSERT INTO employees(
	id,
    name
)
VALUES
	(1, 'Adam'),
    (2, 'Sarah'),
	(3, 'Gabril'),
	(4, 'Pratish'),
    (5, 'Yasin'),
    (6, 'Adriana');
    
INSERT INTO managers(
	id,
    name
)
VALUES
	(1, 'Adam'),
    (2, 'Sarah'),
    (3, 'Gabril'),
    (4, 'Pratish'),
    (5, 'Calum'),
    (6, 'Adriana');

SELECT
	id,
    name
FROM
	employees;
    
SELECT
	id,
    name
FROM
	managers;
    
-- display list of all employees
    
SELECT
	id,
    name
FROM
	employees
UNION ALL
SELECT
	id,
    name
FROM
	managers;
    
USE world;

SELECT
	countries.name,
    cities.name
FROM
	countries
		INNER JOIN
	cities ON countries.code = cities.country_code;
    
USE company;

SELECT
	fname,
    lname,
    dname
FROM
	employee
		INNER JOIN
	department ON dno = dnumber;
    
CREATE DATABASE joindb;

USE joindb;

CREATE TABLE employees
(
	employee_number INT PRIMARY KEY,
    employee_name VARCHAR(10),
    department_number INT
);

CREATE TABLE departments
(
	department_number INT PRIMARY KEY,
    department_name VARCHAR(30),
    location VARCHAR(20)
);

ALTER TABLE employees ADD FOREIGN KEY (department_number)
	REFERENCES departments(department_number);

INSERT INTO employees(
	employee_number,
    employee_name,
    department_number
)
VALUES
	(1, 'Beautriz', 1),
    (2, 'Zak', 2),
    (3, 'Matt', 2),
    (4, 'Waqas', 2),
    (5, 'Mark', 3),
    (6, 'John', NULL);
    
INSERT INTO departments(
	department_number,
    department_name,
    location
)
VALUES
	(1, 'HR', 'London'),
    (2, 'Software', 'London'),
    (3, 'IT', 'Manchester');