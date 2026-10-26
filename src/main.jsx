import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Links shared while the site used #/products/... URLs
const legacy = window.location.hash.match(/^#\/products\/([\w-]+)/)
if (legacy) window.location.replace(`/products/${legacy[1]}/`)

const root = document.getElementById('root')
// A pre-rendered page says which page it is (404.html is served for any unknown URL)
const path = root.dataset.path || window.location.pathname
const app = (
  <React.StrictMode>
    <App path={path} />
  </React.StrictMode>
)

// Built pages arrive pre-rendered and are hydrated; the dev server starts empty
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
