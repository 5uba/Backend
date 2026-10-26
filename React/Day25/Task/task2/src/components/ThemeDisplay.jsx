
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function ThemeDisplay() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen p-10 ${
        theme === "Light"
          ? "bg-white text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-2xl font-bold">
        Current Theme: {theme}
      </h2>

      <button
        onClick={toggleTheme}
        className="mt-4 border border-current px-4 py-2"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeDisplay;
