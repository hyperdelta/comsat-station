import React, { PropTypes } from 'react';

function NavItem(props) {
  const { name, params, options, router, navigateTo, children } = props;
  const href = "#"; //router.buildUrl(name, params);
  const onClick = (evt) => {
    evt.preventDefault();
    navigateTo(name, params, options);
  };
  const className = 'nav-link';

  return (
    <li className="nav-item">
      <a { ...{href, onClick, className } }>{ children }</a>
    </li>
  )

}

NavItem.propTypes = {
  name:            PropTypes.string.isRequired,
  params:          PropTypes.object,
  options:         PropTypes.object,
  navigateTo:      PropTypes.func.isRequired
};

NavItem.defaultProps = {
  params:          {},
  options:         {}
};

export default NavItem;