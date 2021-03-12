import React from 'react';

import styles from './OrderItem.module.css';

const OrderItem = ({item, handleRemove, handleChange}) => {
  return (
    <div className={`row ${styles.itemBlock}`}>
      <div className="col-4">
        <div className={styles.imageBackground}>
          <img className={styles.image} src={item.image}></img>
        </div>
      </div>
      <div className="col-4">
        <div className="row">{item.name}</div>
        <div className="row">{item.price}₴</div>
      </div>
      <div className="col-4">
        <div className="row" style={{justifyContent: 'center'}}>
          <button
            className={styles.remove}
            onClick={() => handleRemove(item.id)}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
        <div className="row" style={{justifyContent: 'center'}}>
          <button
            className={styles.btnSign}
            onClick={() => handleChange(item.id, item.quantity - 1)}
          >-</button>
          <span>{item.quantity}</span>
          <button
            className={styles.btnSign}
            onClick={() => handleChange(item.id, item.quantity + 1)}
          >+</button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
