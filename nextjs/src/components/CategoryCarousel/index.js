import React, {useState, useEffect} from 'react';
import clsx from 'clsx';

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
      <div className={styles.title}>
        Choose category
      </div>
      <div className={styles.list}>
        <CategoryItem
          selected={category === null}
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
      </div>
    </>
  );
};

const CategoryItem = ({category, selected, onClick}) => {
  return (
    <button
      className={clsx(styles.category, selected && styles.category_selected)}
      onClick={onClick}>
      {category.name}
    </button>
  );
};

export default CategoryCarousel;
