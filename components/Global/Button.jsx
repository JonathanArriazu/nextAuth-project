'use client'
import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

const Button = ({ value, ...props }) => {

    const { pending } = useFormStatus()

  return (
    <button {...props} disabled={pending}>
        { pending ? 'Loading...' : value }
    </button>
  )
}

export default Button