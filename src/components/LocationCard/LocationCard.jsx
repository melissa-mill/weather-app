import { getWeatherIcon } from "../../utils/weatherCodes.js";
import Icon from "../Icon.jsx";
import styles from "./LocationCard.module.css";

function LocationCard({ location, currentWeather, currentWeatherUnits }) {
  const date = new Date(currentWeather?.time);
  const weatherInfo = [
    {
      label: "Feels like",
      data: Math.round(currentWeather?.apparent_temperature),
      units: "°",
    },
    {
      label: "Humidity",
      data: currentWeather?.relative_humidity_2m,
      units: currentWeatherUnits?.relative_humidity_2m,
    },
    {
      label: "Wind",
      data: currentWeather?.wind_speed_10m,
      units: currentWeatherUnits?.wind_speed_10m,
    },
    {
      label: "Precipitation",
      data: currentWeather?.precipitation,
      units: currentWeatherUnits?.precipitation,
    },
  ];

  const iconCode = getWeatherIcon(
    currentWeather?.weather_code,
    currentWeather.is_day,
  );

  return (
    <>
      <div
        className={`${styles.location} ${currentWeather?.is_day ? styles.day : styles.night}`}
      >
        <div className={styles.location_data}>
          <h2>
            {location?.name}, {location?.country}
          </h2>
          <p className={styles.date}>
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              weekday: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className={styles.temperature}>
          <Icon code={iconCode} size={52} />
          {Math.round(currentWeather?.temperature_2m)}°
        </div>
      </div>
      <div className={styles.card_container}>
        {weatherInfo.map(
          (data, i) =>
            data && (
              <div key={i} className={styles.card}>
                <p className={styles.label}>{data.label}</p>
                <p className={styles.card_temp}>
                  {data.data} {data.units}
                </p>
              </div>
            ),
        )}
      </div>
    </>
  );
}

export default LocationCard;
