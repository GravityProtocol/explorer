import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Blank = props => (
  <div
    className={classNames(
      'blank',
      props.type ? `blank_${props.type}` : false,
    )}
  >
    <div className="blank__block blank__block_title" />
    <div className="blank__block blank__block_row" />
  </div>
);

Blank.propTypes = {
  type: PropTypes.string,
};

Blank.defaultProps = {
  type: undefined,
};

export default Blank;
