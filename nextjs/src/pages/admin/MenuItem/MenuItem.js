import React from 'react';
import {useRouter} from 'next/router';

import styles from './MenuItem.module.css';
import MenuTag from '@/pages/admin/MenuTag/MenuTag';

const MenuItem = ({dish, dishes, setDishes}) => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.dishPanel}>
        <div className={styles.menu_item}>
          <img src={dish.photo} alt="food pic"/>
          <div className={styles.description_area}>

            <div className={styles.title}>{dish.name}</div>
            <div className={styles.description_text}>{dish.description}</div>
            <div className={styles.description_text}>{dish.weight}g</div>

          </div>
        </div>

        <div className={styles.instrument_area}>
          <div className={styles.price}>{dish.price} uah</div>
          <a><img
            style={{cursor: 'pointer'}}
            onClick={() => router.push('/admin/edit/' + dish.id)}
            src="/edit_icon.svg" alt="edit"/>
          </a>
          <a><img
            style={{cursor: 'pointer'}}
            onClick={() => {
              const res = confirm(`Do you want to delete "${dish.name}" ?`);
              if (res) {
                setDishes(dishes.filter((d) => d.id !== dish.id));
              }
            }} src="/delete_icon.svg" alt="delete"/></a>
        </div>
      </div>

      <div className={styles.tagPanel}>
        {dish.tags.map((t) => (
          <MenuTag tag={t}/>
        ))}

      </div>
    </div>
  );
};

export default MenuItem;
