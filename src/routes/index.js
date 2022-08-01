import express from 'express';
import dataRoutes from './api/dataRoutes.js';

const routes = express.Router();

routes.use('/data', dataRoutes);

export default routes;
