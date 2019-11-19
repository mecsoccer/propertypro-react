function propertyReducer(state = { properties:[], counter: 0, query: {}, end: false }, action) {
    switch(action.type) {
      case 'FETCH_PROPERTIES':
        return { ...state, properties: action.payload.data };
      case 'MORE_PROPERTIES':
        return { ...state, properties: action.payload.data, counter: action.payload.counter };
      case 'LESS_PROPERTIES':
        return { ...state, properties: action.payload.data, counter: action.payload.counter };
      case 'UPDATE_PROPERTY_QUERY':
        return { ...state, query: action.payload };
      case 'UPDATE_PAGINATION':
        return { ...state, counter: action.payload };
      case 'END_OF_PROPERTIES':
        return { ...state, end: action.payload }
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
  