import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CounterDelay from './components/useState/CounterDelay/CounterDelay.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterDelay />
  </StrictMode>,
)
