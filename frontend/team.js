import axios from 'axios';

const teamName = document.querySelector('#teamName');
const teamCountry = document.querySelector('#country');
const teamAcronym = document.querySelector('#teamAcronym');
const saveValuesBtn = document.querySelector('#saveValues');

axios.get('http://localhost:5500/teams').then(response => {
  const teams = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < teams.length; i++) {
    listMarkup += '<tr><td>' + teams[i].id + '</td><td>' + teams[i].name + '</td><td>' + teams[i].country + '</td><td>' + teams[i].acronym + '</td></tr>';
  };
  
  const teamList = document.getElementById("teamList");
  const tableHeaders = '<tr><th>ID</th><th>Team</th><th>Country</th><th>Acronym</th></tr>';
  teamList.innerHTML = tableHeaders + listMarkup;
});

const createTeam = (name, country, acronym) => {
  axios.post('http://localhost:5500/teams', {
      name: teamName.value, 
      country: teamCountry.value,
      acronym: teamAcronym.value,
  }).then(response => {
    console.log(response);
  });
};

saveValuesBtn.addEventListener('click', createTeam);
