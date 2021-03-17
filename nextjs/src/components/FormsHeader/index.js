import React from 'react';

import styles from './FormsHeader.module.css';

const FormsHeader = () => {
  return (
    <header className={styles.header}>
      <a href="/"><img src="/logo_header.svg" alt="Stay Logo"/></a>
    </header>
  );
};

export default FormsHeader;
