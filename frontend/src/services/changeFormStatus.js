const axios = require('axios');
import AppConfig from '@/config';
//import store from '@/stores';
import { successHandler, errorHandler } from './helper';

const { apiBaseUrl } = AppConfig;

export const changeFormStatus= async (passData)=>{
  const config = {
    method: 'patch',
    url: `${apiBaseUrl}/forms/${passData.id}`,
    /*headers: { 
      'Authorization': `${store.state.auth.token}`
    },*/
    data: passData,
  };
  return await axios(config)
      .then(successHandler)
      .catch(errorHandler); 
}
