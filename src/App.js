
import React, { useEffect, useState } from 'react';
import Login from "./Login";
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { type } from '@testing-library/user-event/dist/type';


const spotify = new SpotifyWebApi();


function App() {

  // const [token, settoken] = useState(null);
  const [{ user,token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type:"SET_TOKEN",
        token:_token,
      })
     

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        
        dispatch({
          type: 'SET_USER',
          user: user,



        });
      });


      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcRViHXy9yjtm').then(response=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

    }



   
  }, []);



  return (
    <div className="App">

      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }



    </div>
  );
}

export default App;
