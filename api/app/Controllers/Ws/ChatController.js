"use strict";

const Ws = use("Ws");

class ChatController {
  constructor({ socket, request, auth }) {
    this.socket = socket;
    this.request = request;
    const [, id] = socket.topic.split(":");
    console.log("subscrived with id: ", id);
    if (auth.user.id !== Number(id)) {
      socket.close();
    }
  }

  onMessage(message) {
    const { to, content } = message;
    const [, from] = this.socket.topic.split(":");
    const data = { to, content, from };
    const chat = Ws.getChannel("chat:*");
    console.log(data);
    try {
      chat.topic(`chat:${to}`).broadcast("message", data);
      this.socket.broadcastToAll("messageToMe", data);
    } catch (err) {
      this.socket.broadcastToAll("messageToMe", { ...data, error: true });
    }
  }
}

module.exports = ChatController;
