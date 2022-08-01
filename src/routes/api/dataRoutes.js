import express from 'express';
import { DataController } from '../../controllers/dataController.js';
import { authenticate } from '../../middlewares/authenticate.js';

const route = express.Router();

const dataControllers = new DataController();

// route.post('/', authenticate, dataControllers.getAllDatas);
route.get('/',authenticate, dataControllers.getAllDatas);

export default route;
