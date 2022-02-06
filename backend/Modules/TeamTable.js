import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'sport_calendar',
});

export class TeamTable {

   createTeamTable = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'CREATE TABLE `team` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NULL, `country` VARCHAR(45) NULL, `acronym` VARCHAR(45) NULL, PRIMARY KEY (`id`));',
        error => {
          if (error) {
            throw error;
          }
          console.log('Team table created!');
        }
      );
    });
  };
  
   insertIntoTeamTable = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'INSERT INTO team (id, name, country, acronym) VALUES (?, ?, ?, ?)', [null, 'Real Madrid', 'Spain', 'RMD'],
        error => {
          if (error) {
            throw error;
          }
          console.log('Inserted into team table.');
        }
      );
    });
  }
  
  dropTableTeam = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'DROP TABLE team',
        error => {
          if (error) {
            throw error;
          }
          console.log('Deleted from team table.');
        }
      );
    });
  }
};