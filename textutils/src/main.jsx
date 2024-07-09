import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter as Router,
  Route,
  // Switch,
  Routes
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/App">
        <App />
      </Route>
    </Routes>
  </Router>
)
