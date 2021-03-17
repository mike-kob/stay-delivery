import React from 'react';
import styles from './Menu.module.css';
import MenuCategoryCard from '@/pages/admin/MenuCategoryCard/MenuCategoryCard';

const Menu = () => {
  return (
    <div className={styles.main}>
      <div className={styles.nav_menu}>
        <a href="account" className={styles.muted_nav_item}>
          Information
        </a>
        <a href="orders" className={styles.muted_nav_item}>
          Orders
        </a>
        <a href="menu" className={styles.selected_nav_item}>
          Menu
        </a>
      </div>
      <div className={styles.add_category_button}>
        <img src="/plus_icon.svg"/>
        <button>Add new category</button>
      </div>
      <div>
        <MenuCategoryCard/>
        <MenuCategoryCard/>
      </div>
    </div>
  );
};

export default Menu;