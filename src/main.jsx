import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CounterPause from './components/useState/CounterPause/CounterPause.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterPause />
  </StrictMode>,
)
