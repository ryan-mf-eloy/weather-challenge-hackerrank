import React from 'react';
import { useMemo } from 'react';
import { TemperatureUnits, Weather } from '../../data/weatherData';

interface WeatherCardProps {
  weather: Weather,
  unit: TemperatureUnits,
  onAddFavorite: (weatherId: number) => void,
  onRemoveFavorite: (weatherId: number) => void,
  isFavorite: boolean,
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  unit,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  const memoizedCalcTemperature = useMemo(() => (temperature: number): number => {
    if (unit === "F") {
      const fahrenheit = (temperature * 9 / 5) + 32;
      return fahrenheit
    }
    
    return temperature
  }, [unit]);

  const temperature = memoizedCalcTemperature(weather.temperature)

  return (
    <tr
      className="weather-card"
      data-testid={`weather-card-${weather.id}`}>
      
      <td>{ weather.city }</td>
      <td>{ temperature.toFixed(1) }°{ unit }</td>
      <td>{ weather.description }</td>
      
      <td>
        {
          isFavorite 
          ? (<button
            onClick={() => onRemoveFavorite(weather.id)}
            data-testid={`weather-card-action-${weather.id}`}>
            Remove from favorites
          </button>)
          : (<button
            onClick={() => onAddFavorite(weather.id)}
            data-testid={`weather-card-action-${weather.id}`}>
            Add to favorites
          </button>)
        }
      </td>
    </tr>
  );
};

export default WeatherCard;

