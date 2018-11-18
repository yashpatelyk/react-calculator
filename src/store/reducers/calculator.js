const initialState = {
  key: "value"
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'temp':
      return { key: "newValue" };
    default:
      return state;
  }
}

export default reducer;