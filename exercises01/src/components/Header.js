import React from 'react'

function Header(props) {
  return (
  <header>
    <div className="container">
        <h1>{props.text}</h1>
    </div>
  </header>
  )
}

export default Header