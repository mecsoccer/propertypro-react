import axiosInstance from '../apis/propertyPro';
import history from '../history';

export const signin = signinCredentials => async dispatch => {
  try {
    const response = await axiosInstance.post('/auth/signin', signinCredentials);
    dispatch({ type: 'SIGNIN', payload: response.data || {} });
    sessionStorage.setItem('token', response.data.data.token);
    sessionStorage.setItem('user_id', response.data.data.id);
    history.push('/properties');
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    dispatch({ type: 'SIGNIN', payload: {} });
  }
}

export const signout = () => dispatch => {
  dispatch({ type: 'SIGNOUT' });
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user_id');
  history.push('/signin');
}

export const fetchProperties = () => async (dispatch, getState) => {
  try {
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

    const response = await axiosInstance.get('/property');
    dispatch({ type: 'FETCH_PROPERTIES', payload: response.data });
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
  }
}

export const getSingleProperty = (id) => async (dispatch, getState) => {
  try {
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

    const response = await axiosInstance.get(`/property/${id}`);
    dispatch({ type: 'GET_PROPERTY', payload: response.data });
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    history.push('/properties');
  }
}

export const selectProperty = (propertyDetails) => (dispatch, getState) => {
  dispatch({ type: 'SELECT_PROPERTY', payload: propertyDetails });
}

export const createProperty = (propertyDetails) => async (dispatch, getState) => {
  try {
    axiosInstance.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

    const response = await axiosInstance.post('/property', propertyDetails);
    dispatch({ type: 'CREATE_PROPERTY', payload: response.data });
    window.location.reload();
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    alert('property not added');
  }
}

export const updateProperty = (id, propertyDetails) => async (dispatch, getState) => {
  try {
    axiosInstance.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

    const response = await axiosInstance.patch(`/property/${id}`, propertyDetails);
    dispatch({ type: 'UPDATE_PROPERTY', payload: response.data });
    history.push(`/properties/${id}`)
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    alert('problem updating property');
  }
}

export const markAsSoldProperty = (id) => async (dispatch, getState) => {
  try {
    axiosInstance.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

    const response = await axiosInstance.patch(`/property/${id}/sold`);
    dispatch({ type: 'PROPERTY_SOLD', payload: response.data });
    window.location.reload();
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    alert('problem updating property');
  }
}

export const deleteProperty = (id) => async (dispatch, getState) => {
  try {
    axiosInstance.defaults.headers.common['Authorization'] = sessionStorage.getItem('token');
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

    const response = await axiosInstance.delete(`/property/${id}`);
    dispatch({ type: 'DELETE_PROPERTY', payload: response.data });
    window.location.reload();
  }
  catch (error) {
    if (error.message === 'Network Error') return alert('No or poor network connection.');
    alert('problem deleting property');
  }
}

export const showFormModal = (form) => (dispatch, getState) => {
  dispatch({ type: 'SHOW_FORM_MODAL', payload: form });
}

export const closeFormModal = () => (dispatch, getState) => {
  dispatch({ type: 'SHOW_FORM_MODAL', payload: false });
}
