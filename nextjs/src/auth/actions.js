import {auth} from './firebase';
import axios from 'axios';

export const clientSignupWithEmail = async (email, password) => {
  console.log('INNER');
  const userCredential = await auth.createUserWithEmailAndPassword(email,
      password);
  console.log(userCredential);
  const token = await userCredential.user.getIdToken();
  console.log('TOKEN', token);

  const res = await axios.post('/auth/signup/client',
      {id_token: token},
      {withCredentials: true},
  );
  console.log(res, 'POSTED');
};

export const loginWithEmail = async (email, password) => {
  console.log('INNER');
  const userCredential = await auth.signInWithEmailAndPassword(email, password);
  console.log(userCredential);
  const token = await userCredential.user.getIdToken();
  console.log('TOKEN', token);

  const res = await axios.post('/auth/login',
      {id_token: token},
      {withCredentials: true},
  );
  console.log(res, 'POSTED');
};
