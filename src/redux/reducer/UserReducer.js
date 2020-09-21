import {GET_USER_NAME} from '../types';
const initialState = {
  user_name: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_NAME:
      return {
        state,
        user_name: action.payload,
      };
    default: {
      return state;
    }
  }
};
