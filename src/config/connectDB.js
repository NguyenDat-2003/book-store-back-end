import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('book_store', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql'
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export default connectDB
