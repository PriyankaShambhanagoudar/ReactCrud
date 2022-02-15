import React from 'react';
 
import { BrowserRouter, Switch, Route } from "react-router-dom"  //swtch (5 version)= Routes(6 version)
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    // 1rem = 16px
    <div style={{maxWidth:"30rem" , margin:"4rem auto"}}  >   
      <BrowserRouter>
      
        <Switch>
        <Route  path="/" exact  component={Home }/>
          <Route  path="/add" component={AddUser }/>
          <Route path="/edit/:id" component={EditUser} />
        
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
