import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';　
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const sampleArreay=[
  {id:'1',Name:'aaa',date:'1962'},
  {id:'2',Name:'bbb',date:'1964'},
  {id:'3',Name:'ccc',date:'1985'},
  {id:'4',Name:'ddd',date:'2003'},
  {id:'5',Name:'eee',date:'2005'}
]



const App= () =>{
  return (
   <Router>
     <Switch>
      <Route exact path="/" component={ComponentA}/>
      <Route exact path="/ComponentB" component={ComponentB}/>
     </Switch>
    </Router>
  );
}

export default App;
