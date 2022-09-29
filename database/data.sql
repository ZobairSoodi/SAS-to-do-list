DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;
USE todo_list;

CREATE TABLE list(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(25),
    descrip VARCHAR(255),
    state INT 
);