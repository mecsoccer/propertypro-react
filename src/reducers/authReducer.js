function authReducer(state = {}, action) {
  switch(action.type) {
    case 'SIGNIN':
      if (!action.payload.data) {
        return { ...state, isSignedIn: false };
      }
      return { ...state, [action.payload.data.id]: action.payload.data, isSignedIn: true };
    default:
      return state;
  }
}

export default authReducer;
