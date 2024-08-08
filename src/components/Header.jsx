import React from 'react'

export default function Header() {
  return (
<div className='container mx-auto max-w-[1000px] px-3 relative lg:absolute left-0 right-0'>
        <div className='flex justify-between py-5 ittems-center'>
            <div 
                className='text-white'
                data-aos="fade-right" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                data-aos-delay="0"
            >
                <a href="/">
                    <h1 className='pop text-[30px] leading-none font-bold'>Raihan</h1>
                    <h4 className='font-normal leading-none'>Heriandry</h4>
                </a>
            </div>
            <div className='flex items-center space-x-3'>
                <a href="https://instagram.com/raihan.heriandry">
                    <img className='h-7 hover:rotate-180 duration-1000' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png" alt="" />
                </a>
                <a href="https://github.com/raihanheriandry">
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className='h-7 hover:rotate-180 duration-1000' alt="" />
                </a>
                <a href="https://www.linkedin.com/in/raihan-maulana-heriandry-6a39a326b/">
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" className='h-7 hover:rotate-180 duration-1000' alt="" />
                </a>
                <a href="https://tlx.toki.id/profiles/Raihanmh">
                    <img src="https://judgels.toki.id/img/logo.png" alt="" className=' h-7 hover:rotate-180 duration-1000'/>
                </a>
                <a href="https://codeforces.com/profile/Raihanmh">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3521352-2944796.png?f=webp&w=256" className='h-7 hover:rotate-180 duration-1000' alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}
