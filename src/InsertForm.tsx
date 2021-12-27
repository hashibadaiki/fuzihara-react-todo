import React, { useState } from 'react'
import './App.css'
import { insertText,initTodo } from './testSlice'
import { useDispatch } from 'react-redux';


export const InsertFrom = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch();

  const insertTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText((e.target as HTMLInputElement).value)
  }
  const dispatchText = () => {
    dispatch(insertText(text))
    const textInput = document.getElementById("textInput") as HTMLInputElement;
    textInput.value = ""
  }
    const dispatchText2 = () => {
    dispatch(initTodo(text))
    const textInput = document.getElementById("textInput2") as HTMLInputElement;
    textInput.value = ""
  }

  return (
    <div className="App">
      <form>
        {/* <input type="text" id='textInput' onChange={insertTodo}/>
        <input type="button" value="追加" onClick={dispatchText} /> */}
        <input type="text" id='textInput2' onChange={insertTodo}/>
        <input type="button" value="追加" onClick={dispatchText2}/>
      </form>
    </div>
  )
}
