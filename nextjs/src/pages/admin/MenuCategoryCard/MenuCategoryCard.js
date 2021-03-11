import MenuItem from "@/pages/admin/MenuItem/MenuItem";
import styles from "./MenuCategoryCard.module.css"
import {Button} from "react-bootstrap";
const MenuCategoryCard = () => {
    return (
        <div className={styles.main}>
            <p>Pizzas</p>
            <div className={styles.items_list}>
                <MenuItem/>
                <MenuItem/>
            </div>
            <Button className={styles.orng_btn}>Add new dish</Button>
        </div>
    )
}

export default MenuCategoryCard;