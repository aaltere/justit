CREATE DATABASE school;

USE school;

CREATE TABLE students (
	student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50) NOT NULL,
    class VARCHAR(15) NOT NULL,
    mark INT CHECK(mark >= 0 AND mark <= 100) NOT NULL,
    gender VARCHAR(6) CHECK(gender = 'male' OR gender = 'female') NOT NULL
    -- gender ENUM('female', 'male') - similar to above
);

INSERT INTO students (
	student_name,
    class,
    mark,
    gender
)
VALUES
	('John Deo', 'Four', 75, 'female'),
    ('Max Ruin', 'Three', 85, 'male'),
	('Arnold', 'Three', 55, 'male'),
    ('Krish Star', 'Four', 60, 'female'),
    ('John Mike', 'Four', 60, 'female'),
    ('Alex John', 'Four', 55, 'male'),
    ('My John Rob', 'Five', 78, 'male'),
    ('Asruid', 'Five', 85, 'male'),
    ('Tes Qry', 'Six', 78, 'male'),
    ('Big John', 'Four', 55, 'female');
    
SELECT * FROM students;

UPDATE 
	students 
SET 
	student_name = 'James',
    class = 'Two',
    mark = 70
WHERE 
	student_id = 10;