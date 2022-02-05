import express from 'express';
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

app.post('/sports', async (req, res) => {
	try {
		const sport = req.body.name;
		await database.createSport(sport);
		res.status(200).json({ status_code: 200, status_message: 'Success!'});
	} catch (error) {
		console.error(`Could not create the sport: ${error.message}`);
	}
});

app.get('/teams', async (_, res) => {
	try {
    const teams = await database.getTeams();
		res.status(200).json({ status_code: 200, status_message: 'Success!', data: teams });
  } catch (error) {
    console.error(`Error while getting teams: ${error.message}`);
  }
});

app.post('/teams', async (req, res) => {
	try {
		const team = req.body;
		await database.createTeam(team);
		res.status(200).json({ status_code: 200, status_message: 'Success!'});
	} catch (error) {
		console.error(`Could not create the team: ${error.message}`);
	}
});

app.get('/events', async (_, res) => {
	try {
    const events = await database.getEvents();
		res.status(200).json({ status_code: 200, status_message: 'Success!', data: events });
  } catch (error) {
    console.error(`Error while getting events: ${error.message}`);
  }
});

app.get('/events/:id', async (req, res) => {
	try {
		const sportId = req.params.id;
    const eventsBySportId = await database.getEventsById(sportId);
		res.status(200).json({ status_code: 200, status_message: 'Success!', data: eventsBySportId });
  } catch (error) {
    console.error(`Error while getting events by sport id: ${error.message}`);
  }
});

app.post('/events', async (req, res) => {
	try {
		const event = req.body;
		await database.createEvent(event);
		res.status(200).json({ status_code: 200, status_message: 'Success!'});
	} catch (error) {
		console.error(`Could not create the event: ${error.message}`);
	}
});

app.listen(5500, err => {
	if (err) throw err;
	console.log('Server is running...');
});
