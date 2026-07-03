import { useTheme } from "../hooks/useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex justify-between max-w-100 w-full py-6">
      <h1 className="text-4xl text-Gray-50">TODO</h1>
      <button
        onClick={toggleTheme}
        type="button"
        className="cursor-pointer"
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        <img
          src={isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
          alt=""
        />
      </button>
    </div>
  );
};

export default Header;
