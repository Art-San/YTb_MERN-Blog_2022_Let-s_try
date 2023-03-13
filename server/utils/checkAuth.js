import jwt from 'jsonwebtoken'
import config from 'config'
import chalk from 'chalk'

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')
    // const token = req.headers.authorization.split(' ')[1]
    if (token) {
        try {
            const decoded = jwt.verify(token, config.get('accessSecret'))
            // console.log('decoded', decoded)
            req.userId = decoded.id

            next()
        } catch (error) {
            console.log('decoded', chalk.red(error))
            return res.json({
                message: 'Нет доступа'
                
            })
        }
      
    } else {
        return res.json({
            message: 'Unauthorized'
        })
    }
}