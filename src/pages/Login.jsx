import React , {useRef} from 'react';
import '../styles/Login.scss';

const Login = () =>{
  const form = useRef(null);

  const handleSubmit = (event) =>{
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  } 

    return(
        <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
          <h1 class="title">Create a new password</h1>
          <p class="subtitle">Enter a new passwrd for yue account</p>
          <form action="/" className="form" ref={form}>
            <label htmlFor="email" className='label'>Email Address</label>
            <input type="text" name='email' placeholder='platzi@example.com' className='input input-email' />
            <label for="password" className="label">Password</label>
            <input type="password" name="password" placeholder="*********" className="input input-password" />
            <button className="primary-button login-button" onClick={handleSubmit}>Log In</button>
            <a href="/">Forgot my password</a>
          </form>
          <button className='secondary-button signup-button'>Sign up</button>
        </div>
      </div>
    );
}

export default Login;