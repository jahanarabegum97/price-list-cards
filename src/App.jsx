import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";
import Dashboard from "./components/Dashboard/Dashboard";
import Dashboard2 from "./components/Dashboard2/Dashboard2";
import PhoneVar from "./components/PhoneVar/PhoneVar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-7xl text-purple-500">Hello from tailwind</h1>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
      <Dashboard2></Dashboard2>
      <PhoneVar></PhoneVar>
    </div>
  );
}

export default App;
