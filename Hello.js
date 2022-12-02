import React from 'react'

//jsx way
// const Hello = ()=>{
//     return (
//         <div  className='dummyClass'>
//             <h1>Hello Jagdish</h1>
//         </div>
//     )
// }

//without jsx

const Hello=()=>{
    return React.createElement('div',
    {id:'hello',className:'dummyClass'},
    React.createElement('h1','null','Hello Jagdish')
    )
}
export default Hello