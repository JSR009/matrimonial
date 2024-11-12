"use client";
import React from 'react'
import AdminLogin from '@/components/AdminLogin'

const page = () => {
  return (
    <div>
      <AdminLogin onLogin={function (): void {
        throw new Error('Function not implemented.')
      } } />
      
    </div>
  )
}

export default page
