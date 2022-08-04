import React, { Fragment } from 'react'
import {  } from 'react-redux'

const FullScreenLoader = () => {

  return (
    <Fragment>
      <div className={"LoadingOverlay d-none"}>
        <div className='Line-Progress'>
          <div className='indeterminate'></div>
        </div>
      </div>
    </Fragment>
  )
}

export default FullScreenLoader
