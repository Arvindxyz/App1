const axios = require('axios');
import AppConfig from '@/config';
//import store from '@/stores';
import { successHandler, errorHandler } from './helper';

const { apiBaseUrl } = AppConfig;
const config = {
  method: 'get',
  url: `${apiBaseUrl}/response`,
  /*headers: { 
    'Authorization': `${store.state.auth.token}`
  }*/
};

export const getResponses= async ()=>{
  return await axios(config)
      .then(successHandler)
      .catch(errorHandler); 
}
