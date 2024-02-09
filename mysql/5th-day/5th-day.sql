USE company;

SELECT
	fname AS first_name,
    lname AS last_name,
    salary,
    address
FROM
	employee;
    
-- display all employees whose fname is 'John', 'Jennifer', 'Ahmad', or 'Alicia'

SELECT
	*
FROM
	employee
WHERE
	fname = 'John'
OR fname = 'Jennifer'
OR fname = 'Ahmad'
OR fname = 'Alicia';

SELECT
	*
FROM
	employee
WHERE
	fname IN ('John', 'Jennifer', 'Ahmad', 'Alicia');
    
-- distinct - select unique data

SELECT
	DISTINCT salary
FROM
	employee;
    
-- aggregate functions

-- avg(), max(), min(), sum(), count()

-- what is the average salary in your company?

SELECT
	AVG(salary) AS average_salary
FROM
	employee;
    
-- how many employees are working in your company

SELECT
	COUNT(*) AS total_employees
FROM
	employee;
    
-- grouping data

SELECT
	sex,
	COUNT(*) AS 'employee_number'
FROM
	employee
WHERE
	sex IS NOT NULL
GROUP BY
	sex;
    
-- find out highest salary for each gender

SELECT
	sex,
	MAX(salary) AS 'max_salary'
FROM
	employee
WHERE
	sex IS NOT NULL
GROUP BY
	sex;
    
SELECT
	*
FROM
	employee
WHERE
	fname LIKE 'J%';