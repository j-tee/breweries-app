import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brewery = ({
  name, city,
}) => (
  <Link className="links" to={`/station-details/${name}`}>
    <div className="station fill">
      <span className="name-title">{name}</span>
      <span className="sub-title">{city}</span>
    </div>
  </Link>
);

Brewery.propTypes = {
  // station: PropTypes.shape.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  // triplet: PropTypes.string.isRequired,
  // wind: PropTypes.bool.isRequired,
};
export default Brewery;
