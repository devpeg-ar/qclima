import React, { useState, useEffect } from "react";

export default function getTemp(city, query) {
  const [kelvin, saveKelvin] = useState();

  useEffect(() => {
    const searchCity = async () => {
      if (query) {
        const apiKey = "fabb124a7a5fe78b3dbeb5078846da0b";
        const urlApi = `http://api.openweathermap.org/data/2.5/weather?q=${city},{"AR"}&appid=${apiKey}`;
        try {
          const answer = await fetch(urlApi);
          const result = await answer.json();
          saveKelvin(result.main.temp);
        } catch (error) {
          console.log(error);
        }
      }
    };
    searchCity();
  }, [query]);

  return kelvin;
}
