import styles from './MenuTag.module.css'



const MenuTag = ({tag, canDelete = false, onDelete = function() { }}) => {

    return (
        <div className={styles.main}>
            {tag.name}
            {canDelete ? <button type="button" className={styles.delete_btn} onClick={onDelete}/> : <></>}
        </div>
    )
}

export default MenuTag;