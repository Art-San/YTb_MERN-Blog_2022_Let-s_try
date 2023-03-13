import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '../components/common/form/TextField'
import { checkIsAuth, loginUser } from '../redux/features/auth/authSlice'
import { toast } from 'react-toastify'

export const LoginPage = () => {
    const [data, setData] = useState({ username: '', password: '' })

    const { status } = useSelector((state) => state.auth)
    // console.log('status', status)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log('navigate', navigate)

    const handleChange = (target) => {
        // console.log('target', target)
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    useEffect(() => {
        if (status) toast(status)
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(
                loginUser({
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
                <h1 className=" text-lg text-white text-center">Авторизация</h1>
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
                {/* <h1 className="text-lg text-white text-center">Авторизация</h1>
                <label className=" text-xs text-gray-400">
                    UserName:
                    <input
                        type="text"
                        placeholder="UserName"
                        className=" mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-red-800 "
                    />
                </label> */}
                {/* <label className=" text-xs text-gray-400">
                    Password:
                    <input
                        type="password"
                        placeholder="Password"
                        className=" mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-red-800 "
                    />
                </label> */}
                <div className="flex gap-8 justify-center mt-4">
                    <button
                        type="submit"
                        disabled={false}
                        className="flex justify-center items-center text-xs bg-gray-500 text-white rounded-sm py-2 px-4"
                    >
                        Войти
                    </button>
                    <Link
                        to={'/register'}
                        className="flex justify-center items-center text-xs text-white"
                    >
                        Нет аккаунта?
                    </Link>
                </div>
            </form>
        </>
    )
}
