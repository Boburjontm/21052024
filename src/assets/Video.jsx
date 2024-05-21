import React from 'react'

const Video = () => {
  return (
    <div className='border-b-[1px]'>
        <div className='  w-[100%]  border-[1px] px-8 pt-36 pb-4 gap-4 border-r-[1px] border-l-[1px]  '>
        <h1 className=' text-4xl font-semibold flex  justify-end'>Discover Vention in action</h1>
        <p className='flex justify-end text-lg w-[40%]'>See firsthand what sets us apart — and how our approach has translated into exponential growth for our clients worldwide. Hit play to begin your journey with us.</p>
      
    </div>
        <div className="flex justify-center items-center h-screen">
      <iframe 
        width="80%" 
        height="75%" 
        src="https://www.youtube.com/embed/CpO-2w7KjpE?si=c07Otg2gNxWlIqiJ" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
    </div>
  )
}

export default Video
