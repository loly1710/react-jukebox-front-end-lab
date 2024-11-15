import React, { useEffect, useState } from "react";
import TrackList from "./components/TrackList";
import TrackForm from "./components/TrackForm";
import NowPlaying from "./components/NowPlaying";
import { create, index, updateTrack, deleteTrack } from "./services/trackService";
import './App.css';

const App = () => {
  const [tracks, setTracks] = useState([]);

  const [selectedTrack, setSelectedTrack] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    const tracks = await index();
    setTracks(tracks);
  };

  const addTrack = async (track) => {
    const newTrack = await create(track);
    setTracks([...tracks, newTrack]);
    setIsAdding(false);
  };

  const handleUpdateTrack = async (track) => {
    const updatedTrack = await updateTrack(track, track._id);
    setTracks(tracks.map((t) => (t._id === updatedTrack._id ? updatedTrack : t)));
    setIsUpdating(false);
    setSelectedTrack(null);
  };

  const handleDeleteTrack = async (track) => {
    await deleteTrack(track._id);
    setTracks(tracks.filter((t) => t._id !== track._id));
  };

  const handlePlayTrack = (track) => {
    setNowPlaying(track);
  };

  return (
    <div className="app-container">
      <button className="action-button" onClick={() => setIsAdding(true)}>Add Track</button>
      <TrackList
        tracks={tracks}
        onPlay={handlePlayTrack}
        onUpdate={(track) => {
          setSelectedTrack(track);
          setIsUpdating(true);
        }}
        onDelete={handleDeleteTrack}
      />
      {(isUpdating || isAdding) && (
        <TrackForm
          track={isUpdating ? selectedTrack : null}
          onSubmit={isUpdating ? handleUpdateTrack : addTrack}
          onCancel={() => {
            setIsUpdating(false);
            setIsAdding(false);
            setSelectedTrack(null);
          }}
        />
      )}
     {nowPlaying && <NowPlaying track={nowPlaying} onStop={() => setNowPlaying(null)} />}

    </div>
  );
};

export default App;