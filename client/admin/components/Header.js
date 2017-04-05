import React from 'react'


export default function Header(props) {
  return (
    <header className="navbar">
      <div className="container-fluid">
        <button className="navbar-toggler mobile-toggler hidden-lg-up" type="button">&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a className="nav-link navbar-toggler layout-toggler" href="#">&#9776;</a>
          </li>
          ...
        </ul>
        <ul className="nav navbar-nav pull-right hidden-md-down">
          ...
          <li className="nav-item">
            <a className="nav-link navbar-toggler aside-toggle" href="#">&#9776;</a>
          </li>
        </ul>
      </div>
    </header>
  )
}