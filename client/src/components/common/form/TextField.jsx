import React from 'react'

const TextField = ({type, value, name, onChange, placeholder, label, header }) => {
    const handleChange = ({ target }) => {
      // console.log('target', target)
        onChange({ name: target.name, value: target.value })
    }
  return (
    <>
      <h1 className=' text-lg text-white text-center'>{header}</h1>
        <label className=' text-xs text-gray-400'>
          {label}
          <input 
              type={type}
              id={name}
              name={name}
              value={value}
              onChange={handleChange}
              // placeholder={placeholder}
              className='mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-white'
          />
        </label>
      </>
  )
}

export default TextField


