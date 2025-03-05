import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppTheme from './components/useContext/ShareTheme/AppTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppTheme />
  </StrictMode>,
)
