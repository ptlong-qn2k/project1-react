import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CreateStation from './ComponentsPopup/CreateStation.jsx'
import EditStation from './ComponentsPopup/EditStation.jsx'
import DeleteStation from './ComponentsPopup/DeleteStation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
)
