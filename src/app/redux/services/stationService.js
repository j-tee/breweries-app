/* eslint-disable no-console */
import httpReq from '../http-common';

const getAllStations = (paramObj, url) => httpReq(paramObj, url).get();
const LogHttp = (paramObj = { }, url) => (console.log(httpReq(paramObj, url).getUri(), 'Checking url'));

const StationService = {
  LogHttp,
  getAllStations,
};

export default StationService;
