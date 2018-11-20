const results = [];
export default (state = results, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return action.videos;
    default:
      return state;
  }
};
