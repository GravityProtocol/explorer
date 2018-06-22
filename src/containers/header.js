import { connect } from 'react-redux';
import Header from '../components/header';

const mapStateToProps = state => ({
  searchIsActive: state.search.active,
});

export default connect(mapStateToProps)(Header);
