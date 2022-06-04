
import { useState } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';
import Main from './Main';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
