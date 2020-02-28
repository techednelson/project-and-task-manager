import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewAccount = () => {
	const initialState = {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	//state to sign in
	const [user, setUser] = useState(initialState);

	const { name, email, password, confirmPassword } = user;

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
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<div className='field-form'>
						<label htmlFor="name">Name</label>
						<input type="text"
							   id='name'
							   name='name'
							   placeholder='Your Name'
							   value={name}
							   onChange={handleChange}
						/>
					</div>
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
						<label htmlFor="email">Password</label>
						<input type="password"
							   id='password'
							   name='password'
							   placeholder='Your Password'
							   value={password}
							   onChange={handleChange}
						/>
					</div>
					<div className='field-form'>
						<label htmlFor="email">Password</label>
						<input type="password"
							   id='password'
							   name='password'
							   placeholder='Your Password'
							   value={confirmPassword}
							   onChange={handleChange}
						/>
					</div>
					<div className='field-form'>
						<label htmlFor="email">Confirm Password</label>
						<input type="password"
							   id='confirmPassword'
							   name='confirmPassword'
							   placeholder='Repeat Password'
							   value={password}
							   onChange={handleChange}
						/>
					</div>
					<div className="field-form">
						<input type='submit'
							   className='btn btn-primary btn-block'
							   value='Register'
						/>
					</div>
				</form>
				<Link to='/'
					  className='link-account'>
					Comeback to Sign Ip
				</Link>

			</div>
		</div>
	);
};

export default NewAccount;
