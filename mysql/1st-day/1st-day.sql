CREATE DATABASE college;

USE college;

CREATE TABLE subjects
(
	id INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(25)
);

DESCRIBE subjects;

CREATE TABLE students
(
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    homeroom_id INT
);