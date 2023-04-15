const initialState = {
    count: 0
  };
  
  const countReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNT':
        return { count: state.count + 1 };
      case 'DECREMENT_COUNT':
        return { count: state.count - 1 };
      case 'RESET_COUNT':
        return { count: 0 };
      default:
        return state;
    }
  };
  export default countReducer;