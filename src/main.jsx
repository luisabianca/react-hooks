import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChangeTheme from './components/useState/ChangeTheme/ChageTheme.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChangeTheme />
  </StrictMode>,
)
