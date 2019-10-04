import { GET_CARS, POST_CAR, GET_CAR } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case GET_CARS:
      return action.payload;
    case GET_CAR:
      return [action.payload];
    case POST_CAR:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
