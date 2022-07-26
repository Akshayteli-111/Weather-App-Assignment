import React from "react";
import "../App.css";

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <div className="InfoContainer">
      <img className="InfoIcon" src={WeatherInfoIcons[name]} />
      <span className="InfoLabel">
        {value}
        <span>{name}</span>
      </span>
    </div>
  );
};
export default WeatherInfoComponent;
