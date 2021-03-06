import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';

import styles from './Account.module.css';
import {Button, Col, Form} from 'react-bootstrap';
import {clientGraphql} from '@/graphql';
import {
  UPDATE_RESTAURANT_MUTATION,
  GET_RESTAURANT_QUERY,
  REMOVE_ADDRESS_MUTATION,
  ADD_ADDRESS_MUTATION,
} from '@/graphql/rastaurant_admin';

import PhotoUploader from '@/components/PhotoUploader';

const Account = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');
  const [locations, setLocations] = useState([]);
  const [inactive, setIncative] = useState(false);


  const onSubmit = () => {
    (async function() {
      const value = {
        name: name,
        description: description,
        photo: photo,
      };
      const {data} = await clientGraphql(UPDATE_RESTAURANT_MUTATION, value);
      console.log(data);
    })();
  };
  const onDelete = async (id) => {
    setIncative(true);
    const {data} = await clientGraphql(REMOVE_ADDRESS_MUTATION, {id});
    if (data.removeLocation.ok) {
      setLocations(locations.filter((loc) => loc.id !== id));
    }
    setIncative(false);
  };
  const addAddress = async () => {
    setIncative(true);
    const {data} = await clientGraphql(ADD_ADDRESS_MUTATION, {address});
    if (data.addLocation.ok) {
      setLocations([...locations, data.addLocation.location]);
      setAddress('');
    }
    setIncative(false);
  };

  useEffect(() => {
    (async function() {
      const {data} = await clientGraphql(GET_RESTAURANT_QUERY);
      setName(data.me.restaurant.name);
      setDescription(data.me.restaurant.description);
      setPhoto(data.me.restaurant.photo);
      setLocations(data.me.restaurant.locations);
    })();
  }, []);

  return (
    <div className={styles.main}>
      <div className="row justify-content-center">
        <a href="/admin/account" className={styles.selected_nav_item}>
          Information
        </a>
        <a href="/admin/orders" className={styles.muted_nav_item}>
          Orders
        </a>
        <a href="/admin/menu" className={styles.muted_nav_item}>
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
              <p style={{fontFamily: 'Krona One', fontSize: '18px'}}>
                Addresses</p>
              <Form.Group controlId="formBasicAddress">
                {locations.map((loc) => (
                  <React.Fragment key={loc.id} >
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <Form.Control
                        value={loc.address}
                        readOnly
                        type="text"
                        placeholder="Address"
                        className={styles.address_style}
                      />
                      <Button
                        disabled={inactive}
                        onClick={() => onDelete(loc.id)}
                        className={styles.delete_btn} />

                    </div>

                  </React.Fragment>

                ))}
              </Form.Group>
              <Form.Group controlId="formBasicAddress">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Form.Control
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    placeholder="Add new address"
                    className={styles.address_style}
                  />
                  <Button
                    disabled={inactive}
                    onClick={() => addAddress()}
                    className={styles.add_btn}
                  >Add</Button>
                </div>

              </Form.Group>
              <p style={{fontFamily: 'Krona One', fontSize: '18px'}}>Photo</p>
              <div className={styles.photo_row}>
                {photo &&
                  <div className={styles.photo_image}>
                    <img
                      src={photo}
                      alt="Photo of the restaurant"
                    />
                  </div>
                }
                <PhotoUploader setPhoto={setPhoto} />
              </div>

            </Form>
            <Button
              type="submit" className={styles.orng_button}
              onClick={onSubmit}
            >
              Update information
            </Button>
            <div className="m-5"/>
            <Button
              className={styles.orng_button}
              onClick={() => {
                Cookies.remove('fb_session');
                window.location.href = '/';
              }}
            >
              Logout
            </Button>

          </Col>
        </div>
      </div>
    </div>
  );
};

export default Account;
