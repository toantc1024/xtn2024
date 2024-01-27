import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-red-500 py-4 px-8 flex justify-between'>
      <div className='p-4 font-extrabold text-4xl text-yellow-400 '>
        ITUTE {"</>"} Kiểng Phước
      </div>

      <div className='text-2xl font-bold text-yellow-400 flex gap-2 justify-between'>
        <ul className='flex gap-4 items-center'>
          <li>
            <a href='#'>Giới thiệu</a>
          </li>
          <li>
            <a href='#'>Albumn</a>
          </li>
          <li>
            <a href='#'>Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar