import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '../index.css'
import '../index-contacto-section.css'
import '../index-about-section.css'
import Index from '../router/router'


createRoot(document.getElementById('pag')).render(
  <StrictMode>
    <BrowserRouter>
      <Index/>
    </BrowserRouter>
  </StrictMode>,
)
