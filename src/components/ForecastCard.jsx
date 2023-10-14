import { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { LocationContext } from "../context/location";
import { StatusContext } from "../context/status";

export const ForecastCard = () => {
  //Usando el contexto
  const { location } = useContext(LocationContext);
  const { status } = useContext(StatusContext);

  //Crear estado para guardar la info del tiempo en el día actual
  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${location}&days=3&aqi=no&alerts=no`
        );
        const data = await res.json();
        setForecast(data.forecast.forecastday);
        setLoading(false);
      } catch (error) {
        throw new Error("Error while fetching");
      }
    };
    getForecast();
  }, [location]);

  return (
    status == "success" && (
      <>
        {loading
          ? "Loading..."
          : forecast.map((forecast) => (
              <Card
                border="info"
                style={{ width: "16rem" }}
                key={forecast.date_epoch}
              >
                <Card.Header>{forecast.date}</Card.Header>
                <Card.Body>
                  <Card.Title as="h6">{forecast.day.condition.text}</Card.Title>
                  <img
                    src={forecast.day.condition.icon}
                    alt={forecast.day.condition.text}
                  />
                  <Card.Text>Max: {forecast.day.maxtemp_c} °C</Card.Text>
                  <Card.Text>Min: {forecast.day.mintemp_c} °C</Card.Text>
                  <Card.Text>Avg. Temp: {forecast.day.avgtemp_c} °C</Card.Text>
                </Card.Body>
              </Card>
            ))}
      </>
    )
  );
};
