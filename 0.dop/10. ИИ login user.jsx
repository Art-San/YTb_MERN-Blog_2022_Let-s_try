Привет!

Ошибка заключается в том, что в loginUser.fulfilled и loginUser.rejected
экшен не возвращает данные, как в случае с registerUser.
Поэтому action.payload в этих случаях является undefined,
и код выдает ошибку.

Чтобы решить эту проблему, необходимо изменить возвращаемый 
объект внутри try блока функции loginUser. 
Вместо return data можно вернуть объект с полями user, token и message (если необходимо):

return {
    user: data.user,
    token: data.token,
    message: data.message
}

// Аналогично для rejected экшена.

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, password }) => {
        try {
            const { data } = await axios.post('/auth/login', {
                username,
                password
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return {
                user: data.user,
                token: data.token,
                message: data.message
            }
        } catch (error) {
            console.log(error)
        }
    }
)


[loginUser.fulfilled]: (state, action) => {
    console.log('action fulfilled', action) // action comes
    state.isLoading = false
    state.status = action.payload.message
    state.user = action.payload.user
    state.token = action.payload.token
},
[loginUser.rejected]: (state, action) => {
    console.log('action rejected', action) // action comes
    state.status = action.payload.message
    state.isLoading = false
},

// ================================================================
//=============== ошибка ниже

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from '../../../utils/axios'

// const initialState = {
//     user: null,
//     token: null,
//     isLoading: false,
//     status: null
// }

// export const registerUser = createAsyncThunk(
//     'auth/registerUser',
//     async ({ username, password }) => {
//         try {
//             const { data } = await axios.post('/auth/register', {
//                 username,
//                 password
//             })

//             if (data.token) {
//                 window.localStorage.setItem('token', data.token)
//             }
//             return data
//         } catch (error) {
//             console.log(error)
//         }
//     }
// )

// export const loginUser = createAsyncThunk(
//     'auth/loginUser',
//     async ({ username, password }) => {
//         try {
//             const { data } = await axios.post('/auth/login', {
//                 username,
//                 password
//             })

//             if (data.token) {
//                 window.localStorage.setItem('token', data.token)
//             }
//             return data
//         } catch (error) {
//             console.log(error)
//         }
//     }
// )

// export const getMe = createAsyncThunk('auth/loginUser', async () => {
//     try {
//         const { data } = await axios.get('/auth/me')
//         return data
//     } catch (error) {
//         console.log(error)
//     }
// })

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             state.user = null
//             state.token = null
//             state.isLoading = false
//             state.status = null
//         }
//     },
//     extraReducers: {
//         // register user
//         [registerUser.pending]: (state) => {
//             state.isLoading = true
//             state.status = null
//         },
//         [registerUser.fulfilled]: (state, action) => {
//             console.log('action fulfilled', action) // action comes
//             state.isLoading = false
//             state.status = action.payload.message
//             state.user = action.payload.user
//             state.token = action.payload.token
//         },
//         [registerUser.rejected]: (state, action) => {
//             state.status = action.payload.message
//             state.isLoading = false
//         },
//         // login user
//         [loginUser.pending]: (state) => {
//             state.isLoading = true
//             state.status = null
//         },
//         [loginUser.fulfilled]: (state, action) => {
//             console.log('action fulfilled', action) // action does not come
//             state.isLoading = false
//             state.status = action.payload.message
//             state.user = action.payload.user
//             state.token = action.payload.token
//         },
//         [loginUser.rejected]: (state, action) => {
//             console.log('action rejected', action) // action does not come
//             state.status = action.payload.message
//             state.isLoading = false
//         },
//         // Authorization check
//         [getMe.pending]: (state) => {
//             state.isLoading = true
//             state.status = null
//         },
//         [getMe.fulfilled]: (state, action) => {
//             state.isLoading = false
//             state.status = null
//             state.user = action.payload?.user
//             state.token = action.payload?.token
//         },
//         [getMe.rejected]: (state, action) => {
//             state.status = action.payload.message
//             state.isLoading = false
//         }
//     }
// })

// export const checkIsAuth = (state) => Boolean(state.auth.token)

// export const { logout } = authSlice.actions

// export default authSlice.reducer
