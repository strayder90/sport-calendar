import mysql from 'mysql2/promise';

export const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'sport_calendar',
});

export class Database {
  constructor() {}

	async getConnection() {
		return await mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'test',
			database: 'sport_calendar',
		});
	}

	async getSports() {
		const connection = await this.getConnection();

		const [rows] = await connection.query('SELECT * FROM sport');

		return rows;
	}

	async getTeams() {
		const connection = await this.getConnection();

		const [rows] = await connection.query('SELECT * FROM team');

		return rows;
	}

	getEvent() {}

	getEventBySport() {}

	async createSport(sport) {
		const connection = await this.getConnection();

		await connection.query('INSERT INTO sport (id, name) VALUES (?, ?)', [null, sport]);
	}

	async createTeam(team) {
		const connection = await this.getConnection();

		await connection.query('INSERT INTO team (id, name, country, acronym) VALUES (?, ?, ?, ?)', [null, team.name, team.country, team.acronym]);
	}

	createEvent() {}
}