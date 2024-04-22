import SearchStd from "../controllers/searchstd.js";
import express from 'express';
const Router = express.Router()

Router.get('/searchstd/:name',SearchStd);

export default Router;