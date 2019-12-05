"use strict";
class InsertNameApp {
  async handle({ request }, next) {
    request.nameApp = "Chat-RealTime";
    await next();
  }
}

module.exports = InsertNameApp;
