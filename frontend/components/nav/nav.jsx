import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthPage = this.isAuthPage.bind(this);
    this.authButtons = this.authButtons.bind(this);
    this.usersName = this.usersName.bind(this);
    this.usersId = this.usersId.bind(this);
  }

  isAuthPage() {
    const pageType = this.props.pageType;
    return(
      pageType === '/login' || pageType === '/signup' || pageType === '/band'
    );
  }

  usersName() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }

  usersId() {
    return this.props.currentUser ? this.props.currentUser.id : undefined;
  }

  authButtons() {
    if (this.isAuthPage()) {
      return(
        <span className='nav-links'>
          <Link to={'/no/help/for/you'}>Help</Link>
        </span>
      );
    } else if (!this.isAuthPage() && !this.props.loggedIn) {
      return(
        <span className='nav-links'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </span>
      );
    } else {
      return(
        <span className='nav-links'>
          <Link to={`/profile/${this.usersId()}`} className="nav-greeting">{this.usersName()}</Link>
          <button className="log-out" onClick={this.props.logout}>Log out</button>
        </span>
      );
    }
  }

  render() {
  return(

    <div className="nav-god">
      <div className="menu-bar">
        <h1>
          <Link to={'/'} className="logo">AUX</Link>
        </h1>
        <div className="nav-button">
          {this.authButtons()}
        </div>
      </div>
    </div>

    );
  }
}

export default Nav;
