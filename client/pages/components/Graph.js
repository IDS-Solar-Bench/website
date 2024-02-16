import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = () => {


    const [timestamp, setTimestamp] = useState("Loading");
    const [message, setMessage] = useState("Loading");
    const [temperature, setTemperature] = useState("Loading");
    const [capacity, setCapacity] = useState("Loading");
    const [readings, setReadings] = useState([]);
  
    useEffect(() => {
      fetch("api/data")
        .then((response) => response.json())
        .then((data) =>{
          setReadings(data.reverse());
          setTimestamp(data[0].time.substring(12,));
          setMessage(data[0].message);
          setTemperature(data[0].temp);
          setCapacity(data[0].capacity);
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
  
    }, []);
  
    const graphData = readings.map((reading) => ({
      timestamp: reading.time.substring(12),
      temperature: reading.temp,
    }));
  
    return (
      <div>
        <h1>IDS</h1>
        <div className="latest-reading">
          <h2>Latest Reading:</h2>
          <div>
            Timestamp: {timestamp},
            Temp: {temperature}, 
            Capacity: {capacity},
            Message: {message}
          </div>
        </div>
        
        <div className="chart">
          <ResponsiveContainer width="80%" height={300}>
            <LineChart data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#ffffff" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default Graph;
