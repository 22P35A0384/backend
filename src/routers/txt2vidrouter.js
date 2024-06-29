import Txt2vid from '../controllers/txt2vid.js';
import express from 'express';
const Router = express.Router();

Router.post('/txt2vid',Txt2vid);

export default Router;