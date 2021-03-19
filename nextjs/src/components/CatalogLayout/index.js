import React from 'react';

import RightBar from '../RightBar';
import Header from '../Header';
import styles from './CatalogLayout.module.css';

const CatalogLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`col-9 ${styles.pad} ${styles.maincolor}`}>
          <Header />
          <div>
            { children }
          </div>
        </div>
        <div className={`col-3 ${styles.sideBar} ${styles.pad}`}>
          <RightBar />
        </div>
      </div>
    </div>
  );
}

export default CatalogLayout;
