import Accordion from "react-bootstrap/Accordion";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";
import { decreaseDate } from "../helpers/dateExtractor";

export const History = () => {
  //Usando el contexto
  const location = useContext(LocationContext);

  //Crear estado para guardar la info del tiempo en los 7 días anteriores a la fecha actual
  const [fullHistory, setFullHistory] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Con este método recupero el dato del estado del tiempo de los últimos 7 días
    const getFullHistory = async () => {
      try {
        const tempFullHistory = [];
        for (let day = 2; day < 9; day++) {
          const history = await getHistoryDay(day);
          tempFullHistory.push(history);
        }
        setLoading(false);
        setFullHistory(tempFullHistory)
      } catch (error) {
        throw new Error("Error while fetching");
      }
    };
    getFullHistory();
    
  }, []);

  //Con este método recupero el dato del estado del tiempo en un día
  const getHistoryDay = async (amount) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/history.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${location}&dt=${decreaseDate(amount)}`
      );
      const data = await res.json();
      return data.forecast.forecastday[0];
    } catch (error) {
      throw new Error("Error while fetching");
    }
  };


  return (
    <>
      {loading
        ? "Loading..."
        : fullHistory.map((history) => (
            <Accordion key={history.date_epoch}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{history.date}</Accordion.Header>
                <Accordion.Body>
                  <p>{history.day.condition.text} <img src={history.day.condition.icon} alt={history.day.condition.text} /></p>
                  <p>Max: {history.day.maxtemp_c} °C</p>
                  <p>Min: {history.day.mintemp_c} °C</p>
                  <p>Avg. Temp: {history.day.avgtemp_c} °C</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
    </>
  );
};
