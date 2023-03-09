import User from '../models/User.js'
import bcrypt from 'bcryptjs'
// 56$41

//Register user
export const register = async (req, res) => {
    try {
        const { username, password } = req.body

        const isUsed = await User.findOne({ username })

        if (isUsed) {
            return res.json({
                message: 'Данный userName уже занят...'
            })
          }

        //   const salt = bcrypt.genSaltSync(10)
        //   const hash = bcrypt.hashSync(password, salt)
          const hash = await bcrypt.hash(password, 10)

        //   const newUser = await User.create({
        //     username,
        //     password: hash
        // })
        // console.log("newUser", newUser)
        const newUser = new User({
            username,
            password: hash
        })

        await newUser.save()

        res.json({
            newUser,
            message: 'Регистрация прошла успешно'
        })

    } catch (error) {
        res.json({
            message: 'Ошибка при созданни пользователя'
          })
    }
}


//Login user
export const login = async (req, res) => {
    try {
        const {  }
    } catch (error) {
        res.json({
            message: 'Ошибка при авторизации'
          })
    }
}

// Get me
export const getMe = async (req, res) => {
    try {
        
    } catch (error) {
        res.json({
            message: 'Ошибка при созданни пользователя'
          })
    }
}
