import React from 'react';

function Login() {
  return (
    <form>
      <h2>Login if you have an account</h2>
      <label>User Name
    <input
          type="text"
          name="userName"
        // value={userInput.userName}
        // onChange={handleChange} 
        />
      </label>
      <br />
      <label>Email
    <input
          type="text"
          name="email"
        // value={userInput.email}
        // onChange={handleChange} 
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  )
}

export default Login;

// function Register() {
//   <p>Login if you have an account</p>
// }

// export default Register;