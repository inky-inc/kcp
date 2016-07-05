import React, {PropTypes, Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../redux/actions';

class Registration extends Component {
  constructor(props) {
    super(props);

  }

  handleFormSubmit(formProps) {
    // console.log("registration info: ", formProps);
    // Call action creator to sign up the user
    this.props.registerUser(formProps);

  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Error</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { username, email, password, passwordConfirm }} = this.props;

    return (
      <div className="registration-page">
        <div className="form">
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="registration-form">
            <fieldset className="form-group" >
              <label>username</label>
              <input className="form-control" placeholder="username"{...username}/>
              {username.touched && username.error && <div className="error">{username.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>email</label>
              <input className="form-control" placeholder="email@example.com" {...email}/>
              {email.touched && email.error && <div className='error'>{email.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>password</label>
              <input className="form-control" type="password" placeholder="password" {...password}/>
              {password.touched && password.error && <div className="error">{password.error}</div>}
            </fieldset>
            <fieldset className="form-group">
              <label>confirm password</label>
              <input className="form-control" type="password" placeholder="password" {...passwordConfirm}/>
              {passwordConfirm.touched && passwordConfirm.error && <div className='error'>{passwordConfirm.error}</div>}
            </fieldset>
            {this.renderAlert()}

            <button action="submit" className="btn btn-default btn-lg" >register</button>

          </form>
        </div>

      </div>

    );
  }

}

function validate(formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = 'Please enter a username';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  //ensures that passwords match
  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  console.log("formProps: ", formProps);

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };

}

export default reduxForm({
  form: 'registration',
  fields: ['username', 'email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Registration);
