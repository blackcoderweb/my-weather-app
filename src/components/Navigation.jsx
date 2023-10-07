import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import { ForecastCard } from './ForecastCard';
import { History } from './History';
import { AllDay } from './AllDay';

export const Navigation = () => {

  return (
    <Tabs
    variant='pills'
      defaultActiveKey="today"
      id="justify-tab"
      className="mt-4 mb-3"
      justify
    >
    <Tab eventKey="today" title="Today">
        <AllDay />
      </Tab>
      <Tab eventKey="forecast" title="Forecast">
      <p>Next 3 days forecast</p>
      <Row xs={1} md={3} className="g-2 justify-content-center" >
      <ForecastCard />
      </Row>
      </Tab>
      <Tab eventKey="history" title="History">
      <p>Last 7 days</p>
      <History />
      <History />
      <History />
      <History />
      <History />
      <History />
      <History />
      </Tab>
    </Tabs>
  )
}
