import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'sport_calendar',
});

export class SportTable {

   createSportTable = () => {
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
  
   insertIntoSportTable = () => {
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
  
   deleteSportTableData = () => {
    connection.connect(error => {
      if (error) {
        throw error;
      }
      connection.query(
        'TRUNCATE sport',
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