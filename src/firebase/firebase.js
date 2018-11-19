import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDTqtrg51fIH6RAR-ikx3K3GUZhvnxA910",
    authDomain: "expens-9353e.firebaseapp.com",
    databaseURL: "https://expens-9353e.firebaseio.com",
    projectId: "expens-9353e",
    storageBucket: "expens-9353e.appspot.com",
    messagingSenderId: "346046868999"
  };
  firebase.initializeApp(config);

const db=firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export{firebase,googleAuthProvider,db as default};


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    //const onvalueChange=db.ref().on('value',(snapshot)=>{
      //console.log(snapshot.val());
    //},(e)=>{console.log(e);});

  
  
  
  
  //db.ref().remove().then(()=>{
    //console.log('data was removed')
  //}).catch((e)=>{
    //console.log('did not remove data');
  //});
 
  
