/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
import Friend from './Friend';

function App() {

  function handleClick(){
    alert('button clinck');
  }
  const handClick =() =>{
    alert('clink')
  }
  const addToFive = (num) =>{
    alert (num +5);
  }
  return (
    <>
      <h3>React core concept part 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
    <Counter></Counter>
    
 


      <button onClick={handleClick}>Click ME</button>
      <button onClick={handClick}>clcink 2</button>
      <button onClick={() => {alert('third click')}}>click3</button>
      <button onClick={() => addToFive(3)}>four</button>

      
    </>
  )
}

export default App
