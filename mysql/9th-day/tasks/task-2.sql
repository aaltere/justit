-- task 1

CREATE DATABASE garage;

USE garage;

CREATE TABLE members(
	member_id VARCHAR(10) PRIMARY KEY,
    member_fname VARCHAR(20),
    member_lname VARCHAR(20),
    member_location VARCHAR(20)
);

CREATE TABLE vehicles(
	vehicle_registration VARCHAR(10) PRIMARY KEY,
    vehicle_make VARCHAR(10),
    vehicle_model VARCHAR(10),
    member_id VARCHAR(10)
);

CREATE TABLE engineers(
	engineer_id INT PRIMARY KEY,
    engineer_fname VARCHAR(20),
    engineer_lname VARCHAR(20)
);

CREATE TABLE breakdowns(
	breakdown_id INT PRIMARY KEY,
    vehicle_registration VARCHAR(10),
    engineer_id INT,
    breakdown_date DATE,
    breakdown_time TIME,
    breakdown_location VARCHAR(20)
);

ALTER TABLE vehicles ADD FOREIGN KEY (member_id)
	REFERENCES members(member_id);
ALTER TABLE breakdowns ADD FOREIGN KEY (vehicle_registration)
	REFERENCES vehicles(vehicle_registration);
ALTER TABLE breakdowns ADD FOREIGN KEY (engineer_id)
	REFERENCES engineers(engineer_id);
    
-- task 2

INSERT INTO members(
	member_id,
    member_fname,
    member_lname,
    member_location
)
VALUES
	('1001', 'James', 'Brown', 'London'),
    ('1002', 'Robert', 'Williams', 'London'),
    ('1003', 'Michael', 'Davies', 'Reading'),
    ('1004', 'Charles', 'White', 'Portsmouth'),
    ('1005', 'Christopher', 'Jackson', 'Cambridge');
    
INSERT INTO vehicles(
	vehicle_registration,
    vehicle_make,
    vehicle_model,
    member_id
)
VALUES
	('HA14 ORD', 'Toyota', 'Yaris', '1001'),
    ('TE44 ANT', 'Toyota', 'Aygo X', '1002'),
    ('GF57 XWD', 'Toyota', 'bZ4X', '1003'),
    ('KZ66 ZYT', 'Audi', 'A3', '1003'),
    ('TP52 REG', 'Porsche', '911', '1004'),
    ('NW72 YTZ', 'Audi', 'R8', '1004'),
    ('CR05 TON', 'Toyota', 'Yaris', '1005'),
    ('PZ65 PWO', 'Ford', 'Focus', '1005');
    
INSERT INTO engineers(
	engineer_id,
    engineer_fname,
    engineer_lname
)
VALUES
	(101, 'David', 'Martin'),
    (102, 'Jack', 'Clements'),
    (103, 'Aaron', 'Hall');
    
INSERT INTO breakdowns(
	breakdown_id,
    vehicle_registration,
    engineer_id,
    breakdown_date,
    breakdown_time,
    breakdown_location
)
VALUES
	(1, 'TE44 ANT', 101, '2021-12-02', '14:55:32', 'London'),
    (2, 'KZ66 ZYT', 103, '2022-01-01', '12:34:02', 'London'),
    (3, 'PZ65 PWO', 103, '2022-02-03', '11:30:45', 'London'),
    (4, 'GF57 XWD', 101, '2022-02-03', '13:50:11', 'Cambridge'),
    (5, 'TE44 ANT', 101, '2022-02-25', '17:04:25', 'London'),
    (6, 'KZ66 ZYT', 103, '2022-05-16', '10:34:02', 'Reading'),
    (7, 'PZ65 PWO', 103, '2022-06-26', '18:12:49', 'London'),
    (8, 'NW72 YTZ', 102, '2022-07-06', '02:09:40', 'London'),
    (9, 'HA14 ORD', 101, '2022-07-29', '12:00:32', 'London'),
    (10, 'CR05 TON', 101, '2022-09-17', '20:29:12', 'London'),
    (11, 'PZ65 PWO', 103, '2022-11-09', '11:02:03', 'London'),
    (12, 'TP52 REG', 102, '2023-04-09', '16:50:12', 'Portsmouth');
    
-- task 3

-- 3.1

SELECT
	CONCAT(member_fname, ' ', member_lname) AS member_name,
    member_location
FROM
	members
WHERE
	member_location = 'London';

-- 3.2

SELECT
	*
FROM
	vehicles
WHERE
	vehicle_make = 'Toyota';
    
-- 3.3

SELECT
	COUNT(*) AS engineers_number
FROM
	engineers;
    
-- 3.4

SELECT
	COUNT(*) AS members_number
FROM
	members;
    
-- 3.5

SELECT
	*
FROM
	breakdowns
WHERE
	breakdown_date >= '2022-03-01';
    
-- 3.6

SELECT
	*
FROM
	breakdowns
WHERE
	breakdown_date BETWEEN '2022-02-01' AND '2022-02-28';
    
-- 3.7

SELECT
	vehicle_registration,
	COUNT(*) AS number_of_breakdown
FROM
	breakdowns
WHERE
	vehicle_registration = 'PZ65 PWO';
    
-- 3.8

SELECT
	COUNT(*) AS vehicles_broken_more_than_once
FROM
	(
		SELECT
			COUNT(*) AS number_of_vehicles
		FROM
			breakdowns
		GROUP BY
			vehicle_registration
		HAVING
			COUNT(*) > 1
	) AS vehicle_breakdown_statistics;

-- task 4

-- 4.3

SELECT
	v.vehicle_registration,
    breakdown_location,
    CONCAT(member_fname, ' ', member_lname) AS member_name,
    member_location
FROM
	breakdowns AS b
		INNER JOIN
	vehicles AS v ON v.vehicle_registration = b.vehicle_registration
		INNER JOIN
	members AS m ON v.member_id = m.member_id
WHERE
	breakdown_location = 'London';

