import React from "react";
import styles from './MenuItem.module.css'
import MenuTag from "@/pages/admin/MenuTag/MenuTag";
const MenuItem = ({dish}) => {
    console.log(dish.tags)
    return(
        <div className={styles.main}>
            <div className={styles.dishPanel}>
                <div className={styles.menu_item}>
                    <img src={dish.photo} alt="food pic"/>
                    <div className={styles.description_area}>

                        <div className={styles.title}>{dish.name}</div>
                        <div className={styles.description_text}>{dish.description}</div>
                        <div className={styles.description_text}>{dish.weight}g</div>

                    </div>
                </div>

                <div className={styles.instrument_area}>
                    <div className={styles.price}>{dish.price} uah</div>
                    <a href="edit"><img src="/edit_icon.svg" alt="edit"/></a>
                    <a><img src="/delete_icon.svg" alt="delete"/></a>
                </div>
            </div>

            <div className={styles.tagPanel}>
                {dish.tags.map((t) => (
                    <MenuTag tag={t}/>
                ))}

            </div>
        </div>
    )
}

export default MenuItem;