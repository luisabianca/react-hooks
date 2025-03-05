import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CounterRender from './components/useRef/CounterRender/CounterRender.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterRender />
  </StrictMode>,
)
