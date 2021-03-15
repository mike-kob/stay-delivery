import React from 'react';

import OrdersCard from '@/pages/admin/OrdersCard';
import styles from './OrdersContainer.module.css';

const OrdersContainer = ({orders}) => {
  return (
    <div className={styles.main}>
      <div className="row justify-content-center">
        {orders.length > 0 ? orders.map((o) => (
          <OrdersCard key={o.id} order={o}/>
        )) : <p>No orders yet</p>}
      </div>
    </div>
  );
};

export default OrdersContainer;
