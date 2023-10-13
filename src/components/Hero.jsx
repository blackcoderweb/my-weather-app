import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { LocationContext } from "../context/location";
import { getHour } from "../helpers/hourExtractor";
import { NotFound } from "./NotFound";
import { StatusContext } from "../context/status";

export const Hero = () => {
  //Usando los contextos
  const { location } = useContext(LocationContext);
  const { status, setStatus } = useContext(StatusContext);

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

        if (data.error == undefined) {
          setStatus("success");
          setLoading(false);
          setWeather(data);
        } else {
          setLoading(false);
          setStatus("no-data");
        }
      } catch (error) {
        throw new Error("Error while fetching");
      }
    };
    getWeather();
  }, [location, status, setStatus]);

  return status == "success" ? (
    <Card className="mt-4" border="info">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Card.Header as="h3">
            Weather in {weather.location.name} today
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {weather.current.condition.text}{" "}
              <img src={weather.current.condition.icon} alt="Weather icon" />
            </Card.Title>
            <Card.Title className="mb-3">
              Region: {weather.location.region}, {weather.location.country}
            </Card.Title>
            <Card.Text>Temperature: {weather.current.temp_c} °C</Card.Text>
            <Card.Text>Feels like: {weather.current.feelslike_c} °C</Card.Text>
            <Card.Text>
              Last updated: {getHour(weather.current.last_updated)}
            </Card.Text>
          </Card.Body>
        </>
      )}
    </Card>
  ) : (
    <NotFound />
  );
};
