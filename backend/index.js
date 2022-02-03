import express from 'express';
import  { connection } from './Database.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// TEST end point
app.get('/', (req, res) => {
	res.status(200).json({ status_code: 200, status_message: 'Success!' });
});

// SPORTS ROUTES
app.get('/sports', (req, res) => {
	connection.connect(() => {
		connection.query('SELECT * FROM sport', (err, rows) => {
			res.status(200).json({ status_code: 200, status_message: 'Success!', data: rows });
		});
	});
});

app.post('/sports', (req, res) => {
	connection.connect(() => {
		connection.query('INSERT INTO sport (id, name) VALUES (?, ?)', [null, req.body.name], (err, rows) => {
			// res.status(200).json({ status_code: 200, status_message: 'Success!'});
		});
	});
});

// TEAMS ROUTES
app.get('/teams', (req, res) => {
	connection.connect(() => {
		connection.query('SELECT * FROM team', (err, rows) => {
			res.status(200).json({ status_code: 200, status_message: 'Success!', data: rows });
		});
	});
});

app.post('/teams', (req, res) => {
	connection.connect(() => {
		connection.query('INSERT INTO team (id, team, country, acronym) VALUES (?, ?, ?, ?)', [null, req.body.team, req.body.country, req.body.acronym], (err, rows) => {
			// res.status(200).json({ status_code: 200, status_message: 'Success!'});
		});
	});
});

app.listen(5500, err => {
	if (err) throw err;
	console.log('Server is running...');
});
