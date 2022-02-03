import axios from 'axios';

const sportInput = document.querySelector('#sportName');
const saveValueBtn = document.querySelector('#saveSport');

axios.get('http://localhost:5500/sports').then(response => {
  const sports = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < sports.length; i++) {
    listMarkup += '<tr><td>' + sports[i].id + '</td><td>' + sports[i].name + '</td></tr>';
  }
  
  const sportList = document.getElementById('sportList');
  const tableHeaders = '<tr><th>ID</th><th>Name</th></tr>'
  sportList.innerHTML = tableHeaders + listMarkup;
});


const createSport = (name) => {
  axios.post('http://localhost:5500/sports', {
    name: sportInput.value, 
  }).then(response => {
    console.log(response)
  });
};

saveValueBtn.addEventListener('click', createSport);