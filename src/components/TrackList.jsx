import React from "react";

const TrackList = (props) => {
    if(props.tracks.length === 0){
        return (
            <h2>No Tracks available</h2>
        )
    }
  return (
    <div className="track-list">
      <h2 className="highlight-text">Track List</h2>
      <div className="grid-container">
        {props.tracks.map((track) => (
          <div key={track._id} className="track-item">
            <p>{track.title} by <span className="highlight-text">{track.artist}</span></p>
            <div>
              <button onClick={() => props.onPlay(track)}>Play</button>
              <button onClick={() => props.onUpdate(track)}>Update</button>
              <button onClick={() => props.onDelete(track)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
