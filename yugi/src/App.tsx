import './App.css';
import Theme from './styles/Theme'
import { Login } from './components/LoginForm';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DashBoard } from './components/DashBoard';
import React from 'react';

function App() {
  return (
    <Theme>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Theme>

  );
}

export default App;
