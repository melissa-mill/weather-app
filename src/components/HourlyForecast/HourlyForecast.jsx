import { useState } from "react";
import { getWeatherIcon } from "../../utils/weatherCodes.js";
import {
  DAYS_IN_FILTER,
  transformHourlyData,
} from "../../utils/weatherUtils.js";
import Icon from "../Icon.jsx";
import styles from "./HourlyForecast.module.css";

function HourlyForecast({ currentDate, hourlyTemp }) {
  const currentHour = new Date(currentDate).getHours();
  const currentDay = new Date(currentDate).getDay();
  const hourlyData = transformHourlyData(hourlyTemp);
  const daysInFilter = DAYS_IN_FILTER;
  const [filterDay, setFilterDay] = useState(currentDay);

  const shouldShowHour = (date) => {
    const hour = date.getHours();
    const day = date.getDay();

    if (day !== filterDay) return false;

    if (filterDay === currentDay) {
      return hour >= currentHour;
    }

    return true;
  };

  const formatHour = (hour) => {
    let newHour = hour >= 12 ? hour - 12 : hour;
    let newFormat = hour >= 12 ? "PM" : "AM";

    return `${newHour ? newHour : 12} ${newFormat}`;
  };

  return (
    <div className={styles.hourly_container}>
      <div className={styles.title_container}>
        <h3>Hourly forecast</h3>
        <label htmlFor="day-select"></label>
        <select
          id="day-select"
          value={filterDay}
          onChange={(e) => setFilterDay(Number(e.target.value))}
        >
          {daysInFilter.map((day) => (
            <option key={day.day} value={day.day}>
              {day.day === currentDay ? "Today" : day.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.data_container}>
        {hourlyData
          .filter(({ time }) => {
            const date = new Date(time);
            return shouldShowHour(date);
          })
          .map(({ isDay, time, temp, weatherCode }, i) => {
            const date = new Date(time);
            const hour = date.getHours();

            return (
              <div key={i} className={styles.hourly_card}>
                <span className={styles.hour}>
                  <Icon code={getWeatherIcon(weatherCode, isDay)} />
                  {formatHour(hour)}
                </span>
                <span>{Math.round(temp)}°</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HourlyForecast;
