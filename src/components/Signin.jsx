import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Auth.css";

function Signin() {
    const [form, setForm] = useState({ username: "", password: "" });
    const { login } = useAuth(); 

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
    <div className="auth-container">
        <div className="auth-card">
        <h2>Sign In</h2>
        <input name="username" placeholder="Username" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button onClick={() => login(form)}>Sign In</button>
        <p className="auth-switch">
            Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
        </p>
        </div>
    </div>
    );
}

export default Signin;
