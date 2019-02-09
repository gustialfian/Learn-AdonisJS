'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/register', 'AuthController.register')

Route.group(() => {
  Route.get('/todo', 'TodoController.index')
  Route.get('/todo/:id', 'TodoController.show')
  Route.post('/todo', 'TodoController.create')
  Route.put('/todo/:id', 'TodoController.update')
  Route.delete('/todo/:id', 'TodoController.delete')
}).middleware(['auth', 'loging']) // which middleware run first

