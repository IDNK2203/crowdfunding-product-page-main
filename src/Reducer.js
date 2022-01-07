const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        totalBacker: action.totalBacker,
        currrentAmtBacked: state.currrentAmtBacked + action.currrentAmtBacked,
      };
    default:
      return state;
  }
};

export default Reducer;
