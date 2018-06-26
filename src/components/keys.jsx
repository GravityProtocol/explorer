import React from 'react';
import IconKey from './icons/key';
import IconUser from './icons/user';

function Keys() {
  return (
    <div>
      <h2>Keys</h2>
      <h3>Owner</h3>
      <p>
        <span className="item">
          <span className="item__icon">
            <IconKey />
          </span>
          <span className="item__text">
            <span className="key">ZGV8Lv21iazLNHdJnDJ3cpEjmDU5QbkSYvgeyY4L2PNMkCxZYkgci</span>
          </span>
        </span>
      </p>
      <h3>Active</h3>
      <p>
        <span className="item">
          <span className="item__icon">
            <IconUser />
          </span>
          <span className="item__text">
            <a href="/">poloniexwallet</a>
          </span>
        </span>
      </p>
      <p>
        <span className="item">
          <span className="item__icon">
            <IconKey />
          </span>
          <span className="item__text">
            <span className="key">ZGV5PZZczAwoitPk28qtwxAeLWaBoCPQEQA7hLgYnATPUqRe</span>
          </span>
        </span>
      </p>
      <p>
        <span className="item">
          <span className="item__icon">
            <IconKey />
          </span>
          <span className="item__text">
            <span className="key">ZGVa2fc2420262f081d0f6426364301ef40597756e1fd813e</span>
          </span>
        </span>
      </p>
    </div>
  );
}

export default Keys;
