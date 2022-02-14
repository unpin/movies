import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Header.module.css';

function Header({ queryMovies }) {
    return (
        <div className={styles.header}>
            <Navbar queryMovies={queryMovies} />
            <div className="container">
                <div className={styles.descriptionBox}>
                    <h1>John Wick 3 : Parabellum</h1>
                    <div className={styles.ratings}>
                        <span className={styles.ratingItem}>
                            <img src="/images/imbd.png" alt="IMBD logo" />
                            86.0 / 100
                        </span>
                        <span className={styles.ratingItem}>
                            <img src="/images/tomato.png" alt="IMBD logo" />
                            97%
                        </span>
                    </div>
                    <p>
                        John Wick is on the run after killing a member of the
                        international assassins&apos; guild, and with a $14
                        million price tag on his head, he is the target of hit
                        men and women everywhere.
                    </p>
                    <button className={styles.button}>
                        <img src="/svg/circle-play.svg" alt="Play" />
                        Watch trailer
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
