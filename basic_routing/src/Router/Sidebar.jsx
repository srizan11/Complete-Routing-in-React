import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const sidebarStyle = {
    backgroundColor: 'black', // equivalent to 'bg-black'
    color: 'white', // equivalent to 'text-white'
    fontWeight: 'bold', // equivalent to 'font-bold'
    display: 'flex', // equivalent to 'flex'
    flexDirection: 'column', // equivalent to 'flex-col'
    gap: '2rem', // equivalent to 'space-y-8' (32px vertical spacing)
    padding: '0.75rem', // equivalent to 'p-3' (12px padding)
    paddingLeft: '6rem', // equivalent to 'px-24' (96px horizontal padding)
    paddingRight: '6rem',
    height: '24rem' // equivalent to 'h-96' (384px height)
  }

  const headingStyle = {
    color: '#E5E7EB', // equivalent to 'text-gray-200'
    fontSize: '1.875rem', // equivalent to 'text-3xl' (30px font size)
    marginTop: '1rem' // equivalent to 'mt-4' (16px top margin)
  }

  const linkStyle = {
    color: 'white', // ensures link text color matches sidebar
    textDecoration: 'none' // removes default underline
  }

  return (
    <div style={sidebarStyle}>
      <h2 style={headingStyle}>Sidebar</h2>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="products" style={linkStyle}>Products</Link>
      <Link to="orders" style={linkStyle}>Orders</Link>
    </div>
  )
}

export default Sidebar
