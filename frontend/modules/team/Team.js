import { TeamService } from '../../services/TeamService';
import { UiBuilder } from '../../services/uiBuilder';

const teamName = document.querySelector('#teamName');
const teamCountry = document.querySelector('#country');
const teamAcronym = document.querySelector('#teamAcronym');
const saveValuesBtn = document.querySelector('#saveValues');
const teamAlert = document.querySelector('#teamAlert');

const teamService = new TeamService('http://localhost:5500/', 'teams');
const uiBuilder = new UiBuilder();

teamService.getTeams().then(teamsData => {
  const teams = teamsData.data.data;

  if(!teams.length) {
    teamAlert.style.display = 'block';
  } else {
    teamAlert.style.display = 'none';
  }
  
  const htmlTable = uiBuilder.createHtmlTeamTable(teams);
  
  const teamList = document.getElementById("teamList");
  teamList.innerHTML = htmlTable;
});

saveValuesBtn.addEventListener('click', async () => {
  const team = {
    name: teamName.value, 
    country: teamCountry.value,
    acronym: teamAcronym.value,
  }
  await teamService.createTeam(team);
});
