import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTheme } from "./hooks/useTheme";

const App = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`relative h-dvh ${theme === "dark" ? "bg-Navy-950" : "bg-Gray-50"}`}
    >
      <img
        className="absolute top-0 max-[376px]:hidden"
        src={`./images/bg-desktop-${theme}.jpg`}
        alt=""
      />
      <img
        className="absolute top-0 min-[376px]:hidden"
        src={`./images/bg-mobile-${theme}.jpg`}
        alt=""
      />

      <div className="z-10 relative flex justify-center items-center flex-col p-4">
        <Header />
        <TodoForm />
        <TodoList />
        <p className="text-Gray-600 py-3">Drag and drop to reoder list</p>
      </div>
    </main>
  );
};

export default App;
