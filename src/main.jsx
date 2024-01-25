import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import './index.css'
import { Provider } from 'react-redux'
import { myStore } from './assets/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={myStore}>
    <App />
    </Provider>
  </BrowserRouter>,
)
