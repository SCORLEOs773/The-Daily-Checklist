import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ToDo from './components/ToDo'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <div>
        {/* <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path='/' element={<ToDo />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </Router> */}
        <Navbar />
        <ToDo />
      </div >
    )
  }
}