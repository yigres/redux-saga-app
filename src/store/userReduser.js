const defaultState = {
  users: []
}

export const SET_UESERS = "SET_UESERS";
export const FETCH_UESERS = "FETCH_UESERS";


export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_UESERS:
      return {...state, users: action.payload};
  
    default:
      return state;
  }
}

export const setUsers = (payload) =>({type: SET_UESERS, payload});
export const fetchUsers = () =>({type: FETCH_UESERS});
