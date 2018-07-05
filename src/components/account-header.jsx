import PropTypes from 'prop-types';
import React from 'react';

function AccountHeader(props) {
  return (
    <div className="header-info">
      <div className="header-info__header">
        <div className="inline inline_md">
          <div className="inline__item">
            <h1 className="header-info__title">{props.name}</h1>
          </div>
          <div className="inline__item">
            <span className="badge badge_extragray">
              {props.id === props.lifetimeReferrer ? 'Lifetime Member' : 'Free Member'}
            </span>
          </div>
        </div>
      </div>
      <div className="header-info__footer">
        ID: {props.id}
      </div>
    </div>
  );
}

AccountHeader.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  lifetimeReferrer: PropTypes.string.isRequired,
};

export default AccountHeader;
