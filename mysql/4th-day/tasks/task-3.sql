-- select an employee who is receiving highest salary

SELECT
	*
FROM
	employee
ORDER BY
	salary DESC
LIMIT 1;

-- select an employee who is receiving lowest salary

SELECT
	*
FROM
	employee
WHERE
	salary IS NOT NULL
ORDER BY
	salary
LIMIT 1;

-- select top five employees who are receiving the highest salary

SELECT
	*
FROM
	employee
ORDER BY
	salary
LIMIT 5;

-- select employee who is receiving the second lowest salary

SELECT
	*
FROM
	employee
WHERE
	salary IS NOT NULL
ORDER BY
	salary
LIMIT 1, 1;

-- select female employee who is receiving highest salary

SELECT
	*
FROM
	employee
WHERE
	sex = 'F'
ORDER BY
	salary DESC
LIMIT 1;

-- select male employee who is receiving lowest salary

SELECT
	*
FROM
	employee
WHERE
	salary IS NOT NULL
AND sex = 'm'
ORDER BY
	salary
LIMIT 1;