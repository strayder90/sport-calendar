import { EventService } from '../../services/EventService';
import { SportService } from '../../services/SportService';
import { TeamService } from '../../services/TeamService';
import { UiBuilder } from '../../services/UiBuilder';

const searchBtn = document.querySelector('#searchBtn');
const createEventBtn = document.querySelector('#createEvent');
const eventAlert = document.querySelector('#eventAlert');

const searchedSport = document.getElementById('searchedSport');

const eventName = document.querySelector('#eventName');
const eventSport = document.querySelector('#sportId');
const eventTeamHome = document.querySelector('#teamHomeId');
const eventTeamAway = document.querySelector('#teamAwayId');
const eventDateTime = document.querySelector('#dateTime');

const eventService = new EventService('http://localhost:5500/', 'events');
const sportService = new SportService('http://localhost:5500/', 'sports');
const teamService = new TeamService('http://localhost:5500/', 'teams');
const uiBuilder = new UiBuilder();

eventService.getEvents().then(eventsData => {
  const events = eventsData.data.data;

  if(!events.length) {
    eventAlert.style.display = 'block';
  } else {
    eventAlert.style.display = 'none';
  }

  const transformedEvents = transformEvent(events);
  const htmlTable = uiBuilder.createHtmlEventTable(transformedEvents);

  const eventList = document.getElementById('eventList');
  eventList.innerHTML = htmlTable;
});

sportService.getSports().then(response => {
  const sports = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < sports.length; i++) {
    listMarkup += `<option value=${sports[i].id}> ${sports[i].name} </option>`;
  }
  
  eventSport.innerHTML = listMarkup;
  searchedSport.innerHTML =  listMarkup;
});

teamService.getTeams().then(response => {
  const teams = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < teams.length; i++) {
    listMarkup += `<option value=${teams[i].id}> ${teams[i].name} </option>`;
  }
  
  eventTeamHome.innerHTML = listMarkup;
  eventTeamAway.innerHTML =  listMarkup;
});

searchBtn.addEventListener('click', (e) => {
  e.preventDefault()
  const sportId = document.querySelector('#searchedSport');
  eventService.getEventsBySport(sportId.value).then(eventsData => {
    const events = eventsData.data.data;

    const transformedEvents = transformEvent(events);
    const htmlTable = uiBuilder.createHtmlEventTable(transformedEvents);
    
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = htmlTable;
  })
});

createEventBtn.addEventListener('click', async () => {
  const event = {
    name: eventName.value,
    sportId: eventSport.value,
    teamHomeId: eventTeamHome.value,
    teamAwayId: eventTeamAway.value,
    dateTime: eventDateTime.value,
  }

  await eventService.createEvent(event)
});

const transformEvent = (events) => {
  return events.map(event => {
    const dateTime = new Date(event.date_time);
    const hours = `${dateTime.getHours()}:${dateTime.getMinutes()}`;
    const date = `${dateTime.getDay()}/${dateTime.getMonth()}/${dateTime.getFullYear()}`;
    return {
      ...event,
      date_time:  `${hours} - ${date}`
    }
  })
};
