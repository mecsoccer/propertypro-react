const initialState = {
  properties: [],
  counter: 0,
  query: {},
  start: true,
  end: false,
}

export default function propertyReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_PROPERTIES':
      return { ...state, properties: action.payload.data, counter: 0, start: true, end: false };
    case 'MORE_PROPERTIES':
      return { 
        ...state,
        properties: action.payload.data, 
        counter: action.payload.counter,
        start: action.payload.start,
      };
    case 'LESS_PROPERTIES':
      const { data, counter, end } = action.payload;
      return { ...state, properties: data, counter: counter, end };
    case 'UPDATE_PROPERTY_QUERY':
      return { ...state, query: action.payload };
    case 'UPDATE_PAGINATION':
      return { ...state, counter: action.payload };
    case 'END_OF_PROPERTIES':
      return { ...state, end: action.payload }
    case 'START_OF_PROPERTIES':
      return { ...state, start: action.payload }
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
  