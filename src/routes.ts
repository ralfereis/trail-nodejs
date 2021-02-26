import { Router } from 'express';
import SurveysController from './controllers/SurveysController';
import SendMailController from './controllers/SendMailController';
import UsersController from './controllers/UsersController';
import AnswersController from './controllers/AnswersController';
import NpsController from './controllers/NpsController';

const routes =  Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

const sendMailController = new SendMailController();

const answerController = new AnswersController();

const npsController = new NpsController();

routes.post('/users', usersController.create);

routes.post('/surveys', surveysController.create);
routes.get('/surveys', surveysController.show);

routes.post('/sendMail', sendMailController.execute);

routes.get('/answers/:value', answerController.execute);

routes.get('/nps/:survey_id', npsController.execute);

export default routes; 