import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv' 

import VisitorsRoutes from './routes/visitorsbook.js';
import AddressRoutes from './routes/addressbook.js';

const app = express();

app.use(bodyParser.json({ limit : "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit : "30mb", extended: true }));
app.use(cors());
dotenv.config()

app.use('/visitorsbook', VisitorsRoutes);
app.use('/addressbook', AddressRoutes);

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
