import React from 'react';
import DishCard from '@/components/DishCard';
import styles from './ItemsGrid.module.css';

const ItemsGrid = ({items}) => {
  return (
    <>
      <div className={styles.title}>
        Choose restaurant
      </div>
      <div className={styles.dishesGrid}>
        {
          items.map((item) => (
            <DishCard key={item.key} item={item} />))
        }
      </div>
    </>
  );
};

export default ItemsGrid;
