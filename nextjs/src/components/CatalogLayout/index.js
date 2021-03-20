import React, {useState, useEffect} from 'react';

import RightBar from '../RightBar';
import Header from '../Header';
import styles from './CatalogLayout.module.css';
import ItemsContext from '../ItemsContext/ItemsContext';
import {getCart, setCart} from '@/utils/cart';

const CatalogLayout = ({children}) => {
  const [items, setItems] = useState([]);
  const saveItems = (newItems) => {
    setItems(newItems);
    setCart(newItems);
  };

  useEffect(() => {
    setItems(getCart());
  }, []);

  return (
    <ItemsContext.Provider value={{
      items,
      saveItems,
    }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className={`col-9 ${styles.pad} ${styles.maincolor}`}>
            <Header />
            <div>
              {children}
            </div>
          </div>
          <div className={`col-3 ${styles.sideBar} ${styles.pad}`}>
            <RightBar />
          </div>
        </div>
      </div>
    </ItemsContext.Provider>
  );
}

export default CatalogLayout;
