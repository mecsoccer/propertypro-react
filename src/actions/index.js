import axios from 'axios';

export const signin = signinCredentials => async dispatch => {
  const userData = await axios.post('https://serene-acadia-52622.herokuapp.com/api/v1/auth/signin',
    signinCredentials
  );
  console.log(userData);
  dispatch({ type: 'SIGNIN', payload: userData });
}