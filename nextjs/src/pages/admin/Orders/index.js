import React from 'react';

import styles from './Orders.module.css';

import OrdersContainer from "@/pages/admin/OrdersContainer";

const Orders = () => {
  return (
    <div className={styles.main}>
        <div className="row justify-content-center">
                <a href="account" className={styles.muted_nav_item}>
                    Information
                </a>
                <a href="orders" className={styles.selected_nav_item}>
                    Orders
                </a>
                <a href="menu" className={styles.muted_nav_item}>
                    Menu
                </a>
        </div>
        <OrdersContainer/>
        </div>
  );
};

export default Orders;
