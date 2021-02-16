import React, {useState, useEffect} from 'react';

import {clientGraphql} from '@/graphql';
import styles from './CategoryCarousel.module.css';
import {GET_CATEGORIES_QUERY} from '@/graphql/category';

const CategoryCarousel = ({category, setCategory}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async function() {
      const {data} = await clientGraphql(GET_CATEGORIES_QUERY);
      setCategories(data?.tags);
    })();
  }, []);

  return (
    <>
      <div>
        Choose category
      </div>
      <CategoryItem
        selected={category===null}
        category={{name: 'All'}}
        onClick={() => setCategory(null)}
      />
      {
        categories.map((cat) => (
          <CategoryItem
            selected={category?.id === cat.id}
            key={cat.id}
            category={cat}
            onClick={() => setCategory(cat)}
          />))
      }
    </>
  );
};

const CategoryItem = ({category, selected, onClick}) => {
  return (
    <button className={styles.category} onClick={onClick}>
      { category.name}
      {selected && '(x)'}
    </button>
  );
};

export default CategoryCarousel;