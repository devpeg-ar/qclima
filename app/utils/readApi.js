import React, { useState, useEffect } from "react";

export default function getTemp(city, query) {
  const [icon, setIcon] = useState("");
  const [idWeather, setIdWeather] = useState(200);
  const [temp, setTemp] = useState();
  const [feels, setFeels] = useState();
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(1000);
  const [max, setMax] = useState();
  const [min, setMin] = useState();

  useEffect(() => {
    const searchCity = async () => {
      if (query) {
        const apiKey = "fabb124a7a5fe78b3dbeb5078846da0b";
        const urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${city},{"AR"}&appid=${apiKey}`;
        try {
          const answer = await fetch(urlApi);
          const result = await answer.json();
          setTemp(result.main.temp);
          setIcon(result.weather[0].icon);
          setIdWeather(result.weather[0].id);
          setFeels(result.main.feels_like);
          setHumidity(result.main.humidity);
          setPressure(result.main.pressure);
          setMax(result.main.temp_max);
          setMin(result.main.temp_min);
        } catch (error) {
          console.log(error);
        }
      }
    };
    searchCity();
  }, [query]);

  const getData = [temp, icon, idWeather, feels, humidity, pressure, max, min];
  return getData;
}
