import React, { useEffect, useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
const Auth = () => {
    let [emailState, setEmailState] = useState("");
    let [passState, setPassState] = useState("");
    let [emailStyleState, setEmailStyleState] = useState(true);
    let [passStyleState, setPassStyleState] = useState(true);

    let user = { login: "samurai@gmail.com", password: "12345" };

    const navigate = useNavigate();

    function userCheck() {
        if (emailState === user.login && passState === user.password) {
            navigate("/user");
            localStorage.setItem("auth", "true");
        }
        if (emailState !== user.login) {
            setEmailStyleState(false);
        } else {
            setEmailStyleState(true);
        }
        if (passState !== user.password) {
            setPassStyleState(false);
        } else {
            setPassStyleState(true);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("auth") === "true") {
            navigate("/user");
        }
    }, []);

    return (
        <div>
            <div className="form">
                <p className="form-title">Sign in to your account</p>
                <div className="input-container">
                    {!emailStyleState && (
                        <label className="err_label" htmlFor="email_input">
                            введите правильный логин
                        </label>
                    )}

                    <input
                        id="email_input"
                        className={`${!emailStyleState && "input_err"}`}
                        onChange={(e) => setEmailState(e.target.value)}
                        type="text"
                        placeholder="Enter email"
                    />
                    <span></span>
                </div>
                <div className="input-container">
                    {!passStyleState && (
                        <label className="err_label" htmlFor="pass_input">
                            введите правильный пароль
                        </label>
                    )}
                    <input
                        id="pass_input"
                        className={`${!passStyleState && "input_err"}`}
                        onChange={(e) => setPassState(e.target.value)}
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                <button onClick={() => userCheck()} className="submit">
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Auth;
