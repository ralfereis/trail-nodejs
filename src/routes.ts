import { Router } from 'express';
import SurveysController from './controllers/SurveysController';
import UsersController from './controllers/UsersController';

const routes =  Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

routes.post('/users', usersController.create);

routes.post('/surveys', surveysController.create);
routes.get('/surveys', surveysController.show);

export default routes; 