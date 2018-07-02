import moment from 'moment';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { getBlock } from '../../utils/api';
import getTransactionInfo from '../../utils/transaction-info';

class Item extends PureComponent {
  constructor() {
    super();

    this.state = {
      date: null,
    };
  }

  componentDidMount() {
    getBlock(this.props.blockNum)
      .then((data) => {
        this.setState({
          date: moment(data.timestamp).format('DD.MM.YYYY HH:mm'),
        });
      });
  }

  render() {
    const transactionInfo = getTransactionInfo(this.props.op);

    return (
      <tr className="table__row">
        <td className="table__cell table__cell_operation" data-title="Operation">
          <Link to={`/block/${this.props.blockNum}/${this.props.id}`}>{this.props.id}</Link>
        </td>
        <td className="table__cell table__cell_timestamp" data-title="Timestamp"><i>{this.state.date}</i></td>
        <td className="table__cell table__cell_block" data-title="Block">
          <Link to={`/block/${this.props.blockNum}`}>{this.props.blockNum}</Link>
        </td>
        <td className="table__cell table__cell_type" data-title="Type">
          <span
            className="badge"
            style={{ backgroundColor: transactionInfo.color }}
          >
            {transactionInfo.name}
          </span>
        </td>
      </tr>
    );
  }
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  blockNum: PropTypes.number.isRequired,
  op: PropTypes.number.isRequired,
};

export default Item;
