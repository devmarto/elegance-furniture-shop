import { useState } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {

  const [formFileds, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFileds;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password != confirmPassword) {
      alert('password do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();

    } catch(error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFileds, [name]: value})
  }
  return (
    <>
      <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            label= 'Display name'
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
          />

          <FormInput
            label='Email'
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label='Password'
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />

          <FormInput
            label='Confirm Password'
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />

          <Button $primary type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </>
  )
}

export default SignUp;