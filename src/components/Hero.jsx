import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import {LocationContext} from "../context";


export const Hero = () => {
  
  //Usando el contexto
  const location = useContext(LocationContext);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${location}&aqi=no`
        );
        const data = await res.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        throw new Error("Error while fetching");
      }
    };
    getWeather();
  }, [location]);

  return (
    <Card className="mt-4" border="info">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Card.Header as="h3">
            Weather in {weather.location.name} today
          </Card.Header>
          <Card.Body>
            <Card.Title>{weather.current.condition.text} <img src={weather.current.condition.icon} alt="Weather icon" /></Card.Title>
            <Card.Text>Temperature: {weather.current.temp_c} °C</Card.Text>
            <Card.Text>Feels like: {weather.current.feelslike_c} °C</Card.Text>
            <Card.Text>Last updated: {weather.current.last_updated}</Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  );
};
