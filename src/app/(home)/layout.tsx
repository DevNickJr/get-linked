'use client'
import React from 'react'
import Head from '@/components/Head'


const StudentLayout = ({ children }: { children: React.ReactNode }) => { 

  return (
      <div className='overflow-hidden text-white bg-secondary'>
        <Head /> 
        <div className="relative overflow-hidden overflow-y-auto">
          {children}
        </div>
      </div>
  )
}

export default StudentLayout