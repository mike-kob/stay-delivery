import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import styles from './RightBar.module.css';
import { useRouter } from 'next/router';
import OrderItem from '../OrderItem';
import { setCart, getCart } from '../../utils/cart';
import { Button } from 'react-bootstrap';

const RightBar = () => {
  const [items, setItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setItems(getCart());
  }, []);

  const handleChange = (id, newQuantity) => {
    if(newQuantity <= 0) 
      return; 

    const newItems = items.map(item => item.id !== id ? item : 
      { ...item, quantity: newQuantity });

    setItems(newItems);
    setCart(newItems);
  };

  const handleRemove = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    setCart(newItems);
  };
  
  return (
    <div className={styles.bar}>
      {!Cookies.get('fb_session') ?
        <div className={styles.buttons}>
          <Button onClick={() => router.push('/signup/client')} className={styles.violet}>Sign up</Button>
          <Button onClick={() => router.push('/login')} className={styles.gray}>Sign in</Button>
        </div>
        :
        <div>Address</div>
      }

      <div className={styles.itemsBlock}>
        <div className={styles.header}>My Order</div>
        <div className={styles.scrollBlock}>
          {
            items.length !== 0 ? items.map(item => (
              <OrderItem item={item} handleRemove={handleRemove} handleChange={handleChange} />
            )) :
            <div>You haven’t picked up anything yet.</div>
          }
        </div>
      </div>

      <div className={styles.orderInfo}>
          <div className={styles.header}>Payment</div>
          <div className={styles.payment}>
            <div>... 0000</div>
            <button className={styles.edit}>Edit</button>
          </div>
          <div className={`${styles.header} mt-5`}>Total: 100$</div>
          <button className={`${styles.violet} mt-2 ${styles.orderBtn}`}>Order</button>
      </div>
    </div>
  );
};

export default RightBar;
