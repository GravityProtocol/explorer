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
            <table>
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
                  <td>1.2.0</td>
                  <td><Link to="/accounts/test">committee-account</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.6</td>
                  <td><Link to="/accounts/test">init0</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.7</td>
                  <td><Link to="/accounts/test">init1</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><Link to="/accounts/test">init2</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><Link to="/accounts/test">init3</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><Link to="/accounts/test">init4</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0.005</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><Link to="/accounts/test">init4</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0.005</td>
                  <td>0 <i>ZVG</i></td>
                </tr>
                <tr>
                  <td>1.2.0</td>
                  <td><Link to="/accounts/test">init4</Link></td>
                  <td>0 <i>ZVG</i></td>
                  <td>0.005</td>
                  <td>0 <i>ZVG</i></td>
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
