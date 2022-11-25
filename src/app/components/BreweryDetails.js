/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BreweryDetails = () => {
  const breweries = useSelector((state) => state.breweries.breweries);
  const { name } = useParams();
  const brewery = [...breweries].find((s) => s.name === name);
  return (
    <div className="location">
      <div className="fill fill-title">
        <h1>{name}</h1>
        <p>{brewery.brewery_type}</p>
      </div>
      <div className="fill">
        <span>City</span>
        <span>{brewery.city}</span>
      </div>
      <div className="fill">
        <span>country </span>
        <span>{brewery.country}</span>
      </div>
      <div className="fill">
        <span>state </span>
        <span>{brewery.state}</span>
      </div>
      <div className="fill">
        <span>phone </span>
        <span>{brewery.phone}</span>
      </div>
    </div>
  );
};

export default BreweryDetails;
