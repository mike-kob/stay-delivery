import React from 'react';
import DishCard from '@/components/DishCard';

import styles from './Restaurant.module.css';

const RestaurantPage = ({restaurant}) => {
  return (
    <div className={styles.main}>
      <div
        className={styles.restaurantInfo}
        style={{backgroundImage: `url(${restaurant.photo})`}}>
        <div className={styles.restaurantInfoText}>
          <h1 className={styles.mainHeader}>{restaurant.name}</h1>
          {
            restaurant.locations.map((location) => <p
              key={location.id}
              className={styles.location}>{location.address}</p>)
          }
          <p
            className={styles.restaurantDescription}
          >{restaurant.description}</p>
        </div>
      </div>
      <div className={styles.hidden}>
        {
          restaurant.locations.map((location) => <p
            key={location.id}
            className={styles.location}>{location.address}</p>)
        }
        <p className={styles.restaurantDescription}>{restaurant.description}</p>
      </div>
      <div>
        <h2 className={styles.dishTitle}>Dishes</h2>
        <div className={styles.dishesGrid}>
          {
            restaurant.dishes.map((item) => (
              <DishCard key={item.id} item={item}/>))
          }
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
