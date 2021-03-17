import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

import CatalogLayout from '@/components/CatalogLayout';
import {clientGraphql} from '@/graphql';
import {GET_RESTAURANT_QUERY} from '@/graphql/restaurant';
import RestaurantPage from './RestaurantPage';

const Restaurant = () => {
  const router = useRouter();
  const [restaurant, setRestaurant] = useState({dishes: [], locations: []});

  useEffect(() => {
    (async function() {
      if (router.query.id) {
        const {data} = await clientGraphql(
            GET_RESTAURANT_QUERY,
            {id: router.query.id},
        );
        if (data?.restaurant) {
          setRestaurant(data?.restaurant);
        } else {
          await router.push('/');
        }
      }
    })();
  }, [router.query.id]);


  return (
    <CatalogLayout>
      <RestaurantPage restaurant={restaurant} />
    </CatalogLayout>
  );
};

export default Restaurant;
