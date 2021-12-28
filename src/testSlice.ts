import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    text: [] as any[],
    text2: [] as any[],
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
    },
    initTodo: (state, action) => {
      state.text2.push({
        id: new Date().getTime(),
        isDelete: false,
        text: action.payload,
      });
    },
    deleteText: (state, action) => {
      state.text2.map((elm) => {
        if (elm.id === action.payload) {
          elm.isDelete = true;
          console.log("true");
        }
      });
    },
    editText: (state, action) => {
      console.log(action);
      state.text2.map((elm) => {
        if (elm.id === action.payload.id) {
          elm.text = action.payload.value
        }
      });
    }
  },
});

export const { increase, decrease, insertText, initTodo, deleteText,editText } =
  counterSlice.actions;

export default counterSlice.reducer;

// use selectorの非同期問題確認
// todo を削除するようにする(以下は藤原さんとやってみる)
// todo を編集できるようにする
