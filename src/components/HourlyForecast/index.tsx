import { FC } from 'react';
import { freezing_drizzle } from "../../assets";
import './HourlyForecast.scss';
import { Weather } from "../../types";
import { useLocation } from "react-router-dom";

interface HourlyForecastProps {
  weatherData: Weather;
}

const HourlyForecast: FC<HourlyForecastProps> = ({ weatherData }) => {
  const location = useLocation();
  const pathname = location.pathname.includes('cities');
  const itemsToDisplay = pathname ? weatherData?.hourly.slice(0, 3) : weatherData.hourly;

  return (
    <div className="forecast-hourly" style={{ backgroundColor: `${pathname ? '' : '#1A222F'}` }}>
      <h3 className="forecast-hourly__title">Today's Forecast</h3>
      <div className="forecast-hourly__list">
        {itemsToDisplay.map((item, index) => (
          <div key={`${item.icon}_${index}`} className="forecast-hourly__item">
            <div className="forecast-hourly__item-time">{item.title}</div>
            <div className="forecast-hourly__item-icon">
              <img src={freezing_drizzle} alt="freezing_drizzle" />
            </div>
            <div className="forecast-hourly__item-temp">{item.temp}°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;