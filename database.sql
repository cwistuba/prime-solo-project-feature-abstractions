
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "courses_list" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "address" VARCHAR (80) NOT NULL,
    "city" VARCHAR (80) NOT NULL,
    "state" VARCHAR (10) NOT NULL,
    "zip" VARCHAR (10) NOT NULL,
    "latitude" DECIMAL (10,7),
    "longitude" DECIMAL (10,7)
);

CREATE TABLE "user_course" (
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user" NOT NULL,
"courses_list_id" INT REFERENCES "courses_list" NOT NULL
);

INSERT INTO "courses_list" ("name", "address", "city", "state", "zip", "latitude", "longitude")
VALUES ('Adams Pointe Golf Club', '1601 RD Mize Rd', 'Blue Springs', 'MO', '64014', '39.0223007', '-94.2525549' ),
('Teetering Rock Golf Course', '12040 E 86th', 'Kansas City', 'MO', '64138', '38.9652778', '-94.4407998' ),
('Stone Canyon Golf Club', '22415 E 39th St', 'Blue Springs', 'MO', '64015', '39.0445763', '-94.3170689' ),
('WinterStone Golf Course', '291 Hwy & Kentucky Rd', 'Independence', 'MO', '64058', '39.1261439', '-94.3803896' ),
('Unity Village Golf Course', 'Fairway Drive', 'Unity Village', 'MO', '64065', '38.952167', '-94.4089457' ),
('Eagles Landing Golf Course', '4200 Bong Ave', 'Belton', 'MO', '64012', '38.8338147', '-94.5506379' ),
('Fred Arbanas Golf Course', '11100 View High Dr', 'Kansas City', 'MO', '64134', '38.9187267', '-94.4585824' ),
('Heart of America Golf Course', '7501 Blue River Rd', 'Kansas City', 'MO', '64132', '38.9874079', '-94.5289105' ),
('Minor Park Golf Course', '11215 Holmes Rd', 'Kansas City', 'MO', '64131', '38.9226177', '-94.5849495' ),
('Shamrock Hills Golf Course', '3161 SW M 291 Hwy', 'Lees Summit', 'MO', '64082', '38.8628972', '-94.3757804' ),
('Swope Memorial Golf Course', '6900 Swope Memorial Dr', 'Kansas City', 'MO', '64132', '38.9978438', '-94.5140609' ),
('Creekmore Golf Course', '1112 E 163rd St', 'Raymore', 'MO', '64083', '39.0223007', '-94.4749828' ),
('Excelsior Springs Golf Course', '1201 E Golf Hill Dr', 'Excelsior Springs', 'MO', '64024', '39.3357483', '-94.2061802' ),
('Fairview Golf Course', '3302 Pacific St', 'St. Joseph', 'MO', '64507', '39.7467881', '-94.8166055' ),
('Hidden Valley Golf Course', '800 NE 184th St', 'Lawson', 'MO', '64062', '39.4263488', '-94.2229992' ),
('Hodge Park Golf Course', '7000 NE Barry Rd', 'Kansas City', 'MO', '64156', '39.2506407', '-94.500135' ),
('Mozingo Lake Golf Course', '25055 Liberty Rd', 'Maryville', 'MO', '64468', '40.3625116', '-94.7700529' ),
('Paradise Pointe Golf Course', '18212 Golf Course Rd,', 'Smithville', 'MO', '64089', '39.4231865', '-94.5534703' ),
('Shoal Creek Golf Course', '8905 NE Shoal Creek Pkwy', 'Kansas City', 'MO', '64157', '39.2553169', '-94.4882022' ),
('Tiffany Greens Golf Club', '5900 NW Tiffany Springs Pkwy', 'Kansas City', 'MO', '64154', '39.2742721', '-94.6481496' ),
('Dubs Dread Golf Club', '12601 Hollingsworth Rd', 'Kansas City', 'KS', '66109', '39.171835', '-94.8783257' ),
('Falcon Valley Golf Course', '9801 Falcon Valley Dr', 'Lenexa', 'KS', '66220', '38.9523982', '-94.8114365' ),
('Falcon Lakes Golf Club', '4605 Clubhouse Dr', 'Basehor', 'KS', '66007', '39.1678204', '-94.909013' ),
('Eagle Bend Golf Course', '1250 E 902 Rd', 'Lawrence', 'KS', '66049', '38.9217101', '-95.3283183' ),
('Firekeeper Golf Course', '12524 150th Rd #8819', 'Mayetta', 'KS', '66509', '39.3211197', '-95.749483' ),
('Heritage Park Golf Course', '16455 S Lackman Rd', 'Olathe', 'KS', '66062', '38.8303088', '-94.7594441' ),
('Iron Horse Golf Club', '15400 Mission Rd', 'Leawood', 'KS', '66224', '38.8500000', '-94.6363554' ),
('Oak Country Golf Course', '8800 Scott Dr', 'De Soto', 'KS', '66018', '38.9697647', '-94.9643774' ),
('Sykes/Lady Overland Park Golf Course', '12501 Quivira Rd', 'Overland Park', 'KS', '66213', '38.9017669', '-94.7243903' ),
('Smileys Golf Complex', '10195 Monticello Terrace', 'Lenexa', 'KS', '66227', '38.9440918', '-94.8499067' ),
('St Andrews Golf Club', '11099 W 135th St', 'Overland Park', 'KS', '66221', '38.8828591', '-94.7155836' ),
('Sunflower Hills Golf Club', '12200 Riverview Ave', 'Bonner Springs', 'KS', '66012', '39.1036094', '-94.8625119' ),
('Sycamore Ridge Golf Course', '21731 Clubhouse Dr', 'Spring Hills', 'KS', '66083', '38.7583389', '-94.8398275' ),
('Tomahawk Hills Golf Course', '17501 Midland Dr', 'Shawnee', 'KS', '66217', '38.9997338', '-94.793019' )