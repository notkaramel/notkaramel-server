const express = require('express');
const app = express();

// Set up CORS policy
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Change * to your domain name if needed
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
	// res.json({ message: 'Hello World!' });
	res.json({ message: 'Hello World! from server' });
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
