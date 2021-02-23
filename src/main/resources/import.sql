INSERT INTO department(id, version, name, identifier) values (nextval('hibernate_sequence'), 0, 'Aerospace Engineering', 'AOE');
INSERT INTO department(id, version, name, identifier) values (nextval('hibernate_sequence'), 0, 'Biology', 'BIO');
INSERT INTO department(id, version, name, identifier) values (nextval('hibernate_sequence'), 0, 'Computer Science', 'CS');
INSERT INTO department(id, version, name, identifier) values (nextval('hibernate_sequence'), 0, 'English', 'ENG');
INSERT INTO department(id, version, name, identifier) values (nextval('hibernate_sequence'), 0, 'History', 'HIST');

INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Tony', 'Stark', 1);
INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Orville', 'Wright', 1);

INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Bruce', 'Banner', 2);
INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Clark', 'Kent', 2);

INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Ada', 'Lovelace', 3);
INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Linus', 'Torvalds', 3);

INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'William', 'Shakespeare', 4);
INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Emily', 'Dickinson', 4);

INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'Edward', 'Gibbon', 5);
INSERT INTO employee(id, version, first_name, last_name, department_id) values(nextval('hibernate_sequence'), 0, 'David', 'McCullough', 5);


