//create Store
import { createStore } from 'redux';

const initialState = {
  winnings: {},
}
export const updateStateAction = (data) => ({
  type: "UPDATE_STATE",
  payload: data,

});

export const reducer = (state = initialState, action) => {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "UPDATE_STATE":
      return {
        ...state,
        winnings: action.payload,
      }
    default:
      return state;
  }


};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());