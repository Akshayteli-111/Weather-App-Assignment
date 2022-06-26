 import React from "react";
import "../App.css";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img src={"/icons/perfect-day.svg"} />
      <span className="cityLabel">Find Weather of your city</span>
      <form className="searchBox" onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
    </>
  );
};
export default CityComponent;
