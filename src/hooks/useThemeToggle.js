import { useTheme } from "../components/ThemeContext";

export const useThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const toggleWithSpin = (setSpin) => {
    toggleTheme();
    setSpin(true);
    setTimeout(() => setSpin(false), 600);
    };

    return { theme, toggleWithSpin };
};
