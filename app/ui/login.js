"use client";
import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Button, TextField } from "@mui/material";
import styles from "../login.module.css";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerSurnames, setRegisterSurnames] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [isActive, setIsActive] = useState(false); // Estado para controlar la clase 'active'

  useEffect(() => {}, []);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Componente Login: ");
    login({ email: loginEmail, password: loginPassword });
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    register({
      name: registerName,
      surnames: registerSurnames,
      email: registerEmail,
      password: registerPassword,
    });
  };

  const { login, register, loading } = useContext(AuthContext);

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      <div className="form-container sign-up">
        <form
          className="flex flex-col justify-center items-center h-full px-10 bg-white"
          onSubmit={registerSubmitHandler}
        >
          <h1>Create Account</h1>
          <div className="social-icons">
            <a
              href="#"
              className="icon inline-flex justify-center items-center  r w-10 h-10"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              href="#"
              className="icon inline-flex justify-center items-center w-10 h-10"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="icon inline-flex justify-center items-center w-10 h-10"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              className="icon inline-flex justify-center items-center w-10 h-10"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input
            type="text"
            value={registerName}
            onChange={(e) => setRegisterName(e.target.value)}
            className="bg-login-input w-full my-2 mx-0 py-2.5 px-4 rounded-lg focus:outline-primary"
            placeholder="Name"
          />
          <input
            type="text"
            value={registerSurnames}
            className="bg-login-input w-full my-2 mx-0 py-2.5 px-4 rounded-lg focus:outline-primary"
            onChange={(e) => setRegisterSurnames(e.target.value)}
            placeholder="Surname"
          />
          <input
            type="email"
            placeholder="Email"
            value={registerEmail}
            className="bg-login-input w-full my-2 mx-0 py-2.5 px-4 rounded-lg focus:outline-primary"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={registerPassword}
            className="bg-login-input w-full my-2 mx-0 py-2.5 px-4 rounded-lg focus:outline-primary"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            className="bg-primary text-white font-montserrat font-semibold text-xs mt-5 px-12 py-2.5 rounded-lg tracking-wide"
          >
            Sign Up
          </Button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form
          className="flex flex-col justify-center items-center h-full px-10 bg-white"
          onSubmit={loginSubmitHandler}
        >
          <h1>Inicia sesión</h1>
          <div className="social-icons my-15">
            <a
              href="#"
              className="icon inline-flex justify-center items-center  r w-10 h-10"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              href="#"
              className="icon inline-flex justify-center items-center w-10 h-10"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              className="icon inline-flex justify-center items-center w-10 h-10"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              className="icon inline-flex justify-center items-center w-10 h-10"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>o usa email y contreaseña</span>
          <input
            className="bg-login-input w-full my-2 mx-0 py-2.5 px-4 rounded-lg focus:outline-primary"
            type="email"
            placeholder="Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            className="bg-login-input w-full my-2 mx-0 py-2.5 px-4 rounded-lg focus:outline-primary"
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <a href="#">Olvidaste la contraseña?</a>
          <Button
            type="submit"
            variant="contained"
            className="bg-primary text-white font-montserrat font-semibold text-xs mt-2.5 
            px-12 py-2.5 rounded-lg tracking-wide"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <Button
              onClick={() => setIsActive(false)}
              className="bg-transparent text-white font-montserrat font-semibold text-xs mt-2.5 
              px-12 py-2.5 rounded-lg tracking-wide border-white hover:border-white hover:bg-transparent"
              variant="outlined"
            >
              Login
            </Button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Buenas, Trader!</h1>
            <p>
              Regístrate con tus datos personales para utilizar todas las
              funciones del sitio.
            </p>
            <Button
              onClick={() => setIsActive(true)}
              className="bg-transparent text-white font-montserrat font-semibold text-xs mt-2.5 px-12 py-2.5 rounded-lg tracking-wide border-white hover:border-white hover:bg-transparent"
              variant="outlined"
            >
              Registrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
