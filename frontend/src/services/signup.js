import axios from 'axios';
import AppConfig from '@/config';
import { successHandler, errorHandler } from './helper';
const { apiBaseUrl } = AppConfig;

export const register = ( newUserCredentials ) => {
    const data = ({
      "name": `${newUserCredentials.name}`,
      "email": `${newUserCredentials.email}`,
      "password": `${newUserCredentials.passward}`
    });
    
    const config = {
      method: 'post',
      url: `${apiBaseUrl}/auth/register`,
      headers: { 
        'Content-Type': 'application/json'
       },
      data: data
    };

    return axios(config)
            .then( successHandler )
            .catch( errorHandler );
};

