import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export const Hero = () => {
  const [weatherMex, setWeatherMex] = useState();
  const [loading, setLoading] = useState(true);

  const getWeatherMex = async () => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=Mexico&aqi=yes`
      );
      const data = await res.json();
      setWeatherMex(data);
      setLoading(false);
    } catch (error) {
      throw new Error("Error while fetching");
    }
  };

  useEffect(() => {
    getWeatherMex();
  }, []);

  return (
    <Card className="mt-4" border="info">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Card.Header as="h3">
            Weather in {weatherMex.location.name} today
          </Card.Header>
          <Card.Body>
            <Card.Title>{weatherMex.current.condition.text} <img src={weatherMex.current.condition.icon} alt="Weather icon" /></Card.Title>
            <Card.Text>Temperature: {weatherMex.current.temp_c} °C</Card.Text>
            <Card.Text>Last updated: {weatherMex.current.last_updated}</Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  );
};
