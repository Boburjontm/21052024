import React from 'react'

const Pagetwo2 = () => {
  return (
    <div className='flex flex-col gap-10 border'>
      <ul className='flex items-center justify-between px-10 py-12'>
        <li className='text-3xl text-orange-950'>Key stats</li>
        <li>     </li>
        <li className='flex flex-col gap-2 text-xl '><span className='text-6xl text-orange-950'>500+</span>award-winning clients</li>
        <li className='flex flex-col gap-2 text-xl '><span className='text-6xl text-orange-950'>$15B+</span>in client acquisitions</li>
      </ul >
       <ul className='flex items-center justify-between px-10 py-12'>
        <li className='flex flex-col gap-2 text-xl'><span className='text-6xl text-orange-950'>36</span>month average engagement</li>
        <li className='flex flex-col gap-2 text-xl ml-[-150px] '><span className='text-6xl text-orange-950'>20+</span>client IPOs supported</li>
        <li className='flex flex-col gap-2 text-xl ml-[-200px] '><span className='text-6xl text-orange-950'>20+</span>years of experience</li>
        <li className='flex flex-col gap-2 text-xl '><span className='text-6xl text-orange-950'>3K+</span>world-class engineers</li>
      </ul>
    </div>
  )
}

export default Pagetwo2
