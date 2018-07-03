import PropTypes from 'prop-types';
import React from 'react';

const BlockHeader = props => (
  <div className="header-info">
    <div className="header-info__header">
      <h1 className="header-info__title"><span className="key">{props.value}</span></h1>
    </div>
    <div className="header-info__footer">{props.title}</div>
  </div>
);

BlockHeader.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlockHeader;
