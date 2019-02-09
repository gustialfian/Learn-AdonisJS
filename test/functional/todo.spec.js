'use strict'

const { test, trait } = use('Test/Suite')('Todo')

const Todo = use('App/Models/Todo')
const User = use('App/Models/User')

trait('Test/ApiClient')
trait('Auth/Client')
trait('DatabaseTransactions')

const user = {
  'username': 'tester',
  'password': 'tester',
  'email': 'tester@mail.com',
}
const input = {
  'name': 'Learning AdonisJS Testing Library',
  'status': true,
  'try': 1,
}
const updateInput = {
  ...input,
  'name': 'Learning AdonisJS Testing Library, Updated',
}

test('get list of Todo', async ({ client }) => {
  const authUser = await User.find(1)
  const response = await client
    .get('/todo')
    .loginVia(authUser, 'jwt')
    .end()

  response.assertStatus(200)
})

test('get list of Todo: Not Auth', async ({ client }) => {
  const response = await client
    .get('/todo')
    .end()

  response.assertStatus(401)
})

test('get Todo by Id', async ({ client }) => {
  const authUser = await User.find(1)
  const data = await Todo.create(input)
  const id = data.id
  const response = await client
    .get(`/todo/${id}`)
    .loginVia(authUser, 'jwt')
    .end()

  response.assertStatus(200)
})

test('post Todo by Id', async ({ client }) => {
  const authUser = await User.find(1)
  const response = await client
    .post(`/todo`)
    .send(input)
    .loginVia(authUser, 'jwt')
    .end()

  response.assertStatus(200)
})

test('put Todo by Id', async ({ client }) => {
  const authUser = await User.find(1)
  const data = await Todo.create(input)
  const id = data.id
  const response = await client
    .put(`/todo/${id}`)
    .send(updateInput)
    .loginVia(authUser, 'jwt')
    .end()

  response.assertStatus(200)
})

test('delete Todo by Id', async ({ client }) => {
  const authUser = await User.find(1)
  const data = await Todo.create(input)
  const id = data.id
  const response = await client
    .delete(`/todo/${id}`)
    .loginVia(authUser, 'jwt')
    .end()

  response.assertStatus(200)
})
