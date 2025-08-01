import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Register = () => {
  const loginGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <>
      <h1>Register</h1>
      <button onClick={loginGoogleUser}>Sign in with Google Popup</button>
    </>
  )
}

export default Register;