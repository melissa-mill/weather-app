import { searchLocation, getLocationData } from "./services/api";
import { useState } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import LocationCard from "./components/LocationCard/LocationCard";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import TempUnitToggle from "./components/TempUnitToggle/TempUnitToggle";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [celsiusUnit, setCelsiusUnit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setLocation(null);
    setWeatherData(null);

    try {
      setLoading(true);

      if (!searchTerm.trim()) {
        setSearchTerm("");
        return;
      }

      const locationData = await searchLocation(searchTerm.trim());

      if (!locationData.results?.length) {
        throw new Error("Location not found");
      }

      const city = locationData.results[0];
      setLocation(city);

      const lat = city.latitude;
      const lng = city.longitude;

      const forecast = await getLocationData(lat, lng, celsiusUnit);

      if (!forecast) {
        throw new Error("Error getting the forecast");
      }

      setWeatherData(forecast);
    } catch (e) {
      setSearchTerm("");
      setLocation(null);
      setWeatherData(null);
      setLoading(false);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = async () => {
    const nextUnit = !celsiusUnit;

    if (location) {
      const lat = location.latitude;
      const lng = location.longitude;

      const weather = await getLocationData(lat, lng, nextUnit);
      setWeatherData(weather);
    }

    setCelsiusUnit(nextUnit);
  };

  return (
    <>
      <TempUnitToggle isCelsius={celsiusUnit} handleToggle={handleToggle} />
      <h1>How's the sky looking today?</h1>
      <SearchForm
        loading={loading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {location && weatherData && (
        <div className="weather-data-container">
          <div>
            <LocationCard
              location={location}
              currentWeather={weatherData.current}
              currentWeatherUnits={weatherData.current_units}
            />
            <DailyForecast dailyTemp={weatherData.daily} />
          </div>
          <HourlyForecast
            currentDate={weatherData.current.time}
            hourlyTemp={weatherData.hourly}
          />
        </div>
      )}
    </>
  );
}

export default App;
