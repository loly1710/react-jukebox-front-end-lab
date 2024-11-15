import React, { useEffect, useState } from "react";

const TrackForm = ({ track, onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  useEffect(() => {
    if (track) {
      setTitle(track.title || "");
      setArtist(track.artist || "");
    } else {
      setTitle("");
      setArtist("");
    }
  }, [track]);

  const submit = (event) => {
    event.preventDefault();
    if (title && artist) {
      onSubmit({ ...track, title, artist });
    }
  };

  return (
    <div className="form-container">
      <h2>{track ? "Update Track" : "Add Track"}</h2>
      <form onSubmit={submit}>
        <div>
          <label>Title </label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Artist </label>
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>
        <button type="submit">{track ? "Update" : "Add"}</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TrackForm;
