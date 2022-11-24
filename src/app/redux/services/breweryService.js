/* eslint-disable no-console */
import httpReq from '../http-common';

const getAllStations = (url) => httpReq(url).get();
const getLocation = (paramObj, url) => (httpReq(paramObj, url).get());

const BreweryService = {
  getLocation,
  getAllStations,
};

export default BreweryService;
