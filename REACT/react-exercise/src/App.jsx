import { useState } from 'react'
import HelloWorld from './HelloWorld'
import Counter from './Counter'
import LoginForm from './LoginForm'
import UncontrolledInput from './UncrontrolledInput'
import ItemList from './ItemList'
import Card from './Card'

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
      <br /><br /><br />
      <div>
            <h1>My Cards</h1>
            <Card>
                <h2>Card Title 1</h2>
                <p> card 1.</p>
            </Card>
            <Card>
                <h2>Card Title 2</h2>
                <p> card 2.</p>
            </Card>
            <Card>
                <h2>Card Title 3</h2>
                <p> card 3.</p>
            </Card>
        </div>
    </>
  )
}

export default App
