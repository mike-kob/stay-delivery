import React, {useState, useEffect} from 'react';

import styles from './Account.module.css';
import {Button, Col, Form} from 'react-bootstrap';
import {clientGraphql} from '@/graphql';
import {
  UPDATE_RESTAURANT_MUTATION,
  GET_RESTAURANT_QUERY,
} from '@/graphql/rastaurant';

const Account = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState(['']);
  const [photo, setPhoto] = useState('');

  const onSubmit = () => {
    (async function() {
      const value = {
        name: name,
        description: description,
        photo: photo,
      };
      console.log(value);

      const {data} = await clientGraphql(UPDATE_RESTAURANT_MUTATION, value);
      console.log(data);
    })();
  };

  useEffect(() => {
    (async function() {
      const {data} = await clientGraphql(GET_RESTAURANT_QUERY);
      setName(data.me.restaurant.name);
      setDescription(data.me.restaurant.description);
      setPhoto(data.me.restaurant.photo);
    })();
  }, []);

  return (
    <div className={styles.main}>
      <div className="row justify-content-center">
        <a href="account" className={styles.selected_nav_item}>
          Information
        </a>
        <a href="orders" className={styles.muted_nav_item}>
          Orders
        </a>
        <a href="menu" className={styles.muted_nav_item}>
          Menu
        </a>
      </div>
      <div className={styles.form_area}>
        <div className="row justify-content-center">

          <Col xs={6}>
            <p style={{fontFamily: 'Krona One', fontSize: '18px'}}>General
              information</p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={name}
                  className={styles.form_input}

                />
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Control
                  as="textarea" rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className={styles.form_input}
                />

              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Control
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Address"
                  className={styles.form_input}

                />
              </Form.Group>
              <p style={{fontFamily: 'Krona One', fontSize: '18px'}}>Photo</p>

              {photo === '' ? '' :
                <div className={styles.form_input}>
                  <img src={''} alt="Photo of the restaurant"/>
                </div>
              }
            </Form>
            <Button
              type="submit" className={styles.orng_button}
              onClick={onSubmit}>
              Update data
            </Button>

          </Col>
        </div>
      </div>
    </div>
  );
};

export default Account;
