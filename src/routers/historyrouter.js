import History from "../controllers/history.js";
import express from 'express';
const Router = express.Router();

Router.post('/history',History);

export default Router;