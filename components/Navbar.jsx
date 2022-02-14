import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar({ queryMovies }) {
    const [search, setSearch] = useState('');
    const searchRef = useRef(null);

    useEffect(() => {
        searchRef.current.focus();
    });

    return (
        <div className={styles.Navbar}>
            <div className="container">
                <nav style={{ textAlign: 'center' }}>
                    <label htmlFor="search" className={styles.searchLabel}>
                        <input
                            name="search"
                            ref={searchRef}
                            className={styles.searchBox}
                            placeholder="What do you want to watch?"
                            value={search}
                            onInput={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    queryMovies(search);
                                }
                            }}
                            autoComplete="off"
                            autoFocus
                        />
                        <span
                            className={styles.searchIcon}
                            onClick={() => setSearch('')}
                        >
                            <img src="/svg/xmark.svg" />
                        </span>
                    </label>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
