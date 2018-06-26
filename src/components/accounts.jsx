import { Link } from 'react-router-dom';
import React from 'react';
import IconSort from './icons/sort';
import IconSortFlip from './icons/sort-flip';

function Accounts() {
  return (
    <div className="container">
      <div className="section">
        <div className="panel">
          <h2>Accounts</h2>

          <div className="table-wrapper">
            <table className="table_responsive">
              <thead>
                <tr>
                  <td>
                    <span className="inline">
                      <span className="inline__item">ID</span>
                      <span className="inline__item">
                        <button className="table__sort-button">
                          <IconSort />
                        </button>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="inline">
                      <span className="inline__item">Name</span>
                      <span className="inline__item">
                        <button className="table__sort-button">
                          <IconSortFlip />
                        </button>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="inline">
                      <span className="inline__item">Emission</span>
                      <span className="inline__item">
                        <button className="table__sort-button">
                          <IconSort />
                        </button>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="inline">
                      <span className="inline__item">Gravity Index</span>
                      <span className="inline__item">
                        <button className="table__sort-button">
                          <IconSort />
                        </button>
                      </span>
                    </span>
                  </td>
                  <td>
                    <span className="inline">
                      <span className="inline__item">Amount</span>
                      <span className="inline__item">
                        <button className="table__sort-button">
                          <IconSort />
                        </button>
                      </span>
                    </span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
                <tr>
                  <td data-title="ID">1.2.0</td>
                  <td data-title="Name"><Link to="/accounts/test">committee-account</Link></td>
                  <td data-title="Emission">0&nbsp;<i>ZVG</i></td>
                  <td data-title="Gravity Index">0</td>
                  <td data-title="Amount">0&nbsp;<i>ZVG</i></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section section_center-content">
            <button className="button button_gray">Show more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
