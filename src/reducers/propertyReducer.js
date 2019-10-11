function propertyReducer(state = { properties:[] }, action) {
    switch(action.type) {
      case 'FETCH_PROPERTIES':
        return { ...state, properties: action.payload.data };
      case 'GET_PROPERTY':
        return { ...state, property: action.payload.data };
      case 'SELECT_PROPERTY':
        return { ...state, selected: action.payload };
      case 'DELETE_PROPERTY':
          return { ...state, deleted: action.payload };
      default:
        return state;
    }
  }
  
  export default propertyReducer;
  