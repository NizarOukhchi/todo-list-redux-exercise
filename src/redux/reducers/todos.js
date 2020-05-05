import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      const newState = state.map((item) => {
        if (item.id === id) item.completed = !item.completed;

        return item;
      });
      return newState;
    }
    default:
      return state;
  }
}
