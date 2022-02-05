import axios from 'axios';
import { SportService } from './services/SportService.js';

const sportInput = document.querySelector('#sportName');
const saveValueBtn = document.querySelector('#saveSport');


const sportService = new SportService('http://localhost:5500/', 'sports');


sportService.getSports().then(sports => {
  console.log('test')
});


// axios.get('http://localhost:5500/sports').then(response => {
//   const sports = response.data.data;
  
//   let listMarkup = '';
//   for (let i = 0; i < sports.length; i++) {
//     listMarkup += '<tr><td>' + sports[i].id + '</td><td>' + sports[i].name + '</td></tr>';
//   }
  
//   const sportList = document.getElementById('sportList');
//   const tableHeaders = '<tr><th>ID</th><th>Name</th></tr>'
//   sportList.innerHTML = tableHeaders + listMarkup;
// });


const createSport = () => {
  axios.post('http://localhost:5500/sports', {
    name: sportInput.value, 
  }).then(response => {
    console.log(response)
  });
};

saveValueBtn.addEventListener('click', createSport);