import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/features/auth/authSlice'

export const RegistPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }))
      setPassword('')
      setUsername('')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form 
        onSubmit={e => e.preventDefault()}
        className='w-1/4 h-60 mx-auto mt-40'

      >
        <h1 className=' text-lg text-white text-center'>Регистрация</h1>
        <label className=' text-xs text-gray-400'>
          UserName:
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='UserName'
            className=' mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-white ' 
          />
        </label>
        <label className=' text-xs text-gray-400'>
          Password:
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className=' mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-white ' 
          />
        </label>
        <div className='flex gap-8 justify-center mt-4'>
          <button
            type='submit'
            onClick={handleSubmit}
            className='flex justify-center items-center text-xs bg-gray-500 text-white rounded-sm py-2 px-4'
          >Подтвердить</button>
          <Link
            to={'/login'}
            className='flex justify-center items-center text-xs text-white'
          >Уже зарегистрированный?</Link>
        </div>

      
      </form>
    </>
  )
}
