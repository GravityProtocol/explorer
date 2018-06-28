import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import { showMenu, hideMenu } from '../actions/menu';
import Logo from './logo';
import SearchContainer from './search';
import IconToggler from './icons/toggler';
import IconClose from './icons/close';

function Header(props) {
  return (
    <header
      className={classNames(
        'header',
        { 'header_search-active': props.searchIsActive },
        { 'header_scroll-active': props.scrollIsActive },
        { 'header_menu-active': props.menuIsActive },
      )}
    >
      <div className="header__container">
        <div className="container">
          <div className="header__inner">
            <div className="header__section header__section_menu-toggler">
              <button
                className="menu-toggler"
                onClick={() => {
                  if (props.menuIsActive) {
                    props.hideMenu();
                  } else {
                    props.showMenu();
                  }
                }}
              >
                {props.menuIsActive ? <IconClose /> : <IconToggler />}
              </button>
            </div>

            <div className="header__section header__section_logo">
              <Link to="/"><Logo /></Link>
            </div>

            <div
              className={classNames(
                'header__section',
                'header__section_menu',
                { header__section_menu_active: props.menuIsActive },
              )}
            >
              <nav className="menu">
                <NavLink
                  exact
                  to="/"
                  className="menu__item"
                  activeClassName="menu__item_active"
                  onClick={() => props.hideMenu()}
                >
                  <span className="menu__link">Dashboard</span>
                </NavLink>

                <NavLink
                  exact
                  to="/accounts"
                  className="menu__item"
                  activeClassName="menu__item_active"
                  isActive={(match, location) => location.pathname.indexOf('/accounts') === 0}
                  onClick={() => props.hideMenu()}
                >
                  <span className="menu__link">Accounts</span>
                </NavLink>

                <NavLink
                  className="menu__item"
                  to="/witnesses"
                  activeClassName="menu__item_active"
                  isActive={(match, location) => location.pathname.indexOf('/witnesses') === 0}
                  onClick={() => props.hideMenu()}
                >
                  <span className="menu__link">Witnesses</span>
                </NavLink>

                <NavLink
                  className="menu__item"
                  to="/committee"
                  activeClassName="menu__item_active"
                  isActive={(match, location) => location.pathname.indexOf('/committee') === 0}
                  onClick={() => props.hideMenu()}
                >
                  <span className="menu__link">Committee</span>
                </NavLink>

                <NavLink
                  className="menu__item"
                  to="/fee"
                  activeClassName="menu__item_active"
                  isActive={(match, location) => location.pathname.indexOf('/fee') === 0}
                  onClick={() => props.hideMenu()}
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
      </div>

      {props.menuIsActive && (
        <div
          role="presentation"
          className="overlay"
          onClick={() => props.hideMenu()}
        />
      )}
    </header>
  );
}

Header.propTypes = {
  searchIsActive: PropTypes.bool.isRequired,
  showMenu: PropTypes.func.isRequired,
  hideMenu: PropTypes.func.isRequired,
  menuIsActive: PropTypes.bool.isRequired,
  scrollIsActive: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  searchIsActive: state.search.active,
  menuIsActive: state.menu.active,
  scrollIsActive: state.screen.scrollActive,
});

const mapDispatchToProps = dispatch => ({
  showMenu: () => dispatch(showMenu()),
  hideMenu: () => dispatch(hideMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
