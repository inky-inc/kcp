import React, {PropTypes, Component} from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderLinks() {
    //if authenticated
    if(this.props.authenticated) {
      console.log("authenticated? ", this.props.authenticated);
      return [
        <li><div onClick={event => this.goToProfilePage()} href="#" key={1}>profile</div></li>,
        <li><div onClick={event => this.goToPasswordReset()} href="#" key={2}>change password</div></li>,
        <li role="separator" className="divider" key={3}></li>,
        <li><div href="#" key={4}>log out</div></li>
      ];

    } else {
      console.log("authenticated? ", this.props.authenticated);
      return [
        <li><div onClick={event => this.goToRegister()} href="#" key={5}>register</div></li>,
        <li role="separator" className="divider" key={6}></li>,
        <li><div onClick={event => this.goToLogin()} href="#" key={7}>log in</div></li>
      ];
    }

  }


  render() {
    return (
      <nav className="navbar navbar-light bg-faded" >
        <div className="container-fluid">
          {/*KCP title button*/}
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <button href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded="false">menu <span className="caret"></span></button>
                <ul className="dropdown-menu">
                  <li><div onClick={event => this.homeReturn()} href="#">home</div></li>
                  {this.renderLinks()}
                </ul>
              </li>
            </ul>

        </div>

      </nav>
    );
  }

  goToProfilePage() {
    console.log("goToProfilePage");
    browserHistory.push('/profile');
  }

  homeReturn() {
    console.log("homeReturn");
    browserHistory.push('/browse');
  }

  goToPasswordReset() {
    console.log("goToPasswordReset");
    browserHistory.push('/auth/passwordreset');
  }
  goToLogin() {
    console.log("goToLogin");
    browserHistory.push('/auth/login');
  }

  goToRegister() {
    console.log("goToRegister");
    browserHistory.push('/auth/registration');
  }



};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };

}


export default connect(mapStateToProps)(Header);
