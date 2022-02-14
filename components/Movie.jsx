import React from 'react';
import styles from '../styles/Movie.module.css';

function Movie({ title, score, poster, year, overview }) {
    function parseYear(date) {
        if (date) {
            return date.split('-')[0];
        }
        return 'n/a';
    }

    function cutOverview(overview) {
        if (overview) {
            return overview.slice(0, 75).trim().concat('...');
        }
        return 'n/a';
    }

    return (
        <div className={styles.movieItem}>
            <img
                className={styles.moviePoster}
                src={
                    poster
                        ? `https://image.tmdb.org/t/p/w500/${poster}`
                        : 'https://via.placeholder.com/330x185'
                }
                alt={title}
            />
            <p className={styles.movieYear}>{parseYear(year)}</p>
            <h3 className={styles.movieTitle}>{title}</h3>
            <p className={styles.overview}>{cutOverview(overview)}</p>
            <div className={styles.ratings}>
                <span className={styles.rating}>
                    <img src="/images/imbd.png" alt="" />
                    {score}
                </span>
                <span className={styles.rating}>
                    <img src="/images/tomato.png" alt="" />
                    {score * 10 - score / 2}%
                </span>
            </div>
        </div>
    );
}

export default Movie;
