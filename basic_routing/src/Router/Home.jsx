import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()

    const handleLogin = () =>{
            //logic
            navigate('/dashboard')
    }
    const buttonStyle = {
        marginTop: '1rem', // equivalent to 'mt-4' (16px in Tailwind)
        backgroundColor: '#60A5FA', // equivalent to 'bg-blue-400'
        color: 'white', // equivalent to 'text-white'
        padding: '0.5rem' // equivalent to 'p-2' (8px)
      }
  return (
    <div className='p-16'>
      <h2 className='text-3xl font-bold'>Home Page</h2>
      <button style={buttonStyle} onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home
