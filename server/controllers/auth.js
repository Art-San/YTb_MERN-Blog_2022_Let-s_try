import User from '../models/User/js'

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
    } catch (error) {
        
    }
}




//Login user
export const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// Get me
export const getMe = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}
