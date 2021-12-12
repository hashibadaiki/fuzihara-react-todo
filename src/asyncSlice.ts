import { createSlice } from "@reduxjs/toolkit";

export const asyncSlice = createSlice({
  name: "asyncTest",
  initialState: {
    countA: 0,
    countB: 0,
  },
  reducers: {
    pulsA: (state) => {
      state.countA += 5;
    },
    pulsB: (state) => {
      state.countB += 5;
    },
  },
});

export const { pulsA, pulsB } = asyncSlice.actions;

export default asyncSlice.reducer;

// use selectorの非同期問題確認
// todo を削除するようにする(以下は藤原さんとやってみる)
// todo を編集できるようにする
