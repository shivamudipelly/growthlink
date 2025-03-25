import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Portfolio from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
