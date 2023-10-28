import { createSlice } from "@reduxjs/toolkit";

const userActionSlice = createSlice({
  name: "userAction",
  initialState: {
    subscription: [],
    likeVideos: [],
  },
  reducers: {
    subscribe(state, action) {
      state.subscription.push(action.payload);
    },
    unsubscribe(state, action) {
      state.subscription = state.subscription.filter(
        (sub) => sub !== action.payload
      );
    },
    like(state, action) {
      state.likeVideos.push(action.payload);
    },
    dislike(state, action) {
      state.likeVideos = state.likeVideos.filter(
        (sub) => sub !== action.payload
      );
    },
  },
});

export default userActionSlice.reducer;
export const { subscribe, unsubscribe, like, dislike } =
  userActionSlice.actions;
