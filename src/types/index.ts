export interface Weather {
  country: string;
  daily: Daily[];
  details: string;
  dt: number;
  feels_like: number;
  hourly: Hourly[];
  humidity: number;
  icon: string;
  lat: number;
  lon: number;
  name: string;
  speed: number;
  sunrise: number;
  sunset: number;
  temp: number;
  timezone: string;
}

export interface Daily {
  title: string;
  tempDay: number;
  tempNight: number;
  icon: string;
  details: string;
}

export interface Hourly {
  title: string;
  temp: number;
  icon: string;
}
