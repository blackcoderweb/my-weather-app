import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="mb-4">
        <p className="text-center">
          Developed by{" "}
          <a
            href="https://blackcoder.netlify.app/"
            rel="noreferrer"
            target="_blank"
            title="BlackCoder portfolio"
          >
            BlackCoder
          </a>
        </p>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto">
            <p className="text-center">
              Powered by{" "}
              <a
                href="https://www.weatherapi.com/"
                rel="noreferrer"
                target="_blank"
                title="Weather API"
              >
                WeatherAPI.com
              </a>
            </p>
          </Col>
          <Col xs="auto">
            <a
              href="https://www.weatherapi.com/"
              rel="noreferrer"
              target="_blank"
              title="Free Weather API"
            >
              <img
                src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                alt="Weather data by WeatherAPI.com"
                border="0"
              ></img>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};
