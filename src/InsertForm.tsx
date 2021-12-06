import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

export const InsertFrom = ( { getTodo }: any ) => {
  const [text, setText] = useState("")

  const insertTodo = (e: any) => {
    setText(e.target.value)
  }
  const arr: string[] = []
  const dispatchText = () => {
    arr.push(text)
    console.log(arr, "arr")
    getTodo(arr)
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