import { TeamService } from './services/TeamService';
import { UiService } from './services/UiService';

const teamName = document.querySelector('#teamName');
const teamCountry = document.querySelector('#country');
const teamAcronym = document.querySelector('#teamAcronym');
const saveValuesBtn = document.querySelector('#saveValues');

const teamService = new TeamService('http://localhost:5500/', 'teams');
const uiService = new UiService();

teamService.getTeams().then(teamsData => {
  const teams = teamsData.data.data;
  
  const htmlTable = uiService.createHtmlTeamTable(teams);
  
  const teamList = document.getElementById("teamList");
  teamList.innerHTML = htmlTable;
})

saveValuesBtn.addEventListener('click', async () => {
  const team = {
    name: teamName.value, 
    country: teamCountry.value,
    acronym: teamAcronym.value,
  }
  await teamService.createTeam(team);
});
