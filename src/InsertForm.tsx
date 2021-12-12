import React, { useState } from 'react'
import './App.css'
import { insertText } from './testSlice'
import { useDispatch } from 'react-redux';


export const InsertFrom = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  const insertTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((e.target as HTMLInputElement).value)
  }
  const dispatchText = () => {
    dispatch(insertText(text))
  }

  return (
    <div className="App">
      <form>
      <input type="text" onChange={insertTodo}/>
      <input type="button" value="追加" onClick={dispatchText}/>
      </form>
    </div>
  )
}