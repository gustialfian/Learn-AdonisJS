'use strict'
const Todo = use('App/Models/Todo')

class TodoController {

  async index() {
    return await Todo.all()
  }

  async show({ params }) {
    return await Todo.find(params.id)
  }

  async create({ request  }) {
    const input = request.only(['name', 'status', 'try'])
    const data = await Todo.create(input)
    return data
  }

  async update({ request, params }) {
    const data = await Todo.find(params.id)
    if (!data) {
      return 'Not Found'
    }
    const input = request.only(['name', 'status', 'try'])
    data.merge(input)
    await data.save()
    return data
  }

  async delete({ params }) {
    const data = await Todo.find(params.id)
    if (!data) {
      return 'Not Found'
    }
    await data.delete(params.id)
    return 'deleted'
  }
}

module.exports = TodoController
