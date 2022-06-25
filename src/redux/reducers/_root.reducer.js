const portfolio = (state = [], action) => {
    switch (action.type) {
      case 'SET_PORTFOLIO':
        return action.payload;
      default:
        return state;
    }
  };
  
  // portfolio will be on the redux state at:
  // redux
  export default portfolio;