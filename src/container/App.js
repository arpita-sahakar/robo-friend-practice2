import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBox from "../components/SearBox";
import DisplayRobots from "../components/DisplayRobots";

function App() {
  const [robots, setRobots] = useState([]);
  const [inputText, setInputText] = useState("");
  // const [filteredRobots, setFilteredRobots] = useState([]);

  useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then((res) => {
      setRobots(res.data);
      // setFilteredRobots(res.data);
    });
  }, []);

  const filterRobotList = (robots) => {
    return robots.filter((el) => {
      return el.name.toLowerCase().includes(inputText.toLowerCase());
    });
  };

  // useEffect(() => {
  //   setFilteredRobots(
  //     robots.filter((el) => {
  //       return el.name.toLowerCase().includes(inputText.toLowerCase());
  //     })
  //   );
  // }, [inputText]);

  return (
    <div className="App">
      <Header />
      <SearchBox setInputText={setInputText} />
      <DisplayRobots robots={filterRobotList(robots)} />
    </div>
  );
}

export default App;
