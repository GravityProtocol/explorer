import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import BlockHeader from 'components/block-header';
import { getBlock } from 'utils/api';
import BlockInformation from 'components/block-information';
import Transactions from 'components/transactions';
import Blank from 'components/blank';

class BlockPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      loaded: false,
      block: {},
    };
  }

  componentDidMount() {
    this.getData(this.props.match.params.num);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.num !== nextProps.match.params.num) {
      this.getData(nextProps.match.params.num);
    }
  }

  getData(blockNum) {
    this.setState({
      loaded: false,
    });

    getBlock(blockNum)
      .then((block) => {
        this.setState({
          block,
          loaded: true,
        });
      });
  }

  render() {
    return (
      <Fragment>
        <div className="toolbar">
          <div className="container">
            <div className="toolbar__inner">
              {this.state.loaded ? (
                <BlockHeader
                  title="Block ID"
                  value={this.props.match.params.num}
                />
              ) : (
                <Blank type="header" />
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="panel panel_hidden">
              {this.state.loaded ? (
                <BlockInformation
                  previous={this.state.block.previous}
                  timestamp={this.state.block.timestamp}
                  transactionMerkleRoot={this.state.block.transaction_merkle_root}
                  witness={this.state.block.witness}
                  witnessSignature={this.state.block.witness_signature}
                  transactionsCount={this.state.block.transactions.length}
                />
              ) : (
                <Blank type="article" />
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="section">
            <div className="panel">
              {this.state.loaded ? (
                <Transactions transactions={this.state.block.transactions} />
              ) : (
                <Blank type="article" />
              )}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

BlockPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      num: PropTypes.string,
    }),
  }).isRequired,
};

export default BlockPage;
