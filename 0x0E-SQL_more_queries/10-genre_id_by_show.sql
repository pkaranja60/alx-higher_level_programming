-- Use the hbtn_0d_tvshows database
USE hbtn_0d_tvshows;

-- List shows with at least one linked genre
SELECT CONCAT(tv_shows.title, ' - ', tv_show_genres.genre_id)
FROM tv_shows
JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;