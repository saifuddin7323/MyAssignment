import {GET_USER_NAME} from '../types';

export interface userState {
  user_name: string;
}

export interface USER_ACTIONS {
  type: typeof GET_USER_NAME;
  payload: userState;
}

const initialState: userState = {
  user_name: '',
};

export const userReducer = (state = initialState, action: USER_ACTIONS) => {
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
