//PERSON ACTIONS
//SET_NAME
export const setName = (name) => ({
    type: 'SET_NAME',
    name
  });
  //SET_EMAIL
export  const setEmail = (email) => ({
    type: 'SET_EMAIL',
    email
  });
  //SET VIDEOS
  
 export const setVIdeos = (videos=[]) => ({
    type: 'SET_VIDEOS',
    videos
  });
  //add video
export  const add_video= (video) => ({
    type: 'ADD__VIDEO',
    video
  });