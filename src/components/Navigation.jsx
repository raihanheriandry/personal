import React from 'react'
import { Link } from "react-scroll"
import { BiHomeAlt, BiUser } from "react-icons/bi";

export default function Navigation() {
  return (
    <div className='fixed bottom-5 lg:bottom-32 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5'>
      <div className='flex justify-between mx-auto bg-white p-2 rounded-full border-solid border-[1px] max-w-[200px] lg:flex-col'>
        <Link  activeClass='active' className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer' offset={-100} smooth={true} spy={true} to='home'>
          <BiHomeAlt/>
        </Link>
        <Link  activeClass='active' className='flex w-[50px] h-[50px] justify-center items-center cursor-pointer' offset={-100} smooth={true} spy={true} to='profile'>
        {/* tambahin hover */}
          <BiUser/>
        </Link>
      </div>
    </div>
  )
}
