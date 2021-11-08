import axios from 'axios';
import AppConfig from '@/config';
//import store from '@/stores';
import { successHandler, errorHandler } from './helper';

const { apiBaseUrl } = AppConfig;
const addForm = async( form ) => {
    console.log('addform service:',form);
    const config = {
        method: 'post',
        url: `${apiBaseUrl}/forms`,
      headers: { 
        'Content-Type': 'application/json'
       },
      data: {
        name: `${form.name}`,
        formbody:`${form.formbody}`
      }
    };
    return await axios(config)
    .then( successHandler )
    .catch( errorHandler );
}
/*
const addForm = async ( completeFormDetails ) => {
  const response= await axios.post(
      `${apiBaseUrl}/forms`,
      completeFormDetails,
      {
          headers: {
              'Content-Type': 'application/json'
          }
      }
  );
  return response.data;
};
*/

export { addForm};