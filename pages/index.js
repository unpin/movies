import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Movies from '../components/Movies';
import { discoverPopular, searchByTitle } from '../services/MovieService';

export default function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [queryResult, setQueryResult] = useState([]);

    useEffect(() => {
        discoverPopular()
            .then((response) => {
                setPopularMovies(response.results);
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    function queryMovies(title) {
        if (!title) return;

        searchByTitle(title)
            .then((response) => {
                setQueryResult(response.results);
            })
            .catch((e) => console.log(e.message));
    }

    return (
        <>
            <Head>
                <title>Movies</title>
                <meta
                    name="description"
                    content="Watch movies anywhere anytime"
                />
                <link rel="icon" href="/favicon.ico" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,500;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header queryMovies={queryMovies} />
            <main className="container">
                <Movies
                    popularMovies={popularMovies}
                    queryResult={queryResult}
                />
            </main>

            <footer className={styles.footer}>
                <a href="https://github.com/unpin" target="_blank">
                    GitHub{' '}
                    <span className={styles.logo}>
                        <Image
                            src="/svg/github.svg"
                            alt="GitHub Logo"
                            width={24}
                            height={24}
                        />
                    </span>
                </a>
                <span>2022</span>
                <a href="https://rs.school/js-stage0" target="_blank">
                    <span className={styles.logo}>
                        <Image
                            src="/svg/rs_school_js.svg"
                            alt="Vercel Logo"
                            width={62}
                            height={24}
                        />
                    </span>
                </a>
            </footer>
        </>
    );
}
