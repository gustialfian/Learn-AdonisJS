'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Log = use('Logger')

class Logger {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth }, next) {
    
    const user = await auth.getUser()
    const access = request.url()
    Log.info(`${user.username}: ${access}`)
    await next()
  }
}

module.exports = Logger
