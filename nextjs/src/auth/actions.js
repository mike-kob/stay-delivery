import {auth} from './firebase';
import axios from 'axios';

export const loginWithEmail = async (email, password) => {
  const user = await auth.signInWithEmailAndPassword(email, password);
  const token = await user.getIdToken();

  const res = await axios.post('/login',
      {id_token: token},
      {withCredentials: true},
  );
  console.log(res);
};

export const clientSignupWithEmail = async (email, password) => {
  console.log('INNER');
  const userCredential = await auth.createUserWithEmailAndPassword(email,
      password);
  console.log(userCredential);
  const token = await userCredential.user.getIdToken();
  console.log('TOKEN', token);

  const res = await axios.post('/signup/client',
      {id_token: token},
      {withCredentials: true},
  );
  console.log(res, 'POSTED');
};
