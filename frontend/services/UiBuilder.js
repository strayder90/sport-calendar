export class UiBuilder {
  
  createHtmlEventTable(events) {
    let listMarkup = '';
    for (let i = 0; i < events.length; i++) {
      listMarkup += '<tr><td>' + events[i].event_id + '</td><td>' + events[i].event_name + '</td><td>' + events[i].sport_name + '</td><td>' + events[i].team_home_name + '</td><td>' + events[i].team_away_name + '</td><td>' + events[i].date_time + '</td></tr>';
    }
    
    const tableHeaders = '<tr><th>ID</th><th>Name</th><th>SPORT CATEGORY</th><th>TEAM HOME</th><th>TEAM AWAY</th><th>DATE AND TIME</th></tr>'
    return tableHeaders + listMarkup;
  }

  createHtmlSportTable(sports) {
    let listMarkup = '';
    for (let i = 0; i < sports.length; i++) {
      listMarkup += '<tr><td>' + sports[i].id + '</td><td>' + sports[i].name + '</td></tr>';
    }
    
    const tableHeaders = '<tr><th>ID</th><th>Name</th></tr>';
    return tableHeaders + listMarkup;
  }

  createHtmlTeamTable(teams) {
    let listMarkup = '';
    for (let i = 0; i < teams.length; i++) {
      listMarkup += '<tr><td>' + teams[i].id + '</td><td>' + teams[i].name + '</td><td>' + teams[i].country + '</td><td>' + teams[i].acronym + '</td></tr>';
    };
    
    const tableHeaders = '<tr><th>ID</th><th>Team</th><th>Country</th><th>Acronym</th></tr>';
    return tableHeaders + listMarkup;
  }
};