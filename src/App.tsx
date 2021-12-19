import './App.css'
import { InsertFrom } from "./InsertForm"
import { useSelector, useDispatch } from 'react-redux';
import { pulsA, pulsB, pulsC, pulsD } from './asyncSlice';
import { RootState } from './store';
import { store } from './store';

export const App = () => {
  const text = useSelector((state: RootState) => state.counter.text);
  const countA = useSelector((state: RootState) => state.asyncTest.countA);
  const countB = useSelector((state: RootState) => state.asyncTest.countB);
  const countC = useSelector((state: RootState) => state.asyncTest.countC);
  const countD = useSelector((state: RootState) => state.asyncTest.countD);
  const dispatch = useDispatch();

  const testC = () => {
    dispatch(pulsA())
    dispatch(pulsC(countA))
  }

  // getStateだと想定通りに対応できる
  const testE = () => {
    // console.log(store.getState())
    dispatch(pulsA())
    const nowStateA = store.getState()
    dispatch(pulsC(nowStateA.asyncTest.countA))

    // この書き方はだめ
    // const countA = useSelector((state: RootState) => state.asyncTest.countA);
    // dispatch(pulsC(countA))
  }

  return (
    <div className="wrapper">
      <div className='asyncTest'>
        <p>async test 用</p>
        <button onClick={() => dispatch(pulsA())}>Aup</button>
        <div>{countA}</div>
        <button onClick={() => dispatch(pulsB())}>Bup</button>
        <div>{countB}</div>
        <button onClick={() => testC()}>Cup</button>
        <div>{countC}</div>
        <button onClick={() => dispatch(pulsD())}>Dup</button>
        <div>{countD}</div>
        <button onClick={() => testE()}>Eup</button>
        <div>{countD}e</div>
        {/* <button onClick={() => dispatch(pulsC())}>BothUP(normal)</button>
        <button onClick={() => dispatch(awaitTest())}>BothUP(async)</button> */}
      </div>
      {/* ここから本題。todo list */}
      <section className='todoList'>
        <h2>todo list</h2>
        <InsertFrom />
        {text.map((elm, i) => {
          return <div key={i}>{elm}</div>
        })}
      </section>
    </div>
  )
}