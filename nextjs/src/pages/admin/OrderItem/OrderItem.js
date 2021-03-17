import React from "react";
import styles from './OrderItem.module.css'
const OrderItem = ({orderItem}) => {
    const currency = "uah";
    console.log("order item ",orderItem);
    return(
        <div className={styles.main}>
            <div className="row justify-content-around">
                <div className="col">
                    {orderItem.dish.name}
                </div>
                <div className="col">
                    <div className="row justify-content-around">
                        <div>{orderItem.dish.price}{currency}</div>
                        <div>x{orderItem.amount}</div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default OrderItem;