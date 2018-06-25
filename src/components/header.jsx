import { Link, NavLink } from 'react-router-dom';
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
      <div className="container">
        <div className="header__inner">
          <div className="header__section header__section_logo">
            <Link to="/"><Logo /></Link>
          </div>

          <div className="header__section header__section_menu">
            <nav className="menu">
              <NavLink to="/" className="menu__item" activeClassName="menu__item_active" exact>
                <span className="menu__link">Dashboard</span>
              </NavLink>

              <NavLink
                exact
                to="/accounts"
                className="menu__item"
                activeClassName="menu__item_active"
                isActive={(match, location) => location.pathname.indexOf('/accounts') === 0}
              >
                <span className="menu__link">Accounts</span>
              </NavLink>

              <NavLink
                className="menu__item"
                to="/witnesses"
                activeClassName="menu__item_active"
                isActive={(match, location) => location.pathname.indexOf('/witnesses') === 0}
              >
                <span className="menu__link">Witnesses</span>
              </NavLink>

              <NavLink
                className="menu__item"
                to="/committee"
                activeClassName="menu__item_active"
                isActive={(match, location) => location.pathname.indexOf('/committee') === 0}
              >
                <span className="menu__link">Committee</span>
              </NavLink>

              <NavLink
                className="menu__item"
                to="/fee"
                activeClassName="menu__item_active"
                isActive={(match, location) => location.pathname.indexOf('/fee') === 0}
              >
                <span className="menu__link">Fee</span>
              </NavLink>
            </nav>
          </div>

          <div className="header__section header__section_search">
            <SearchContainer />
          </div>

          <div className="header__section header__section_action">
            <a className="button" href="https://wallet.gravityprotocol.org/">Create Wallet</a>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  searchIsActive: PropTypes.bool.isRequired,
};

export default Header;
