import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Registration = lazy(()=> import('../components/registration/Registration'))


const RegistrationPage = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>

          <Registration />
          
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default RegistrationPage
