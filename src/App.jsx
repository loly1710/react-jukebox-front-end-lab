import React from 'react';
import * as trackService from './services/trackService'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate,  } from 'react-router-dom'
import TrackList from './components/TrackList';
import TrackForm from './components/TrackForm';
import Home from './components/Home';


const App = () => {
  const [user, setUser] = useState(trackService.getUser());
  const [tracks, setTracks] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllTracks = async() => {
      const tracksData = await trackService.index()
      setTracks(tracksData)
    }
    if (user) fetchAllTracks()
  }, [user])

  const handleAddTrack = async(trackFormData) => {
    const newTrack = await trackService.create(trackFormData)
    setTracks([newTrack, ...tracks])
    navigate('/tracks')
  }

  const handleDeleteTrack = async(trackId) => {
    const deleteTrack = await trackService.deleteTrack(trackId)
    setTracks(tracks.filter(track => track._id !== deleteTrack._id))
    navigate('/tracks')
  }

  const handleUpdateTrack = async (trackId, trackFormData) => {
    
    const updateTrack = await trackService.update(trackId, trackFormData)
    setTracks(tracks.map(track => (trackId === track._id ? updateTrack : track)))
    navigate(`/tracks/${trackId}`);
  }

  return (
    <>
    <TrackList
      trackList={tracks} handleUpdateTrack={handleUpdateTrack} handleDeleteTrack={handleDeleteTrack}
     />
     <TrackForm handleAddTrack={handleAddTrack} handleUpdateTrack={handleUpdateTrack}/>
   
  </>
  );
};

export default App;