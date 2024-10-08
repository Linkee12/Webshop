/* eslint-disable promise/always-return */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsLoggedIn: (arg: boolean) => void;
}

export default function Login(props: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState("");
  const [sing, setSing] = useState("...");
  const navigate = useNavigate();

  function login() {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.access_token) {
          localStorage.setItem("token", json.access_token);
          props.setIsLoggedIn(true);
        } else if (json.statusCode == 401) {
          setLog("Wrong password or email");
        } else if (json.statusCode == 400) {
          setLog(json.message[0]);
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  return (
    <div>
      <div className="eInput">
        {" "}
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="E-mail"
        ></input>
      </div>
      <div className="pwInput">
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>
      </div>
      <div className="buttons">
        <button onClick={() => login()} className="button">
          Login
        </button>
        <button
          onClick={() => {
            navigate("/reg");
          }}
          onFocus={() => setSing("Registration")}
          onMouseOver={() => setSing("Registration")}
          onMouseLeave={() => setSing("...")}
          className="button2"
        >
          {sing}
        </button>
      </div>
      <div style={{ color: "red" }}>{log}</div>
    </div>
  );
}
