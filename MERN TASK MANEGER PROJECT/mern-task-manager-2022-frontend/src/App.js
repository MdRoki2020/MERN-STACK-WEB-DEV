import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardPage from './pages/DashboardPage'
import CanceledPage from './pages/CanceledPage'
import CompeletedPage from './pages/CompeletedPage'
import CreatePage from './pages/CreatePage'
import ForgetpassPage from './pages/ForgetpassPage'
import LoginPage from './pages/LoginPage'
import NewPage from './pages/NewPage'
import Page404 from './pages/Page404'
import ProfilePage from './pages/ProfilePage'
import ProgressPage from './pages/ProgressPage'
import RegistrationPage from './pages/RegistrationPage'




function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<DashboardPage />}/>
          <Route exact path='/Canceled' element={<CanceledPage />}/>
          <Route exact path='/All' element={<CompeletedPage />}/>
          <Route exact path='/Create' element={<CreatePage />}/>
          <Route exact path='/Login' element={<LoginPage />}/>
          <Route exact path='/All' element={<NewPage />}/>
          <Route exact path='/*' element={<Page404 />}/>
          <Route exact path='/Profile' element={<ProfilePage />}/>
          <Route exact path='/Forgetpass' element={<ForgetpassPage />}/>
          <Route exact path='/Progress' element={<ProgressPage />}/>
          <Route exact path='/Registration' element={<RegistrationPage />}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
