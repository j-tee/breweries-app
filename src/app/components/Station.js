import PropTypes from 'prop-types';

const Station = ({
  name, timezone, triplet, wind,
}) => (
  <div className="station">
    {name}
    {timezone}
    {triplet}
    {wind}
  </div>
);

Station.propTypes = {
  name: PropTypes.string.isRequired,
  timezone: PropTypes.number.isRequired,
  triplet: PropTypes.string.isRequired,
  wind: PropTypes.bool.isRequired,
};
export default Station;
