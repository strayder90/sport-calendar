import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'sport_calendar',
});

export class EventTable {

   createEventTable = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'CREATE TABLE `event` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NULL, sport_id INT NULL, `team_home_id` INT NULL, `team_away_id` INT NULL, `date_time` DATETIME NOT NULL, INDEX index_team_one (team_home_id), CONSTRAINT fk_team_home FOREIGN KEY (team_home_id) REFERENCES team(id), INDEX index_team_two (team_away_id), CONSTRAINT fk_team_away FOREIGN KEY (team_away_id) REFERENCES team(id), INDEX index_sport (sport_id), CONSTRAINT fk_sport FOREIGN KEY (sport_id) REFERENCES sport(id), PRIMARY KEY (`id`));',
        error => {
          if (error) {
            throw error;
          }
          console.log('Event table created!');
        }
      );
    });
  };
  
   insertIntoEventTable = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'INSERT INTO event (id, name, sport_id, team_home_id, team_away_id, date_time) VALUES (?, ?, ?, ?, ?, ?)', [null, 'Premiere Leauge', 3, 2, 3, '2022-02-04 11:23:54'],
        error => {
          if (error) {
            throw error;
          }
          console.log('Inserted into team table.');
        }
      );
    });
  }
  
  dropTableEvent = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'DROP TABLE event',
        error => {
          if (error) {
            throw error;
          }
          console.log('Deleted event table.');
        }
      );
    });
  }
};