function authReducer(state = {}, action) {
  switch(action.type) {
    case 'SIGNIN':
      if (!action.payload.data) {
        return { ...state, isSignedIn: false };
      }
      return { ...state, user: action.payload.data, isSignedIn: true };
    case 'SIGNOUT':
      return { ...state, user: {}, isSignedIn: false };
    default:
      return state;
  }
}

export default authReducer;
