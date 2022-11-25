/* eslint-disable react/jsx-key */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreweries } from '../redux/brewery/brewerySlice';
import Brewery from './Brewery';

const baseUrl = 'https://api.openbrewerydb.org/breweries';
const paramObj = {};
const dataObj = {
  dataParams: paramObj,
  apiUrl: baseUrl,
  limit: 10,
};

const Home = () => {
  const breweries = useSelector((state) => state.breweries.breweries);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!breweries.length) dispatch(getBreweries(dataObj));
    // eslint-disable-next-line
      }, []);
  return (
    <>
      <div className="title-text">
        <p>List of Breweries in The USA</p>
      </div>
      <div className="wrapper">
        {breweries.map((item) => (
          <div className="box" key={item.id}>
            <Brewery
              name={item.name}
              city={item.city}
              longitude={item.longitude}
              latitude={item.latitude}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
