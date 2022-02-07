import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'sport_calendar',
});

export class SportTable {

   createTable = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'CREATE TABLE `sport` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NULL, PRIMARY KEY (`id`));',
        error => {
          if (error) {
            throw error;
          }
          console.log('Sport table created!');
        }
      );
    });
  };
  
   insertIntoTable = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'INSERT INTO sport (id, name) VALUES (?, ?)', [null, 'Football'],
        error => {
          if (error) {
            throw error;
          }
          console.log('Inserted into sport table.');
        }
      );
    });
  }
  
   dropTableSport = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'DROP TABLE sport',
        error => {
          if (error) {
            throw error;
          }
          console.log('Deleted from sport table.');
        }
      );
    });
  }
};