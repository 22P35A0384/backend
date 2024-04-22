import {promisify} from 'util'
import request from 'request'

const Spotlight=async(req,res,next)=>{
    // console.log(process.env.AWS_SECRET_ACCESS_KEY)
    try {
            const email = req.body.email
            console.log(email)
            const api_url = 'https://dev.technicalhub.io/codemind/api/thub_app/anniversary_api.php';
            const apiParams = {
              Action: 'Details',
              Email: email,
            };
    
            try {
              const response = await promisify(request.post)({
                url: api_url,
                json: apiParams,
                rejectUnauthorized: false,
              });
    
              if (response.statusCode === 200) {
                console.log('200')
                return res.json(response.body);
              } else {
                console.log('API request failed with status code')
                return res.status(500).json({ error: `API request failed with status code ${response.statusCode}` });
              }
            } catch (error) {
                console.log(`An error occurred: ${error.message}`)
              return res.status(500).json({ error: `An error occurred: ${error.message}` });
            }
      } catch (error) {
        return res.status(500).send(`Error capturing and saving image: ${error.message}`);
      }
}

export default Spotlight;