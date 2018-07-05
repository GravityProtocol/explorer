import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import IconLink from 'components/icons/link';

function LinkIcon(props) {
  const hasUrl = props.url && props.url.length > 0;
  const LinkTag = hasUrl ? 'a' : 'span';

  return (
    <LinkTag
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        'link-icon',
        { 'link-icon_no-active': !hasUrl },
      )}
    >
      <IconLink />
    </LinkTag>
  );
}

LinkIcon.propTypes = {
  url: PropTypes.string,
};

LinkIcon.defaultProps = {
  url: undefined,
};

export default LinkIcon;
