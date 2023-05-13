SELECT m.id, m.title, bo.domestic_sales, bo.international_sales FROM pixar.movies as m
INNER JOiN pixar.box_office AS bo
ON m.id = bo.movie_id;

