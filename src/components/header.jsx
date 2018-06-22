import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Logo from './logo';
import SearchContainer from '../containers/search';

function Header(props) {
  return (
    <header
      className={classNames(
        'header',
        { 'header_search-active': props.searchIsActive },
      )}
    >
      <div className="header__inner">
        <div className="header__section header__section_logo">
          <Logo />
        </div>

        <div className="header__section header__section_menu">
          <nav className="menu">
            <div className="menu__item menu__item_active">
              <a className="menu__link" href="/dashboard">Dashboard</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="/accounts">Accounts</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="/witnesses">Witnesses</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="/committee">Committee</a>
            </div>
            <div className="menu__item">
              <a className="menu__link" href="/fee">Fee</a>
            </div>
          </nav>
        </div>

        <div className="header__section header__section_search">
          <SearchContainer />
        </div>

        <div className="header__section header__section_action">
          <a className="button" href="https://wallet.gravityprotocol.org/">Create Wallet</a>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  searchIsActive: PropTypes.bool.isRequired,
};

export default Header;
