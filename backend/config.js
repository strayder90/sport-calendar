import mysql from 'mysql2';
import { SportTable } from './Modules/SportTable.js';
import { TeamTable }from './Modules/TeamTable.js';
import { EventTable } from './Modules/EventTable.js';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'sport_calendar',
});

const sport = new SportTable(connection);
const team = new TeamTable(connection);
const event = new EventTable(connection);

// sport.dropTableSport();
// team.dropTableTeam();
// event.dropTableEvent();

console.log('Initializing database...');

sport.createTable();
sport.insertIntoTable();
team.createTable();
team.insertIntoTable();
event.createTable();
event.insertIntoTable();