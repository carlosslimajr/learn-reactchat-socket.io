import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

export default function PageHeader() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/chat">Chat</Link></li>
        </ul>
      </div>
    </header>
  )
}
