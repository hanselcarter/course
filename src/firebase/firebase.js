import * as firebase from 'firebase';

var config = {
    apiKey: "test",
    authDomain: "test.firebaseapp.com",
    databaseURL: "https://expens-9353e.firebaseio.com",
    projectId: "teste",
    storageBucket: "expens-test.appspot.com",
    messagingSenderId: "test"
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
 
  
