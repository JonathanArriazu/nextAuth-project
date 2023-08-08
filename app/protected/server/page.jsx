'use server'
import React from 'react'

const ProtectedServerPage = () => {
  return (
    <div>
        <h1>This is a
            <i style={{color: 'red'}}> Server-Side</i> protected page
        </h1>

        <p>You are logged in as: <b>JoniArriazu</b></p>
    </div>
  )
}

export default ProtectedServerPage