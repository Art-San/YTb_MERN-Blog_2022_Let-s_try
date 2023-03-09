import express from 'express'
import mongoose from 'mongoose'
import chalk from 'chalk'
import config from 'config'
import cors from 'cors'
import authRoute from './routes/auth.js'


const app = express()
const PORT = config.get('port') ?? 8080

// Middleware - некая функция которая расширяет или дополняет базовые настройки express
app.use(cors())
app.use(express.json()) // СЕРВЕР будет понимать данные с клиента в формате JSON

app.get('/', (req, res) => {
    res.json({message: 'All is fine gggggg'})
  })

// Routes
// http://localhost:8080
app.use('/api/auth', authRoute)

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'))
        console.log(chalk.cyanBright('MongoDB connected'))
        app.listen(PORT, () =>
            console.log(chalk.green(`Server has been started on port ${chalk.cyanBright(PORT)}...`))
        )
        
    } catch (e) {
        console.log(chalk.red(e.message)) 
    }
}

start()