import { connect } from 'react-redux';
import { enableSearch, disableSearch } from '../actions/search';
import Search from '../components/search';

const mapStateToProps = state => ({
  active: state.search.active,
  screenType: state.screen.type,
});

const mapDispatchToProps = dispatch => ({
  onFocus() {
    dispatch(enableSearch());
  },

  onReset() {
    dispatch(disableSearch());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
