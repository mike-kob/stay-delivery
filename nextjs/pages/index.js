import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {clientSignupWithEmail} from '@/auth/actions';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    console.log('STARTED');
    await clientSignupWithEmail(email, password);
    console.log('ENDED');
  };

  return (
    <div>
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
      <Button variant="primary" onClick={onSubmit}>
          Submit
      </Button>
    </div>
  );
}
