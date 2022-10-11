import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Teste2 from './Teste2'
import './index.css'
import { AppRoutes } from './AppRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
