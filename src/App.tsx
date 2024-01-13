import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { getFormattedWeatherData } from "./services";
import { Weather } from "./types";
import './index.scss';
import { router } from "./routes";

const App = () => {
  const [query, setQuery] = useState({ q: 'paris' });
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState<Weather>();

  const fetchedData = async () => {
    const data = await getFormattedWeatherData({ ...query, units });
    setWeatherData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;