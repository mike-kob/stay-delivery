import React, {useEffect, useState} from 'react';
import styles from './Edit.module.css';
import {Button, Col, Form} from 'react-bootstrap';
import {useRouter} from 'next/router';

import {clientGraphql} from '@/graphql';
import {GET_DISH_QUERY} from '@/graphql/rastaurant_admin';
import {
  UPDATE_DISH_MUTATION,
  CREATE_DISH_MUTATION,
} from '@/graphql/dish';
import PhotoUploader from '@/components/PhotoUploader';

const Edit = () => {
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [weight, setWeight] = useState('');
  const [price, setPrice] = useState('');
  const [photo, setPhoto] = useState('');
  // const [tags, setTags] = useState(tagsSample);

  useEffect(() => {
    if (router.query.id) {
      (async function() {
        const {data} = await clientGraphql(
            GET_DISH_QUERY,
            {id: router.query.id});
        setName(data.dish.name);
        setDescription(data.dish.description);
        setPhoto(data.dish.photo);
        setWeight(data.dish.weight);
        setPrice(data.dish.price);
        // setTags(data.dish.tags);
      })();
    }
  }, [router.query.id]);

  const onCancel = () => {
    router.push('/admin/menu');
  };

  const onSubmit = async () => {
    if (router.query.id) {
      const {data} = await clientGraphql(UPDATE_DISH_MUTATION, {
        name, description, weight, price, photo,
        id: router.query.id,
      });
      if (data.updateDish.ok) {
        router.push('/admin/menu');
      }
    } else {
      const {data} = await clientGraphql(CREATE_DISH_MUTATION, {
        name, description, weight, price, photo,
      });
      if (data.createDish.ok) {
        router.push('/admin/menu');
      }
    }
  };


  return (
    <div className={styles.main}>
      <div className="row justify-content-center">
        <a href="/admin/account" className={styles.muted_nav_item}>
          Information
        </a>
        <a href="/admin/orders" className={styles.muted_nav_item}>
          Orders
        </a>
        <a href="/admin/menu" className={styles.selected_nav_item}>
          Menu
        </a>
      </div>

      <div className={styles.form_area}>
        <div className="row justify-content-center">
          <Col xs={9} md={9} xl={6}>
            <p>Photo</p>
            <div className={styles.photo_area}
              style={{backgroundImage: `url(${photo})`}}>
            </div>
            <div className={'m-3'}/>
            <PhotoUploader setPhoto={setPhoto} />
            <div className={'m-5'}/>

            <Form>
              <Form.Group controlId="formBasicName">
                <p>Dish name</p>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder={name}
                  className={styles.form_input}

                />
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <p>Description</p>
                <Form.Control
                  as="textarea" rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className={styles.form_input}
                />

              </Form.Group>
              <Form.Group controlId="formBasicWeight">
                <p>Weight</p>
                <Form.Control
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  type="text"
                  placeholder={weight}
                  className={styles.form_input}

                />
              </Form.Group>
              <Form.Group controlId="formBasicPrice">
                <p>Price (in UAH)</p>
                <Form.Control
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder={price}
                  className={styles.form_input}

                />
              </Form.Group>
              {/* <Form.Group controlId="formBasicTags">*/}
              {/*  <p>Tags</p>*/}
              {/*  <div className={styles.tags_area}>*/}
              {/*    {tags.map((tag) => (*/}
              {/*      <MenuTag tag={tag} canDelete={true} onDelete={deleteTag}/>*/}
              {/*    ))}*/}
              {/*    <button*/}
              {/*      type="button" className={styles.add_btn}*/}
              {/*      onClick={addTag}/>*/}
              {/*  </div>*/}
              {/* </Form.Group>*/}
            </Form>
            <div className="flex row" style={{marginTop: '30px'}}>
              <Button
                type="button" className={styles.cancel_btn}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                type="submit" className={styles.orng_button}
                onClick={onSubmit}
              >
                Save changes
              </Button>
            </div>


          </Col>
        </div>
      </div>
    </div>
  );
};

export default Edit;
