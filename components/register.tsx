import React from "react";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const EmailInputHandle = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const UsernameInputHandle = (event: any) => {
    event.preventDefault();
    setUsername(event.target.value);
  };
  const PasswordInputHandle = (event: any) => {
    setPassword(event.target.value);
    event.preventDefault();
  };

  const SubmitFormHandle = async () => {
    await axios.post("http://localhost:8080/register", {
      username: username,
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    setUsername("");
  };

  return (
    <div className="flex h-screen items-center justify-center gap-4 bg-gray-100">
      <div className="flex flex-col gap-4 rounded-md border bg-white p-24 shadow-lg">
        <div className="text-center text-xl font-medium">
          Register For Your Account
        </div>
        <label className="flex flex-col">
          <span>Email:</span>
          <input
            className="w-72 rounded-lg border border-gray-400 px-2 py-1 outline-none focus:outline-none focus:ring-1 focus:ring-purple-600  active:border-blue-300"
            type={"text"}
            value={email}
            name={"email"}
            placeholder={"Email"}
            onInput={EmailInputHandle}
          />
        </label>
        <label className="flex flex-col">
          <span>Username:</span>
          <input
            className="w-72 rounded-lg border border-gray-400 px-2 py-1 outline-none focus:outline-none focus:ring-1 focus:ring-purple-600  active:border-blue-300"
            type={"text"}
            value={username}
            name={"username"}
            placeholder={"Username"}
            onInput={UsernameInputHandle}
          />
        </label>
        <label className="flex flex-col">
          <span>Password:</span>
          <input
            className="w-72 rounded-lg border border-gray-400 px-2 py-1 outline-none focus:outline-none focus:ring-1 focus:ring-purple-600  active:border-blue-300"
            type={"password"}
            value={password}
            name={"password"}
            placeholder={"Password"}
            onInput={PasswordInputHandle}
          />
        </label>
        <label className="flex flex-col rounded-md bg-sky-400 py-2 text-white">
          <button onClick={SubmitFormHandle}>Register</button>
        </label>
      </div>
    </div>
  );
};

export default RegisterForm;
