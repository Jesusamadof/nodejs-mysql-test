use videogames;

create TABLE juegos (
  id INT NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  genero VARCHAR(255) NOT NULL,
  desarrollador VARCHAR(255) NOT NULL,
  fecha_lanzamiento DATE NOT NULL,
  PRIMARY KEY (id)
);

insert into juegos (titulo,genero,desarrollador,fecha_lanzamiento)
values    ("Pokemon Escudo","Aventura","Nintendo",15/11/19);     

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
insert into usuarios (nombre,password)
values    ("Carlos",12358); 


CREATE TABLE compras (
  id INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  id_juego INT NOT NULL,
  fecha_compra DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
  FOREIGN KEY (id_juego) REFERENCES juegos(id)
);

insert into compras (id_usuario,id_juego,fecha_compra)
values    (1,1,1/9/2022);     

CREATE TABLE plataformas (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  PRIMARY KEY (id)
);

insert into plataformas (nombre,descripcion)
values    ("Nintendo Switch","consola desarrollada por nintendo");    
