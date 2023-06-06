require('dotenv').config({path: `${__dirname}/.env`});

const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;


const authRoutes = require('./Routes/auth.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/api/auth', authRoutes);

const mongostring = process.env.MONGO_URL;
mongoose.set('strictQuery', true);
mongoose
	.connect(mongostring)
	.then(() => {
		console.log("Connected to mongoDB!");
		app.listen(port, () => {
			console.log("Server is up and running on http://localhost:" + port);
		});
	})
	.catch((err) => {
		console.log(err);
	});

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || "An unknown error occurred!" });
});

