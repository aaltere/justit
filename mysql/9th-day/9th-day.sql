/*
 * change delimiter
 * CREATE PROCEDURE procedure_name(optional parameter)
 * BEGIN
 *		  statement
 * END delimiter
 */
 
USE company;
 
DELIMITER ££

CREATE PROCEDURE all_employee()
BEGIN
	SELECT
		*
	FROM
		employee;
END ££

CALL all_employee();

DELIMITER $$

-- IN, OUT, INOUT for parameter types

CREATE PROCEDURE employee(IN first_name VARCHAR(20))
BEGIN
	SELECT
		*
	FROM
		employee
	WHERE
		fname = first_name;
END $$

CALL employee("Alicia");