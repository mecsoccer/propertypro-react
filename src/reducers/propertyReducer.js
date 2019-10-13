function propertyReducer(state = { properties:[] }, action) {
    switch(action.type) {
      case 'FETCH_PROPERTIES':
        return { ...state, properties: action.payload.data };
      case 'GET_PROPERTY':
        return { ...state, property: action.payload.data };
      case 'SELECT_PROPERTY':
        return { ...state, selected: action.payload };
      case 'UPDATE_PROPERTY':
        return { ...state, updated: action.payload.data };
      case 'PROPERTY_SOLD':
        return { ...state, property: action.payload.data };
      case 'DELETE_PROPERTY':
          return { ...state, deleted: action.payload.data };
      case 'SHOW_FORM_MODAL':
          return { ...state, form_modal: action.payload };
      default:
        return state;
    }
  }
  
  export default propertyReducer;
  