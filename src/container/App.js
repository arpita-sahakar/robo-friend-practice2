import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBox from "../components/SearBox";
import DisplayRobots from "../components/DisplayRobots";

function App() {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setRobots(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBox />
      <DisplayRobots robots={robots} />
    </div>
  );
}

export default App;
