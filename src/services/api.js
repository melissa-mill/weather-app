const BASE_URL_GEOCODING = "https://geocoding-api.open-meteo.com/v1/search";
const BASE_URL_WEATHER = "https://api.open-meteo.com/v1/forecast";

export const searchLocation = async (location, count = 10) => {
  if (!location) return null;

  const response = await fetch(
    `${BASE_URL_GEOCODING}?name=${encodeURIComponent(location)}&count=${count}`,
  );

  if (!response) {
    throw new Error("Unable to search for location");
  }

  return response.json();
};

export const getLocationData = async (
  latitude,
  longitude,
  isCelsius = true,
) => {
  let temperatureUnit = "celsius",
    windSpeedUnit = "kmh",
    precipitationUnit = "mm";

  if (!isCelsius) {
    temperatureUnit = "fahrenheit";
    windSpeedUnit = "mph";
    precipitationUnit = "inch";
  }

  const params =
    `latitude=${latitude}&` +
    `longitude=${longitude}&` +
    `temperature_unit=${temperatureUnit}&` +
    `wind_speed_unit=${windSpeedUnit}&` +
    `precipitation_unit=${precipitationUnit}&` +
    `daily=weather_code,temperature_2m_max,temperature_2m_min&` +
    `hourly=is_day,weather_code,temperature_2m&` +
    `current=is_day,weather_code,temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m&` +
    `timezone=auto`;

  const response = await fetch(`${BASE_URL_WEATHER}?${params}`);

  if (!response) {
    throw new Error("Unable to get data");
  }

  return response.json();
};
