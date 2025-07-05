import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "./Auth.css";

function Signup() {
    const [form, setForm] = useState({ username: "", password: "" });
    const { signup } = useAuth();

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
    <div className="auth-container">
        <div className="auth-card">
        <h2>Signup</h2>
        <input name="username" onChange={handleChange} placeholder="Username" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        <button onClick={() => signup(form)}>Signup</button>
        <p className="auth-switch">
            Already have an account? <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>
        </div>
    </div>
    );
}

export default Signup;
