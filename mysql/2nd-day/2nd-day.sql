CREATE DATABASE college;

USE college;

-- SELECT DATABASE(); - show the current seleccted database

CREATE TABLE students (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50) NOT NULL,
    student_age INT CHECK(student_age >= 18),
    student_location VARCHAR(25) DEFAULT 'London'
);

DESCRIBE students;

-- inserting data

INSERT INTO students (
	student_name,
    student_age,
    student_location
)
VALUES (
	'Matt',
    25,
    'Manchester'
);

INSERT INTO students (
	student_name,
    student_age,
    student_location
)
VALUES (
	'Mark',
    19,
    'Leeds'
);

INSERT INTO students (
	student_name,
    student_age
)
VALUES (
	'Ahmad',
    25
);

SELECT * FROM students;

-- foreign key

CREATE DATABASE world;

USE world;

CREATE TABLE countries (
	id INT PRIMARY KEY,
    country_name VARCHAR(25) NOT NULL
);

CREATE TABLE cities (
	city_id INT PRIMARY KEY,
    city_name VARCHAR(25) NOT NULL,
    country_id INT,
    FOREIGN KEY (country_id) REFERENCES countries(id)
);

-- update data

-- UPDATE table_name SET column_name = value WHERE condition;