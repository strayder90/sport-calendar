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
				console.log('Deleted team table.');
			}
		);
	});
}

const createEventTable = () => {
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
				console.log('Table team created!');
			}
		);
	});
};

const insertIntoEventTable = () => {
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
				console.log('Deleted event table.');
			}
		);
	});
}

console.log('Initializing database...')
//createDatabase();
//createSportTable();
//insertIntoSportTable();
//createTeamTable();
//insertIntoTeamTable();
//createEventTable();
//insertIntoEventTable();
//dropTable()