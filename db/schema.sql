DROP DATABASE IF EXISTS burgers_db;
create database burgers_db;
use burgers_db;
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE NOT NULL,
    PRIMARY KEY (id)
    );