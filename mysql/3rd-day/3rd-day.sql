-- delete vs truncate vs drop

USE college;

SELECT * FROM students;

INSERT INTO students (
	student_name,
    student_age,
    student_location
)
VALUES
	('Matt', 30, 'Birmingham'),
    ('John', 20, 'London'),
    ('Aaron', 25, 'Birmingham'),
    ('Callum', 30, 'London'),
    ('Mark', 23, 'Leed');
    
DELETE FROM 
	students
WHERE
	student_name = 'Matt'
AND student_location = 'Manchester';

DELETE FROM
	students
WHERE
	student_name = 'Mark';
    
-- truncate table_name

-- data deleted with delete can be rolled back but not data deleted with truncate
-- delete can delete specific data while truncate delete all data

-- drop table table_name;
-- drop database database_name;

DELETE FROM
	employees
WHERE
	name = 'Tim' 
OR (
	id = 2
	AND date_of_birth != '1990-06-01'
);

-- alter command
-- delete, rename, change the data type, and add column
-- rename table, add and delete primary / foreign key

ALTER TABLE students ADD COLUMN dob DATE;
    
DESCRIBE students;

ALTER TABLE students DROP COLUMN dob;

ALTER TABLE students MODIFY COLUMN student_location VARCHAR(30);

ALTER TABLE students RENAME COLUMN student_name TO first_name;

-- ALTER TABLE students RENAME TO learners;

ALTER TABLE students MODIFY COLUMN student_id INT;

ALTER TABLE students DROP PRIMARY KEY;

ALTER TABLE students ADD PRIMARY KEY (student_id);

ALTER TABLE students MODIFY COLUMN student_id INT AUTO_INCREMENT;

CREATE TABLE countries (
	id INT PRIMARY KEY,
    country_name VARCHAR(25) NOT NULL
);

CREATE TABLE cities (
	id INT PRIMARY KEY,
    city_name VARCHAR(25) NOT NULL,
    country_id INT
);

DESCRIBE cities;

-- add foreign key through alter table

ALTER TABLE cities ADD FOREIGN KEY (country_id) REFERENCES countries(id);

-- creating complex database

CREATE DATABASE world;

USE world;

-- first create all tables with primary key
-- once they are created, add foreign keys using alter command

CREATE TABLE countries (
	code INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    continent VARCHAR(15),
    population INT,
    capital INT
);

CREATE TABLE cities (
	id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    country_code INT,
    population INT
);

CREATE TABLE country_languages (
	country_code INT,
    language VARCHAR(30),
    is_official BOOLEAN,
    percentage DECIMAL(4, 1),
    PRIMARY KEY(country_code, language)
);

ALTER TABLE
	countries
ADD FOREIGN KEY (capital)
REFERENCES cities(id);

ALTER TABLE
	cities
ADD FOREIGN KEY (country_code)
REFERENCES countries(code);

ALTER TABLE
	country_languages
ADD FOREIGN KEY (country_code)
REFERENCES countries(code);