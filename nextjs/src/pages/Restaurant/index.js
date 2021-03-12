import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {clientGraphql} from '@/graphql';
import {GET_RESTAURANT_QUERY} from '@/graphql/restaurant';
// import ItemsGrid from '@/components/ItemsGrid';

import styles from './Restaurant.module.css';

const Restaurant = () => {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState({ dishes: [] });

  useEffect(() => {
    (async function() {
      if (router.query.id) {
        const {data} = await clientGraphql(GET_RESTAURANT_QUERY, {id: router.query.id});
        setRestaurant(data?.restaurant);
      }
    })();
  }, [router.query.id]);

  return (
    <div className={styles.main}>
      <img src={restaurant.photo}></img>
      <h1 className={styles.mainHeader}>{restaurant.name}</h1>
      <div>{restaurant.description}</div>
      <h2>Dishes</h2>
      <div>
      {
        restaurant.dishes.map((item) => (
          <Item key={item.key} item={item} />))
      }
      </div>
    </div>
  );
};

const Item = ({item}) => {
  return (
    <div className={styles.main}>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.weight}</p>
      <p>{item.price}</p>
      <img src={item.photo}></img>
    </div>
  );
};

export default Restaurant;
