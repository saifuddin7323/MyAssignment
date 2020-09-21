import {createStore} from 'redux';
import {userReducer} from './reducer/UserReducer';

const configureStore = () => {
  return createStore(userReducer);
};

export default configureStore;
