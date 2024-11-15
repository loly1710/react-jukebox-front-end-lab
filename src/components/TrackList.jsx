const TrackList = (props) => {
    
    const tracks = props.trackList.map((track) => 
    <a key={track._id} onClick={() => props.updateSelected(track)}><li>{track.name}</li>
    </a>);

    return (
        <div>
            <button onClick={() => props.navigate('/TrackForm')}>Add New Track</button>
      <h2>Track List</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <span>{track.title} by {track.artist}</span>
          <button onClick={() => props.handlePlay(track)}>Play</button>
          <button onClick={() => props.handleUpdateTrack(track.id)}>Edit</button>
          <button onClick={() => props.handleDeleteTrack(track.id)}>Delete</button>
        </div>
      ))}
      
    </div>
    )
}

export default TrackList;