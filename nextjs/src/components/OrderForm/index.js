import React, {useContext} from 'react';

import styles from './OrderForm.module.css';
import OrderItem from '../OrderItem';
import {clientGraphql} from '@/graphql';
import {CREATE_ORDER_MUTATION} from '@/graphql/order';
import ItemsContext from '../ItemsContext/ItemsContext';

const OrderForm = ({client, redirectToProfile}) => {
  const {items, saveItems} = useContext(ItemsContext);
  const submit = () => {
    (async function() {
      const value = {
        restaurant: items[0].restaurant,
        dishOrders: items.map((el) => ({
          dish: el.id,
          amount: el.quantity,
        })),
      };

      const {data} = await clientGraphql(CREATE_ORDER_MUTATION, value);
      alert(`Ваше замовлення #${data.createOrder.order.id} прийнято.
       Очікуйте дзвінка.`);
      saveItems([]);
    })();
  };

  const handleChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      return;
    }

    const newItems = items.map((item) => item.id !== id ? item :
      {...item, quantity: newQuantity});

    saveItems(newItems);
  };

  const handleRemove = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    saveItems(newItems);
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
                handleChange={handleChange}/>
            )) :
              // eslint-disable-next-line max-len
              <div className={styles.emptyCart}>You haven’t picked up anything
                yet.</div>
          }
        </div>
      </div>

      <div className={styles.orderInfo}>
        {
          // client && <>
          //   <div className={styles.header}>Payment</div>
          //   <div className={styles.payment}>
          //      <div>... {client.cardNumber.substr(-4)}</div>
          //     <button
          //       className='lightOrange'
          //       onClick={() => redirectToProfile()}
          //     >Edit</button>
          //   </div>
          // </>
        }

        <div className={`${styles.header} mt-5`}>
          {/* eslint-disable-next-line max-len */}
          <span>Total:</span><span
            className={styles.highlightSum}> {items.reduce(
                (acc, el) => acc + el.price * el.quantity, 0)} UAH</span>
        </div>
        <button
          className={`orange mt-2 ${styles.orderBtn}`}
          onClick={() => submit()}
          disabled={!items.length || !client?.address || !client?.phone}
        >Order
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
