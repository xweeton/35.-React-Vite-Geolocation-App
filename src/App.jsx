import { useEffect, useState } from "react";

export default function App() {
  const [latitudeData, setLatitudeData] = useState(null);
  const [longitudeData, setLongitudeData] = useState(null);

  useEffect(() => {
    const success = (position) => {
      setLatitudeData(position.coords.latitude);
      setLongitudeData(position.coords.longitude);
    };

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
      <p>Latitude: {latitudeData}</p>
      <p>Longitude: {longitudeData}</p>
    </>
  )
}

