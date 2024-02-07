CREATE DATABASE company;

USE company;

CREATE TABLE departments (
	department_id INT PRIMARY KEY,
    department_name VARCHAR(25) NOT NULL,
    department_location VARCHAR(25) NOT NULL
);

CREATE TABLE employees (
	employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(50) NOT NULL,
    employee_job VARCHAR(25) NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

ALTER TABLE employees AUTO_INCREMENT = 100;

INSERT INTO departments (
	department_id,
    department_name,
    department_location
)
VALUES
	(10, "Sales", "Chicago"),
    (20, "Sales", "Chicago"),
    (30, "Finance", "New York");
    
INSERT INTO employees (
	employee_name,
    employee_job,
    department_id
)
VALUES
	("A", "Salesman", 10),
    ("B", "Manager", 10),
    ("C", "Manager", 20);
    
SELECT * FROM departments;

SELECT * FROM employees;