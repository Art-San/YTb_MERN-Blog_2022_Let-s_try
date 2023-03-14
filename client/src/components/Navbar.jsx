import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { links } from '../data'
import { checkIsAuth, logout } from '../redux/features/auth/authSlice'

export const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    // console.log('isAuth', isAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const activeStyles = {
        color: 'white'
    }

    const logoutHandler = () => {
        window.localStorage.removeItem('token')
        dispatch(logout())
        navigate('/')
        toast('Вы вышли из системы')
    }

    return (
        <div className="flex py-4 justify-between items-center ">
            <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-sm text-white rounded-sm">
                E
            </span>

            {isAuth && (
                <ul className="flex gap-8">
                    {links.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className="text-lg text-gray-500 hover:text-white"
                                    style={({ isActive }) =>
                                        isActive ? activeStyles : undefined
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        )
                    })}
                    {/* <li>
                <NavLink
                    to={'/'}
                    href="/"
                    className='text-xs text-gray-500 hover:text-white'
                    style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                    }
                >
                    Главня
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/posts'}
                    href="/" className='text-xs text-gray-500 hover:text-white'
                    style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                    }
                >
                    Мои посты
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/new'}
                    href="/" className='text-xs text-gray-500 hover:text-white'
                    style={({ isActive }) =>
                        isActive ? activeStyles : undefined
                    }
                >
                    Добавит пост
                </NavLink>
            </li> */}
                </ul>
            )}

            <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
                {isAuth ? (
                    <button onClick={logoutHandler}>Выйти</button>
                ) : (
                    <Link to={'/login'}>Войти</Link>
                )}
            </div>
        </div>
    )
}
