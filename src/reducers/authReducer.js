function authReducer(state = {foo: 'bar'}, action = {payload: {id: 1}}) {
  switch(action.type) {
    case 'SIGNIN':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}

export default authReducer;
