import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';

function App() {
  //run code based on a given condition
  useEffect(() => {
    const token= getTokenFromUrl();
    console.log("I have a token: ", token);
  }, []);
  
  return (
      //BEM
    <div className="app">
      {/* Spotify logo */}
      {/* login with spotify button */}
      <Login />

    </div>
  );
}

export default App;
