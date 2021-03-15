import MenuItem from "@/pages/admin/MenuItem/MenuItem";
import styles from "./MenuContainer.module.css"
import {Button} from "react-bootstrap";
const MenuContainer = () => {
    return (
        <div className={styles.main}>
            <p>Menu</p>
            <div className={styles.items_list}>
                <MenuItem/>
                <MenuItem/>
                <MenuItem/>
            </div>
            <Button className={styles.orng_btn}>Add new dish</Button>
        </div>
    )
}

export default MenuContainer;