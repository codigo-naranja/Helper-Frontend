import { type as saveUser } from "../actions/saveUser";

const defaultState = [];

const reducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case saveUser: {
      return [...state, payload];
    }
    default:
      return state;
  }
};

export default reducer;
