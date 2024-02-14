CREATE DATABASE company2;

USE company2;

CREATE TABLE employees(
	employee_number INT PRIMARY KEY,
    employee_name VARCHAR(15) NOT NULL,
    department_number INT
);

CREATE TABLE departments(
	department_number INT PRIMARY KEY,
    department_name VARCHAR(25) NOT NULL,
    location VARCHAR(25)
);

ALTER TABLE employees ADD FOREIGN KEY (department_number)
	REFERENCES departments(department_number) ON DELETE SET NULL;
    
INSERT INTO departments(
	department_number,
    department_name,
    location
)
VALUES
	(101, 'HR', 'Delhi'),
    (102, 'Sales', 'Bangalore'),
    (103, 'Marketing Executive', 'Hyderabad'),
    (104, 'Technical Engineer', 'Chennai');
    
INSERT INTO employees(
	employee_number,
    employee_name,
    department_number
)
VALUES
	(1001, 'Sahil', 101),
    (1004, 'Kavish', 102),
    (1006, 'Aditya', 103),
    (1005, 'Atul', 104);