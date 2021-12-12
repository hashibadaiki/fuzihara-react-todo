import './App.css'
import { InsertFrom } from "./InsertForm"
import { useSelector, useDispatch } from 'react-redux';
import { increase } from './testSlice';
import { RootState } from './store';

export const App = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const text = useSelector((state: RootState) => state.counter.text);
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