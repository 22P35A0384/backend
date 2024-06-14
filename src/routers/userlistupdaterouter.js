import Adduser from '../controllers/userlistupdate';
import express from 'express';
const Router = express.Router();


Router.post('/updateuserlist',Adduser);

export default Router;