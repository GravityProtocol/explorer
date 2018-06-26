import { connect } from 'react-redux';
import { showMenu, hideMenu } from '../actions/menu';
import Header from '../components/header';

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
