SELECT m.id, m.title, bo.domestic_sales, bo.international_sales FROM pixar.movies as m
INNER JOiN pixar.box_office AS bo
ON m.id = bo.movie_id;


SELECT m.id, m.title, bo.domestic_sales + bo.international_sales AS total_sales FROM pixar.movies as m
INNER JOiN pixar.box_office AS bo
ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

SELECT m.id, m.title, bo.rating FROM pixar.movies as m
INNER JOiN pixar.box_office AS bo
ON m.id = bo.movie_id
ORDER BY rating DESC;


SELECT * FROM pixar.theater as t
LEFT JOiN pixar.movies AS m
ON t.id = m.theater_id
ORDER BY t.name;


