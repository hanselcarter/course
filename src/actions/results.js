export const setResults = (videos = []) => ({
  type: "SET_RESULTS",
  videos
});

export const fetchDog = () => {
  return dispatch => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&q=%23%23hola&key=AIzaSyAmrqcNK6rKoG-J8p3EabhBlPz-VmhXN04"
    )
      .then(res => res.json())
      .then(data => dispatch(setResults(data.items)));
  };
};
