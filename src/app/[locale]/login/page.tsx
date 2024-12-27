"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}

enum LoginState {
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
  EMAIL_VERIFICATION_REQUIRED = "EMAIL_VERIFICATION_REQUIRED",
  OWNER_APPROVAL_REQUIRED = "OWNER_APPROVAL_REQUIRED"
}

const LoginPage = () => {
  const router = useRouter();

  const [mode, setMode] = useState(MODE.LOGIN);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // Sample user for demonstration purposes
  const user = {
    email,
    username,
    password,
    emailCode,
    isLoggedIn: false
  };

  if (user.isLoggedIn) {
    router.push("/");
  }

  const formTitle = {
    [MODE.LOGIN]: "Log in",
    [MODE.REGISTER]: "Register",
    [MODE.RESET_PASSWORD]: "Reset Your Password",
    [MODE.EMAIL_VERIFICATION]: "Verify Your Email"
  }[mode];

  const buttonTitle = {
    [MODE.LOGIN]: "Login",
    [MODE.REGISTER]: "Register",
    [MODE.RESET_PASSWORD]: "Reset",
    [MODE.EMAIL_VERIFICATION]: "Verify"
  }[mode];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response: any;

      switch (mode) {
        case MODE.LOGIN:
          response = { loginState: LoginState.SUCCESS };
          break;
        case MODE.REGISTER:
          response = { loginState: LoginState.SUCCESS };
          break;
        case MODE.RESET_PASSWORD:
          response = { loginState: LoginState.SUCCESS };
          setMessage("Password reset email sent. Please check your e-mail.");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = { loginState: LoginState.SUCCESS };
          break;
        default:
          break;
      }

      switch (response.loginState) {
        case LoginState.SUCCESS:
          setMessage("Successful! You are being redirected.");
          const tokens = "tokens";
          localStorage.setItem("tokens", tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setError("Invalid email or password!");
          } else if (response.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something went wrong!");
          }
          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);
          break;
        case LoginState.OWNER_APPROVAL_REQUIRED:
          setMessage("Your account is pending approval");
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] border border-gold-light rounded-md px-16 md:px-8 lg:px-16 xl:px-16 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold text-gold">
          {formTitle}
        </h1>
        {mode === MODE.REGISTER &&
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gold-dark">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Lesyo"
              className="ring-2 ring-gold-light rounded-md p-2"
              onChange={e => setUsername(e.target.value)}
            />
          </div>}
        {mode !== MODE.EMAIL_VERIFICATION
          ? <div className="flex flex-col gap-2">
              <label className="text-sm text-gold-dark">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="ladiginscormag@gmail.com"
                className="ring-2 ring-gold-light rounded-md p-2"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          : <div className="flex flex-col gap-2">
              <label className="text-sm text-gold-dark">
                Verification Code
              </label>
              <input
                type="text"
                name="emailCode"
                placeholder="Code"
                className="ring-2 ring-gold-light rounded-md p-2"
                onChange={e => setEmailCode(e.target.value)}
              />
            </div>}
        {(mode === MODE.LOGIN || mode === MODE.REGISTER) &&
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gold-dark">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="ring-2 ring-gold-light rounded-md p-2"
              onChange={e => setPassword(e.target.value)}
            />
          </div>}
        {mode === MODE.LOGIN &&
          <div
            className="text-sm underline cursor-pointer text-black"
            onClick={() => setMode(MODE.RESET_PASSWORD)}
          >
            Forgot Password?
          </div>}
        <button
          className="bg-lama text-gold p-2 rounded-md border border-gold disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : buttonTitle}
        </button>
        {error &&
          <div className="text-red-600">
            {error}
          </div>}
        {mode === MODE.LOGIN &&
          <div
            className="text-sm underline cursor-pointer text-black"
            onClick={() => setMode(MODE.REGISTER)}
          >
            {"Don't"} have an account?
          </div>}
        {mode === MODE.REGISTER &&
          <div
            className="text-sm underline cursor-pointer text-black"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Have an account?
          </div>}
        {mode === MODE.RESET_PASSWORD &&
          <div
            className="text-sm underline cursor-pointer text-black"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go back to Login
          </div>}
        {message &&
          <div className="text-green-600 text-sm">
            {message}
          </div>}
      </form>
    </div>
  );
};

export default LoginPage;
