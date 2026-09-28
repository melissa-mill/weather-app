export const DAYS_IN_FILTER = [
  { day: 0, label: "Sunday" },
  { day: 1, label: "Monday" },
  { day: 2, label: "Tuesday" },
  { day: 3, label: "Wednesday" },
  { day: 4, label: "Thursday" },
  { day: 5, label: "Friday" },
  { day: 6, label: "Saturday" },
];

export const transformHourlyData = (hourly) => {
  return (
    hourly?.time?.map((time, i) => ({
      isDay: hourly.is_day[i],
      time,
      temp: hourly.temperature_2m[i],
      weatherCode: hourly.weather_code[i],
    })) ?? []
  );
};
