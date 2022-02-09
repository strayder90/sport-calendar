import mysql from 'mysql2/promise';
export class Database {

	async getConnection() {
		return await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'test',
			database: 'sport_calendar',
		});
	};

	async createSport(sport) {
		const connection = await this.getConnection();

		await connection.query('INSERT INTO sport (id, name) VALUES (?, ?)', [null, sport]);
	}

	async getSports() {
		const connection = await this.getConnection();

		const [rows] = await connection.query('SELECT * FROM sport');

		return rows;
	}

	async createTeam(team) {
		const connection = await this.getConnection();

		await connection.query('INSERT INTO team (id, name, country, acronym) VALUES (?, ?, ?, ?)', [null, team.name, team.country, team.acronym]);
	}
	
	async getTeams() {
		const connection = await this.getConnection();

		const [rows] = await connection.query('SELECT * FROM team');

		return rows;
	}

	async createEvent({name, sportId, teamHomeId, teamAwayId, dateTime}) {
		const connection = await this.getConnection();

		await connection.query('INSERT INTO event (id, name, sport_id, team_home_id, team_away_id, date_time) VALUES (?, ?, ?, ?, ?, ?)', [null, name, sportId, teamHomeId, teamAwayId, dateTime]);
	}

	async getEvents() {
		const connection = await this.getConnection();

		const [rows] = await connection.query(`
		SELECT
			event.id AS event_id,
			event.name AS event_name,
		 	sport.name AS sport_name,
		 	date_time,
		 	event.name AS event_name,
		 	team.name AS team_home_name,
		 	team_away.name AS team_away_name
		 	FROM event 
		 	JOIN sport 
			 ON event.sport_id = sport.id 
			JOIN team 
				ON event.team_home_id = team.id
			JOIN team AS team_away
				ON event.team_away_id = team_away.id
		`);
	

		return rows;
	}

	async getEventsBySportId(id) {
		const connection = await this.getConnection();

		const [rows] = await connection.query(`
		SELECT
			event.id AS event_id,
			event.name AS event_name,
		 	sport.name AS sport_name,
		 	date_time,
		 	event.name AS event_name,
		 	team.name AS team_home_name,
		 	team_away.name AS team_away_name
		 	FROM event 
		 	JOIN sport 
			 ON event.sport_id = sport.id 
			JOIN team 
				ON event.team_home_id = team.id
			JOIN team AS team_away
				ON event.team_away_id = team_away.id
			WHERE event.sport_id = ${id}
		`);
	
		return rows;
	}
};