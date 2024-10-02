import { configureStore} from '@reduxjs/toolkit';
import userListReducer from './UserListSlice';


const store = configureStore({
  reducer: {  
    userList: userListReducer
  }
});

export default store;
