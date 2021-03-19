import MenuItem from "@/pages/admin/MenuItem/MenuItem";
import styles from "./MenuContainer.module.css"
import {Button} from "react-bootstrap";
const MenuContainer = ({dishes}) => {
    return (
        <div className={styles.main}>
            {dishes.length === 0 ? <p>Empty menu</p> :
                <>
                    <p>Menu</p>
                    <div className={styles.items_list}>
                        {dishes.map((dish) => (
                            <MenuItem dish={dish}/>

                        ))}

                    </div>
                    <Button className={styles.orng_btn}>Add new dish</Button>
                </>

            }
        </div>
    )
}

export default MenuContainer;