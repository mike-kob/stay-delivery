import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import {useRouter} from 'next/router';

import {clientGraphql} from '@/graphql';
import styles from './RightBar.module.css';
import OrderForm from '../OrderForm';
import UserForm from '../UserForm';
import {GET_USER_QUERY, UPDATE_USER_MUTATION} from '@/graphql/user';


const RightBar = () => {
  const router = useRouter();
  const isAuth = Cookies.get('fb_session');
  const [isProfile, setIsProfile] = useState(false);
  const [client, setClient] = useState(null);

  const updateClient = (newValue) => {
    (async function() {
      const {data} = await clientGraphql(UPDATE_USER_MUTATION, newValue);
      setClient(data?.updateClient.client);
    })();
  };

  useEffect(() => {
    (async function() {
      if (isAuth) {
        const {data} = await clientGraphql(GET_USER_QUERY);
        setClient(data?.me.client);
      }
    })();
  }, []);

  return (
    <div className={styles.bar}>
      { !isAuth ?
        <div className={clsx(styles.buttons, styles.end)}>
          <button
            onClick={() => router.push('/signup/client')}
            className='orange'>
            Sign up
          </button>
          <button
            onClick={() => router.push('/login')}
            className='lightOrange'>
            Sign in
          </button
          >
        </div> :
        <div className={clsx(styles.buttons, styles.spaceBetween)}>
          <a
            className={styles.address}
            onClick={() => setIsProfile(true)}
            style={{visibility: !isProfile ? 'visible' : 'hidden'}}>
            {client?.address}
          </a>
          <button
            className='orange'
            onClick={() => setIsProfile(true)}>
            <i className="fa fa-user"></i>
          </button>
        </div>
      }

      <div style={{height: '90%'}}>
        {
          isProfile ?
            <UserForm
              updateClient={updateClient}
              client={client}
              close={() => setIsProfile(false)} /> :
            <OrderForm
              client={client}
              redirectToProfile={() => setIsProfile(true)} />
        }
      </div>
    </div>
  );
};

export default RightBar;
