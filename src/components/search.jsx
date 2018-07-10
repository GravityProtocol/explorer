import { connect } from 'react-redux';
import { KEY_ESCAPE } from 'keycode-js';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { enableSearch, resetSearch, setQuery, search } from 'actions/search';
import { screenTypes } from 'actions/screen';
import IconSearch from 'components/icons/search';
import IconClose from 'components/icons/close';

function Search(props) {
  return (
    <div
      className={classNames(
        'search',
        { search_active: props.active },
      )}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.target.querySelector('input').blur();
          props.search(props.query.trim());
        }}
      >
        <button
          className="search__action search__action_reset"
          type="button"
          onClick={() => props.resetSearch()}
        >
          <IconClose />
        </button>

        <input
          className="search__query"
          type="text"
          placeholder={props.screenType === screenTypes.LARGE ? 'Find a block, transaction or account' : 'Search'}
          value={props.query}
          onFocus={() => props.enableSearch()}
          onKeyUp={(e) => {
            if (e.keyCode === KEY_ESCAPE) {
              props.resetSearch();
              e.target.blur();
            }
          }}
          onChange={(e) => {
            props.setQuery(e.target.value);
          }}
        />

        <button className="search__action search__action_submit" type="submit">
          <IconSearch />
        </button>
      </form>
    </div>
  );
}

Search.propTypes = {
  enableSearch: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  resetSearch: PropTypes.func.isRequired,
  screenType: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  active: state.search.active,
  screenType: state.screen.type,
  query: state.search.query,
});

const mapDispatchToProps = dispatch => ({
  enableSearch() {
    dispatch(enableSearch());
  },

  resetSearch() {
    dispatch(resetSearch());
  },

  setQuery(query) {
    dispatch(setQuery(query));
  },

  search(query) {
    dispatch(search(query));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
