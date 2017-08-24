import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.isAuthPage = this.isAuthPage.bind(this);
    this.authButtons = this.authButtons.bind(this);
    this.usersName = this.usersName.bind(this);
  }

  isAuthPage() {
    return(
      this.props.pageType === '/login' || this.props.pageType === '/signup'
    );
  }

  usersName() {
    return this.props.currentUser ? this.props.currentUser.username : undefined;
  }

  authButtons() {
    if (this.isAuthPage()) {
      return(
        <div className='nav-buttons'>
          <Link to={'/no/help/for/you'}>Help</Link>
        </div>
      );
    } else if (!this.isAuthPage() && !this.props.loggedIn) {
      return(
        <div className='nav-buttons'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </div>
      );
    } else {
      return(
        <div className='nav-buttons'>
          <Link to={`/${this.usersName()}`} className="nav-greeting">{this.usersName()}</Link>
          <button className="log-out" onClick={this.props.logout}>Log out</button>
        </div>
      );
    }
  }

  render() {
  return(

    <div className="nav-god">
      <h1>
        <Link to={'/'} className="logo">AUX</Link>
      </h1>
      <span>
        {this.authButtons()}
      </span>
    </div>

    );
  }
}

export default Nav;
