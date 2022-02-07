import { SportTable } from './Modules/SportTable.js';
import { TeamTable }from './Modules/TeamTable.js';
import { EventTable } from './Modules/EventTable.js';
import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'sport_calendar',
});

const createDatabase = () => {
	connection.connect(error => {
		if (error) {
      throw error;
    } else {
      connection.query('CREATE DATABASE sport_calendar', error => {
        if (error) {
          throw error;
        }
        console.log('Database created');
      });
    }
	});
};

const sport = new SportTable();
const team = new TeamTable();
const event = new EventTable();

// sport.dropTableSport();
// team.dropTableTeam();
// event.dropTableEvent();

console.log('Initializing database...');

createDatabase();
sport.createTable();
sport.insertIntoTable();
team.createTable();
team.insertIntoTable();
event.createTable();
event.insertIntoTable();

