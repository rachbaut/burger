create database burger_db;

use burger_db;
create table burgers (
    id integer AUTO_INCREMENT not null,
    burger_name text not null,
    devoured boolean not null,
    primary key (id)
);