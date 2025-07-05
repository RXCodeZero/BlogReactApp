import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const navigate = useNavigate();

    const login = async (form) => {
    const res = await fetch("http://localhost:3005/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/blogs");
    } else {
        alert(data.message);
    }
    };

    const signup = async (form) => {
    const res = await fetch("http://localhost:3005/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) navigate("/signin");
    };

    const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
    };

    return { login, signup, logout };
};
