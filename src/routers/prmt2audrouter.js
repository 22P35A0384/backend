import Prmt2aud from '../controllers/prmt2aud.js';
import express from 'express';
const Router = express.Router();

Router.post('/prmt2aud',Prmt2aud);

export default Router;