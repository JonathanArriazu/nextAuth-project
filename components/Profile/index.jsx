'use client'
import React from 'react'
import ProfileCard from './ProfileCard'
import ProfileUpdate from './ProfileUpdate'

const ProfileComponent = ({user}) => {
  return (
    <div>
        <ProfileCard user={user}/>
        <ProfileUpdate user={user}/>
    </div>
  )
}

export default ProfileComponent