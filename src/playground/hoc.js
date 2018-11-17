//higuer order component
import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div><h1>{props.info}</h1></div>
);

const withAdminWarning=(WrappedComponent)=>{
    return(props)=>(
        <div>
            <p>ptivate infor be carefull</p>
            <WrappedComponent {...props}/>

        </div>
    );
};

const AdminInfo=withAdminWarning(Info);
ReactDOM.render(<AdminInfo info='bitch'></AdminInfo>,document.getElementById('app'));