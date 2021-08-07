
const defaultState = {
  count: 5,
}

export const INCREMENT = "INCREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_DECREMENT = "ASYNC_DECREMENT";

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {...state, count: state.count + 1};
    case DECREMENT:
      return {...state, count: state.count - 1};    
    default: 
      return state;
  }
}

export const incrementCreator = () => ({type: INCREMENT});
export const AsyncIncrementCreator = () => ({type: ASYNC_INCREMENT});
export const decrementCreator = () => ({type: DECREMENT});
export const AsyncDecrementCreator = () => ({type: ASYNC_DECREMENT});
