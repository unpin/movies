import React from 'react';
import styles from '../styles/Movie.module.css';
import Movie from './Movie';

function Movies({ popularMovies, queryResult }) {
    const hasQueryResult = queryResult.length > 0;
    const hasPopular = popularMovies.length > 0;

    return (
        <>
            {hasQueryResult && (
                <section className={styles.movieSection}>
                    <h2>Search Results</h2>
                    <div className={styles.movieList}>
                        {queryResult.map(
                            ({
                                id,
                                original_name,
                                vote_average,
                                backdrop_path,
                                first_air_date,
                                overview,
                            }) => (
                                <Movie
                                    key={id}
                                    title={original_name}
                                    score={vote_average}
                                    poster={backdrop_path}
                                    year={first_air_date}
                                    overview={overview}
                                />
                            )
                        )}{' '}
                    </div>
                </section>
            )}
            {hasPopular && (
                <section className={styles.movieSection}>
                    <h2>Popular Movies</h2>
                    <div className={styles.movieList}>
                        {popularMovies.map(
                            ({
                                id,
                                original_title,
                                vote_average,
                                backdrop_path,
                                release_date,
                                overview,
                            }) => (
                                <Movie
                                    key={id}
                                    title={original_title}
                                    score={vote_average}
                                    poster={backdrop_path}
                                    year={release_date}
                                    overview={overview}
                                />
                            )
                        )}{' '}
                    </div>
                </section>
            )}
        </>
    );
}

export default Movies;
