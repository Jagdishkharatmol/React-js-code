import  React from 'react'

// function Greet(){
//     return <h1>Hello Jagdish</h1>
// }


// export const Greet =() =><h1>Hello Jagdish</h1>
                // this is destructuring props and state ({name,heroName}) replace it with function props
const Greet =props =>{ //props---->props.name , props,heroName 

    const {name,heroName}=props

return(
    <div>
<h1>Hello {name} a.k.a  {heroName} </h1>
        {props.children}
        </div>
)
}
export default Greet;
