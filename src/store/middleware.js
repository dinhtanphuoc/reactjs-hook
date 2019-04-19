import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

export const apiClients = {
  default: {
    client: axios.create({
      baseURL: 'http://locahost:8080',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      },
      transformRequest: [(data, headers) => {
        return decamelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
      }],
      responseType: 'json',
      responseEncoding: 'utf8',
      transformResponse: [(data) => {
        return camelizeKeys(typeof data !== 'object' ? JSON.parse(data) : data);
      }]
    })
  }
};

export const apiMiddlewareConfig = {
  interceptors: {
    request: [
      function use(config) {
        return config;
      }, (error) => {
        return Promise.reject(error);
      }
    ],

    response: [
      function use(response) {
        return response;
      }, (error) => {
        return Promise.reject(error);
      }
    ]
  }
};
