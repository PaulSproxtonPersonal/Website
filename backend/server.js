const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('../config/db')
const path = require('path')

const PORT = process.env.PORT || 5000

// Connect to the Mongo database
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
// 	res.status(200).json({ message: 'Welcome to Sproxton General Contracting' })
// })

// Routes
app.use('/api/users', require('./routes/userRoutes'))

// Serve static assets in production
console.log('Environment is ', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
	console.log('Production build')
	// Set static folder
	app.use(express.static('../frontend/build'))

	console.log('Index file is ', path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
	})
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
