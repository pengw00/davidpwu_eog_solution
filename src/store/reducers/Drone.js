import * as actions from '../actions';

const initialState = {
  droneData: []
};

const updateDrone = (state, action) => {
  return { 
    droneData: action.data, 
  }
};
const handlers = {
  [actions.UPDATE_DRONE_DATA]: updateDrone
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  if (typeof handler === "undefined") return state;
  return handler(state, action);
};



