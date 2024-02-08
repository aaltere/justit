CREATE DATABASE article;

USE article;

CREATE TABLE users (
	id_user INT PRIMARY KEY,
    id_group INT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    email VARCHAR(50) UNIQUE,
    pass BOOLEAN,
    about TEXT,
    id_sch INT,
    id_cal INT
);

CREATE TABLE topics (
	id_topic INT PRIMARY KEY,
    id_user INT,
    date_modified DATE,
    title VARCHAR(50)
);

CREATE TABLE posts (
	id_post INT PRIMARY KEY,
    id_topic INT,
    id_user INT,
    date_created DATE,
    body TEXT
);

CREATE TABLE user_groups (
	id_group INT PRIMARY KEY,
    title VARCHAR(50) NOT NULL
);

CREATE TABLE schedules (
	id_sch INT PRIMARY KEY,
    time_start TIME,
    time_end TIME,
    weekday VARCHAR(10),
    title VARCHAR(50)
);

CREATE TABLE calendar (
	id_cal INT PRIMARY KEY,
    date_start DATE,
    date_end DATE,
    title VARCHAR(50)
);

CREATE TABLE files (
	id_file INT PRIMARY KEY,
    id_user INT,
    date_modified DATE,
    title VARCHAR(50),
    file_name VARCHAR(50)
);

CREATE TABLE pages (
	id_page INT PRIMARY KEY,
    id_user INT,
    date_modified DATE,
    title VARCHAR(50),
    body TEXT,
    is_home BOOLEAN
);

ALTER TABLE users ADD FOREIGN KEY (id_group)
	REFERENCES user_groups(id_group);
ALTER TABLE users ADD FOREIGN KEY (id_sch)
	REFERENCES schedules(id_sch);
ALTER TABLE users ADD FOREIGN KEY (id_cal)
	REFERENCES calendar(id_cal);
ALTER TABLE topics ADD FOREIGN KEY (id_user)
	REFERENCES users(id_user);
ALTER TABLE posts ADD FOREIGN KEY (id_topic)
	REFERENCES topics(id_topic);
ALTER TABLE posts ADD FOREIGN KEY (id_user)
	REFERENCES users(id_user);
ALTER TABLE pages ADD FOREIGN KEY (id_user)
	REFERENCES users(id_user);
ALTER TABLE files ADD FOREIGN KEY (id_user)
	REFERENCES users(id_user);

