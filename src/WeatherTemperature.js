import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertCelcius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
