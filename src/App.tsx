import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import './index.scss';
import { useEffect, useState } from "react";
import { Weather } from "./types";
import { getFormattedWeatherData } from "./services";
import { Cities, Home, Layout, Map, Preview, Settings } from "./pages";

const App = () => {
  const [query, setQuery] = useState({ q: 'london' });
  const [units, setUnits] = useState('metric');
  const [weatherData, setWeatherData] = useState<Weather>({} as Weather);

  const fetchedData = async () => {
    const data = await getFormattedWeatherData({ ...query, units });
    setWeatherData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchedData();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Preview />} />
        <Route path="start" element={<Home weatherData={weatherData} />} />
        <Route path="cities" element={<Cities weatherData={weatherData} />} />
        <Route path="map" element={<Map />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};

export default App;