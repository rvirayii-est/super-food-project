import axios from 'axios';

export default axios.create({
  baseURL: window.location.protocol + "//" + window.location.hostname + ":5000/api/",
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
});