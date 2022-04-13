export const buildWeatherUrl = (location, days) => `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=${days * 8}&lang=ru&appid=3bc09fb362c2c6879fd6b44a7decf420`;


