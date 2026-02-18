import './Signup.css'
import SignupForm from './SignupForm'

const Signup = () => {
	const handleRegister = (data) => {
		console.log('register', data)
	}

	return (
		<div className="signup-page">
			<div className="signup-card">
				<header className="signup-header">
					<div className="signup-logo">LUMEN-RA</div>
					<h1 className="signup-title">Create Account</h1>
					<div className="signup-subtitle">Start a Lumen-Ra transformation today</div>
				</header>

				<div className="signup-form-wrap">
					<SignupForm onRegister={handleRegister} />
				</div>

				<div className="signup-cta" />

				<div className="signup-footer">
					Already have an account?<a href="/login"> Sign in</a>
				</div>
			</div>
		</div>
	)
}

export default Signup

