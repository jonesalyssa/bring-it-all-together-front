import { useState } from 'react'
import './App.css'
import { Provider } from "react-redux";
import { store } from './app/store';
import Register from './components/Registration/Registration';
import Nav from './components/Navigations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';

function App() {
  

  return (
    <>
     <Router>
        <Nav />
        <Routes>
          {/* <Route path="/" element ={<Books />} /> */}
          <Route path= "/register/" element ={<Register />} />
          <Route path= "/login/" element ={<Login />} />
          {/* <Route path= "/books/:id" element ={<SingleBook selectedBookId ={selectedBookId} setSelectedBookId ={setSelectedBookId} />} />
          <Route path = "/account/" element ={<Account />} /> */}
        </Routes>

      </Router>
    </>
  )
}

export default App
