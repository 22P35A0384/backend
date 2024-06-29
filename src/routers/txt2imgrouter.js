import Txt2img from '../controllers/txt2img.js';
import express from 'express';
const Router = express.Router();

Router.post('/txt2img',Txt2img);

export default Router;