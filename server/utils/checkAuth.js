import jwt from 'jsonwebtoken'
import config from 'config'

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization.split || '').replace(/Bearer\s?/, '')
    // const token = req.headers.authorization.split(' ')[1]
    if (token) {
        try {
            const decoded = jwt.varify(token, config.get('refreshSecret'))

            req.userId = decoded.id

            next()
        } catch (error) {
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