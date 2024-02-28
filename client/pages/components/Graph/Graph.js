import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from 'recharts';
import style from './Graph.module.css';

const Graph = () => {

    const [timestamp, setTimestamp] = useState("Loading");
    const [message, setMessage] = useState("Loading");
    const [temperature, setTemperature] = useState("Loading");
    const [capacity, setCapacity] = useState("Loading");
    const [readings, setReadings] = useState([]);
    const [error, setError] = useState(false);
  
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
          setError(true);
          console.error(error);
        });
  
    }, []);
  
    const graphData = readings.map((reading) => ({
      timestamp: reading.time.substring(12),
      capacity: reading.capacity,
      temperature: reading.temp,
    }));

    if(error) {
      return <div className={style.errorMessage}> Server failed to return data. Please try again later. </div>
    }
  
    return (
      <div>
        <div className={style.latestReading}>
          <h2>Latest Reading</h2>
          <div className={style.readings}>
            <p>Timestamp: {timestamp}</p>
            <p>Temperature: {temperature}&deg;C</p>
            <p>Capacity: {capacity}%</p>
            <p>Message: {message}</p>
          </div>
        </div>

        <h2></h2>
        
        <div className={style.chart}>
          <ResponsiveContainer width="90%" height={300}>
              <LineChart data={graphData} margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis yAxisId="left" >
                  <Label value="Temperature (degree C)" position="insideLeft" angle={-90} />
                </YAxis>
                <YAxis yAxisId="right" orientation="right">
                  <Label value="Battery Capacity (%)" position="insideRight" angle={-90} color="#f1f1f1" />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#ffffff" yAxisId="left" />
                <Line type="monotone" dataKey="capacity" stroke="#8884d8" yAxisId="right" />
              </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default Graph;
