-- cross join returns all row
-- inner join and cross join are similar

USE course;

SELECT
	*
FROM
	instructors
		CROSS JOIN
	trainers;
    
-- in self join we should rename the table

USE company;

SELECT
	CONCAT(e.fname, ' ', e.lname) AS employee_name,
    CONCAT(m.fname, ' ', m.lname) AS manager_name
FROM
	employee AS e
		INNER JOIN
	employee AS m ON m.ssn = e.superssn;
    
-- string methods

SELECT
	CONCAT(fname, ' ', lname) AS employee_name,
    CONCAT('£ ', salary + 1000, ' including 1000 bonus') AS 'salary'
FROM
	employee;
    
SELECT
	LTRIM('                     Zak               ') AS name;
    
SELECT
	UCASE(fname) AS first_name,
    UCASE(lname) AS last_name
FROM
	employee;
    
SELECT
	UCASE(CONCAT(fname, ' ', lname)) AS employee_name
FROM
	employee;
    
SELECT current_user();  -- who inserted, deleted, updated the data

SELECT
	SUBSTRING('Database', 1, 4);
    
SELECT NOW();

SELECT CURDATE();

SELECT CURTIME();

SELECT DAYNAME(CURDATE());

SELECT MONTHNAME('2024-01-20');

SELECT YEAR(CURRENT_DATE());

SELECT
	CONCAT(DAYNAME(CURDATE()), ', ', DAY(CURDATE()), ' ', MONTHNAME(CURDATE()), ' ', YEAR(CURDATE())) AS today;