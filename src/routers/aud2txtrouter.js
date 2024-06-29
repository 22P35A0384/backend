import Aud2txt from '../controllers/aud2txt.js';
import express from 'express';
const Router = express.Router();

Router.post('/aud2txt',Aud2txt);

export default Router;