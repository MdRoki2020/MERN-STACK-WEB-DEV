import React, { Suspense,lazy } from 'react'
import LazyLoader from '../components/master-layout/LazyLoader'
import MasterLayout from '../components/master-layout/MasterLayout'
const Login = lazy(()=> import('../components/login/Login'))


const LoginPage = () => {
  return (
    <div>
      <MasterLayout>
      <Suspense fallback={<LazyLoader />}>

          <Login />
          
      </Suspense>
      </MasterLayout>
    </div>
  )
}

export default LoginPage
