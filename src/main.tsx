import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <--- 1. Importar esto
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Envolver la App con HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)