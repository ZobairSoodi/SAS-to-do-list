DROP DATABASE IF EXISTS todo_list;
CREATE DATABASE todo_list;
use todo_list;

CREATE TABLE list(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(25) NOT NULL,
    descrip VARCHAR(255),
    state INT NULL
);