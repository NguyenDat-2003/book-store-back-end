const { StatusCodes } = require('http-status-codes')

import { userService } from '~/services/userService'

const createUser = async (req, res, next) => {
  try {
    const newUser = await userService.createNew(req.body)
    return res.status(StatusCodes.CREATED).json(req)
  } catch (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'some thing wrong' })
  }
}

export const userController = { createUser }
