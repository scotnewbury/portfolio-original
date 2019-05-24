import React from 'react'

function Header() {
  return (
    <div>
      <header>
          <h3 style = {navigationStyle}>Navigation will go here</h3>
      </header>
    </div>
  )
}

const navigationStyle = {
  color: '#fff'
}

export default Header;
