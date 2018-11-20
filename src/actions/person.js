import db from "../firebase/firebase";

//PERSON ACTIONS
//SET_NAME
export const setName = name => ({
  type: "SET_NAME",
  name
});
//SET_EMAIL
export const setEmail = email => ({
  type: "SET_EMAIL",
  email
});
//SET VIDEOS

export const setVIdeos = (videos = []) => ({
  type: "SET_VIDEOS",
  videos
});
export const startSetVideos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return db
      .ref(`users/${uid}/videos`)
      .once("value")
      .then(snapshot => {
        const videos = [];

        snapshot.forEach(childSnapshot => {
          videos.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setVIdeos(videos));
      });
  };
};

//add video
export const add_video = video => ({
  type: "ADD__VIDEO",
  video
});

export const startAddExpense = (video = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    db.ref(`users/${uid}/videos`)
      .push(video)
      .then(ref => {
        dispatch(add_video({ id: ref.key, ...video }));
      });
  };
};
