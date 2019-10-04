import axios from 'axios';

export const signin = signinCredentials => async dispatch => {
  try {
    const response = await axios.post('https://serene-acadia-52622.herokuapp.com/api/v1/auth/signin',
      signinCredentials
    );
    dispatch({ type: 'SIGNIN', payload: response.data || {} });
  } catch (error) {
    dispatch({ type: 'SIGNIN', payload: {} });
  }
}