import mysql from 'mysql2';

export const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'test',
	database: 'sport_calendar',
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

const createSportTable = () => {
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
				console.log('Table sport created!');
			}
		);
	});
};

const insertIntoSportTable = () => {
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

const deleteSportTableData = () => {
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

const createTeamTable = () => {
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
				console.log('Table team created!');
			}
		);
	});
};

const insertIntoTeamTable = () => {
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

const deleteTeamTableData = () => {
	connection.connect(error => {
		if (error) {
      throw error;
    }
		connection.query(
			'TRUNCATE team',
			error => {
				if (error) {
          throw error;
        }
				console.log('Deleted from team table.');
			}
		);
	});
}

const dropTable = () => {
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
				console.log('Deleted sport table.');
			}
		);
	});
}

console.log('Initializing database...')
createDatabase();
createSportTable();
insertIntoSportTable();
createTeamTable();
insertIntoTeamTable();
