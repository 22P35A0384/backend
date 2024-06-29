import Txt2aud from '../controllers/txt2aud.js';
import express from 'express';
const Router = express.Router();

Router.post('/txt2aud',Txt2aud);

export default Router;