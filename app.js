import express from "express";
import http from "http"; // Import the 'http' module
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import Getimgapp from './src/routers/getimgrouter.js';
import Getdatabyrollnoapp from './src/routers/getdatabyrollnorouter.js';
import Sendotptomailapp from './src/routers/sendotptomailrouter.js';
import Addnewuserapp from './src/routers/addnewuserrouter.js';
import Getloginapp from './src/routers/getloginrouter.js';
import Checkmailapp from './src/routers/checkmailrouter.js';
import Forgotpassapp from './src/routers/forgotpassrouter.js';
import Updatepassapp from './src/routers/updatepassrouter.js';
import Getdatabymailapp from './src/routers/getdatabymailrouter.js';
import Getprofileapp from './src/routers/getprofilerouter.js';
import Editdataapp from './src/routers/editdatarouter.js';
import Editdataimgapp from './src/routers/editdataimgrouter.js';
import Changepassapp from './src/routers/changepassrouter.js';
import Deleteuserapp from './src/routers/deleteaccrouter.js';
import Sendpdfapp from './src/routers/sendpdfrouter.js';
import Putstudentstatusapp from './src/routers/putstudentstatusrouter.js';
import Paymentsapp from './src/routers/payments.js';
import Resultapp from './src/routers/resultrouter.js';
import Adityaloginsapp from './src/routers/adityaloginsrouter.js';
import Chatbotapp from './src/routers/chatbotrouter.js';
import Spotlightapp from './src/routers/spotlightrouter.js';
import Adityaimgapp from './src/routers/adityaphotosrouter.js';
import Adityastdapp from './src/routers/adityastdrouter.js';
import Searchstdapp from './src/routers/searchstdrouter.js';
import Userlistapp from './src/routers/userlistrouter.js';
import Userlistupdateapp from './src/routers/userlistupdaterouter.js';
import Removeuserapp from './src/routers/removeuserrouter.js';
import Historyapp from './src/routers/historyrouter.js';
import ImgGenerationapp from './src/routers/replicaterouter.js';
import Txt2imgapp from './src/routers/txt2imgrouter.js';
import Txt2vidapp from './src/routers/txt2vidrouter.js';
import Txt2audapp from './src/routers/txt2audrouter.js';
import Prmt2audapp from './src/routers/prmt2audrouter.js';
import Adu2txtapp from './src/routers/aud2txtrouter.js';
import Img2textapp from './src/routers/img2textrouter.js';
import Editimgapp from './src/routers/editimgrouter.js';
import Getuserlistapp from './src/routers/senduserlistrouter.js';

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())
mongoose.connect("mongodb+srv://gangadharjami:Xyd11TsTf0GfkNLu@cluster0.egjdqci.mongodb.net/cluster0?retryWrites=true&w=majority")
    .then(() => {
        // Create HTTP server using 'http.createServer'
        const server = http.createServer(app);
        
        // Specify the port and hostname for the server to listen on
        const port = process.env.PORT || 5000;
        const hostname = '0.0.0.0';

        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
            console.log('Database Connected && Server Started Successfully!! :)');
        });
    })
    .catch((err) => console.log(err));

// Frontend Is Yours, But Backend Was Not, It Was Mine If You Touch It Then It Will Hurt You Very Hard, A Sweet Warning For Next Developer.... :) @Gangadhar Jami

// Don't Touch (Actual Production Code..!!!) <Serious Warning For Every One, Including You Also....!!>
app.use('/',Getimgapp);
app.use('/',Getdatabyrollnoapp);
app.use('/',Sendotptomailapp);
app.use('/',Addnewuserapp);
app.use('/',Getloginapp);
app.use('/',Checkmailapp);
app.use('/',Forgotpassapp);
app.use('/',Updatepassapp); 
app.use('/',Getdatabymailapp);
app.use('/',Getprofileapp);
app.use('/',Editdataapp);
app.use('/',Editdataimgapp);
app.use('/',Changepassapp);
app.use('/',Deleteuserapp);
app.use('/',Sendpdfapp);
app.use('/',Putstudentstatusapp);
app.use('/api/payment/',Paymentsapp);
app.use('/',Resultapp);
app.use('/',Adityaloginsapp);
app.use('/',Chatbotapp);
app.use('/',Spotlightapp);
app.use('/',Adityaimgapp);
app.use('/',Adityastdapp);
app.use('/',Searchstdapp);
app.use('/',Userlistapp);
app.use('/',Userlistupdateapp);
app.use('/',Removeuserapp);
app.use('/',Historyapp);
app.use('/',ImgGenerationapp);
app.use('/',Txt2imgapp);
app.use('/',Txt2vidapp);
app.use('/',Txt2audapp);
app.use('/',Prmt2audapp);
app.use('/',Adu2txtapp);
app.use('/',Img2textapp);
app.use('/',Editimgapp);
app.use('/',Getuserlistapp);

// Testing Space...... (After Sucessfully Tested Then Put The Code To Controllers And Routers, Finally Import In The Actual Production Code)

app.get('/testing',(req,res,next)=>{
    return res.status(200).json({msg:'testing'})
})
