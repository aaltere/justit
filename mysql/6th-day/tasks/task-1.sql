CREATE DATABASE course;

USE course;

CREATE TABLE instructors(
	instructor_id INT PRIMARY KEY,
    instructor_name VARCHAR(15)
);

CREATE TABLE trainers(
	trainer_id INT PRIMARY KEY,
    trainer_name VARCHAR(15),
    trainer_age INT
);

INSERT INTO instructors(
	instructor_id,
    instructor_name
)
VALUES
	(2, 'Mark'),
    (1, 'Abdul'),
    (3, 'Matt'),
    (4, 'Sandra');
    
INSERT INTO trainers(
	trainer_id,
    trainer_name,
    trainer_age
)
VALUES
	(1, 'Abdul', 32),
    (2, 'Zak', 26),
    (3, 'Waqas', 36);
 
SELECT
	*
FROM
	trainers
		INNER JOIN
	instructors ON instructor_name = trainer_name; 

SELECT
	*
FROM
	trainers
		LEFT JOIN
	instructors ON instructor_name = trainer_name;