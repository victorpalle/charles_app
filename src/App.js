import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GuestSwitch } from "./routes/GuestSwitch";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <GuestSwitch />
      </Router>
    </>
  );
}

export default App;
