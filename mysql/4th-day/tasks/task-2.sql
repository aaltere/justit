-- display all employees who receive more than 30000 salary

SELECT
	*
FROM
	employee
WHERE
	salary > 30000;
    
-- display all male employees who receive less than 30000 salary

SELECT
	*
FROM
	employee
WHERE
	sex = 'M'
AND salary < 30000;

-- display all male and female empoyees who receive less than 30000 salary

SELECT
	*
FROM
	employee
WHERE
	salary < 30000;
    
-- display all employees who receive salary
    
SELECT
	*
FROM
	employee
WHERE
	salary IS NOT NULL;