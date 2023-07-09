import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-16 bg-black'>
        <div className='w-full h-full flex justify-between items-center px-10 text-white'>
           <div className='text-2xl'>Keval Habits</div>
           <div className='text-2xl'>{new Date().toLocaleDateString()}</div>
        </div>
    </div>
  )
}

export default Header