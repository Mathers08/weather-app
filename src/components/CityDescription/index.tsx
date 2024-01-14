import { FC } from 'react';
import './CityDescription.scss';
import { clear } from "../../assets";
import { Weather } from "../../types";

interface CityDescriptionProps {
  weatherData: Weather;
}

const CityDescription: FC<CityDescriptionProps> = ({ weatherData }) => {
  return (
    <div className="city-description">
      <div className="city-info">
        <div className="city-info__title">
          <h1 className="city-info__title-name">{weatherData.name}</h1>
          <h1 className="city-info__title-text">Chance of rain: 0%</h1>
        </div>
        <div className="city-info__temperature">{weatherData.temp}°C</div>
      </div>
      <div className="city-weather">
        <img src={clear} alt="clear" />
      </div>
    </div>
  );
};

export default CityDescription;