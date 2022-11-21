/* eslint-disable no-console */
/* eslint-disable no-undef */
import axios from 'axios';

const httpReq = (paramObj, url) => axios.create({
  baseURL: url,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  params: { ...paramObj },
});

export default httpReq;
