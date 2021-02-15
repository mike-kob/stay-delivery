import React from 'react';
import Cookies from 'js-cookie';

import styles from './Home.module.css';
import {Button} from 'react-bootstrap';

const Home = () => {
  return (
    <div className={styles.main}>
      This is home page<br/>
      {!Cookies.get('fb_session') ?
        <>
          <a href='/login'>Login</a> <br/>
          <a href='/signup/client'>Signup as client</a><br/>
          <a href='/signup/restaurant'>Signup as restaurant</a><br/>
        </> :
        <>
          <div>Logged in</div>
          <Button onClick={() => {
            Cookies.remove('fb_session');
            window.location.reload();
          }}>
            Log out
          </Button>
        </>}
    </div>
  );
};

export default Home;
