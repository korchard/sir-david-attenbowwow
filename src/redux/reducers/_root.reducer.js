const gallery = (state = [], action) => {
    switch (action.type) {
      case 'SET_GALLERY':
        return action.payload;
      default:
        return state;
    }
  };
  
  // gallery will be on the redux state at: redux
  export default gallery;