import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    text: [] as any[],
    text2: [] as any[],
    isDelete: false,
    id: new Date().getTime()
  },
  reducers: {
    increase: (state) => {
      state.count += 1;
    },
    decrease: (state) => {
      state.count -= 1;
    },
    insertText: (state, action) => {
      state.text.push(action.payload);
      console.log(state.text)
    },
    initTodo: (state, action) => {
      state.text2.push({ id: new Date(),isDelete: false, text: action.payload });
      console.log(state.text2)
    },
    deleteText: (state, action) => {
      console.log("state.text2");
      state.text2.map((elm) => {
        if (elm.id === action.payload) {
          elm.isDelete = true;
          console.log("true");
        }
      });
      console.log(state.text2);
    },
  },
});

export const { increase, decrease, insertText, initTodo, deleteText } =
  counterSlice.actions;

export default counterSlice.reducer;

// use selectorの非同期問題確認
// todo を削除するようにする(以下は藤原さんとやってみる)
// todo を編集できるようにする
