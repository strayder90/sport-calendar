import mysql from 'mysql2';

export const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'sport_calendar',
});

// CREATE DATABASE
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

// *******************************

// CREATE SPORT TABLE
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

// INSERT DATA INTO SPORT TABLE
const insertIntoSportTable = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'INSERT INTO sport (id, name) VALUES (?, ?)', [null, 'Football'],
			(err, result) => {
				if (err) throw err;
				console.log('Inserted into sport table.');
			}
		);
	});
}

// DELETE DATA FROM SPORT TABLE
const deleteSportTableData = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'TRUNCATE sport',
			(err, result) => {
				if (err) throw err;
				console.log('Deleted from sport table.');
			}
		);
	});
}

// *******************************

//CREATE TEAM TABLE
const createTeamTable = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'CREATE TABLE `team` (`id` INT NOT NULL AUTO_INCREMENT, `team` VARCHAR(45) NULL, `country` VARCHAR(45) NULL, `acronym` VARCHAR(45) NULL, PRIMARY KEY (`id`));',
			(err, result) => {
				if (err) throw err;
				console.log('Table team created!');
			}
		);
	});
};
// INSERT DATA INTO TEAM TABLE
const insertIntoTeamTable = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'INSERT INTO team (id, team, country, acronym) VALUES (?, ?, ?, ?)', [null, 'Real Madrid', 'Spain', 'RMD'],
			(err, result) => {
				if (err) throw err;
				console.log('Inserted into team table.');
			}
		);
	});
}
// DELETE DATA FROM TEAM TABLE
const deleteTeamTableData = () => {
	connection.connect(err => {
		if (err) throw err;
		connection.query(
			'TRUNCATE team',
			(err, result) => {
				if (err) throw err;
				console.log('Deleted from team table.');
			}
		);
	});
}