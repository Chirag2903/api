import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          'http://api.weatherapi.com/v1/current.json',
          {
            params: {
              key: 'd210ded11bff4e7889f104620232812',
              q: 'London',
              aqi: 'no',
            },
          }
        );
        setdata(response.data);
      } catch (error) {

      }
    };

    fetch();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.location.name}, {data.location.country}</h2>
          <p>{data.current.temp_c}°C</p>
          <p> {data.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default App;
