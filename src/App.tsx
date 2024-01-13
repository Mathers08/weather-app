import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./services";

const App = () => {
  const [query, setQuery] = useState({ q: 'paris' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const fetchedData = async () => {
    const data = await getFormattedWeatherData({ ...query, units });
    console.log(data);
  }

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div>
      fewf
    </div>
  );
};

export default App;