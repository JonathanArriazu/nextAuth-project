'use client'
import ProfileComponent from '@/components/Profile'
import { useSession } from 'next-auth/react'
import React from 'react'

const ProfileClientPage = () => {

  const {data: session} = useSession();

  return (
    <div>
      <h1 style={{color: 'red'}}>Profile Client Side</h1>
      <ProfileComponent user={session?.user}/>
    </div>
  )
}

export default ProfileClientPage