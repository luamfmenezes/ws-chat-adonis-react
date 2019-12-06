"use strict";

const Ws = use("Ws");

class ChatController {
  constructor({ socket, request, auth }) {
    this.socket = socket;
    this.request = request;
    // console.log(socket.channel.subscriptions.has('chat:1'));
    const [, id] = socket.topic.split(":");
    console.log("subscrived with id: ", id);
    if (auth.user.id !== Number(id)) {
      socket.close();
    }
  }

  onMessage(data) {
    const { to } = data;
    const chat = Ws.getChannel("chat:*");
    console.log('Send message to ',to);
    try {
      chat.topic(`chat:${to}`).broadcast("message", data);
      this.socket.broadcastToAll("message", data);
    } catch (err) {
      this.socket.broadcastToAll("message", { ...data, error: true });
    }
  }
}

module.exports = ChatController;
