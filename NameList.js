import React from 'react'
import Person from './Person'
//This tutorial is for list rendering 
function NameList() {
    const names=['JK','MG','HL']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Mangesh',
            age:30,
            skill:'React'
        },
        {
            id:3,
            name:'Jagdish',
            age:30,
            skill:'React'
        },
        {
            id:4,
            name:'Hero',
            age:30,
            skill:'React'
        }

    ]
    const personList=persons.map(person=>(
        <Person key={person.id} person={person}/>
        ))

    const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
  return (<div>{nameList}</div>)
}

export default NameList




