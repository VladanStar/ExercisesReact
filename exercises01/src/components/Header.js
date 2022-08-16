import React from 'react'

function Header({text}) {
  return (
  <header>
    <div className="container">
        <h1>{text}</h1>
    </div>
  </header>
  )
}

export default Header