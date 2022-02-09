import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test'
});

const createDatabase = () => {
	connection.connect(error => {
		if (error) {
      throw error;
    } else {
      connection.query('CREATE DATABASE sport_calendar', error => {
        if (error) {
          throw error;
        }
        console.log('Database created');
      });
    }
	});
};

createDatabase();