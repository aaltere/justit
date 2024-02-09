-- select all employees whose name has 'h' as the second character

SELECT
	*
FROM
	employee
WHERE
	fname LIKE '_h%';
    
-- select employees who has 'me' in their first name

SELECT
	*
FROM
	employee
WHERE
	fname LIKE '%me%';
    
-- select employees whose first name can be anything but should have oh after the first character

SELECT
	*
FROM
	employee
WHERE
	fname LIKE '_oh%';
    
-- select record of employee who is born in 1965

SELECT
	*
FROM
	employee
WHERE
	YEAR(bdate) = 1965;
    
-- display all employees whose first name starts with A and ends with d

SELECT
	*
FROM
	employee
WHERE
	fname LIKE 'A%d';
    
-- display all employees whose first name starts with J and does not end with n

SELECT
	*
FROM
	employee
WHERE
	fname LIKE 'J%'
AND fname NOT LIKE '%n';