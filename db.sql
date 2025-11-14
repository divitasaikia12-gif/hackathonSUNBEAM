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

