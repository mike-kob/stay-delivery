import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {Button, Form} from 'react-bootstrap';

import styles from './Login.module.css';
import {loginWithEmail} from '@/auth/actions';

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
    <div style={{width: '50%', border: 'solid 1px'}}>
      Login client with password
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" onClick={onLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
