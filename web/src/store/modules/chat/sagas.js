import Ws from "@adonisjs/websocket-client";
import { toast } from "react-toastify";
import { eventChannel } from "redux-saga";
import {
  all,
  spawn,
  takeLatest,
  call,
  take,
  put,
  select
} from "redux-saga/effects";

export function connect(ws) {
  return eventChannel(() => {
    ws.connect();
    return () => {
      ws.close();
    };
  });
}

export function* closeChannel(ws) {
  const id = yield select(state => state.user.profile.id);
  const channel = ws.getSubscription(`chat:${id}`);
  channel.close();
}

export function* watchSubscription(ws, { id }) {
  console.log(ws, id);
  const channel = yield call(subscribeChat, { ws, id });
  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

export function subscribeChat({ ws, id }) {
  return eventChannel(emiter => {
    const channel =
      ws.getSubscription(`chat:${id}`) || ws.subscribe(`chat:${id}`);

    channel.on("message", data => {
      return emiter({ type: "ADD_MESSAGE", data });
    });

    channel.on("messageToMe", data => {
      return emiter({ type: "ADD_MY_MESSAGE", data });
    });

    return () => {
      channel.close();
    };
  });
}

export function sendMessage(ws, { id, data }) {
  const channel =
    ws.getSubscription(`chat:${id}`) || ws.subscribe(`chat:${id}`);
  channel.emit("message", data);
}

export function* initWebsocket() {
  const token = yield select(state => state.auth.token);
  const ws = Ws("ws://localhost:3333").withJwtToken(token);
  connect(ws);
  yield all([
    takeLatest("REQUEST_SUBSCRIPTION", watchSubscription, ws),
    takeLatest("REQUEST_SIGN_OUT", closeChannel, ws),
    takeLatest("REQUEST_SEND_MESSAGE", sendMessage, ws)
  ]);
}

export default all([takeLatest("persist/REHYDRATE", initWebsocket)]);
