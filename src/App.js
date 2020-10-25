import React from 'react';
import './App.css';
//import Navbar from './components/navbar';
//import Counters from './components/counters';
import Sdg from './components/sdg';
import {Route} from 'react-router-dom';
import Sdgg from './components/sdg15';

function App(){
  return (
    <React.Fragment>
      
        <switch>
          <Route path="/" exact component={Sdg} />
          <Route path="/Sdg15" exact comopnent={Sdgg}/>
        </switch>   
      
    </React.Fragment>
  );
}

export default App;
