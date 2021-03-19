import React, {useEffect, useState} from 'react';

import CatalogLayout from '@/components/CatalogLayout';
import CategoryCarousel from '@/components/CategoryCarousel';
import ItemsGrid from '@/components/ItemsGrid';
import {clientGraphql} from '@/graphql';
import {GET_DISHES_QUERY} from '@/graphql/dish';

const Home = () => {
  const [category, setCategory] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async function() {
      const {data} = await clientGraphql(GET_DISHES_QUERY, {tag: category?.id});
      setItems(data?.dishes);
    })();
  }, [category]);

  return (
    <CatalogLayout>
      <CategoryCarousel category={category} setCategory={setCategory} />
      <ItemsGrid items={items} />
    </CatalogLayout>
  );
};

export default Home;
