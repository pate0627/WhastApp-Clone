import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from "./Chat";
import Login from "./Login";
import {
  BrowserRouter as Router, Route, Switch  
} from "react-router-dom";
import { useStateValue } from "./StateProvider";




function App() {
  const [{ user }, dispatch] = useStateValue();
 
  return (
    <div className="app">    

      {!user ? (
        <Login />
      ) : (
      

      <div className="app_body">
      <Router>
        <Switch>
		   
          <Route path="/rooms/:roomId">
          <Sidebar />
            <Chat />          
          </Route>
          <Route path="/">
            <Chat />
          </Route>
          
        </Switch>
      </Router>
      </div>
  )}
    </div>
  );
}

export default App;
