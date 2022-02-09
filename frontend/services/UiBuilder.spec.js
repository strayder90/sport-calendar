import { UiBuilder } from './UiBuilder';

describe('UiBuilder', () => {
  const uiBuilder = new UiBuilder();

  it('should create sport table', () => {
    //Arange
    const sports = [{id: 1, name: 'test'}];

    //Act
    const expectedHtmlTable = uiBuilder.createHtmlSportTable(sports);

    //Assert
    const actualHtmlTable = '<tr><th>ID</th><th>Name</th></tr><tr><td>1</td><td>test</td></tr>';
    expect(actualHtmlTable).toEqual(expectedHtmlTable);
  })

  it('should create team table', () => {
    //Arange
    const team = [{id: 1, name: 'test', country: 'test', acronym: 'test'}];

    //Act
    const expectedHtmlTable = uiBuilder.createHtmlTeamTable(team);

    //Assert
    const actualHtmlTable = '<tr><th>ID</th><th>Team</th><th>Country</th><th>Acronym</th></tr><tr><td>1</td><td>test</td><td>test</td><td>test</td></tr>';
    expect(actualHtmlTable).toEqual(expectedHtmlTable);
  })

  it('should create event table', () => {
    //Arange
    const event = [{event_id: 1, event_name: 'test', sport_name: 'test', team_home_name: 'test', team_away_name: 'test', date_time: 'test'}];

    //Act
    const expectedHtmlTable = uiBuilder.createHtmlEventTable(event);

    //Assert
    const actualHtmlTable = '<tr><th>ID</th><th>Name</th><th>SPORT CATEGORY</th><th>TEAM HOME</th><th>TEAM AWAY</th><th>DATE AND TIME</th></tr><tr><td>1</td><td>test</td><td>test</td><td>test</td><td>test</td><td>test</td></tr>';
    expect(actualHtmlTable).toEqual(expectedHtmlTable);
  })
});