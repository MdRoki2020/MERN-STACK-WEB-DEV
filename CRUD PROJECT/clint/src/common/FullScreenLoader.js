import React from 'react'
import loader from "../Assets/img/loader.svg"
import '../Assets/css/Style.css'

function FullScreenLoader() {
  return (
    <div className='ProcessingDiv'>
        <div className='center-screen'>
            <img className='loader-size' src={loader} alt='loader'/>
        </div>
    </div>
  )
}

export default FullScreenLoader
