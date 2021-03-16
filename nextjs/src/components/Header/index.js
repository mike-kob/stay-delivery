import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line max-len */}
      <div className={styles.logoDiv}><div className={styles.logo}/></div>
      <div className={styles.nav}>
        <div><a>Career</a></div>
        <div><a href='/signup/restaurant'>Be a partner</a></div>
        <div className={styles.searchIcon}/>
      </div>
    </header>
  );
};

export default Header;
