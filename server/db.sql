--database schema for movie review
DROP DATABASE IF EXISTS hackathon;
CREATE DATABASE hackathon;
USE hackathon;

--use table
CREATE TABLE Users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name TEXT(15) NOT NULL,
	last_name TEXT(15) ,
	email TEXT(30) NOT NULL,
	pass TEXT(10) NOT NULL ,
	mobile VARCHAR(10) UNIQUE ,
	birth DATE
);

-- movies
CREATE TABLE movies(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title TEXT(20) NOT NULL,
	release_date DATE
);

--reviews
CREATE TABLE reviews(
	id INT PRIMARY KEY AUTO_INCREMENT,
    movie_id INT,
    user_id INT,
	review TEXT(50) NOT NULL,
	rating INT NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
	modified DATETIME default CURRENT_TIMESTAMP
);

--shares
CREATE TABLE shares(
	r_id INT NOT NULL,
	u_id INT NOT NULL,
    FOREIGN KEY (r_id) REFERENCES reviews(id),
    FOREIGN KEY (u_id) REFERENCES Users(user_id)
);

--insert

INSERT INTO movies (id, title, release_date) VALUES
(1,'The Shawshank Redemption', '1995-02-17'),
(2,'Pulp Fiction', '1994-10-14'),
(3,'Inception', '2010-07-16'),
(4,'The Matrix', '1999-03-31'),
(5,'Spirited Away', '2003-09-12'),
(6,'The Dark Knight', '2008-07-18'),
(7,'Parasite', '2019-10-11'),
(8,'Interstellar', '2014-11-07'),
(9,'Avatar', '2009-12-17'),
(10,'Joker', '2019-10-04');