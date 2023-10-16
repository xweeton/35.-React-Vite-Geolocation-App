import { useEffect, useState } from "react";

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const success = (position) => { setLatitude(position.coords.latitude); setLongitude(position.coords.longitude); };

    const error = (error) => {
      console.error(error)
    }

    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }

    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])

  return (
    <>
      <img src="./src/geolocation.jpg" height='200px' />
      <h1>Geolocation App</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </>
  )
}

