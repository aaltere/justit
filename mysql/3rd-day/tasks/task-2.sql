CREATE DATABASE company;

USE company;

CREATE TABLE employees (
	first_name VARCHAR(25) NOT NULL,
    minit VARCHAR(1),
    last_name VARCHAR(25) NOT NULL,
    ssn VARCHAR(10) PRIMARY KEY,
    dob DATE,
    address VARCHAR(10),
    sex ENUM('Male', 'Female'),
    salary INT,
    supervisor_ssn VARCHAR(15) NOT NULL,
    department_number INT
);

CREATE TABLE departments (
	department_name VARCHAR(25) NOT NULL,
    department_number INT PRIMARY KEY,
    manager_ssn VARCHAR(10),
    manager_start_date DATE
);

CREATE TABLE department_locations (
	department_number INT,
    department_location VARCHAR(25),
    PRIMARY KEY (department_number, department_location)
);

CREATE TABLE projects (
	project_name VARCHAR(25) NOT NULL,
    project_number INT PRIMARY KEY,
    project_location VARCHAR(25),
    department_number INT
);

CREATE TABLE works_on (
	employee_ssn VARCHAR(10),
    project_number INT,
    hours INT,
    PRIMARY KEY (employee_ssn, project_number)
);

CREATE TABLE dependents (
	employee_ssn VARCHAR(10),
    dependent_name VARCHAR(50) NOT NULL,
    sex ENUM('Male', 'Female'),
    dob DATE,
    relationship VARCHAR(15) NOT NULL
);

ALTER TABLE employees ADD FOREIGN KEY (supervisor_ssn)
	REFERENCES employees(ssn);
ALTER TABLE employees ADD FOREIGN KEY (department_number)
	REFERENCES departments(department_number);
ALTER TABLE department_locations ADD FOREIGN KEY (department_number)
	REFERENCES departments(department_number);
ALTER TABLE projects ADD FOREIGN KEY (department_number)
	REFERENCES departments(department_number);
ALTER TABLE works_on ADD FOREIGN KEY (employee_ssn)
	REFERENCES employees(ssn);
ALTER TABLE works_on ADD FOREIGN KEY (project_number)
	REFERENCES projects(project_number);
ALTER TABLE dependents ADD FOREIGN KEY (employee_ssn)
	REFERENCES employees(ssn);