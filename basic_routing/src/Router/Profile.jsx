import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {id} = useParams()
  return (
    <div>
      Profile
      <h2> User ID = {id}</h2>
    </div>
  )
}

export default Profile
