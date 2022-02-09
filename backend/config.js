import { SportTable } from './Modules/SportTable.js';
import { TeamTable }from './Modules/TeamTable.js';
import { EventTable } from './Modules/EventTable.js';

const sport = new SportTable();
const team = new TeamTable();
const event = new EventTable();

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

