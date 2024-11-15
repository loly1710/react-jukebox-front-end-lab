const TrackList = (props) => {
  return (
    <div>
      <button onClick={() => props.handleAddTrack("/TrackForm")}>
        Add New Track
      </button>
      <h2>Track List</h2>
      {props.trackList.map((track) => (
        <div key={track._id}>
          <span>
            {track.title} by {track.artist}
          </span>
          <button onClick={() => props.handlePlay(track)}>Play</button>
          <button onClick={() => props.handleUpdateTrack(track._id)}>
            Edit
          </button>
          <button onClick={() => props.handleDeleteTrack(track._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

/*const TrackList = (props) => {
    
    const tracks = props.trackList.map((track) => 
    <a key={track._id} onClick={() => props.updateSelected(track)}><li>{track.name}</li>
    </a>);

    return (
        <div>
            <button onClick={() => props.handleAddTrack('/TrackForm')}>Add New Track</button>
      <h2>Track List</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <span>{track.title} by {track.artist}</span>
          <button onClick={() => props.handlePlay(track)}>Play</button>
          <button onClick={() => props.handleUpdateTrack(track.id)}>Edit</button>
          <button onClick={() => props.handleDeleteTrack(track._id)}>Delete</button>

        </div>
      ))}
      
    </div>
    )
}*/

export default TrackList;
