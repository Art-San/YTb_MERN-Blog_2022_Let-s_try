import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ type, value, name, onChange, placeholder, label }) => {
    const [showPassword, setShowPassword] = useState(true)

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    }

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }
    return (
        <>
            <label className=" text-xs text-gray-400">
                {label}
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-base outline-none placeholder:text-white"
                />
            </label>
            {type === 'password' && (
                <button
                    className=" text-white text-xs"
                    type="button"
                    onClick={toggleShowPassword}
                >
                    {showPassword ? 'Скрыть' : 'Показать'}
                </button>
            )}
        </>
    )
}
TextField.defaultProps = {
    type: 'text'
}
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

export default TextField
