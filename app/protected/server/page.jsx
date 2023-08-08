'use server'
import React from 'react'
import { getServerSession } from 'next-auth/next'

const ProtectedServerPage = async () => {
  const session = await getServerSession()
  return (
    <div>
        <h1>This is a
            <i style={{color: 'red'}}> Server-Side</i> protected page
        </h1>

        <p>You are logged in as: <b>{session?.user?.name}</b></p>
    </div>
  )
}

export default ProtectedServerPage