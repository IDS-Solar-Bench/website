// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// Here we hide logic for connecting to the SQL databse under a API route. Why hide this logic?
// Mainly to keep the client side code clean and to keep the database connection hidden from the client.

// Returns repsponse from the database to the client
// connected through "api/data"
export default function handler(req, res) {

  fetch("http://localhost:8000/")
    .then(response => response.json())
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });

}
