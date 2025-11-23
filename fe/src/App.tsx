import { app } from "@neutralinojs/lib";
import "./App.css";
import { Home } from "./features/Home";

function App() {
  console.log("App");
  const onReload = () => {
    app.restartProcess();
  };

  return (
    <div className="app light">
      <Home />
    </div>
  );
}

export default App;
