const mongoose = require('mongoose')
const config = require('config')
const db = config.get('MONGO_URI')

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(db)
		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.log(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}

module.exports = connectDB
