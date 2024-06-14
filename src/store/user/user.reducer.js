import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
/*
It is pretty much a basic value of just current user which we simply set whenever the action of set current 
user comes through our Redux store. So the flow of data and everything with Redux Toolkit is the same. The 
actual implementation of Redux does not change. All Redux JS Toolkit does for us is it makes it easier to write Redux 
code. 

The way we did it before we would write our own reducer and our reducer is just a function that receives the current 
state as well as the action and then it will return you back an updated state. Inside of our reducer we have this
switch statement where we check based on the type of the action whether or not we want to respond. If we 
don't we return the state as is.  IF we do, we return a new state object with the modified values.
*/
