import React from "react";
import { Row, Col, Stack } from "react-bootstrap";
import WeatherCard from "./WeatherCard";

const WeatherList = ({ weathers }) => {
  debugger;
  return (
    <Row>
      {weathers.map(({ dt, main, weather }, index) => (
        <Col xs={6} md={4} lg={2} key={index}>
          <WeatherCard
            min={main.temp_min}
            max={main.temp_max}
            dt={dt * 1000}
            main={weather[0].main}
            icon={weather[0].icon}
          />
        </Col>
      ))}
    </Row>
  );
};

export default WeatherList;
