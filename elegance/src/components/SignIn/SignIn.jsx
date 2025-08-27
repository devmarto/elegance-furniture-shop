import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = () => {

  const [formFileds, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFileds;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFileds, [name]: value})
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <Button buttonType="invert" type="submit">
          Sign In
        </Button>
      </form>
      <Button $googleSignIn onClick={signInWithGoogle}>Sign in with Google Popup</Button>
    </div>
  )
}

export default SignIn;