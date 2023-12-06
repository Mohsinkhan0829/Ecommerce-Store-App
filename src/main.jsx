import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AllProductsContextProvider from './Components/Context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllProductsContextProvider>
    <App />
    </AllProductsContextProvider>
  </React.StrictMode>,
)
