import React from 'react';
import {useRouter} from 'next/router';

import MenuItem from '@/pages/admin/MenuItem/MenuItem';
import styles from './MenuContainer.module.css';
import {Button} from 'react-bootstrap';

const MenuContainer = ({dishes, setDishes}) => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      {dishes.length === 0 ? <p>Empty menu</p> :
        <>
          <div className={styles.items_list}>
            {dishes.map((dish) => (
              <MenuItem
                key={dish.id}
                dish={dish}
                dishes={dishes}
                setDishes={setDishes}
              />
            ))}
          </div>
          <Button
            onClick={() => router.push('/admin/add')}
            className={styles.orng_btn}>Add new dish</Button>
        </>
      }
    </div>
  );
};

export default MenuContainer;
