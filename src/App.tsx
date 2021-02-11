import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './componenets/pages/HomePage';
import AlbumPage from './componenets/pages/AlbumPage';
import NavBar from './componenets/NavBar'
import { Album } from './types/interfaces';
import 'bootstrap/dist/css/bootstrap.min.css'

type getAlbumsInterfaces = Album[] | string

function App() {
  const [loading, setLoading] = useState<boolean>(false);

  const getAlbums = async (searchKey: string): Promise<getAlbumsInterfaces> => {

    setLoading(true)

    const API_HOST = "deezerdevs-deezer.p.rapidapi.com";
    const API_KEY = "84d2e1bc2amsh0bcbc81dd32f547p1526bajsncbac98b453bc";
    const API_BASE_URL = "https://rapidapi.p.rapidapi.com";


    try {
      const response = await fetch(`${API_BASE_URL}/search?q=${searchKey}`, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        return data.data;
      }
      setLoading(false);
      throw new Error(response.statusText)
    } catch (e) {
      setLoading(false);
      console.error(`API ERROR : ${e.message}`);
      return e.message;
    }
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact render={(props) => <HomePage {...props} loading={loading} getAlbums={getAlbums} />} />
        <Route path="/album/:id" exact render={(props) => <AlbumPage {...props} />} />
      </div>
    </Router>
  );
}

export default App;
