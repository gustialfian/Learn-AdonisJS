'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request, auth }) {
    const input = request.only([
      'username',
      'password',
      'email',
    ])
    const data = await User.create(input)
    const token = await auth.generate(data)
    return {
      data,
      token,
    }
  }
  async login() {}
}

module.exports = AuthController
