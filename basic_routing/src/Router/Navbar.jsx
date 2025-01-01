import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const id =30; 
  const navbarStyle = {
    backgroundColor: 'black',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    gap: '2rem', // equivalent to space-x-8 in Tailwind
    padding: '0.75rem', // padding-3 (12px)
    paddingLeft: '6rem', // padding-x-24 (96px)
    paddingRight: '6rem' // padding-x-24 (96px)
  }

  return (
    <div style={navbarStyle}>
      <Link to='/' style={{ color: 'white' }}>Home</Link>
      <Link to='/dashboard' style={{ color: 'white' }}>Dashboard</Link>
      <Link to='/contact' style={{ color: 'white' }}>Contact</Link>
      <Link to='/about' style={{ color: 'white' }}>About</Link>
      <Link to={`/profile/${id}`} style={{ color: 'white' }}>Profile</Link>
    </div>
  )
}

export default Navbar
