SELECT CURRENT_USER();

SELECT MONTHNAME(CURDATE());
SELECT DATE_FORMAT(CURDATE(), '%M');

SELECT DAYNAME(CURDATE());

SELECT CURDATE();

SELECT CURTIME();

SELECT YEAR(CURTIME());

SELECT CURRENT_TIMESTAMP();

USE company;

SELECT 
	UCASE(fname)
FROM
	employee;
    
-- on delete cascade
-- on delete set null

DROP DATABASE world;

CREATE DATABASE world;

USE world;

CREATE TABLE countries(
	id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE cities(
	city_id INT PRIMARY KEY,
    name VARCHAR(15) NOT NULL,
    country_id INT
);

ALTER TABLE cities ADD FOREIGN KEY (country_id)
	REFERENCES countries(id) ON DELETE CASCADE; -- or on delete set null (only remove links)
    
INSERT INTO countries(
	id,
    name
)
VALUES
	(1, 'UK'),
    (2, 'USA'),
    (3, 'Germany');
    
INSERT INTO cities(
	city_id,
    name,
    country_id
)
VALUES
	(1, 'London', 1),
    (2, 'Manchester', 1),
    (3, 'New York', 2),
    (4, 'Berlin', 3);
    
-- rollback
-- for when you deleted data by acident
-- restore backup

USE world;

SET autocommit = 0;

SELECT
	*
FROM
	countries;
    
DELETE FROM
	countries
WHERE
	name = 'UK';
    
ROLLBACK;

COMMIT;

-- you cannot rollback if truncate was used

-- case expression

USE company;

SELECT
	fname,
    lname,
    salary,
    CASE
		WHEN
			salary = 25000 THEN salary + 2500
		ELSE 'Not Eligible for bonus'
	END AS 'new salary'
FROM
	employee;
    
SELECT
	fname,
    lname,
    CASE
		WHEN sex = 'F' THEN 'Female'
		WHEN sex = 'M' THEN 'Male'
		ELSE 'Other'
	END AS 'gender'
FROM
	employee;
    
USE uniondb;

CREATE TABLE loginfo(
	message TEXT NOT NULL
);

/*
 * CREATE TRIGGER my_trigger BEFORE | AFTER INSERT | DELETE | UPDATE
 * ON table_name
 * FOR EACH ROW
 * BEGIN
 * code statement;
 * END$$
 */

DELIMITER $$

CREATE TRIGGER delete_data AFTER DELETE ON employees FOR EACH ROW
BEGIN
	INSERT INTO loginfo(
		message
	)
    VALUES
		(CONCAT(OLD.name, ' was deleted by ', CURRENT_USER(), ' on ', CURRENT_TIMESTAMP()));
END$$

SELECT
	*
FROM
	loginfo;
    
SET SQL_SAFE_UPDATES = 0;
    
DELETE FROM
	employees
WHERE
	name = 'Sarah';