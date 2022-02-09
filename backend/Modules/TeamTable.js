export class TeamTable {
  constructor(connection) {
    this.connection = connection;
  }

   createTable = () => {
    this.connection.connect(error => {
      if (error) {
        throw error;
      }
      this.connection.query(
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
  
   insertIntoTable = () => {
    this.connection.connect(error => {
      if (error) {
        throw error;
      }
      this.connection.query(
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
    this.connection.connect(error => {
      if (error) {
        throw error;
      }
      this.connection.query(
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