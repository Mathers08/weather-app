import { FC } from 'react';
import { CityDescription, CityList, DailyForecast, HourlyForecast } from "../components";
import './index.scss';
import { Weather } from "../types";

interface CitiesProps {
  weatherData: Weather;
}

const Cities: FC<CitiesProps> = ({ weatherData }) => {
  return (
    <section className="cities-section">
      <CityList />
      <CityDescription weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </section>
  );
};

export default Cities;