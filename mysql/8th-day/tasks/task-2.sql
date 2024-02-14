SELECT
	CONCAT(fname, ' ', lname) AS employee_name,
    salary,
    CASE
		WHEN salary BETWEEN 1000 AND 19000 THEN salary + 1000
        WHEN salary BETWEEN 20000 AND 29000 THEN salary + 2000
        WHEN salary BETWEEN 30000 AND 39000 THEN salary + 3000
        WHEN salary BETWEEN 40000 AND 49000 THEN salary + 4000
        WHEN salary BETWEEN 50000 AND 59000 THEN salary + 5000
        ELSE 'Not eligible for bonus'
	END AS salary_with_bonus
FROM
	employee;
    
SELECT
	*
FROM
	department;
    
SELECT
	CONCAT(fname, ' ', lname) AS employee_name,
    salary,
    dname,
    CASE
		WHEN dname = 'Headquarters' THEN salary + 10000
        WHEN dname = 'Administration' THEN salary + 2000
        WHEN dname = 'Research' THEN salary + 5000
	END AS salary_with_bonus
FROM
	employee
		INNER JOIN
	department ON dno = dnumber;