-- display maximum and minimum salary for employees

SELECT
	max(salary) AS max_salary,
    min(salary) AS min_salary
FROM
	employee;
    
-- display maximum and minimum salary for male employees

SELECT
	max(salary) AS max_salary_male,
    min(salary) AS min_salary_male
FROM
	employee
WHERE
	sex = 'M';