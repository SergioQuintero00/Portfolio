import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource-variable/dm-sans'
import '@fontsource-variable/manrope'
import './styles.css'
import App from './App'
import type { Locale } from './content'

const locale: Locale = document.documentElement.lang === 'es' ? 'es' : 'en'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App locale={locale} />
  </React.StrictMode>,
)
