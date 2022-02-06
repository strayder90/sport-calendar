import { SportTable } from './Modules/SportTable.js';
import { TeamTable }from './Modules/TeamTable.js';
import { EventTable } from './Modules/EventTable.js';

const sport = new SportTable();
const createSportTable = sport.createSportTable;
const insertIntoSportTable = sport.insertIntoSportTable;
const dropTableSport = sport.dropTableSport;

const team = new TeamTable();
const createTeamTable = team.createTeamTable;
const insertIntoTeamTable = team.insertIntoTeamTable;
const dropTableTeam = team.dropTableTeam;

const event = new EventTable();
const createEventTable = event.createEventTable;
const insertIntoEventTable = event.insertIntoEventTable;
const dropTableEvent = event.dropTableEvent;

console.log('Initializing database...');
//createDatabase();
// createSportTable();
//insertIntoSportTable();
// createTeamTable();
//insertIntoTeamTable();
// createEventTable();
//insertIntoEventTable();