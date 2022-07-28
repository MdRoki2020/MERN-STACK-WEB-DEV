import React, { useRef, useState } from 'react'

function HomeBanner(props) {

  // const [color,setColor]=useState('Red');

  // const click=()=>{
  //   setColor('Pink');
  // }

  let UserName=useRef()
  let Password=useRef()

  const click=()=>{
    let u=UserName.current.value;
    let p=Password.current.value;

    alert(u)
    alert(p)
  }
  return (
    <div>
      {/* <h2>{color}</h2> */}
      <input ref={UserName} placeholder="UserName"/>
      <input ref={Password} placeholder="Password"/>
      <button onClick={click}>Click</button>
      {/* <button onClick={click}>Click</button> */}
    </div>
  )
}

export default HomeBanner
