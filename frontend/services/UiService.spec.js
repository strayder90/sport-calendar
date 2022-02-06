import { UiService } from './UiService';

describe('UiService', () => {
  const uiService = new UiService();

  it('should create sport table', () => {
    //Arange
    const sports = [{id: 1, name: 'test'}];

    //Act
    const expectedHtmlTable = uiService.createHtmlSportTable(sports);

    //Assert
    const actualHtmlTable = '<tr><th>ID</th><th>Name</th></tr><tr><td>1</td><td>test</td></tr>';
    expect(actualHtmlTable).toEqual(expectedHtmlTable);
  })
});