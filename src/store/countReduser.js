
const defaultState = {
  count: 5,
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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

export const incrementCreator = (payload) => ({type: INCREMENT, payload});
export const decrementCreator = (payload) => ({type: DECREMENT, payload});
