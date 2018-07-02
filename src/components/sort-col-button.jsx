import PropTypes from 'prop-types';
import React from 'react';
import IconSort from './icons/sort';
import IconSortFlip from './icons/sort-flip';

const SortColButton = props => (
  <button
    className="blank-button"
    onClick={() => typeof props.onClick === 'function' && props.onClick()}
  >
    <span className="inline inline_nowrap">
      <span className="inline__item">{props.title}</span>
      {props.isSorted && (
        <span className="inline__item">
          {props.orderIsAsc ? <IconSort /> : <IconSortFlip />}
        </span>
      )}
    </span>
  </button>
);

SortColButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  isSorted: PropTypes.bool,
  orderIsAsc: PropTypes.bool,
};

SortColButton.defaultProps = {
  onClick: undefined,
  isSorted: false,
  orderIsAsc: false,
};

export default SortColButton;
