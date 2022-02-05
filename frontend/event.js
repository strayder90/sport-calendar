import { EventService } from './services/EventService';
import { SportService } from './services/SportService';
import { UiService } from './services/UiService';

const searchBtn = document.querySelector('#searchBtn');

const eventService = new EventService('http://localhost:5500/', 'events');
const sportService = new SportService('http://localhost:5500/', 'sports');
const uiService = new UiService();

eventService.getEvents().then(eventsData => {
  const events = eventsData.data.data;
  
  const htmlTable = uiService.createHtmlEventTable(events);

  const eventList = document.getElementById('eventList');
  eventList.innerHTML = htmlTable;
})

sportService.getSports().then(response => {
  const sports = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < sports.length; i++) {
    listMarkup += `<option value=${sports[i].id}> ${sports[i].name} </option>`;
  }
  
  const sportList = document.getElementById('searchedSport');
  sportList.innerHTML =  listMarkup;
});

searchBtn.addEventListener('click', () => {
  const sportId = document.querySelector('#searchedSport');
  eventService.getEventsBySport(sportId.value).then(eventsData => {
    const events = eventsData.data.data;

    const htmlTable = uiService.createHtmlEventTable(events);
    
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = htmlTable;
  })
});