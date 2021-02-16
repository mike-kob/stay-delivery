import React from 'react';
import Cookies from 'js-cookie';

import styles from './Home.module.css';
import CatalogLayout from '@/components/CatalogLayout';
import CategoryCarousel from '@/components/CategoryCarousel';

//TODO remove hardcoded categories

const Home = () => {
  return (
    <CatalogLayout>
      <div>
         Stay with your family. 
        Don’t spend time going to market.
      </div>
      <CategoryCarousel categories={[ {name: "Pizza"}, {name: "Desserts"}  ]} />
    </CatalogLayout>
  );
};

export default Home;
