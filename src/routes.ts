import { Router } from 'express';
import SurveysController from './controllers/SurveysController';
import SendMailController from './controllers/SendMailController';
import UsersController from './controllers/UsersController';

const routes =  Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

routes.post('/users', usersController.create);

routes.post('/surveys', surveysController.create);
routes.get('/surveys', surveysController.show);

routes.post('/sendMail', sendMailController.execute)

export default routes; 