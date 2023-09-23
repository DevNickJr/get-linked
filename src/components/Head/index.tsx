'use client'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import Links from '@/components/Links'
import { RxCaretDown } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'

const Head = () => {
  const [isOpen, setIsOpen] = React.useState(false)


  return (
    <div className='fixed top-0 left-0 right-0 z-30 flex items-center justify-between gap-4 px-12 overflow-hidden text-white shadow p-7 bg-secondary md:px-14 lg:px-20 border-b border-[#FFFFFF2E]'>
      <h2 className='text-2xl font-bold font-clash'>get<span className='text-primary'>linked</span></h2>
      <div className='flex items-center justify-between gap-2'>
        {/* <div className="w-4 h-4 bg-gray-200 rounded-full" /> */}
        <div className='flex items-center gap-2 text-xs'>
          {/* <Image src={''} className="w-6 h-6 rounded-full" width={100} height={100} alt='Profile'  /> */}
          <div className="items-center justify-between hidden gap-32 md:flex">
            <div className="justify-between hidden gap-12 text-sm md:flex">
              <Link href={"/"} className=''>Timeline</Link>
              <Link href={"/"} className=''>Overview</Link>
              <Link href={"/faqs"} className=''>FAQs</Link>
              <Link href={"/contact"} className=''>Contact</Link>
            </div>
            <button className='p-3.5 px-10 text-sm rounded grad-to-r'>Register</button>
          </div>
          { !isOpen && 
            <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-gray-dark' />
          }
        </div>
      </div>
      <Links isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default Head