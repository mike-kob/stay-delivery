import React from 'react';
import DishCard from '@/components/DishCard';
import styles from './ItemsGrid.module.css';
import {useRouter} from 'next/router';

const ItemsGrid = ({items}) => {
  const router = useRouter();
  const m = Object.fromEntries(
      items.map(((i) => [i.restaurant.id, i.restaurant.name])));

  return (
    <>
      <div className={styles.title}>
        Choose restaurant
      </div>

      {
        Object.keys(m).map((restId) => (
          <>
            <div onClick={() => {
              router.push('/restaurant/' + restId);
            }} className={styles.subtitle}>{m[restId]}</div>
            <div className={styles.dishesGrid}>
              {items.filter((i) => i.restaurant.id === restId).slice(0, 3).map((item) => <DishCard key={item.key} item={item}/>)}
            </div>
          </>
        ))
      }
    </>
  );
};

export default ItemsGrid;
