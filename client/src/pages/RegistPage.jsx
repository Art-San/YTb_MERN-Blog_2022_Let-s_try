import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../redux/features/auth/authSlice'
import TextField from '../components/common/form/TextField'

export const RegistPage = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
})

const handleChange = (target) => {
  console.log('target', target)
  setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
  }))
}




  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const dispatch = useDispatch()

  const handleSubmit = (e) => {
      e.preventDefault()
      console.log('khonnh', data.username)
      console.log('khonnh', data.password)
    
      
    try {
      dispatch(registerUser({ username, password }))
            
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className='w-1/4 h-60 mx-auto mt-40'

      >
          <TextField
              header='Регистрация'
              label="UserName"
              type="text"
              name='username'
              value={data.username}
              onChange={handleChange}
              placeholder='Введите имя'
          />

          <TextField
              label="Пароль"
              type="password"
              name='password'
              value={data.password}
              onChange={handleChange}
              placeholder='Введите пароль'
          />
        
        {/* <h1 className=' text-lg text-white text-center'>Регистрация</h1>
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
        </label> */}
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
