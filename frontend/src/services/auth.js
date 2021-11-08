import axios from 'axios';
import AppConfig from '@/config';
import { successHandler, errorHandler } from './helper';
const { apiBaseUrl } = AppConfig;

export const login = ( credentials ) => {
    const data = ({
      "email": `${credentials.email}`,
      "password": `${credentials.passward}`
    });
    
    const config = {
      method: 'post',
      url: `${apiBaseUrl}/auth/login`,
      headers: { 
        'Content-Type': 'application/json'
       },
      data: data
    };

    return axios(config)
            .then( successHandler )
            .catch( errorHandler );
};

