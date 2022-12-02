import React from 'react'

function ChildComponent(props){
    return (
        <div>
            {/* to pass a parameter use the arrow function */}
            <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent