import React from 'react'
function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
      <div className='absolute top-[5%] w-full py-5 flex justify-center text-white text-2xl font-normal'>Documents</div>
      <h1 className='absolute text-[15vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-white leading-none tracking-tighter font-light'>Docs</h1>
    </div>
  )
}

export default Background
