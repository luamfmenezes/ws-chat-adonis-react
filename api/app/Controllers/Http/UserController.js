"use strict";

const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    const data = request.only(["name", "email", "password"]);

    const user = await User.create(data);

    return user;
  }
  async index({ request, response, auth }) {
    const user_id = auth.user.id;
    const users = await User.query().whereNot({id: user_id}).fetch();
    return users;
  }
  async show({ request, response, params: { id } }) {
    const user = await User.find(id);
    return user;
  }
}

module.exports = UserController;
