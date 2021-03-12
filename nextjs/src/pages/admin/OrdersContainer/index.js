import React, {useEffect, useState} from 'react';


import OrdersCard from "@/pages/admin/OrdersCard";
import styles from './OrdersContainer.module.css'
import {clientGraphql} from "@/graphql";
import {GET_CATEGORIES_QUERY} from "@/graphql/category";

const OrdersContainer = ({orders}) => {


    return (
    <div className={styles.main}>
        <div className="row justify-content-center">
            { orders.length > 0 ? orders.map((o) => (
                <OrdersCard order={o}/>
            )): <p>No orders yet</p>}
        </div>
    </div>

    );
};

export default OrdersContainer;
