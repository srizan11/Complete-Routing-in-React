import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const dashboardStyle = {
    display: 'flex', // equivalent to 'flex'
    gap: '4rem' // equivalent to 'space-x-16' (64px horizontal gap)
  }

  const sidebarContainerStyle = {
    flex: '0 0 auto' // Ensures Sidebar doesn't shrink or grow unexpectedly
  }

  const outletContainerStyle = {
    flex: '1', // Allows Outlet to take the remaining space
    minWidth: '0' // Prevents overflow issues
  }

  return (
    <div style={dashboardStyle}>
      <div style={sidebarContainerStyle}>
        <Sidebar />
      </div>
      <div style={outletContainerStyle}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
