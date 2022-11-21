/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStations } from '../redux/stocks/stationSlice';
import Station from './Station';

const baseUrl = 'https://api.powderlin.es/stations';
const paramObj = {};
const dataObj = {
  dataParams: paramObj,
  apiUrl: baseUrl,
  limit: 10,
};

const Home = () => {
  const stations = useSelector((state) => state.stations.stations);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!stations.length) dispatch(getStations(dataObj));
    // eslint-disable-next-line
      }, []);
  return (
    <>
      <div className="wrapper">
        {stations.map((item) => (
          <div className="box" key={item.name}>
            <Station
              name={item.name}
              timezone={item.timezone}
              triplet={item.triplet}
              wind={item.wind}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
