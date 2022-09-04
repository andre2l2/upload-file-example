import dotenv from 'dotenv';
import express from 'express';

import { checkerRoutes } from './presentaion/routes/checker.routes';
import { filesRoutes } from './presentaion/routes/files.routes';

dotenv.config();

const app = express();
const encoded = express.urlencoded({ extended: true });
const useJson = express.json();
const prefix = '/api/v1';
const port = process.env.PORT;

app.use(encoded);
app.use(useJson);
app.use(prefix, checkerRoutes);
app.use(prefix, filesRoutes);
app.listen(port);
