import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/index';
import Chat from './components/Chat/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/index';
import { useStateValue } from './StateProvider';


function App() {

  const [ { user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (

        <div className="app_body">       
        <Router>
          <Sidebar />
            <Switch>
  
            <Route path="/rooms/:roomId">
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
