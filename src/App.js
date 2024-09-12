import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { UserContextProvider } from './Hooks/UserContext';
import NavBar from './components/NavBar';

function App() {
  return (
    <UserContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
