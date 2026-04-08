import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource-variable/imbue"; 
import "@fontsource-variable/eb-garamond"; 
import "@fontsource/dm-mono"; 
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
