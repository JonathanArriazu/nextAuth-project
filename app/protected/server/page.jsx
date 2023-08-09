'use server'
import ProtectedComponent from '@/components/Protected'
import { getServerSession } from 'next-auth'
import React from 'react'

const ProtectedServerPage = async () => {

  const session = await getServerSession();

  return (
    <div>
        <h1>This is a
            <i style={{color: 'red'}}> Server-Side</i> protected page
        </h1>

        <ProtectedComponent user={session?.user} />
        
    </div>
  )
}

export default ProtectedServerPage