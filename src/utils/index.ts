// Temperature
export const toFahrenheit = (celsius: number) => (celsius * (9 / 5) + 32).toFixed(1);

// Wind Speed
export const toMS = (kmh: number) => (0.277778 * kmh).toFixed();
export const toKnots = (kmh: number) => (0.539957 * kmh).toFixed(2);

// Pressure
export const toInches = (hPa: number) => (0.02952998057228486 * hPa).toFixed(2);
export const toKPA = (hPa: number) => (0.1 * hPa).toFixed(1);
export const toMM = (hPa: number) => (0.75006157584566 * hPa).toFixed(2);

// Hour Time
export const toTime24 = (time12: string) => {
  const [time, modifier] = time12.split(' ');
  const [hours12, minutes] = time.split(':');
  const hours24 = parseInt(hours12) + (modifier === 'PM' ? 12 : 0);

  return `${hours24}:${minutes}`;
};

export const removeMinusBeforeZero = (temp: number) => Math.abs(temp) < 1 ? 0 : temp;
