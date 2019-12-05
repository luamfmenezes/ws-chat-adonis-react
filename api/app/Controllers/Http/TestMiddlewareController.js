'use strict'

class TestMiddlewareController {
  async store({request,response}){
    const data = request.nameApp;
    return data;
  }
}

module.exports = TestMiddlewareController;
