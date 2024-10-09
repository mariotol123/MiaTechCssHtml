import { useState } from 'react'
import HelloWorld from './HelloWorld'
import Counter from './Counter'
import LoginForm from './LoginForm'
import UncontrolledInput from './UncrontrolledInput'

function App() {
  return (
    <>
      <HelloWorld />
      <Counter />
      <LoginForm />
      <br />
      <br />
      <UncontrolledInput />
    </>
  )
}

export default App
