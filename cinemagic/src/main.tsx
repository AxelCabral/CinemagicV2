import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AppRoutes } from './AppRoutes'
import  NavBar from './components/navBar/NavBar';

ReactDOM.createRoot(document.getElementById('body') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
    <AppRoutes />
  </React.StrictMode>
)
