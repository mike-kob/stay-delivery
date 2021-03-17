import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {Button, Col, Container, Form} from 'react-bootstrap';

import styles from './Login.module.css';
import {loginWithEmail} from '@/auth/actions';
import FormsHeader from '@/components/FormsHeader';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    console.log('STARTED');
    await loginWithEmail(email, password);
    await router.push('/');
    console.log('ENDED');
  };

  return (
    <Container>
      <FormsHeader/>
      <div className={styles.main}>
        <div className="row justify-content-center">
          <Col xs={6}>
            <div className="row justify-content-around">
              <div className={styles.main_text}>Log In</div>
              <a href="/signup/client" className={styles.muted_main_text}>Sign Up</a>
            </div>
            <Form className={styles.form_area}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="E-mail"
                  className={styles.form_input}

                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className={styles.form_input}

                />
              </Form.Group>
            </Form>
            <Button className={styles.orng_button} onClick={onLogin}>
              Login
            </Button>
          </Col>


        </div>
      </div>

    </Container>

  );
};

export default Login;
