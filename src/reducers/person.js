//person reducer

const videos = [];
export default (state = videos, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return action.videos;
    case "ADD__VIDEO":
      return [...state, action.video];
    default:
      return state;
  }
};
