const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

const RoutesUsers = require('./routes/users.js');

app.use('/users', RoutesUsers);

app.get('/', (req, res, next) => {
	res.send('Get Method - Hello World');
});

app.post('/', (req, res, next) => {
	res.send('Post Method - Hello World');
});

app.listen(port, () => {
	console.log(`Server Running in http://localhost:${port}`);
});
