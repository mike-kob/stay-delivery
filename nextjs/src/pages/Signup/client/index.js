import React, {useState} from 'react';
import {
  Button, Container,
  Form, Col, Row, Tabs, Tab, Nav,
} from 'react-bootstrap';
import {useRouter} from 'next/router';

import styles from './ClientSignup.module.css';
import {clientSignupWithEmail} from '@/auth/actions';
import FormsHeader from '@/components/FormsHeader';

const ClientSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = async () => {
    console.log('STARTED');
    await clientSignupWithEmail(email, password);
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
              <a href="/login" className={styles.muted_main_text}>Log In</a>
              <div className={styles.main_text}>Sign Up</div>
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
            <Button className={styles.orng_button} onClick={onSignup}>
            Sign up
            </Button>
          </Col>
        </div>

      </div>
    </Container>

  );
};

export default ClientSignup;
