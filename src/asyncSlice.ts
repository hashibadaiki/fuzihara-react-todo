import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const asyncAlert = createAsyncThunk("alert", async () => {
  const res = await new Promise((test) => setTimeout(test, 3000));
  return res;
});

export const asyncSlice = createSlice({
  name: "asyncTest",
  initialState: {
    countA: 0,
    countB: 0,
    text: "",
  },
  reducers: {
    pulsA: (state) => {
      state.countA += 5;
      window.setTimeout(window.alert, 2000, "testA");
    },
    pulsB: (state) => {
      state.countB += 5;
      window.setTimeout(window.alert, 2000, "testB");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncAlert.fulfilled, (state) => {
      state.countA += 5;
    });
  },
});

export const { pulsA, pulsB } = asyncSlice.actions;

export default asyncSlice.reducer;

// use selectorの非同期問題確認
// 望んでいる動きは「state→alert Bのstate→alert」
