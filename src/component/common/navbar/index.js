import React from 'react'

const Navbar = ({activeTab, setActiveTab}) => {
  return (
    <button onClick={setActiveTab('Night Life')}>Night Life</button>
  )
}

export default Navbar