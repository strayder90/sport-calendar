import express from 'express';
import  { connection } from './Database.js';
import cors from 'cors';
import { Database } from './Database.js';

const app = express();
app.use(express.json());
app.use(cors());

const database = new Database();

app.get('/sports', async (_, res) => {
	try {
    const sports = await database.getSports();
		res.status(200).json({ status_code: 200, status_message: 'Success!', data: sports });
  } catch (error) {
    console.error(`Error while getting sports: ${error.message}`);
  }
});

app.post('/sports', (req) => {
	connection.connect(() => {
		connection.query('INSERT INTO sport (id, name) VALUES (?, ?)', [null, req.body.name], () => {
			res.status(200).json({ status_code: 200, status_message: 'Success!'});
		});
	});
});

app.get('/teams', async (_, res) => {
	try {
    const teams = await database.getTeams();
		res.status(200).json({ status_code: 200, status_message: 'Success!', data: teams });
  } catch (error) {
    console.error(`Error while getting teams: ${error.message}`);
  }
});

app.post('/teams', (req, res) => {
	connection.connect(() => {
		connection.query('INSERT INTO team (id, team, country, acronym) VALUES (?, ?, ?, ?)', [null, req.body.team, req.body.country, req.body.acronym], () => {
			res.status(200).json({ status_code: 200, status_message: 'Success!'});
		});
	});
});

app.listen(5500, err => {
	if (err) throw err;
	console.log('Server is running...');
});
