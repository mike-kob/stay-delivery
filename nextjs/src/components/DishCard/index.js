import React, {useContext} from 'react';
import styles from './DishCard.module.css';
import ItemsContext from '../ItemsContext/ItemsContext';

const DishCard = ({item}) => {
  const {items, saveItems} = useContext(ItemsContext);
  const handleClick = () => {
    const restaurant = item.restaurant.id;

    if (items.length && items[0].restaurant !== restaurant) {
      alert('You can\'t order dishes from different restaurants!');
      return;
    }

    saveItems([...items, {
      quantity: 1,
      image: item.photo,
      name: item.name,
      price: item.price,
      id: item.id,
      restaurant,
    }]);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
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
