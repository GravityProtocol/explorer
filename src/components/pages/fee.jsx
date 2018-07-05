import React, { PureComponent, Fragment } from 'react';
import { getFee } from 'utils/api';
import Blank from 'components/blank';
import TransactionBadge from 'components/transaction-badge';
import { formatAmount } from 'utils/format';

class FeePage extends PureComponent {
  constructor() {
    super();

    this.state = {
      loaded: false,
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    getFee()
      .then((data) => {
        this.setState({
          data,
          loaded: true,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="panel">
            {this.state.loaded ? (
              <Fragment>
                <h2>Commissions</h2>
                <div className="table-wrapper">
                  <table className="table table_responsive table_fee table_rounted-bottom-corners">
                    <thead className="table__head">
                      <tr className="table__row">
                        <th className="table__cell table__cell_operation">Operation</th>
                        <th className="table__cell table__cell_standard-fee">Standard Fee</th>
                        <th className="table__cell table__cell_lifetime-member-fee">Lifetime Member Fee</th>
                        <th className="table__cell table__cell_price-per-kb">Price per KB</th>
                      </tr>
                    </thead>
                    <tbody className="table__body">
                      {this.state.data.map((item, index) => (
                        <tr className="table__row" key={index}>
                          <td className="table__cell table__cell_operation" data-title="Operation">
                            <TransactionBadge op={item[0]} />
                          </td>
                          <td className="table__cell table__cell_standard-fee" data-title="Standard Fee">
                            {item[1].fee && formatAmount(item[1].fee)}
                          </td>
                          <td className="table__cell table__cell_lifetime-member-fee" data-title="Lifetime Member Fee">
                            {item[1].fee && formatAmount(item[1].premium_fee)}
                          </td>
                          <td className="table__cell table__cell_price-per-kb" data-title="Price per KB">
                            {item[1].fee && formatAmount(item[1].price_per_kbyte)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Fragment>
            ) : (
              <Blank type="article" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FeePage;
