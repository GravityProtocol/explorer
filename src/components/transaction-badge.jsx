import PropTypes from 'prop-types';
import React from 'react';
import { getTrnxType } from 'utils/transaction';

const TransactionBadge = (props) => {
  const transactionInfo = getTrnxType(props.op);

  return (
    <span
      className="badge"
      style={{ backgroundColor: transactionInfo.color }}
    >
      {transactionInfo.name}
    </span>
  );
};

TransactionBadge.propTypes = {
  op: PropTypes.number.isRequired,
};

export default TransactionBadge;
