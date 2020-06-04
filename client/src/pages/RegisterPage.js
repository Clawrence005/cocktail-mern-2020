import React, { useReducer } from 'react';

function RegisterPage() {
  const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      userName: '',
      email: '',
      firstName: '',
      lastName: '',
    });

  const handleChange = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;

    setUserInput({ [name]: newValue });
  }

  return (
    <>
      <p>Register</p>
      <form
      // onSubmit={handleSubmit}
      >
        <label>User Name
        <input
            type="text"
            name="userName"
            value={userInput.userName}
            onChange={handleChange} />
        </label>
        <br />
        <label>Email
        <input
            type="text"
            name="email"
            value={userInput.email}
            onChange={handleChange} />
        </label>
        <br />
        <label>First Name
        <input
            type="text"
            name="firstName"
            value={userInput.firstName}
            onChange={handleChange} />
        </label>
        <br />
        <label>Last Name
        <input
            type="text"
            name="lastName"
            value={userInput.lastName}
            onChange={handleChange} />
        </label>
        <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}

export default RegisterPage;