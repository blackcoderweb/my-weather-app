import { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { LocationContext } from '../context/location';
import { getHour } from '../helpers/hourExtractor';
import { StatusContext } from '../context/status';

export const AllDay = () => {

  //Usando el contexto
  const {location} = useContext(LocationContext);
  const {status} = useContext(StatusContext);
  //Crear estado para guardar la info del tiempo en el día actual
  const [weatherToday, setWeatherToday] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeatherToday = async () => {
      try {
        const res = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${
            import.meta.env.VITE_API_KEY
          }&q=${location}&days=1&aqi=no&alerts=no`
        );
        const data = await res.json();
        setWeatherToday(data.forecast.forecastday[0]);
        setLoading(false);
      } catch (error) {
        throw new Error("Error while fetching");
      }
    };
    getWeatherToday();
  }, [location]);

  return (
    status =="success" && (
      <>
    {loading ? "Loading..." : (
      <>
    <p>Max: {weatherToday.day.maxtemp_c} °C</p>
    <p>Min: {weatherToday.day.mintemp_c} °C</p>
    <p>Avg. Temp: {weatherToday.day.avgtemp_c} °C</p>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>View details</Accordion.Header>
        <Accordion.Body>
        <Table responsive variant="light" className='today-table'>
      <tbody>
        {weatherToday.hour.map((hour) => (
          <tr key={hour.time_epoch}>
            <td className="vertical-center">{getHour(hour.time)}</td>
            <td className="vertical-center">{hour.temp_c} °C</td>
            <td className="vertical-center">{hour.condition.text}</td>
            <td className="vertical-center">
              <img className='table-icon' src={hour.condition.icon} alt={hour.condition.text} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </>
    )}
  </>
    )
  )
}
