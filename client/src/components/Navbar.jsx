import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex py-4 justify-between items-center '>
        <span className='flex justify-center items-center w-6 h-6 bg-gray-600 text-sm text-white rounded-sm'>E</span>

        <ul className="flex gap-8">
            <li>
                <a href="/" className='text-xs text-gray-400 hover:text-white'>Главня 1:37:38</a>
            </li>
            <li>
                <a href="/" className='text-xs text-gray-400 hover:text-white'>Мои посты</a>
            </li>
            <li>
            <a href="/" className='text-xs text-gray-400 hover:text-white'>Добавит пост</a>
            </li>
        </ul>

        <div className='flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 '>
            <button>Войти</button>
        </div>
    </div>
  )
}
