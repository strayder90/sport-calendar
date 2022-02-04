import axios from 'axios';

axios.get('http://localhost:5500/events').then(response => {
  const events = response.data.data;
  
  let listMarkup = '';
  for (let i = 0; i < events.length; i++) {
    listMarkup += '<tr><td>' + events[i].event_id + '</td><td>' + events[i].event_name + '</td><td>' + events[i].team_home_name + '</td><td>' + events[i].team_away_name + '</td><td>' + events[i].sport_name + '</td><td>' + events[i].date_time + '</td></tr>';
  }
  
  const eventList = document.getElementById('eventList');
  const tableHeaders = '<tr><th>ID</th><th>Name</th><th>TEAM HOME</th><th>TEAM AWAY</th><th>SPORT CATEGORY</th><th>DATE AND TIME</th></tr>'
  eventList.innerHTML = tableHeaders + listMarkup;
});