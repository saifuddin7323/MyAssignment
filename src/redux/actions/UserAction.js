import {GET_USER_NAME} from '../types';

export const updateUserName = (user_name) => ({
  type: GET_USER_NAME,
  payload: user_name,
});
