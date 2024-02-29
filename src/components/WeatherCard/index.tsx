import React from 'react';

const WeatherCard: React.FC<any> = ({
  weather,
  unit,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {

  const handleFavoriteClick = () => {};

  return (
    <tr className="weather-card" data-testid={`weather-card-${weather.id}`}>
      <td>Moscow</td>
      <td>5°C</td>
      <td>Snowy</td>
      <td>
        <button onClick={handleFavoriteClick} data-testid={`weather-card-action-${weather.id}`}>
          Add to favorites
        </button>
      </td>
    </tr>
  );
};

export default WeatherCard;

