import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 非同期をテストする為だけの処理。3秒停止
export const awaitTest = createAsyncThunk("alert", async () => {
  const res = await new Promise((resolve) => setTimeout(resolve, 3000));
  return res;
});

export const asyncSlice = createSlice({
  name: "asyncTest",
  initialState: {
    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0,
  },
  reducers: {
    pulsA: (state) => {
      state.countA += 5;
    },
    pulsB: (state) => {
      state.countB += 5;
    },
    // この方法だと不具合が出る
    pulsC: (state, action) => {
      state.countC += action.payload;
      console.log("payload", action.payload);
      console.log("countA", state.countA);
      console.log("countC", state.countC);
    },
    // この方法だと不具合が出ない
    pulsD: (state) => {
      state.countD += state.countA;
      console.log(state.countD);
    },
  },
  extraReducers: (builder) => {
    // loadingの時の処理
    // builder.addCase(awaitTest.pending, (state) => {
    //   state.countA += 5;
    // });
    // 成功時の処理
    builder.addCase(awaitTest.fulfilled, (state) => {
      state.countA += 5;
      state.countB += state.countA;
    });
  },
});

export const { pulsA, pulsB, pulsC, pulsD } = asyncSlice.actions;

export default asyncSlice.reducer;

// use selectorの非同期問題確認
// 結論 下記のような処理はこの関数実行後にstateが更新される
//  const testC = () => {
//   ①dispatch(pulsA())
//   ②dispatch(pulsC(countA))
// }
// 対処法としては、getStateを使う
// const testE = () => {
//   dispatch(pulsA())
//   const currentState = store.getState()
//   dispatch(pulsC(currentState.asyncTest.countA))
// }
// もしくはreducerの処理を書き変える
//
// ①の処理が非同期の場合、async chunkを使用する
