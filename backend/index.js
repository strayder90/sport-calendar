import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json({ status_code: 200, status_message: 'Success!' });
});

app.listen(8080, err => {
	if (err) throw err;
	console.log('Server is running...');
});
