import PropTypes from 'prop-types';

function Films({ Title, Year, Rated, Genre, Plot}) {
  return (
    <div>
      <p>
        {`Title: ${Title}`}
      </p>
      <p>
        {`Year: ${Year}`}
      </p>
      <p>
        {`Rated: ${Rated}`}
      </p>
      <p>
        {`Genre: ${Genre}`}
      </p>
      <p>
        {`Plot: ${Plot}`}
      </p>
    </div>
  );
}

export default Films;

Films.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.number.isRequired,
  Rated: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
};