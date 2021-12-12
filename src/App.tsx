import './App.css'
import { InsertFrom } from "./InsertForm"
import { useSelector, useDispatch } from 'react-redux';
import { increase } from './testSlice';

export const App = () => {
  const count = useSelector((state: any) => state.counter.count);
  const text = useSelector((state: any) => state.counter.text);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button onClick={() => dispatch(increase())}>up</button>
      <div>{count}</div>
      <div>{text}</div>
      <InsertFrom />
    </div>
  )
}