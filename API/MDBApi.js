export const getWeatherFromApi = () => {
  const url =
    'http://api.openweathermap.org/data/2.5/forecast?q=Orgerus&appid=ce89640df774b3137289687a001b811e';
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error));
};
