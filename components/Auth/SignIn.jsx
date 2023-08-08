'use client'
import {signIn} from 'next-auth/react'
import React from 'react'

const SignIn = () => {
  return (
    <div>
        <h2>Sign In With NextAuth</h2>
        
        {/* Google Login */}
        <div styles={{margin: '30px 0'}}>
            <button onClick={ () => signIn('google', {callbackUrl: "/"}) }>
                Continue with Google
            </button>
        </div>
    </div>
  )
}

export default SignIn