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
UNION
SELECT
	id,
    name
FROM
	managers;