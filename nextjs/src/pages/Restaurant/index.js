import React from 'react';
import {useRouter} from 'next/router';

import styles from './Restaurant.module.css';

const Restaurant = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      This is page of restaurant with id {router.query.id}
    </div>
  );
};

export default Restaurant;
