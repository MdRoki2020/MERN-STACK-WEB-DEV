import React, { Component, Fragment } from 'react'
import HomePage from './Pages/HomePage'
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }
}

