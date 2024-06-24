import History from "../controllers/history";
import express from 'express';
const Router = express.Router();

Router.post('/history',History);

export default Router;