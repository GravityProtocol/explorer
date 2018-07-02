import PropTypes from 'prop-types';
import React from 'react';
import IconKey from './icons/key';

const Keys = props => (
  <div>
    <h2>Keys</h2>

    {!props.signingKey && !props.ownerKeys.length && !props.activeKeys.length && (
      <p><i>Empty</i></p>
    )}

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

    {props.ownerKeys.length > 0 && (
      <div>
        <h3>Owner</h3>
        {props.ownerKeys.length ? (
          <div>
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
        ) : (
          <p><i>N/A</i></p>
        )}
      </div>
    )}

    {props.activeKeys.length > 0 && (
      <div>
        <h3>Active</h3>
        {props.activeKeys.length ? (
          <div>
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
        ) : (
          <p><i>N/A</i></p>
        )}
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
  ownerKeys: [],
  activeKeys: [],
};

export default Keys;
