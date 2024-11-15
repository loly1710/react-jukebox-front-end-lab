import React from "react";
import * as trackService from "./services/trackService";
import { useState, useEffect } from "react";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
//import NowPlaying from './components/NowPlaying'
//import Home from './components/Home';

const App = () => {
  const [user] = useState(trackService);
  const [tracks, setTracks] = useState([]);
  //const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchAllTracks = async () => {
      const tracksData = await trackService.index();
      setTracks(tracksData);
    };
    if (user) fetchAllTracks();
  }, [user]);

  const handleAddTrack = async (trackFormData) => {
    const newTrack = await trackService.create(trackFormData);
    setTracks([newTrack, ...tracks]);
  };

  const handleDeleteTrack = async (trackId) => {
    const deleteTrack = await trackService.deleteTrack(trackId);
    setTracks(tracks.filter((track) => track._id !== deleteTrack._id));
  };

  const handleUpdateTrack = async (trackId, trackFormData) => {
    const updateTrack = await trackService.updateTrack(trackFormData, trackId);
    setTracks(
      tracks.map((track) => (trackId === track._id ? updateTrack : track))
    );
  };

  /*const handlePlay = (track) => {
    setNowPlaying(track);
  };*/

  return (
    <>
      <TrackForm handleAddTrack={handleAddTrack} />
      <TrackList
        trackList={tracks}
        handleUpdateTrack={handleUpdateTrack}
        handleDeleteTrack={handleDeleteTrack}
      />
    </>
  );
};

export default App;
