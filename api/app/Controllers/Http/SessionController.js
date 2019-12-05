"use strict";

const User = use("App/Models/User");

class SessionController {
  async store({ request, response, auth }) {
    try {
      const { email, password } = request.only(["email", "password"]);

      console.log({email,password});

      const { token } = await auth.attempt(email, password);

      const user = await User.findByOrFail("email", email);

      return { user, token };
    } catch (err) {
      return response.status(401).json({ code: 0, message: "Inválid login" });
    }
  }
}

module.exports = SessionController;
