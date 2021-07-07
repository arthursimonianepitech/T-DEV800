CREATE DATABASE tdev800;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

CREATE TABLE album(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
);

CREATE TABLE images(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
);