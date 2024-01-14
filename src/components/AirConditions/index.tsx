import { FC } from 'react';
import { feels_like, humidity, pressure, wind } from "../../assets";
import './AirConditions.scss';
import { Weather } from "../../types";

interface AirConditionsProps {
  weatherData: Weather;
}

const AirConditions: FC<AirConditionsProps> = ({ weatherData }) => {
  return (
    <div className="air-conditions">
      <div className="air-conditions__top">
        <h3 className="air-conditions__title">Air Conditions</h3>
        <button className="btn">See more</button>
      </div>
      <div className="air-conditions__list">
        <div className="air-conditions__item">
          <div className="air-conditions__item-icon">
            <img src={feels_like} alt="freezing_drizzle" />
          </div>
          <div className="air-conditions__item-info">
            <p className="air-conditions__item-info-title">Feels Like</p>
            <p className="air-conditions__item-info-value">{weatherData.feels_like}°C</p>
          </div>
        </div>
        <div className="air-conditions__item">
          <div className="air-conditions__item-icon">
            <img src={wind} alt="freezing_drizzle" />
          </div>
          <div className="air-conditions__item-info">
            <p className="air-conditions__item-info-title">Wind</p>
            <p className="air-conditions__item-info-value">{weatherData.speed} km/h</p>
          </div>
        </div>
        <div className="air-conditions__item">
          <div className="air-conditions__item-icon">
            <img src={humidity} alt="freezing_drizzle" />
          </div>
          <div className="air-conditions__item-info">
            <p className="air-conditions__item-info-title">Humidity</p>
            <p className="air-conditions__item-info-value">{weatherData.humidity}%</p>
          </div>
        </div>
        <div className="air-conditions__item">
          <div className="air-conditions__item-icon">
            <img src={pressure} alt="freezing_drizzle" />
          </div>
          <div className="air-conditions__item-info">
            <p className="air-conditions__item-info-title">Pressure</p>
            <p className="air-conditions__item-info-value">{weatherData.pressure} hPa</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AirConditions;