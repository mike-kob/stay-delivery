import React, {useEffect, useState} from 'react';

import styles from './Orders.module.css';

import OrdersContainer from '@/pages/admin/OrdersContainer';
import {clientGraphql} from '@/graphql';
import {GET_ORDERS_QUERY} from '@/graphql/rastaurant_admin';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async function() {
      const {data} = await clientGraphql(GET_ORDERS_QUERY);
      setOrders(data.orders);
    })();
  }, []);

  return (
    <div className={styles.main}>
      <div className="row justify-content-center">
        <a href="/admin/account" className={styles.muted_nav_item}>
          Information
        </a>
        <a href="/admin/orders" className={styles.selected_nav_item}>
          Orders
        </a>
        <a href="/admin/menu" className={styles.muted_nav_item}>
          Menu
        </a>
      </div>
      <OrdersContainer orders={orders}/>
    </div>
  );
};

export default Orders;
