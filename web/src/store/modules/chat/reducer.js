const INITIAL_STATE = {};

export default function chat(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MY_MESSAGE":
      let newState = state;
      if (newState[action.data.to]) {
        newState[action.data.to] = [
          ...newState[action.data.to],
          action.data
        ];
      } else {
        newState[action.data.to] = [action.data];
      }
      console.log("Array", newState);
      return newState;
    case "ADD_MESSAGE":
      let newState2 = state;
      if (newState2[action.data.from]) {
        newState2[action.data.from] = [
          ...newState2[action.data.from],
          { ...action.data }
        ];
      } else {
        newState2[action.data.from] = [{ ...action.data }];
      }
      return newState2;
    default:
      return state;
  }
}
