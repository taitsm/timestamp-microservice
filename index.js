const express = require('express');
const app = express();

// Enable CORS so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

// Index route
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Timestamp API endpoint
app.get("/api/:date?", (req, res) => {
  let dateString = req.params.date;
  let date;

  if (!dateString) {
    date = new Date();
  } else {
    if (!isNaN(dateString)) {
      dateString = parseInt(dateString);
    }
    date = new Date(dateString);
  }

  if (date.toString() === "Invalid Date") {
    res.json({error: "Invalid Date"});
  } else {
    res.json({unix: date.getTime(), utc: date.toUTCString()});
  }
});

// Listen for requests
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
