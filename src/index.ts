import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { checkerRoutes } from './presentaion/routes/checker.routes';
import { filesRoutes } from './presentaion/routes/files.routes';

dotenv.config();

const app = express();
const prefix = '/api/v1';
const port = process.env.PORT || '3332';
const parseJson = bodyParser.json({ limit: '150mb' });
const parseUrlencoded = bodyParser.urlencoded({ limit: '150mb', extended: true, parameterLimit: 5000000 });
const setCors = cors();

app.use(parseJson);
app.use(parseUrlencoded);
app.use(setCors);
app.use(prefix, checkerRoutes);
app.use(prefix, filesRoutes);
app.listen(port, () => console.log(`running at ${port}`));
