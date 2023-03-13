import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../utils/axios'

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/register', {
                username,
                password
            })
            console.log('registerUser data', data)
            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                password
            })

            console.log('loginUser data', data) // add this log statement

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return {
                user: data.user,
                token: data.token,
                message: data.message
            }
        } catch (error) {
            console.log('loginUser error', error) // add this log statement
        }
    }
)

export const getMe = createAsyncThunk('auth/loginUser', async () => {
    try {
        const { data } = await axios.get('/auth/me')
        return data
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    },
    extraReducers: {
        // register user
        [registerUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [registerUser.rejected]: (state, action) => {
            console.log('registerUser.rejected', action)
            state.status = action.payload.message
            state.isLoading = false
        },
        // login user
        [loginUser.pending]: (state) => {
            state.isLoading = true
            state.status = null
        },
        [loginUser.fulfilled]: (state, action) => {
            console.log('loginUser.fulfilled', action)
            state.status = action.payload.message
            state.user = action.payload.user
            state.token = action.payload.token
        },
        [loginUser.rejected]: (state, action) => {
            state.status = action.payload.message
            state.isLoading = false
        }
        // Authorization check

        // [getMe.pending]: (state) => {
        //     state.isLoading = true
        //     state.status = null
        // },
        // [getMe.fulfilled]: (state, action) => {
        //     console.log('getMe.fulfilled', action)
        //     state.isLoading = false
        //     state.status = null // changed null to this action.payload.message
        //     state.user = action.payload?.user
        //     state.token = action.payload?.token
        // },
        // [getMe.rejected]: (state, action) => {
        //     state.status = action.payload.message
        //     state.isLoading = false
        // }
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions

export default authSlice.reducer
