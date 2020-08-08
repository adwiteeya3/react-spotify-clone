import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { DataLayerValue, useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  //run code based on a given condition
  const [token, setToken]= useState(null);
  const [{user}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash= getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        })
      });
    }
    
    console.log("I have a token: ", token);
  }, []);

  console.log("adi", user);
  
  return (
    <div className="app">
      {
        token ? <Player /> : <Login />
      }

    </div>
  );
}

export default App;
