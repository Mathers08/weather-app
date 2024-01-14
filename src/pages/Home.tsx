import { FC } from 'react';
import './index.scss';
import { AirConditions, CityDescription, DailyForecast, HourlyForecast } from "../components";
import { Weather } from "../types";

interface HomeProps {
  weatherData: Weather;
}

const Home: FC<HomeProps> = ({ weatherData }) => {
  return (
    <section className="main-section">
      <CityDescription weatherData={weatherData} />
      <HourlyForecast weatherData={weatherData} />
      <AirConditions weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </section>
  );
};

export default Home;