import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    text: "",
  },
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
    insertText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { increase, decrease, insertText } = counterSlice.actions;

export default counterSlice.reducer;

// todo を追加できるようにしていく
// use selectorの非同期問題確認
// todo を削除するようにする(以下は藤原さんとやってみる)
// todo を編集できるようにする
