import { connect } from 'react-redux';
import { KEY_ESCAPE } from 'keycode-js';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { enableSearch, disableSearch } from '../actions/search';
import { screenTypes } from '../actions/screen';
import IconSearch from './icons/search';
import IconClose from './icons/close';

function Search(props) {
  return (
    <div
      className={classNames(
        'search',
        { search_active: props.active },
      )}
    >
      <form>
        <button
          className="search__action search__action_reset"
          type="button"
          onClick={() => props.onReset()}
        >
          <IconClose />
        </button>

        <input
          className="search__query"
          type="text"
          placeholder={props.screenType === screenTypes.LARGE ? 'Find a block, transaction or account' : 'Search'}
          onFocus={() => props.onFocus()}
          onKeyUp={(e) => {
            if (e.keyCode === KEY_ESCAPE) {
              props.onReset();
              e.target.blur();
            }
          }}
        />

        <button className="search__action search__action_submit" type="button">
          <IconSearch />
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  onFocus: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
  screenType: PropTypes.string.isRequired,
};

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
