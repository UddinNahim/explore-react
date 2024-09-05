import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer'
import Counter from './counter'
import Users from './user'
import Friends from './Friends'

function App() {

  const actors = ['sakib','shuvo','Nahim','Salman Shah']
  const singers =[
    {name: 'Dr. Mahfuzur Rahaman' , age: 38},
    {name :'Eva Rahman', age: 40},
    {name :'SHuvro Dev', age: 40},
    {name :'Prithm Hasan', age: 30},
  ]


  return (
    <>
     
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Actor name={"Bappa Razz"}></Actor>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
         
      }
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Todo task = "Learn React" isDone ={true} ></Todo>
      <Todo task = "explore React"  isDone ={false}></Todo>
      <Todo task = "Try jsx"  isDone = {true}></Todo> */}
      {/* <Device name = 'Laptop' price = "30000"></Device>
      <Device name = 'Mobile' price = "20000"></Device>
      <Device name = 'watch' price = "300"></Device>
      <Student></Student>

      <Calculate></Calculate>
      <Developer></Developer> */}

    </>
  )
}

function Device(props){
  console.log(props)
  return <h2>This Device:{props.name} , Price ={props.price} </h2>
}

function Student() {
  return ( 
  
  <div className='student' >
      <h3>I am a Student</h3>
      <p>Name:</p>
      <p>Age:</p>

  </div>

  )
}

function Developer(){
  const developerStyle = {
    margin: ' 20px',
    padding : '20px',
    border : '2px solid purple',
    borderRadius : '10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo </h5>
      <p>Coding:</p>

     
    </div>
  )

}

function Calculate(){
  const myMoney = 59;
  const hasan= 40

  return <h3>My and hasan have total money : {myMoney+ hasan} </h3>
}



export default App
