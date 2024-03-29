DESCRIBE movies;

INSERT INTO pixar.movies(title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 91),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

DESCRIBE pixar.box_office;
INSERT INTO pixar.box_office (movie_id, rating, domestic_sales, international_sales)
VALUES(9, 6.8, 450000000, 370000000);

SET SQL_SAFE_UPDATES = 0;
UPDATE pixar.movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

UPDATE pixar.movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;

DESCRIBE pixar.box_office;

INSERT INTO pixar.box_office (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000)
;

DELETE FROM pixar.box_office
WHERE movie_id = 11;

DELETE FROM pixar.movies
WHERE title = 'WALL-E'
;

SELECT id FROM pixar.movies
WHERE director = 'Andrew Stanton'; 
DELETE FROM pixar.box_office
WHERE movie_id IN (2, 9);
DELETE FROM pixar.movies
WHERE director = 'Andrew Stanton';
