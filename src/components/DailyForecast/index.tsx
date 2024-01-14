import { FC } from 'react';
import { freezing_drizzle } from "../../assets";
import './DailyForecast.scss';
import { Weather } from "../../types";

interface DailyForecastProps {
  weatherData: Weather;
}

const DailyForecast: FC<DailyForecastProps> = ({ weatherData }) => {
  return (
    <div className="forecast-daily">
      <h3 className="forecast-daily__title">7-day Forecast</h3>
      <div className="forecast-daily__list">
        {weatherData.daily && weatherData.daily.map((item, index) => (
          <div key={`${item.icon}_${index}`} className="forecast-daily__item">
            <div className="forecast-daily__item-day">{item.title}</div>
            <div className="forecast-daily__item-icon">
              <img src={freezing_drizzle} alt="freezing_drizzle" />
              <p>{item.details}</p>
            </div>
            <div className="forecast-daily__item-temp">
              <span>{item.tempDay}</span> / {item.tempNight}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;