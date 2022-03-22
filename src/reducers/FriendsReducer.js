import {combineReducers} from 'redux';
import {ADD_FRIEND} from '../constants/types';
const INITIAL_STATE = {
  current: [],
  possible: ['Alice', 'Bob', 'Sammy'],
};

const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      // Toma current y possible del estado anterior
      // No queremos alterar el estado directamente en caso
      // de que otra acción esté ya alterandolo al mismo tiempo
      const {current, possible} = state;

      // Agarramos a un amigo de friends.possible
      // Toma en cuenta que action.payload === friendIndex
      const addedFriend = possible.splice(action.payload, 1);

      // Ponemos al amigo en friends.current
      current.push(addedFriend);

      // Finalmente actualizamos el estado de redux
      const newState = {current, possible};

      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  friends: friendsReducer,
});
