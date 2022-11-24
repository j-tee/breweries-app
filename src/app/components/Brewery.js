import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brewery = ({
  name, city, longitude, latitude,
}) => (
  <Link className="links" to={`/station-details/${name}`}>
    <div className="station fill">
      <span className="name-title">{name}</span>
      <span className="sub-title">{city}</span>
      <span className="geo">
        lng:
        {' '}
        {longitude}
      </span>
      <span className="geo">
        lat:
        {' '}
        {latitude}
      </span>
    </div>
  </Link>
);

Brewery.propTypes = {
  // station: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  // triplet: PropTypes.string.isRequired,
  // wind: PropTypes.bool.isRequired,
};
export default Brewery;
