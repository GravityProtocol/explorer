import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { fetchAccounts } from '../../../actions/accounts';
import Accounts from '../../accounts';

class AccountsPage extends PureComponent {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="panel">
            <Accounts />
          </div>
        </div>
      </div>
    );
  }
}

AccountsPage.propTypes = {
  fetchAccounts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchAccounts: () => dispatch(fetchAccounts()),
});

export default connect(null, mapDispatchToProps)(AccountsPage);
