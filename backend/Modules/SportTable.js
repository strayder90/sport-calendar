export class SportTable {
  constructor(connection) {
    this.connection = connection;
  }

   createTable = () => {
    this.connection.connect(error => {
      if (error) {
        throw error;
      }
      this.connection.query(
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
    this.connection.connect(error => {
      if (error) {
        throw error;
      }
      this.connection.query(
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
    this.connection.connect(error => {
      if (error) {
        throw error;
      }
      this.connection.query(
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