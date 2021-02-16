import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <span>Stay</span>
      <a>Career</a>
      <a href='/signup/restaurant'>Be a partner</a>
      <a>Search here</a>
    </header>
  );
};

export default Header;