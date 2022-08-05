import React, { Suspense,lazy, Fragment } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Registration = lazy(()=> import('../components/registration/Registration'))


const RegistrationPage = () => {
  return (
    <div>
      <Fragment>
      <Suspense fallback={<LazyLoader />}>

          <Registration />
          
      </Suspense>
      </Fragment>
    </div>
  )
}

export default RegistrationPage
