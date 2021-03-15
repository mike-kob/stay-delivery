import React from "react";
import styles from './MenuItem.module.css'
import MenuTag from "@/pages/admin/MenuTag/MenuTag";
const MenuItem = () => {
    return(
        <div className={styles.main}>
            <div className={styles.menu_item}>
                <img src="/pizza_temp_img.png" alt={"picture"}/>
                <div className={styles.description_area}>

                    <div className={styles.title}>Margherita</div>
                    <div className={styles.description_text}>Mozzarella, basilica, tomato pasta</div>
                    <div className={styles.description_text}>240g</div>
                    <div className={styles.tagPanel}>
                        <MenuTag/>
                        <MenuTag/>
                        <MenuTag/>
                    </div>
                </div>
            </div>

            <div className={styles.instrument_area}>
                <div className={styles.price}>125 uah</div>
                <button><img src="/edit_icon.svg" alt="edit"/></button>
                <button><img src="/delete_icon.svg" alt="delete"/></button>
            </div>
        </div>
    )
}

export default MenuItem;