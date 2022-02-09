import 'regenerator-runtime/runtime'
import { SportService } from '../../services/SportService';
import { UiBuilder } from '../../services/uiBuilder';

const sportInput = document.querySelector('#sportName');
const saveValueBtn = document.querySelector('#saveSport');
const sportAlert = document.querySelector('#sportAlert');


const sportService = new SportService('http://localhost:5500/', 'sports');
const uiBuilder = new UiBuilder();

sportService.getSports().then(sportData => {
    const sports = sportData.data.data;

    if(!sports.length) {
      sportAlert.style.display = 'block';
    } else {
      sportAlert.style.display = 'none';
    }
    
    const htmlTable = uiBuilder.createHtmlSportTable(sports);
    
    const sportList = document.getElementById('sportList');
    sportList.innerHTML = htmlTable;
});

saveValueBtn.addEventListener('click', async () => {
  await sportService.createSport(sportInput.value);
});