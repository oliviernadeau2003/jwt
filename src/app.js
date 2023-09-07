import express from 'express';
import database from './core/database.js';
import rateLimit from 'express-rate-limit';

import limitRoute from './routes/limits.routes.js'

const app = express();

database();

app.use(limitRoute);

export default app;