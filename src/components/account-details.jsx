import React from 'react';
import IconKey from './icons/key';
import IconUser from './icons/user';

function AccountDetails() {
  return (
    <div className="container">
      <div className="section">
        <div className="grid">
          <div className="grid__item">
            <div className="panel">
              <h2>Keys</h2>
              <h3>Owner</h3>
              <p>
                <span className="item">
                  <span className="item__icon">
                    <IconKey />
                  </span>
                  <span className="item__text">
                    ZGV8Lv21iazLNHdJnDJ3cpEjmDU5QbkSYvgeyY4L2PNMkCxZYkgci
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
                    ZGV5PZZczAwoitPk28qtwxAeLWaBoCPQEQA7hLgYnATPUqRe
                  </span>
                </span>
              </p>
              <p>
                <span className="item">
                  <span className="item__icon">
                    <IconKey />
                  </span>
                  <span className="item__text">
                    ZGVa2fc2420262f081d0f6426364301ef40597756e1fd813e
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="grid__item">
            <div className="panel">
              <h2>Account Information</h2>
              <div className="table-wrapper">
                <table>
                  <tbody>
                    <tr>
                      <td><i>Lifetime Fees Paid</i></td>
                      <td>4 634 310,89304 <i>ZGV</i></td>
                    </tr>
                    <tr>
                      <td><i>Most Recent Operation</i></td>
                      <td>2.9.23374</td>
                    </tr>
                    <tr>
                      <td><i>Referrer</i></td>
                      <td><a href="/">karma</a></td>
                    </tr>
                    <tr>
                      <td><i>Registrar</i></td>
                      <td><a href="/">karma-faucet</a></td>
                    </tr>
                    <tr>
                      <td><i>Total Core in Orders</i></td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><i>Total Operations</i></td>
                      <td>2750</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetails;
