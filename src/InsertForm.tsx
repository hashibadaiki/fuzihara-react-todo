import React, { useState } from 'react'
import './App.css'
import { insertText } from './testSlice'
import { useDispatch } from 'react-redux';


export const InsertFrom = ( { getTodo }: any ) => {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  const insertTodo = (e: any) => {
    setText(e.target.value)
  }
  const dispatchText = () => {
    dispatch(insertText(text))
  }

  return (
    <div className="App">
      <h2>todo app</h2>
      <form>
      <input type="text" onChange={insertTodo}/>
      <input type="button" value="追加" onClick={dispatchText}/>
      </form>
    </div>
  )
}