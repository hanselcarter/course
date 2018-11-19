import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
  <header>
    <h1>welcome</h1>
    <button onClick={startLogout}>Logout</button>
   
  </header>
);

const mapDispatchToProps=(dispatch)=>({
  startLogout:()=>dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);
