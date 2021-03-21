import React from 'react';
import {useRouter} from 'next/router';

import styles from './Header.module.css';
import {clientGraphql} from '@/graphql';
import {GET_RESTAURANT_QUERY} from '@/graphql/rastaurant_admin';

const Header = () => {
  const router = useRouter();

  const onClick = async () => {
    const {data} = await clientGraphql(GET_RESTAURANT_QUERY);
    if (data.me?.restaurant) {
      router.push('/admin/account');
    } else {
      router.push('/login');
    }
  };

  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line max-len */}
      <div className={styles.logoDiv}>
        <div className={styles.logo}/>
      </div>
      <div className={styles.nav}>
        <div style={{margin: 'auto 0 auto auto'}}>
          <a style={{cursor: 'pointer'}} onClick={onClick}>Partner panel</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
