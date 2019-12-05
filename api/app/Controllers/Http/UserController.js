'use strict'

const User = use('App/Models/User');

class UserController {
  async store({request,response}){
    const data = request.only(['name','email','password']);

    const user = await User.create(data);

    return user;
  }
  async index({request,response}){
    const users = await User.all();
    return users;
  }
  async show({request,response, params:{id}}){
    const user = await User.find(id);
    return user;
  }
}

module.exports = UserController
