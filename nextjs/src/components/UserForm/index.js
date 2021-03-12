import React from 'react';
import styles from './UserForm.module.css';
import FormInput from '../FormInput';

const UserForm = ({close, client, updateClient}) => {
  return (
    <div>
      <div className={styles.closeHeader}>
        <h3>Edit profile</h3>
        <button className={styles.closeButton}
          onClick={() => close()}>
          <i className="fa fa-times"></i>
        </button>
      </div>
      <FormInput className={styles.input} name="Name"
        value={client.name}
        update={(name) => updateClient({name: name})}
      />
      <FormInput className={styles.input} name="Email"
        value={client.user.email} />
      <FormInput className={styles.input} name="Phone: +38(093)111-11-11"
        value={client.phone}
        update={(phone) => updateClient({phone: phone})} />
      <FormInput className={styles.input} name="Street, house"
        value={client.address}
        update={(address) => updateClient({address: address})} />
      <FormInput className={styles.input} name="Card: 0000-0000-0000-0000"
        value={client.cardNumber}
        update={(card) => updateClient({card: card})} />
    </div>
  );
};

export default UserForm;
