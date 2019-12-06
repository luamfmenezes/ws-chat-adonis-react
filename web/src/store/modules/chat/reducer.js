const INITIAL_STATE = {
  messages: []
};

export default function chat(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
        console.log('Message get in reducer',action.data);
      return { ...state, messages: [...state.messages, action.data] };
    default:
      return state;
  }
}
