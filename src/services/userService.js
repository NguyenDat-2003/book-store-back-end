const { StatusCodes } = require('http-status-codes')

const createNew = async (reqBody) => {
  try {
    console.log(reqBody)
    // const newUser = await userService.createNew(req.body)
    // return res.status(StatusCodes.CREATED).json(req)
  } catch (error) {
    throw error
  }
}

export const userService = { createNew }
