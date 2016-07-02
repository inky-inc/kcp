import React, {PropTypes, Component} from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../redux/actions';

 class Login extends Component {
  constructor(props) {
    super(props);

  }

  handleFormSubmit({ email, password }) {
    console.log(email, password);
    //log user in
    this.props.loginUser({ email, password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>ERROR</strong> {this.props.errorMessage}
        </div>
      );
    }
  }



  render() {
    const { handleSubmit, fields: { email, password} } = this.props;


    return (
      <div className="login-page">
        <div className="form">
          <form onSubmit={handleSubmit (this.handleFormSubmit.bind(this))} className="login-form">
            <fieldset className="form-group">
              <label>email:</label>
              <input {...email} className="form-control" type="text" placeholder="email@example.com"/>
            </fieldset>
            <fieldset className="form-group">
              <label>password:</label>
              <input {...password} className="form-control" type="text" placeholder="password"/>
            </fieldset>
            {this.renderAlert()}
            <button action="submit" className="btn btn-default btn-lg" >log in</button>
          </form>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Login);
