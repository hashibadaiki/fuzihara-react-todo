import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { InsertFrom } from "./InsertForm"
import { useSelector, useDispatch } from 'react-redux';
import { increase } from './testSlice';

export const App = () => {
  const [todo, getTodo] = useState()
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <button onClick={() => dispatch(increase())}>up</button>
      <div>{count}</div>
      <InsertFrom getTodo={getTodo}/>
      <div>{todo}</div>
    </div>
  )
}