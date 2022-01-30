import axios from 'axios';

axios.get('http://localhost:5500/sports').then(response => {
  const sports = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < sports.length; i++) {
    listMarkup += '<tr><td>' + sports[i].id + '</td><td>' + sports[i].name + '</td></tr>';
  }
  
  const myList = document.getElementById("list");
  const tableHeaders = '<tr><th>ID</th><th>Name</th></tr>'
  myList.innerHTML = tableHeaders + listMarkup;
});

const createTeam = (teamName) => {
  axios.post('http://localhost:5500/sports', {
    name: teamName, 
  }).then(response => {
    console.log(response)
  });
}
