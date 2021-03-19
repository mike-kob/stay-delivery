import React, {useEffect, useState} from "react";
import styles from "./Menu.module.css"
import MenuContainer from "@/pages/admin/MenuContainer/MenuContainer";
import {clientGraphql} from "@/graphql";
import {GET_DISHES_QUERY, GET_RESTAURANT_QUERY} from "@/graphql/rastaurant_admin";

const Menu = () => {
    const [dishes, setDishes] = useState([]);



    useEffect(() => {
        (async function() {
            const {data} = await clientGraphql(GET_DISHES_QUERY);
            setDishes(data.me.restaurant.dishes);

        })();
    }, []);
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
            <div>
                <MenuContainer dishes={dishes}/>
            </div>
        </div>
    )
}

export default Menu;