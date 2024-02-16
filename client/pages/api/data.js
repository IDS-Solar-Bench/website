// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  fetch("http://localhost:8000/")
  .then((response) => response.json())
  .then((data) =>{
    setReadings(data.reverse());
    setTimestamp(data[0].timestamp.substring(12,));
    setMessage(data[0].message);
    setTemperature(data[0].temperature);
    setCapacity(data[0].capacity);
    console.log(data);
  });

  
}
