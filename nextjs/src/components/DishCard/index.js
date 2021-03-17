import React from 'react';
import styles from './DishCard.module.css';

const DishCard = ({item}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img alt="Photo" src={item.photo}/>
      </div>
      <div className={styles.cardTextContainer}>
        <h3 className={styles.cardTitle}>{item.name}</h3>
        <p className={styles.cardSecondaryText}>{item.description}</p>
        <p className={styles.cardSecondaryText}>{item.weight}g</p>
        <p className={styles.cardPriceTitle}>{Math.round(item.price)} UAH</p>
      </div>
    </div>
  );
};

export default DishCard;
