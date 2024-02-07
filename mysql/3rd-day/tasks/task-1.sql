CREATE DATABASE report;

USE report;

CREATE TABLE articles (
	id INT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    text TEXT,
    publish_status ENUM('Unpublished', 'Published', 'Published & Changes') NOT NULL,
    topic VARCHAR(50),
    author VARCHAR(15),
    publication_date DATE
);

CREATE TABLE topics (
	name VARCHAR(50) PRIMARY KEY,
    description TEXT
);

CREATE TABLE authors (
	username VARCHAR(15) PRIMARY KEY,
    display_name VARCHAR(50)
);

CREATE TABLE courses (
	short_name VARCHAR(25) PRIMARY KEY,
    full_name VARCHAR(50)
);

CREATE TABLE relevant_for (
	article_id INT,
    course VARCHAR(25),
    PRIMARY KEY (article_id, course)
);

ALTER TABLE 
	articles 
ADD FOREIGN KEY (topic)
REFERENCES topics(name);

ALTER TABLE 
	articles 
ADD FOREIGN KEY (author)
REFERENCES authors(username);

ALTER TABLE 
	relevant_for 
ADD FOREIGN KEY (article_id)
REFERENCES articles(id);

ALTER TABLE 
	relevant_for 
ADD FOREIGN KEY (course)
REFERENCES courses(short_name);