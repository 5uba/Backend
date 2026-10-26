import ThemeProvider from "./provider/ThemeProvider";
import ThemeDisplay from "./components/ThemeDisplay";

function App() {
  return (
    <ThemeProvider>
      <ThemeDisplay />
    </ThemeProvider>
  );
}

export default App;