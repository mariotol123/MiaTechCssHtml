import { useState } from 'react'
import HelloWorld from './HelloWorld'
import Counter from './Counter'
import LoginForm from './LoginForm'
import UncontrolledInput from './UncrontrolledInput'
import ItemList from './ItemList'

const charArray = ['A', 'B', 'C', 'D'];

function App() {
  return (
    <>
      <HelloWorld />
      <Counter />
      <LoginForm />
      <br />
      <br />
      <UncontrolledInput />
      <br />
      <br />
      <br />
      <ItemList array={charArray} />
    </>
  )
}

export default App
