import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

const Register = () => {

const alertContext = useContext(AlertContext)

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = user

  const {setAlert} = alertContext

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    if( name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please fill in all fields', 'danger')
    } else if(password !== password2) {
      setAlert('Please make sure passwords match', 'danger')
    } else {
      console.log('Logged In')
    }
  }

  return (
    <div className='form-container'>
      <h1>Account <span className="text-primary">Register</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange}/>
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Register
