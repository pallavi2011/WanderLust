import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';


const Register = ({setAlert, register}) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    password:'',
    password2:''
  });
  const {name, email, phone, password, password2} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if(password !== password2){
        setAlert('Passwords do not match', 'danger');
    }
    else{
        register({ name, email, phone, password });
    }
  }
  return (
  <Fragment>
  <h1 className="large text-primary">Register</h1>
  <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
  <form className="form" onSubmit={e => onSubmit(e)}>
    <div className="form-group">
      <input type="text" placeholder="Full Name" name="name" value={name}  onChange={e => onChange(e)}/>
    </div>
    <div className="form-group">
      <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
     
    </div>
    <div className="form-group">
      <input type="number" placeholder="Phone Number" name="phone" value={phone} onChange={e => onChange(e)}/>
    </div>
    <div className="form-group">
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={e => onChange(e)}
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        placeholder="Confirm Password"
        name="password2"
        value={password2}
        onChange={e => onChange(e)}
      />
    </div>
    <input type="submit" className="btn btn-primary" value="Register" />
  </form>
  <p className="my-1">
    Already have an account? <Link to="/login">Login</Link>
  </p>
</Fragment>)
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired

}

export default connect(null, { setAlert, register })(Register);