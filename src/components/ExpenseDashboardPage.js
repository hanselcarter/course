import React from 'react';
import VideoList from './VideosList';
import AddVideo from './AddVideo'
import moment from 'moment';

const ExpenseDashboardPage = () => (
  <div>
    <h1>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h1>
    <VideoList/>
    <br></br>
    <AddVideo/>
  </div>
);

export default ExpenseDashboardPage;
