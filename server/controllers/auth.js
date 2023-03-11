import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
// 1:13:33

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

        const token = jwt.sign(
            {
                id: newUser._id,
            }, 
            config.get('accessSecret'), 
            { expiresIn: '30d' }
        )

        await newUser.save()

        res.json({
            token,
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
        const { username, password } = req.body
        const user = await User.findOne({ username })
        

        if(!user) {
            return res.json({
                message: 'Такого юзера не существует'
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if(!isPasswordCorrect) {
            return res.json({
                message: 'Неверный пароль'
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
            }, 
            config.get('accessSecret'), 
            { expiresIn: '30d' }
        )

        res.json({
            token,
            user,
            message: `Добро пожаловать ${user.username}`
        })

    } catch (error) {
        res.json({
            message: 'Ошибка при авторизации'
          })
    }
}

// Get me
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if(!user) {
            return res.json({
                message: 'Такого юзера не существует'
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
            }, 
            config.get('accessSecret'), 
            { expiresIn: '30d' }
        )
        res.json({
            user,
            token
        })


    } catch (error) {
        res.json({message: 'Нет доступа'})
    }
}
