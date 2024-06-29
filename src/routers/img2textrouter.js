import Img2text from '../controllers/img2text.js';
import express from 'express';
const Router = express.Router();

Router.post('/img2text',Img2text);

export default Router;