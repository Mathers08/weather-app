import { DateTime } from 'luxon';
import { removeMinusBeforeZero } from '../utils';

const API_KEY = '057ce366da502b1ad454bc27b0f2afa6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  const res = await fetch(url);
  return await res.json();
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed }
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    feels_like: +feels_like.toFixed(),
    temp: +temp.toFixed(),
    humidity,
    pressure,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed: +speed.toFixed(1),
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 8).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'cccc'),
      tempDay: removeMinusBeforeZero(+d.temp.day.toFixed()),
      tempNight: removeMinusBeforeZero(+d.temp.night.toFixed()),
      icon: d.weather[0].icon,
      details: d.weather[0].main
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: removeMinusBeforeZero(+d.temp.toFixed()),
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

export const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData('onecall', {
    lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units,
  }).then(formatForecastWeather);
  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

export const formatToLocalTime = (secs, zone, format) => {
  return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

