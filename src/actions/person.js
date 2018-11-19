import db from '../firebase/firebase';

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
  
 export const setResults = (videos=[]) => ({
    type: 'SET_RESULTS',
    videos
  });

  export  const fetchDog = () => {
    return (dispatch) => {
      fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=%23%23hola&key=AIzaSyAmrqcNK6rKoG-J8p3EabhBlPz-VmhXN04')
        .then(res => res.json())
        .then(
          data => dispatch(setResults(data.items)),
         
        );
    }
  };   
export const setVIdeos = (videos=[]) => ({
    type: 'SET_VIDEOS',
    videos
  });
export const startSetVideos=()=>{
  return (dispatch)=>{
 return db.ref('videos').once('value').then((snapshot)=>{
      const videos=[];
      
      snapshot.forEach((childSnapshot)=>{
        videos.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setVIdeos(videos));
    });
  };
}; 

  //add video
export  const add_video= (video) => ({
    type: 'ADD__VIDEO',
    video
  });

 export const startAddExpense=(video={})=>{
  return(dispatch)=>{
    const {url='',description='astronoaut lol'}=video;
    db.ref('videos').push(video).then((ref)=>{
      dispatch(add_video({id:ref.key,...video}));
    });

  };
 } ;
 