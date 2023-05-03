import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { useAuth } from "./AuthContext";
import Axios from "axios";
import AdditionalInfoForm from "./AdditionalInfoForm";
import { gapi } from "gapi-script";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const { setCurrentUser } = useAuth();
  const [showAdditionalInfoForm, setShowAdditionalInfoForm] = useState(false);

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
        setCurrentUser(username);
      }
    });
  };

  useEffect(() => {
    const start = async () => {
      await gapi.load("auth2", async () => {
        const auth2 = await gapi.auth2.init({
          client_id: "6579852279-6fli24c5eopa22ieoeqpva7cq955p5qs.apps.googleusercontent.com",
          scope: "profile email",
        });
        const signInButton = document.getElementById("signInButton");
        if (signInButton) {
          auth2.attachClickHandler(
            signInButton,
            {},
            (googleUser) => {
              const profile = googleUser.getBasicProfile();
              const userName = profile.getName();
              const userEmail = profile.getEmail();

              console.log("Login Success: currentUser:", {
                name: userName,
                email: userEmail,
              });

              setShowAdditionalInfoForm(true);
            },
            (error) => {
              console.log("Login failed: res:", error);
            }
          );
        }
      });
    };
    start();
  }, []);

  const handleAdditionalInfoSubmit = (additionalInfo) => {
    console.log(additionalInfo);
    setCurrentUser(additionalInfo.username);
    setShowAdditionalInfoForm(false);
  };

  return (
    <div className="container">
      <div className="loginForm">
        {!showAdditionalInfoForm ? (
          <form>
            <h4>Login Here</h4>
            <label htmlFor="username">Username*</label>
            <input
              className="textInput"
              type="text"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your Username"
              required
            />
            <label htmlFor="password">Password*</label>
            <input
              className="textInput"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Enter your Password"
              required
            />
            <input className="button" type="submit" onClick={login} value="Login" />
            <h1
              style={{
                color: "red",
                fontSize: "15px",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {loginStatus}
            </h1>
            <button id="signInButton" className="google-signin-button">Sign in with Google</button>
          </form>
        ) : (
          <AdditionalInfoForm onSubmit={handleAdditionalInfoSubmit} />
        )}
      </div>
    </div>
  );
};

export default LoginForm;