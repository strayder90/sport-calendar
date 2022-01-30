import mysql from 'mysql2';

export const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'sport_calendar',
});

const createDatabase = () => {
	connection.connect(err => {
		if (err) throw err;
		console.log('Connected!');
		connection.query('CREATE DATABASE sport_calendar', (err, result) => {
			if (err) throw err;
			console.log('Database created');
		});
	});
};

const createSportTable = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'CREATE TABLE `sport` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NULL, PRIMARY KEY (`id`));',
			(err, result) => {
				if (err) throw err;
				console.log('Table sport created!');
			}
		);
	});
};

const insertIntoSportTable = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'INSERT INTO sport (id, name) VALUES (?, ?)', [null, 'Football'],
			(err, result) => {
				if (err) throw err;
				console.log('Inserted into sport.');
			}
		);
	});
}