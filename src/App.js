
import React from 'react';　
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import ComponentD from './components/ComponentD';
import ComponentE from './components/ComponentE';



const App= () =>{
  return (
   <Router>
     <Switch>
      <Route exact path="/" component={ComponentA}/>
      <Route exact path="/ComponentB" component={ComponentB}/>
      <Route exact path="/ComponentC" component={ComponentC}/>
      <Route exact path="/ComponentD" component={ComponentD}/>
      <Route exact path="/ComponentE" component={ComponentE}/>
     </Switch>
    </Router>
  );
}

export default App;
