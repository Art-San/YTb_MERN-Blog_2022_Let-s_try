import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/features/auth/authSlice'
import TextField from '../components/common/form/TextField'
import { toast } from 'react-toastify'

const RegistPage = () => {
    const [data, setData] = useState({ username: '', password: '' })
    const { status } = useSelector((state) => state.auth)
    console.log('status', status)
    const dispatch = useDispatch()

    const handleChange = (target) => {
        console.log('target', target)
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    useEffect(() => {
        if (status) {
            toast(status)
        }
    }, [status, '2:26'])

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            dispatch(
                registerUser({
                    username: data.username,
                    password: data.password
                })
            )
            setData({ username: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="w-1/4 h-60 mx-auto mt-40">
                <h1 className=" text-lg text-white text-center">Регистрация</h1>
                <TextField
                    header=""
                    label="UserName"
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    placeholder="Введите имя"
                />

                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Введите пароль"
                />
                {status && <div className=" text-white">{status}</div>}

                <div className="flex gap-8 justify-center mt-4">
                    <button
                        type="submit"
                        disabled={false}
                        // onClick={handleSubmit}
                        className="flex justify-center items-center text-xs bg-gray-500 text-white rounded-sm py-2 px-4"
                    >
                        Подтвердить
                    </button>
                    <Link
                        to={'/login'}
                        className="flex justify-center items-center text-xs text-white"
                    >
                        Уже зарегистрированный?
                    </Link>
                </div>
            </form>
        </>
    )
}

export default RegistPage
