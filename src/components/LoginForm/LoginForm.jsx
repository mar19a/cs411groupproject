import React, { useState } from "react";
import "./LoginForm.css";
import { useAuth } from "./AuthContext";
import Axios from "axios";
import { GoogleLogin } from "react-google-login";
import AdditionalInfoForm from "./AdditionalInfoForm"; // Import the new component

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const { setCurrentUser } = useAuth();
  const [showAdditionalInfoForm, setShowAdditionalInfoForm] = useState(false); // New state variable

  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3053/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
        setCurrentUser(username); // This will now save the user to the local storage as well
      }
    });
  };
 
  const responseGoogle = (response) => {
    if (response.error) {
      console.error(response.error);
    } else {
      console.log(response);

      // Retrieve user's name and email from Google
      const userName = response.profileObj.name;
      const userEmail = response.profileObj.email;

      setShowAdditionalInfoForm(true); // Show the additional info form after successful login
    }
  };

  const handleAdditionalInfoSubmit = (additionalInfo) => {
    // Handle the additional info submission here
    console.log(additionalInfo);

    // You can now close the additional info form or navigate to another page as needed
    setShowAdditionalInfoForm(false);
  };

  return (
    <div className="container">
      <div className="loginForm">
        {!showAdditionalInfoForm ? (
          // Show the login form if the additional info form is not visible
          <form>
            <h4>Login Here</h4>
            <label htmlFor="username">Username*</label>
            <input className="textInput" type="text" name="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Enter your Username" required />
            <label htmlFor="password">Password*</label>
            <input className="textInput" type="password" name="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Enter your Password" required />
            <input className="button" type="submit" onClick={login} value="Login" />
            <h1 style={{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>
            <GoogleLogin
              clientId="6579852279-6fli24c5eopa22ieoeqpva7cq955p5qs.apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
        ) : (
          // Show the additional info form if it is visible
          <AdditionalInfoForm onSubmit={handleAdditionalInfoSubmit} />
        )}
      </div>
    </div>
  );
}

export default LoginForm;