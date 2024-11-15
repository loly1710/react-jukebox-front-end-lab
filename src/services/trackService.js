const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

const index = async() => {
    try {
        const res = await fetch(BASE_URL)
        const tracks = await res.json()

        return tracks
    } catch (error) {
        console.log(error)
    }
}

const show = async (trackId) => {
  try {
      const res = await fetch(`${BASE_URL}/${trackId}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
      return res.json()
  } catch (error) {
      console.log(error)
  }
}

const create = async(trackFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(trackFormData),
          })
          const track = await res.json()
          return track
    } catch (error) {
        console.log(error)
    }
}

export async function updateTrack(trackFormData, trackId) {
try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trackFormData),
      });
      return await res.json();
    
} catch (error) {
    console.log(error)
}
}

export async function deleteTrack(trackId){
    try {
      const res = await fetch(`${BASE_URL}/${trackId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      return await res.json()
    } catch (error) {
      console.log(error)
    }
  }

export {index, create, show};