const express = require("express");
const cors = require("cors");


const app = express();

const data = [
    {
        id: 1,
        name: "Ace"
    },
    {
        id: 2,
        name: "Riste"
    },
    {
        id: 3,
        name: "Ceca"
    }
];

// enable Cross-Origin Resource Sharing (in this way, we allow any client to access our server)
app.use(cors()); 
// Here(^) we add the domain(s) we buy online
// frontend: detalica.com
// backend: api.detalica.com
// but now because we have no domain, we will get samples(test) ones

// API endpoints
app.get("/", (req, res) => {
    return res.send(`This is an env variable: ${process.env.TEST}`);
    // TEST will be undefined unless we define it in the server
});
app.get("/test", (req, res) => {
    return res.send(`Hello ${req.query.name}`);
});
app.get("/data", (req, res) => {
    return res.send(data);
});

// Start server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

// This is a serverless-function so: (this is the line for Vercel(found in documentation))
module.exports = app;
// Because vercel ignores the lines 42-46 (it starts it's own app on the cloud)
// The backend must be started first, then the frontend