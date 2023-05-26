import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { Page } from './Page';

export const DashBoard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
    // console.log('dd')
  });

  return (
    <div style={{ height: '100%' }}>
      <Header />
      <div style={{ height: '90%', display: 'flex' }}>
        <NavBar />
        <Page />
      </div>
    </div>
  )
}
