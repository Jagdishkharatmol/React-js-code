import React from 'react'
//This tutorial is for list rendering 2files namelist.js and person.js
function Person({person}) {
  return (
    <div>
        <h2>
        I am {person.name},I am {person.age} old, I have {person.skill} 
        </h2>
    </div>
  )
}

export default Person
   