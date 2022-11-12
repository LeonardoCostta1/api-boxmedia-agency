import express from "express";

import cors from "cors";

import routes from "./routes/index.js";

import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb+srv://Leonardo:Vemqtem2014@boxmedia.rqv9djz.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}); 

app.use('/api',routes)

export default app;
