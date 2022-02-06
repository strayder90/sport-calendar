import { SportTable } from './Modules/SportTable.js';
import { TeamTable }from './Modules/TeamTable.js';
import { EventTable } from './Modules/EventTable.js';

const sport = new SportTable();
const createSportTable = sport.createSportTable;
const insertIntoSportTable = sport.insertIntoSportTable;
const deleteSportTableData = sport.deleteSportTableData;

const team = new TeamTable();
const createTeamTable = team.createTeamTable;
const insertIntoTeamTable = team.insertIntoTeamTable;
const deleteTeamTableData = team.deleteTeamTableData;

const event = new EventTable();
const createEventTable = event.createEventTable;
const insertIntoEventTable = event.insertIntoEventTable;
const dropEventTable = event.dropEventTable;

console.log('Initializing database...');
//createDatabase();
// createSportTable();
//insertIntoSportTable();
// createTeamTable();
//insertIntoTeamTable();
// createEventTable();
//insertIntoEventTable();
// dropEventTable();