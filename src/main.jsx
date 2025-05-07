import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SectionProvider } from './contexts/SectionProvider'
import App from './App'
import './styles/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SectionProvider>
      <App />
    </SectionProvider>
  </StrictMode>,
)
