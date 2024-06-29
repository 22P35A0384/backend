import Editimg from '../controllers/editimg.js';
import express from 'express';
const Router = express.Router();

Router.post('/editimg',Editimg);

export default Router;