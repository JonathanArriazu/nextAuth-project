'use client'
import React from 'react'
import ProfileCard from './ProfileCard'

const ProfileComponent = ({user}) => {
  return (
    <div>
        <ProfileCard user={user}/>
    </div>
  )
}

export default ProfileComponent