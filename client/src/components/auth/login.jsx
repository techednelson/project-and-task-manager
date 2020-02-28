import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

	const initialState = {
		email: '',
		password: ''
	};

	//state to sign in
	const [user, setUser] = useState(initialState);

	const { email, password } = user;

	const handleChange = e => {
		setUser({
			...user,
			[e.target.name] : e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

	};

	return (
		<div className='form-user'>
			<div className='container-form dark-shadow'>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className='field-form'>
						<label htmlFor="email">Email</label>
						<input type="email"
							   id='email'
							   name='email'
							   placeholder='Your Email'
							   value={email}
							   onChange={handleChange}
						/>
					</div>
					<div className='field-form'>
						<label htmlFor="password">Password</label>
						<input type="password"
							   id='password'
							   name='password'
							   placeholder='Your Password'
							   value={password}
							   onChange={handleChange}
						/>
					</div>
					<div className="field-form">
						<input type='submit'
							   className='btn btn-primary btn-block'
							   value='Sign In'
						/>
					</div>
				</form>
				<Link to='/new-account'
					  className='link-account'>
					Sign Up
				</Link>

			</div>
		</div>
	);
};

export default Login;
