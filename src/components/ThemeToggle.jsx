import { useState } from "react";
import { useThemeToggle } from "../hooks/useThemeToggle";
import { FaSun, FaMoon } from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle() {
    const [spin, setSpin] = useState(false);
    const { theme, toggleWithSpin } = useThemeToggle();

    const handleClick = () => {
    setSpin(true);
    toggleWithSpin(() => setSpin(false));
    };

    return (
    <button
    className={`theme-toggle ${spin ? "spin" : ""}`}
    onClick={() => toggleWithSpin(setSpin)}
    aria-label="Toggle theme"
    >
    {theme === "light" ? (
    <FaMoon style={{ fontSize: "24px", width: "24px", height: "24px" }} />
    ) : (
    <FaSun style={{ fontSize: "24px", width: "24px", height: "24px" }} />
    )}
</button>
    );
}

export default ThemeToggle;
