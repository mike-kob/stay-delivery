import styles from './OrderItem.module.css';
import {Button} from 'react-bootstrap';

const OrderItem = ({ item, handleRemove, handleChange }) => {

  return (
    <div className={`row ${styles.itemBlock}`}>
        <div className="col-4">
          <div className={styles.imageBackground}>
            <img className={styles.image} src={item.image}></img>
          </div>
        </div>
        <div className="col-4">
          <div className="row">{item.name}</div>
          <div className="row">{item.price} $</div>
        </div>
        <div className="col-4">
          <div className="row">
            <Button className={styles.remove} onClick={() => handleRemove(item.id)}>Remove</Button>
          </div>
          <div className="row" style={{ margin: 'auto' }}>
            <button 
              className={styles.btnSign} 
              onClick={() => handleChange(item.id, item.quantity - 1)}
              >-</button>
            <span>{item.quantity}</span>
            <button 
              className={styles.btnSign}
              onClick={() => handleChange(item.id, item.quantity + 1)}
              >+</button> 
          </div>
        </div>
    </div>
  );
};

export default OrderItem;