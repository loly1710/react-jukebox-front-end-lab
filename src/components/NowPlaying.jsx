const NowPlaying = ({ track, onStop }) => {
    if (!track) return null;
  
    return (
      <div className="now-playing-container">
        <h2 className="highlight-text">Now Playing:</h2>
        <p><span className="now-playing-highlights">Title:</span> {track.title}</p>
        <p><span className="now-playing-highlights">Artist:</span> {track.artist}</p>
        <button onClick={onStop}>Stop</button>
      </div>
    );
  };

  export default NowPlaying;