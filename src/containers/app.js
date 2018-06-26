import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = state => ({
  screenIsBlocked: state.screen.blocked,
  topOffset: state.screen.topOffset,
});

export default connect(mapStateToProps)(App);
