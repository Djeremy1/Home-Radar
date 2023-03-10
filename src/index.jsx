import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <createRoot/>
  </Provider>,
  document.getElementById('root')
 
)