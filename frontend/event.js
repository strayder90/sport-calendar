import axios from 'axios';

const searchBtn = document.querySelector('#searchBtn');

axios.get('http://localhost:5500/events').then(response => {
  const events = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < events.length; i++) {
    listMarkup += '<tr><td>' + events[i].event_id + '</td><td>' + events[i].event_name + '</td><td>' + events[i].sport_name + '</td><td>' + events[i].team_home_name + '</td><td>' + events[i].team_away_name + '</td><td>' + events[i].date_time + '</td></tr>';
  }
  
  const eventList = document.getElementById('eventList');
  const tableHeaders = '<tr><th>ID</th><th>Name</th><th>SPORT CATEGORY</th><th>TEAM HOME</th><th>TEAM AWAY</th><th>DATE AND TIME</th></tr>'
  eventList.innerHTML = tableHeaders + listMarkup;
});

axios.get('http://localhost:5500/sports').then(response => {
  const sports = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < sports.length; i++) {
    listMarkup += `<option value=${sports[i].id}> ${sports[i].name} </option>`;
  }
  
  const sportList = document.getElementById('searchedSport');
  sportList.innerHTML =  listMarkup;
});

const searchEventBySportCategory = () => {
  const sportId = document.querySelector('#searchedSport');
  axios.get(`http://localhost:5500/events/${sportId.value}`).then(response => {
    const events = response.data.data;

    let listMarkup = '';
    for (let i = 0; i < events.length; i++) {
      listMarkup += '<tr><td>' + events[i].event_id + '</td><td>' + events[i].event_name + '</td><td>' + events[i].sport_name + '</td><td>' + events[i].team_home_name + '</td><td>' + events[i].team_away_name + '</td><td>' + events[i].date_time + '</td></tr>';
    }
    
    const eventList = document.getElementById('eventList');
    const tableHeaders = '<tr><th>ID</th><th>Name</th><th>SPORT CATEGORY</th><th>TEAM HOME</th><th>TEAM AWAY</th><th>DATE AND TIME</th></tr>'
    eventList.innerHTML = tableHeaders + listMarkup;
  });
}

searchBtn.addEventListener('click', searchEventBySportCategory);