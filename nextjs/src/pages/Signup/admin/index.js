import React, {useState} from 'react';
import {
  Button,
  Form,
} from 'react-bootstrap';

import styles from './Admin.module.css';
import {adminSignupWithEmail} from '@/auth/actions';
import {useRouter} from 'next/router';

const AdminSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignup = async () => {
    console.log('STARTED');
    await adminSignupWithEmail(email, password);
    console.log('ENDED');
    await router.push('/');
  };

  return (
    <div style={{width: '50%', border: 'solid 1px'}}>
      Signup client with password
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
      <Button variant="primary" onClick={onSignup}>
        Signup
      </Button>
    </div>
  );
};

export default AdminSignup;
