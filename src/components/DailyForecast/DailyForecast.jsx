import { getWeatherIcon } from "../../utils/weatherCodes.js";
import Icon from "../Icon.jsx";
import styles from "./DailyForecast.module.css";

function DailyForecast({ dailyTemp }) {
  const maxTemp = dailyTemp?.temperature_2m_max;
  const minTemp = dailyTemp?.temperature_2m_min;
  const dates = dailyTemp?.time.map((t) => new Date(`${t}T00:00:00`));
  const tempMinMax = dates?.map((date, i) => ({
    date,
    max: maxTemp[i],
    min: minTemp[i],
    weatherCode: dailyTemp?.weather_code[i]
  }));

  return (
    <div className={styles.forecast_container}>
      <h3>Daily forecast</h3>
      <div className={styles.daily_container}>
        {tempMinMax.map(({ date, max, min, weatherCode }, i) => (
          <div key={i} className={styles.day_info}>
            <p className={styles.label}>{date.toLocaleDateString("en-US", { weekday: "short" })}</p>
            <Icon code={getWeatherIcon(weatherCode)} size={32} />
            <div className={styles.temp_container}>
              <span id={`max-${i}`} className={styles.max_temp}>
                {Math.round(max)}°
              </span>
              <span id={`min-${i}`} className={styles.min_temp}>
                {Math.round(min)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
