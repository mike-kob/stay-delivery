import React, {useState, useEffect} from 'react';

import styles from './OrderForm.module.css';
import OrderItem from '../OrderItem';
import {setCart, getCart} from '../../utils/cart';
import {clientGraphql} from '@/graphql';
import {CREATE_ORDER_MUTATION} from '@/graphql/order';

const OrderForm = ({client, redirectToProfile}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const submit = () => {
    (async function() {
      const value = {
        restaurant: items[0].restaurant,
        dishOrders: items.map((el) => ({
          dish: el.id,
          amount: el.quantity,
        }),
        ),
      };

      const {data} = await clientGraphql(CREATE_ORDER_MUTATION, value);
      console.log(data);
    })();
  };

  const handleChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      return;
    }

    const newItems = items.map((item) => item.id !== id ? item :
      {...item, quantity: newQuantity});

    setItems(newItems);
    setCart(newItems);
  };

  const handleRemove = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setCart(newItems);
  };

  return (
    <div className={styles.fullHeight}>
      <div className={styles.itemsBlock}>
        <div className={styles.header}>My Order</div>
        <div className={styles.scrollBlock}>
          {
            items.length !== 0 ? items.map((item) => (
              <OrderItem
                key={item.id}
                item={item}
                handleRemove={handleRemove}
                handleChange={handleChange} />
            )) :
            <div>You haven’t picked up anything yet.</div>
          }
        </div>
      </div>

      <div className={styles.orderInfo}>
        {
          client && <>
            <div className={styles.header}>Payment</div>
            <div className={styles.payment}>
              <div>... {client.cardNumber.substr(-4)}</div>
              <button
                className='lightOrange'
                onClick={() => redirectToProfile()}
              >Edit</button>
            </div>
          </>
        }

        <div className={`${styles.header} mt-5`}>
          Total: {items.reduce((acc, el) => acc + el.price * el.quantity, 0)}₴
        </div>
        <button
          className={`orange mt-2 ${styles.orderBtn}`}
          onClick={() => submit()}
          disabled={!items.length || !client?.address || !client?.phone}
        >Order</button>
      </div>
    </div>
  );
};

export default OrderForm;
