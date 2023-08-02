CREATE DATABASE Usuarios_Cursos;

USE Usuarios_Cursos;

CREATE TABLE cursos(
	id_curso INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome_curso VARCHAR(50) NOT NULL
);

CREATE TABLE Usuarios(
	id_usuarios INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome_usuario VARCHAR(50) NOT NULL,
	idade INT NOT NULL,
	id_curso INT NOT NULL,
	FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);