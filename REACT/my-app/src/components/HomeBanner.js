import React, { useEffect, useRef, useState } from 'react';
import Axios from 'axios';
import { BsFillBagDashFill } from "react-icons/bs"; 

function HomeBanner(props) {


  useEffect(()=>{
    Axios.get('https://dummyjson.com/products').then((res)=>{

      console.log(res.data);

    }).catch((err)=>{

      console.log(err);
      
    })
  })

  // const [color,setColor]=useState('Red');

  // const click=()=>{
  //   setColor('Pink');
  // }

  // let UserName=useRef()
  // let Password=useRef()

  // const click=()=>{
  //   let u=UserName.current.value;
  //   let p=Password.current.value;

  //   alert(u)
  //   alert(p)
  // }






  return (
    <div>
      {/* <h2>{color}</h2> */}
      {/* <input ref={UserName} placeholder="UserName"/>
      <input ref={Password} placeholder="Password"/>
      <button onClick={click}>Click</button> */}
      {/* <button onClick={click}>Click</button> */}

      <button>click<BsFillBagDashFill /></button>
    </div>
  )
}

export default HomeBanner
