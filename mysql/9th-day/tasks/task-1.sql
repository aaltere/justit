-- create a procedure which will delete and employee whose name you are passing as argument
-- show the table after changes

DELIMITER $$

CREATE PROCEDURE delete_employee(IN first_name VARCHAR(25))
BEGIN
	DELETE FROM
		employee
	WHERE
		fname = first_name;
        
	SELECT
		*
	FROM
		employee;
END $$

-- create a procedure which will display an employee record whose first name and last name you are passing as argument

DELIMITER $$

CREATE PROCEDURE display_employee(IN first_name VARCHAR(25), IN last_name VARCHAR(25))
BEGIN
	SELECT
		*
	FROM
		employee
	WHERE
		fname = first_name
	AND lname = last_name;
END $$

DROP PROCEDURE delete_employee;

CALL display_employee('John', 'Smith');

-- 

DELIMITER $$

CREATE PROCEDURE update_employee(IN first_name VARCHAR(25), IN last_name VARCHAR(25), IN field_name VARCHAR(25), IN new_value VARCHAR(25))
BEGIN
	UPDATE 
		employee
	SET 
		field_name = new_value
	WHERE
		fname = first_name
	AND lname = last_name;
END $$

CALL update_employee('John', 'Smith', lname, 'Smith2');

-- display all employees who work in a department which you pass argument to a procedure

DELIMITER $$

CREATE PROCEDURE display_employees(IN department_name VARCHAR(25))
BEGIN
	SELECT
		dname,
		fname,
        lname,
        ssn,
        salary
	FROM
		employee
			INNER JOIN
		department ON dno = dnumber
	WHERE
		dname = department_name;
END $$

CALL display_employees('Research');

SELECT
	*
FROM
	department;