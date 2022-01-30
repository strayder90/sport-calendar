import mysql from 'mysql2';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
});

const createDatabase = () => {
	connection.connect(function (err) {
		if (err) throw err;
		console.log('Connected!');
		connection.query('CREATE DATABASE sport_calendar', function (err, result) {
			if (err) throw err;
			console.log('Database created');
		});
	});
};
