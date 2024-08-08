import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Banner() {
  return (
    <div id='home' className='section container mx-auto max-w-[1000px] px-3 items-center flex flex-col justify-center my-32 lg:mb-0 lg:mt-0'>
      <div className='w-full '>
        <div className='block text-center font-secondary font-black '>
          <h1 
              className='text-[40px] md:text-[55px] text-white play'
              data-aos="zoom-in-up"
              data-aos-duration="1500"
          >
              Hi, I am Raihan Maulana Heriandry.
          </h1>
          <div className='mt-5' data-aos="zoom-in-up" data-aos-duration="1500">
            <TypeAnimation
              sequence={
                [
                  "Junior Website Developer",
                  2000,
                  "",
                  500,
                ]
              }
              wrapper='span'
              cursor={true}
              repeat={Infinity}
              className='ml-3 pop text-[24px] text-slate-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
