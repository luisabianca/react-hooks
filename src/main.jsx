import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RealTimeClock from './components/useState/RealTimeClock/RealTimeClock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RealTimeClock />
  </StrictMode>,
)
