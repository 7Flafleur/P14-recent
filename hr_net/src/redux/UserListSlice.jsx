import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users:[]
}


const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action) => {
      if (action.payload) {
        state.users.push(action.payload);
      }
      else {
        console.error("Invalid data")
      }
    },
    removeUser: (state, action) => {
      return state.users.filter((user) => user.id !== action.payload)
    }

  }
})

export const { addUser, removeUser } = userListSlice.actions;
export default userListSlice.reducer;