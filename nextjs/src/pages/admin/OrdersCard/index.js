import React from 'react'
import {Card, ListGroup, ListGroupItem} from "react-bootstrap";
import styles from './OrdersCard.module.css'
import OrderItem from "@/pages/admin/OrderItem/OrderItem";
const OrdersCard = ({order}) => {

    const currency = "uah";

    const orderSum = () => {
        let sum = 0;
        order.orderInDishorder.map((o) => (

            sum+=(o.dish.price*o.amount)
        ));

        return sum;
    }
    return (
        <Card className={styles.card_style}>
            <Card.Body>
                <Card.Title>Order #{order.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">from {order.client.name},{order.client.phone}</Card.Subtitle>
                <ListGroup className={styles.orders_list}>
                    {order.orderInDishorder.map((o) => (
                        <OrderItem orderItem={o}/>

                    ))}
                </ListGroup>
                <div className="row justify-content-between">
                    <p style={{margin: '20px', fontFamily:'Montserrat'}}>Total amount</p>
                    <p style={{margin: '20px', fontFamily:'Montserrat'}}>{orderSum()}{currency}</p>
                </div>
            </Card.Body>
        </Card>
    )
}

export default OrdersCard;