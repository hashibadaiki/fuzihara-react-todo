import './App.css'
import { InsertFrom } from "./InsertForm"
import { useSelector, useDispatch } from 'react-redux';
import { increase } from './testSlice';
import { pulsA, pulsB } from './asyncSlice';
import { RootState } from './store';

export const App = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const text = useSelector((state: RootState) => state.counter.text);
  const countA = useSelector((state: RootState) => state.asyncTest.countA);
  const countB = useSelector((state: RootState) => state.asyncTest.countB);
  const dispatch = useDispatch();

  const DoubleUp = async () => {
    const dis = () => { dispatch(pulsA()) }
    // @ts-ignore
    await window.setTimeout(window.alert, 5000, "test");
    await dispatch(pulsB())
  }

  return (
    <div className="wrapper">
      {/* 教える用に置いておく。 */}
      <button onClick={() => dispatch(increase())}>up</button>
      <div>{count}</div>
      <div className='asyncTest'>
        <p>async test 用</p>
        <button onClick={() => dispatch(pulsA())}>Aup</button>
        <div>{countA}</div>
        <button onClick={() => dispatch(pulsB())}>Bup</button>
        <div>{countB}</div>
        <button onClick={DoubleUp}>Both UP</button>
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