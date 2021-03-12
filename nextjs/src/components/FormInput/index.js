import React, {useState} from 'react';
import styles from './FormInput.module.css';

const FormInput = ({name, value, update, placeholder}) => {
  const [val, setVal] = useState(value || '');
  const [newVal, setNewVal] = useState(value || '');
  const [isEditable, setEditable] = useState(!Boolean(value));

  return (
    <>
      { isEditable ?
        <input
          className={styles.input}
          placeholder={name}
          value={newVal}
          onChange={(e) => setNewVal(e.target.value)}
        /> :
        <div className={styles.buttonRow}>
          <div>{val}</div>
          { update &&
          <button
            className={styles.pencilButton}
            onClick={() => setEditable(true)}>
            <i className="fa fa-pencil"></i>
          </button>
          }
        </div>
      }

      { (newVal || newVal != val) && isEditable &&
        <button
          className={`orange ${styles.fullWidth}`}
          onClick={(e) => {
            console.log(newVal)
            setVal(newVal);
            setEditable(!Boolean(newVal));
            update(newVal);
          }}
        >Edit</button>
      }
    </>
  );
};

export default FormInput;
