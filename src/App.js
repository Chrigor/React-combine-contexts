import "./App.css";
import { AppContextProvider } from "./context/appContextProvider";
import Home from "./pages/Home";
function App() {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
}

export default App;
