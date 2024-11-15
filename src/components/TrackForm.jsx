import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as trackSevice from "../services/trackService";

const TrackForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
  });

  const { trackId } = useParams();

  useEffect(() => {
    const fetchTrack = async () => {
      const trackData = await trackSevice.show(trackId);
      setFormData(trackData);
    };

    if (trackId) {
      fetchTrack();
    } else {
      setFormData({
        title: "",
        artist: "",
      });
    }
  }, [trackId]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (trackId) {
      props.handleUpdateTRack(trackId, formData);
    } else {
      props.handleAddTrack(formData);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>{trackId ? "Edit Track" : "New Track"}</h1>
        <label htmlFor="title-input">Title</label>
        <input
          type="text"
          required
          name="title"
          id="title-input"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="text-input">Artist</label>
        <textarea
          type="text"
          required
          name="text"
          id="text-input"
          value={formData.artist}
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
};
export default TrackForm;