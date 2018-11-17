import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import getVideos from'./selectors/person';
import {setName,setEmail,setVIdeos,add_video} from'./actions/person';
import configureStore from './store/configureStore'

const store=configureStore();

store.dispatch(setName('hansel carter'));
store.dispatch(setEmail('barahonahansel@gmail.com'));
store.dispatch(setVIdeos([{id:1,video_name:'ji'},{id:2,video_name:'zyon'}]));
store.dispatch(add_video({id:3,video_name:'zyonylenox'}));
const state=store.getState();
const videos=getVideos(state.person);
console.log(videos);



ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
