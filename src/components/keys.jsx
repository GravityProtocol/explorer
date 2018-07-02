import PropTypes from 'prop-types';
import React from 'react';
import IconKey from './icons/key';

const Keys = props => (
  <div>
    <h2>Keys</h2>

    {props.signingKey && (
      <div>
        <h3>Signing</h3>
        <p>
          <span className="item">
            <span className="item__icon">
              <IconKey />
            </span>
            <span className="item__text">
              <span className="key">{props.signingKey}</span>
            </span>
          </span>
        </p>
      </div>
    )}

    {props.ownerKeys && (
      <div>
        <h3>Owner</h3>
        {props.ownerKeys.map(key => (
          <p key={key}>
            <span className="item">
              <span className="item__icon">
                <IconKey />
              </span>
              <span className="item__text">
                <span className="key">{key}</span>
              </span>
            </span>
          </p>
        ))}
      </div>
    )}

    {props.activeKeys && (
      <div>
        <h3>Active</h3>
        {props.activeKeys.map(key => (
          <p key={key}>
            <span className="item">
              <span className="item__icon">
                <IconKey />
              </span>
              <span className="item__text">
                <span className="key">{key}</span>
              </span>
            </span>
          </p>
        ))}
      </div>
    )}
  </div>
);

Keys.propTypes = {
  signingKey: PropTypes.string,
  ownerKeys: PropTypes.arrayOf(PropTypes.string),
  activeKeys: PropTypes.arrayOf(PropTypes.string),
};

Keys.defaultProps = {
  signingKey: undefined,
  ownerKeys: undefined,
  activeKeys: undefined,
};

export default Keys;
