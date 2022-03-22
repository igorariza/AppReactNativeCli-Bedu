import {ADD_FRIEND} from '@/constants/types';

export const addFriend = friendsIndex => ({
  type: ADD_FRIEND,
  payload: friendsIndex,
});
