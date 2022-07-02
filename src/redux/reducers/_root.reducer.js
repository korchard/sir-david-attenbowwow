import { combineReducers } from 'redux';

const gallery = (state = [], action) => {
    switch (action.type) {
      case 'SET_GALLERY':
        return action.payload;
      default:
        return state;
    }
  };

const organizations = (state = [], action) => {
  switch (action.type) {
    case 'SET_ORGANIZATIONS':
      return action.payload;
    default:
      return state;
  }
};
  

const rootReducer = combineReducers({
  gallery,
  organizations
});

// gallery will be on the redux state at: redux
export default rootReducer;